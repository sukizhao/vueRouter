<template>
  <div style="width:300px;">
    <p>
      <input type="text" placeholder="搜索" @keyup.enter="search($event)">
    </p>
    <ul v-if="nodeList && nodeList.length > 0">
      <tree-node
        v-for="(item,index) in nodeList"
        :key="index"
        :node="item"
        :search-text="searchText"
      ></tree-node>
    </ul>
    <div v-else>没有搜索到相应结果</div>
  </div>
</template>
<script>
import nodeListFunc from "./data.js";
import treeNode from "./treeNode.vue";

export default {
  data() {
    let list = nodeListFunc();
    return {
      nodeList: list,
      searchText: ""
    };
  },
  components: {
    treeNode
  },
  methods: {
    // 对子节点进行搜索。
    searchEach(node, value) {
      let depth = this.getTreeDepth(node);
      let self = this;
      for (let i = 0; i < depth - 1; i++) {
        this.traverseTree(node, n => {
          if (self.isHasChildren(n)) {
            let children = n.children;
            let length = children.length;
            for (let j = 0; j < length; j++) {
              let cutLeafIndex = children.findIndex((e3, i3, a3) => {
                if (!self.isHasChildren(e3) && e3.title.indexOf(value) <= -1) {
                  return true;
                }
                return false;
              });
              if (cutLeafIndex > -1) {
                children.splice(cutLeafIndex, 1);
              }
            }
          }
        });
      }
    },

    // 搜索框回车事件响应
    search(e) {
      let self = this;
      // 把树形结构还原成搜索以前的。
      this.nodeList = nodeListFunc();
      if (e.target.value == "") {
        this.searchText = "";
        return;
      }
      if (this.nodeList && this.nodeList.length > 0) {
        this.nodeList.forEach((n, i, a) => {
          self.searchEach(n, e.target.value);
        });

        // 没有叶子节点的根节点也要清理掉
        let length = this.nodeList.length;
        for (let i = 0; i < length; i++) {
          console.log(this.nodeList);
          let index = this.nodeList.findIndex((e2, i2, a2) => {
            return (
              !self.isHasChildren(e2) && e2.title.indexOf(e.target.value) <= -1
            );
          });
          if (index > -1) {
            this.nodeList.splice(index, 1);
          }
        }
        this.searchText = e.target.value;
      }
    },

    // 判断树形结构中的一个节点是否具有孩子节点
    isHasChildren(node) {
      let flag = false;
      if (node.children && node.children.length > 0) {
        flag = true;
      }
      return flag;
    },

    //  数组 arr 中都是数字。获得数组中最大的数字。
    maxNum(arr) {
      let max = null;
      arr.forEach((e, i, a) => {
        if (0 == i) {
          max = e;
        } else {
          if (e > max) {
            max = e;
          }
        }
      });
      return max;
    },

    // 利用递归计算树的深度
    calDepth(node, depth) {
      if (!this.isHasChildren(node)) {
        return depth;
      } else {
        let length = node.children.length;
        // 递归方法获得各个子树的深度。childrenResults数组用来
        // 存储各个子树的深度。
        let childrenResults = [];
        for (let i = 0; i < length; i++) {
          childrenResults.push(this.calDepth(node.children[i], depth + 1));
        } // end for
        // 返回子树中，最大的深度。
        return this.maxNum(childrenResults);
      }
    },

    // 通过传入根节点获得树的深度，是 calDepth 的调用者。
    getTreeDepth(node) {
      if (undefined == node || null == node) {
        return 0;
      }
      return this.calDepth(node, 1);
    },

    traverseTree(node, callback) {
      if (!node) {
        return;
      }
      var stack = [];
      stack.push(node);
      var tmpNode;
      while (stack.length > 0) {
        tmpNode = stack.pop();
        callback(tmpNode);
        if (tmpNode.children && tmpNode.children.length > 0) {
          for (let i = tmpNode.children.length - 1; i >= 0; i--) {
            stack.push(tmpNode.children[i]);
          }
        }
      }
    }
  }
};
</script>
<style lang="scss" rel="stylesheet/scss" scoped>
</style>
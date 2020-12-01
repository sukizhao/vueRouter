<template>
<div>
    11111111111111
 <!-- <dTable 
    api="bizSystemService.getEmployeeList"
    :params="queryForm"    
    ref="table"
    size="small">
    <el-table-column
            align="center"
            label="序号"
            width="50">
            <template slot-scope="scope">
            {{scope.$index+1}}
            </template>
        </el-table-column>
        <el-table-column
            prop="roleTypeName"
            align="center"
            label="角色类型"
            width="120">
            <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
            <el-button type="text" size="small">编辑</el-button>
        </template>
        </el-table-column>
    </dTable> -->
    </div>
</template>
<script>
import dTable from './d-table.vue';
// import VueEvent from '../model/VueEvent.js'
export default {
    components:dTable
}
</script>

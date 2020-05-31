// 1. 引入 mixnin
//
//    import setChoices from '@/mixins/setChoices'
//
// 2. 设置 mixins
//
//    mixins: [setChoices]
//
// 3. 在 mounted 中调用
//
//    mounted () {
//      this.setChoices(this.$refs.grid, map)
//    }

import newImage from '@/packaged-components/newImage'
import twoButton from '@/packaged-components/twoButton'

export const myMixin = {
  components: {
    newImage,
    twoButton
  },
  methods: {
    setChoices () {
      console.log('setChoices')
    }
  }

}
<template>
	<div class="imgClass">
      这是我的新图片组建<img src="" alt="">
	</div>
</template>
<script>
	export default {
		name: 'newImage',
		data () {
			return {
			
			}
		},
		props: [ ],
		computed: {
		
		},
		methods: {
			// handleInput (val) {
			// 	this.$emit('input', val)
			// },

		}
	}
</script>
<style scoped>
	.imgClass{
		border:1px solid blue;
	}
</style>

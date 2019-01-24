<template>
  <div class="swiper-container">
        <div class="swiper-wrapper" style="transition-duration: 0ms; transform: translate3d(-4500px, 0px, 0px);">
            <div class="swiper-slide" style="width: 500px;">Slide 1</div>
            <div class="swiper-slide" style="width: 500px;">Slide 2</div>
            <div class="swiper-slide" style="width: 500px;">Slide 3</div>
            <div class="swiper-slide" style="width: 500px;">Slide 4</div>
            <div class="swiper-slide" style="width: 500px;">Slide 5</div>
            <div class="swiper-slide" style="width: 500px;">Slide 6</div>
            <div class="swiper-slide" style="width: 500px;">Slide 7</div>
            <div class="swiper-slide" style="width: 500px;">Slide 8</div>
            <div class="swiper-slide swiper-slide-prev" style="width: 500px;">Slide 9</div>
            <div class="swiper-slide swiper-slide-active" style="width: 500px;">Slide 10</div>
        </div>
    </div>     
</template>


<script>
// 在这引入
	import mySwiper from "../../static/js/swiper.min.js";
	export default {
		mounted:function(){
			console.log("OK");
	 		var swiper = new Swiper('.swiper-container');
		}
	} 
</script>

<style lang="scss">
	@import  "../../static/css/swiper.min.css";

	 .swiper-container {
        border:1px solid red;
        width: 500px;
        height: 300px;
        margin: 20px auto;
    }
    .swiper-slide {
        text-align: center;
        font-size: 18px;
        background: #fff;
        
        /* Center slide text vertically */
        display: -webkit-box;
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        -webkit-justify-content: center;
        justify-content: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        -webkit-align-items: center;
        align-items: center;
    }

</style>
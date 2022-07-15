<template>
  <div class="content-wrapper">
    <el-carousel :direction="carouselDirection">
      <el-carousel-item v-for="item in 4"
                        :key="item">
        <h3 text="2xl"
            justify="center">{{ item }}</h3>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script setup>
const { globalStore } = useStore()
const { screenWidth } = useStoreToRefs(globalStore)

const carouselDirection = computed(() => {
	return useScreenIsXs() ? 'horizontal' : 'vertical'
})
</script>

<style lang="scss" scoped>
.content-wrapper {
	background: white;

	.el-carousel__item h3 {
		color: #475669;
		opacity: 0.75;
		line-height: 200px;
		margin: 0;
		text-align: center;
	}

	.el-carousel__item:nth-child(2n) {
		background-color: #99a9bf;
	}

	.el-carousel__item:nth-child(2n + 1) {
		background-color: #d3dce6;
	}
}
</style>
<template>
  <LayProvider>
    <NuxtLayout name="default">
      <NuxtPage />
    </NuxtLayout>
  </LayProvider>
</template>

<script setup>
const { globalStore } = useStore()

onBeforeMount(() => {
	globalStore.screenWidth = document.body.clientWidth
})

onMounted(() => {
	window.onresize = () => {
		globalStore.screenWidth = document.body.clientWidth
	}
})
</script>
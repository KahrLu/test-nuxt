<template>
  <div class="detail-wrapper">
    <div class="main">
      <PostContent></PostContent>
    </div>
    <div class="aside"></div>
  </div>
</template>

<script>
</script>

<style lang="scss" scoped>
.detail-wrapper {
	display: flex;

	.main {
		background: white;
		padding: 1rem;
		flex: 1;
	}

	.aside {
		background: white;
		width: 266px;
		margin-left: 1rem;
		padding: 1rem;
	}
}
</style>
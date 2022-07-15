<template>
  <div class="header-wrapper">
    <div class="header-logo">
      <img src="//fcj-1258614865.cos.ap-shanghai.myqcloud.com/logo.png"
           width="100" />
    </div>
    <div class="header-nav">
      <ul>
        <li><NuxtLink to="/">博文</NuxtLink></li>
        <li>
          <NuxtLink to="/archive">归档</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/collect">收藏</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/link">友链</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/about">留言板</NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
const { globalStore } = useStore()
</script>

<style lang="scss">
.header-wrapper {
	display: flex;
	justify-content: space-between;
	padding: 30px;
	background: white;

	.header-logo,
	.header-nav {
		display: flex;
		align-items: center;
	}

	.header-nav {
		ul {
			list-style: none;

			li {
				display: inline;
				margin: 0 15px;
			}
		}
	}
}

@media #{$sm-and-up} {
}
</style>
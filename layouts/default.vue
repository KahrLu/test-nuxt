<template>
  <div>
    <el-container class="body-content"
                  direction="vertical">
      <el-header style="margin-bottom: 1rem">
        <LayHeader></LayHeader>
      </el-header>
      <el-main style="margin-bottom: 1rem">
        <slot />
      </el-main>
      <el-footer>
        <LayFooter></LayFooter>
      </el-footer>
    </el-container>
  </div>
</template>

<script setup>
</script>

<style>
</style>
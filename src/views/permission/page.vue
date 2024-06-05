<script lang="ts" setup>
import SwitchRoles from "./components/SwitchRoles.vue"
</script>

<template>
  <div class="app-container">
    <SwitchRoles />
    <el-tag type="warning" size="large"
      >The current page is only visible to the Admin character. After switching the role, you will not enter the page
    </el-tag>
  </div>
</template>

<style lang="scss" scoped>
.el-tag {
  margin-top: 15px;
}
</style>

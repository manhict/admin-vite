<script lang="ts" setup>
import { checkPermission } from "@/utils/permission"
import SwitchRoles from "./components/SwitchRoles.vue"
</script>

<template>
  <div class="app-container">
    <SwitchRoles />
    <!-- v-permission 示例 -->
    <div class="margin-top-30">
      <div>
        <el-tag v-permission="['admin']" type="success" size="large" effect="plain">
          Here is a v-permission = "['admin']" so only admin can see this sentence
        </el-tag>
      </div>
      <div>
        <el-tag v-permission="['editor']" type="success" size="large" effect="plain">
          This uses v-point = "['editor']" here so only Editor can see this sentence
        </el-tag>
      </div>
      <div class="margin-top-15">
        <el-tag v-permission="['admin', 'editor']" type="success" size="large" effect="plain">
          Here is a v-permission = "['admin', 'editor']" so admin and editor can see this sentence
        </el-tag>
      </div>
    </div>
    <!-- checkPermission 示例 -->
    <div class="margin-top-30">
      <el-tag type="warning" size="large">
        For example, EL-TAB-PANE or El-Table-Column and other dynamic rendering DOMs of Element Plus are not suitable
        for use V-Permission, in this case you can achieve via V-IF and CheckPermission:
      </el-tag>
      <el-tabs type="border-card" class="margin-top-15">
        <el-tab-pane v-if="checkPermission(['admin'])" label="admin">
          It is used here <el-tag>v-if="checkPermission(['admin'])"</el-tag> So only admin can see this sentence
        </el-tab-pane>
        <el-tab-pane v-if="checkPermission(['editor'])" label="editor">
          It is used here <el-tag>v-if="checkPermission(['editor'])"</el-tag> So only editor can see this sentence
        </el-tab-pane>
        <el-tab-pane v-if="checkPermission(['admin', 'editor'])" label="admin 和 editor">
          It is used here <el-tag>v-if="checkPermission(['admin', 'editor'])"</el-tag> So admin and editor can see this
          sentence
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.margin-top-15 {
  margin-top: 15px;
}

.margin-top-30 {
  margin-top: 30px;
}
</style>

<script lang="ts" setup>
import { ref } from "vue"
import { useWatermark } from "@/hooks/useWatermark"

const localRef = ref<HTMLElement | null>(null)
const { setWatermark, clearWatermark } = useWatermark(localRef)
const { setWatermark: setGlobalWatermark, clearWatermark: clearGlobalWatermark } = useWatermark()
</script>

<template>
  <div class="app-container">
    <h4>
      This example is the demon Support local, global, custom style (color, transparency, font size, font, tilt angle,
      etc.), and comes with defense (anti -deletion, hidden) and adaptive functions
    </h4>
    <div ref="localRef" class="local" />
    <el-button-group>
      <el-button type="primary" @click="setWatermark('Local watermark', { color: '#409eff' })"
        >Create local watermark</el-button
      >
      <el-button
        type="warning"
        @click="setWatermark('Local watermark without defense function', { color: '#e6a23c', defense: false })"
      >
        Close defense function
      </el-button>
      <el-button type="danger" @click="clearWatermark">Clear local watermark</el-button> </el-button-group
    >Global watermark without defense function
    <el-button-group>
      <el-button type="primary" @click="setGlobalWatermark('全局水印', { color: '#409eff' })"
        >Create global watermark</el-button
      >
      <el-button
        type="warning"
        @click="setGlobalWatermark('Global watermark without defense function', { color: '#e6a23c', defense: false })"
      >
        Close defense function
      </el-button>
      <el-button type="danger" @click="clearGlobalWatermark">Clear global watermark</el-button>
    </el-button-group>
  </div>
</template>

<style lang="scss" scoped>
.local {
  height: 30vh;
  border: 2px dashed var(--el-color-primary);
  margin-bottom: 20px;
}

.el-button-group {
  margin-right: 12px;
}
</style>

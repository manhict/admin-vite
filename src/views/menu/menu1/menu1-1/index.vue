<script lang="ts" setup>
import { ref } from "vue"

defineOptions({
  name: "Menu1-1"
})

const text = ref("")
</script>

<template>
  <div class="app-container">
    <el-card header="Three -level route cache - menu1-1">
      <el-input v-model="text" />
    </el-card>
  </div>
</template>

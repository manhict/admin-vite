<script lang="ts" setup>
import { useFetchSelect } from "@/hooks/useFetchSelect"
import { getSelectDataApi } from "@/api/hook-demo/use-fetch-select"

const { loading, options, value } = useFetchSelect({
  api: getSelectDataApi
})
</script>

<template>
  <div class="app-container">
    <h4>This example is a demonstration: After the HOOK automatically calls the API</h4>
    <h5>Select Exemplary example</h5>
    <el-select :loading="loading" v-model="value" filterable>
      <el-option v-for="(item, index) in options" v-bind="item" :key="index" placeholder="please choose" />
    </el-select>
    <h5>Select V2 Example (if the amount of data is too large, you can choose this component）</h5>
    <el-select-v2 :loading="loading" v-model="value" :options="options" filterable placeholder="please choose" />
  </div>
</template>

<script lang="ts" setup>
import { useTheme } from "@/hooks/useTheme"
import { ElNotification } from "element-plus"
// 将 Element Plus 的语言设置为中文
// import zhCn from "element-plus/es/locale/lang/zh-cn"
import en from "element-plus/es/locale/lang/en"

const { initTheme } = useTheme()

/** Chủ đề khởi tạo*/
initTheme()

/** Tác giả nghĩ cẩn thận*/
ElNotification({
  title: "Hello",
  type: "success",
  dangerouslyUseHTMLString: true,
  message:
    "<a style='color: teal' target='_blank' href='https://github.com/un-pany/v3-admin-vite'>It is not easy for small projects to get a star. This is the only motivation for the author's continuous maintenance (whisper: In the end, it's free)</a>",
  duration: 0,
  position: "bottom-right"
})
</script>

<template>
  <el-config-provider :locale="en">
    <router-view />
  </el-config-provider>
</template>

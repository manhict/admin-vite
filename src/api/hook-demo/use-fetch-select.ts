/** 模拟接口响应数据 */
const SELECT_RESPONSE_DATA = {
  code: 0,
  data: [
    {
      label: "Apple",
      value: 1
    },
    {
      label: "Banana",
      value: 2
    },
    {
      label: "Tangerine",
      value: 3,
      disabled: true
    }
  ],
  message: "Obtain Select Data Success"
}

/** 模拟接口 */
export function getSelectDataApi() {
  return new Promise<typeof SELECT_RESPONSE_DATA>((resolve, reject) => {
    // 模拟接口响应时间 2s
    setTimeout(() => {
      // 模拟接口调用成功
      if (Math.random() < 0.8) {
        resolve(SELECT_RESPONSE_DATA)
      } else {
        // 模拟接口调用出错
        reject(new Error("An error occurs in the interface"))
      }
    }, 2000)
  })
}

import { type RouteLocationNormalized } from "vue-router"

/** Danh sách màu trắng đăng nhập miễn phí (đường dẫn tuyến khớp)*/
const whiteListByPath: string[] = ["/login"]

/** Danh sách màu trắng đăng nhập miễn phí (tên tuyến đường phù hợp)*/
const whiteListByName: string[] = []

/** Xác định xem nó có trên danh sách trắng*/
const isWhiteList = (to: RouteLocationNormalized) => {
  // đường dẫn và namey có thể được kết hợp từng cái một
  return whiteListByPath.indexOf(to.path) !== -1 || whiteListByName.indexOf(to.name as any) !== -1
}

export default isWhiteList

import type { RouteMeta, RouteRecordRaw } from 'vue-router'

export interface ProRouteMeta extends RouteMeta {
  title?: string // 用于显示菜单标题
  icon?: string // 用于显示菜单图标
  hidden?: boolean // 用于判断是否显示
  keepAlive?: boolean // 控制 keepAlive
}

export type ProRouteRecordRaw = RouteRecordRaw

import type { RouteMeta, RouteRecordRaw } from 'vue-router'

export interface ProRouteMeta extends RouteMeta {
    title?: string
    icon?: string
    hidden?: boolean
    keepAlive?: boolean
}

export type ProRouteRecordRaw = RouteRecordRaw

import { ComputedRef, computed, onMounted, Ref, ref, unref, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'
import type { ProRouteRecordRaw } from '../types'
import { filterRouterByHidden } from '../utils'

/**
 * toggle show
 * @param state init value (default `false`) 菜单栏展开
 */
export function useShow(
  state = false
): {
  show: Ref<boolean>
  toggleShow: () => void
} {
  const show = ref(state)

  function toggleShow() {
    show.value = !show.value
  }

  return {
    show,
    toggleShow
  }
}

export function useResize(callback: () => void): void {
  onMounted(() => {
    callback()
    window.addEventListener('resize', callback)
  })

  onUnmounted(() => {
    window.removeEventListener('resize', callback)
  })
}

/** Gets the responsive breakpoint of the current screen */
type ScreenSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'
export function useScreenSize(): Ref<ScreenSize> {
  const size = ref<ScreenSize>('xl')

  useResize(getScreenSize)

  function getScreenSize() {
    const width = document.body.clientWidth

    if (width >= 1920) {
      size.value = 'xl'
    } else if (width >= 1200) {
      size.value = 'lg'
    } else if (width >= 992) {
      size.value = 'md'
    } else if (width >= 768) {
      size.value = 'sm'
    } else {
      size.value = 'xs'
    }
  }

  return size
}

/**
 * 如果没有传值，将自动从 vue-router 中获取路由并排除 meta: { hidden: true } 的路由
 * @param routes router list
 */
export function useCurrentRoutes(
  routes?: ProRouteRecordRaw[] | Ref<ProRouteRecordRaw[]>
): ComputedRef<ProRouteRecordRaw[]> {
  const _routes = unref(routes)

  return computed(() => {
    if (_routes && _routes.length) {
      return _routes
    } else {
      const router = useRouter()
      const _routes = router.options.routes as ProRouteRecordRaw[]

      return filterRouterByHidden(_routes)
    }
  })
}

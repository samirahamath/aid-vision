import { useEffect, useRef } from 'react'
import { createApp } from 'vue'

/**
 * VueMountWrapper — mounts a Vue 3 SFC component inside a React component.
 * Props passed as `vueProps` are forwarded to the Vue component.
 */
export default function VueMountWrapper({ vueComponent, vueProps = {}, className = '' }) {
  const containerRef = useRef(null)
  const appRef = useRef(null)

  useEffect(() => {
    if (!containerRef.current) return

    const app = createApp(vueComponent, vueProps)
    app.mount(containerRef.current)
    appRef.current = app

    return () => {
      appRef.current?.unmount()
      appRef.current = null
    }
  }, [vueComponent])

  // Re-update props when they change by remounting (simple approach)
  useEffect(() => {
    if (!containerRef.current || !appRef.current) return
    appRef.current.unmount()
    const app = createApp(vueComponent, vueProps)
    app.mount(containerRef.current)
    appRef.current = app
  }, [JSON.stringify(vueProps)])

  return <div ref={containerRef} className={className} />
}

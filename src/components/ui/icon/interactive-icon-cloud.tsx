"use client"

import React, { useEffect, useMemo, useState } from "react"
import { useTheme } from "next-themes"
import {
  Cloud,
  fetchSimpleIcons,
  renderSimpleIcon,
  SimpleIcon,
} from "react-icon-cloud"

// กำหนด type ให้ตรงกับ ICloud ของ react-icon-cloud
export const cloudProps: {
  containerProps: React.HTMLAttributes<HTMLDivElement>
  options: {
    reverse: boolean
    depth: number
    wheelZoom: boolean
    imageScale: number
    activeCursor: string
    tooltip?: "native" | "div" | null
    initial: [number, number]
    clickToFront: number
    tooltipDelay: number
    outlineColour: string
    maxSpeed: number
    minSpeed: number
  }
} = {
  containerProps: {
    style: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      paddingTop: 40,
    },
  },
  options: {
    reverse: true,
    depth: 1,
    wheelZoom: false,
    imageScale: 2,
    activeCursor: "default",
    tooltip: "native", // ✅ literal type ตรงกับ ICloud
    initial: [0.1, -0.1],
    clickToFront: 500,
    tooltipDelay: 0,
    outlineColour: "#0000",
    maxSpeed: 0.04,
    minSpeed: 0.02,
  },
}

// ฟังก์ชัน render icon theme-aware
export const renderCustomIcon = (icon: SimpleIcon, theme: string) => {
  const bgHex = theme === "light" ? "#f3f2ef" : "#080510"
  const fallbackHex = theme === "light" ? "#6e6e73" : "#ffffff"
  const minContrastRatio = theme === "dark" ? 2 : 1.2

  return renderSimpleIcon({
    icon,
    bgHex,
    fallbackHex,
    minContrastRatio,
    size: 42,
    aProps: {
      href: undefined,
      target: undefined,
      rel: undefined,
      onClick: (e: React.MouseEvent<HTMLAnchorElement>) =>
        e.preventDefault(),
    },
  })
}

type DynamicCloudProps = {
  iconSlugs: string[]
}

type IconData = Awaited<ReturnType<typeof fetchSimpleIcons>>

function IconCloudInner({ iconSlugs }: DynamicCloudProps) {
  const [data, setData] = useState<IconData | null>(null)
  const { theme } = useTheme()

  // โหลด icons แค่ครั้งเดียวตอน mount
  useEffect(() => {
    fetchSimpleIcons({ slugs: iconSlugs }).then(setData)
  }, []) // ไม่ใส่ [iconSlugs] เพราะ slugs ไม่เปลี่ยน

  const renderedIcons = useMemo(() => {
    if (!data) return null
    return Object.values(data.simpleIcons).map((icon) =>
      renderCustomIcon(icon, theme || "light")
    )
  }, [data, theme])

  return (
    <Cloud {...cloudProps}>
      {renderedIcons}
    </Cloud>
  )
}

// ใช้ React.memo กัน re-render ไม่จำเป็น
export const IconCloud = React.memo(IconCloudInner)

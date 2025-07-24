import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import "./seo-styles.css"
import StructuredData from "./structured-data"
import Analytics from "./analytics"

export const metadata: Metadata = {
  title: {
    default: "飞行棋",
    template: "%s | 爱情飞行棋 - 情侣游戏专家",
  },
  description:
    "fxq",
  keywords:
    "fxq",
  authors: [{ name: "飞" }],
  creator: "行",
  publisher: "棋",
  robots: "index, follow",
  icons: {
    icon: [
      {
        url: "/images/logo.png",
        type: "image/png",
      },
      {
        url: "/favicon.png",
        type: "image/png",
      }
    ],
    shortcut: "/favicon.png",
    apple: [
      {
        url: "/images/logo.png",
        sizes: "180x180",
        type: "image/png",
      }
    ],
  },
  openGraph: {
    title:
      "飞行棋",
    description:
      "fxq",
    url: "https://cpfly.top",
    siteName: "飞行棋",
    images: [
      {
        url: "https://cpfly.top/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "飞行棋",
      },
    ],
    locale: "zh_CN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "飞行棋",
    description:
      "fxq",
    images: ["https://cpfly.top/images/twitter-image.jpg"],
  },
  canonical: "https://zzozz.xyz/fxq", // 可以将 canonical 移到顶层
  other: {
    "baidu-site-verification": "your-baidu-verification-code",
    "360-site-verification": "your-360-verification-code",
    "sogou_site_verification": "your-sogou-verification-code",
    "shenma-site-verification": "your-shenma-verification-code",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="zh-CN">
      <head>
        <StructuredData />
        <link rel="canonical" href="https://cpfly.top" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" href="/images/logo.png" />
        <link rel="shortcut icon" type="image/png" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/images/logo.png" />
        <meta name="theme-color" content="#ff6b9d" />
        
        {/* 针对移动端搜索优化 */}
        <meta name="mobile-web-compatible" content="yes" />
        <meta name="format-detection" content="telephone=no" />
        
        {/* 百度移动适配 */}
        <meta name="applicable-device" content="pc,mobile" />
        <meta name="MobileOptimized" content="width" />
        <meta name="HandheldFriendly" content="true" />
        
        <Analytics />
      </head>
      <body>{children}</body>
    </html>
  )
}

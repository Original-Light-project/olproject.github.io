import type { NewsItem } from "@/lib/types";

export const newsItems: NewsItem[] = [
  {
    id: "website-start",
    title: "Original Light 官網建置開始",
    type: "devlog",
    date: "2026-05-22",
    excerpt: "官網將作為原初之光的資訊入口，整合世界觀、系統介紹、公告與遊玩指南。",
    href: "/news/website-start",
  },
  {
    id: "world-interaction-preview",
    title: "世界互動系統規劃公開",
    type: "update",
    date: "2026-05-14",
    excerpt: "玩家將能透過提交材料、推進事件進度，讓世界狀態隨著合作產生變化。",
    href: "/news/world-interaction-preview",
  },
  {
    id: "beginner-guide",
    title: "新手指南頁面準備中",
    type: "announcement",
    date: "2026-05-14",
    excerpt: "未來將提供加入伺服器、基本指令、規則與初期遊玩路線說明。",
    href: "/news/beginner-guide",
  },
];
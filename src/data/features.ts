import { BookOpen, Gem, Handshake, Sparkles } from "lucide-react";
import type { Feature } from "@/lib/types";

export const features: Feature[] = [
  {
    title: "沉浸式 RPG 世界",
    description: "以光與魔幻世界觀為核心，透過劇情、地區與角色逐步揭開世界的真相。",
    icon: BookOpen,
  },
  {
    title: "世界互動事件",
    description: "玩家能提交材料、推進進度，讓橋梁、祭壇、地區狀態隨著合作而改變。",
    icon: Handshake,
  },
  {
    title: "角色成長系統",
    description: "透過探索、戰鬥與任務培養角色，逐步解鎖能力、技能與戰鬥風格。",
    icon: Sparkles,
  },
  {
    title: "自訂物品與資源",
    description: "從材料、裝備到特殊道具，打造適合長期遊玩的收集與養成循環。",
    icon: Gem,
  },
];
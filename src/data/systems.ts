import type { SystemItem } from "@/lib/types";

export const systems: SystemItem[] = [
  {
    id: "world-interaction",
    title: "世界互動",
    category: "合作事件",
    description: "透過提交材料與互動行為推進世界事件，讓玩家共同改變伺服器世界狀態。",
    href: "/systems/world-interaction",
    tags: ["合作", "事件", "獎勵"],
  },
  {
    id: "rpg-growth",
    title: "RPG 成長",
    category: "角色養成",
    description: "以等級、能力值、技能與裝備構成角色成長路線，建立長期遊玩目標。",
    href: "/systems/rpg-growth",
    tags: ["等級", "技能", "職業"],
  },
  {
    id: "weapon-skills",
    title: "武器與技能",
    category: "戰鬥系統",
    description: "不同武器擁有專屬定位與技能表現，讓戰鬥不只是單純數值碰撞。",
    href: "/systems/weapon-skills",
    tags: ["武器", "技能", "戰鬥"],
  },
  {
    id: "resource-gathering",
    title: "採集與資源",
    category: "生產循環",
    description: "鼓勵玩家投入採集、材料累積與資源分配，支撐事件、製作與經濟流動。",
    href: "/systems/resource-gathering",
    tags: ["採集", "材料", "生產"],
  },
];
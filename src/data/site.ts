const repoName = "original-light-web";
const isProduction = process.env.NODE_ENV === "production";

export const siteConfig = {
  name: "Original Light",
  zhName: "原初之光",
  description: "以光為核心的 Minecraft RPG 伺服器，結合世界互動、劇情探索、角色養成與多人合作。",
  serverVersion: "Minecraft Java 1.21.8",
  serverIp: "play.originallight.example",
  discordUrl: "#",
  assetBasePath: isProduction ? `/${repoName}` : "",
};
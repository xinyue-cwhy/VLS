# VLS 可视化数据大屏

基于 `Vue 3 + TypeScript + Vite + ECharts` 搭建的可视化数据大屏模板，适合园区运营、设备监控、业务驾驶舱、生产调度等场景。

## 项目特性

- 左中右三栏大屏布局，中间区域宽度为两侧的 2 倍
- 中间顶部为核心指标总览，中间底部为地图态势区域
- 采用 `flex` 主布局，支持全屏展示、无滚动条
- 使用 `rem` 大屏适配，横屏下优先按宽度缩放
- 图表基于 `ECharts`，包含折线图、柱状图、饼图、地图等模块
- 饼图已针对小尺寸面板做响应式处理

## 技术栈

- Vue 3
- TypeScript
- Vite
- ECharts 5

## 本地运行

```bash
npm install
npm run dev
```

默认启动后访问：

```bash
http://localhost:5173/
```

如果本机 5173 端口被占用，可以指定其他端口：

```bash
npm run dev -- --host 0.0.0.0 --port 4173
```

## 生产构建

```bash
npm run build
```

构建产物输出到 `dist/`。

## 项目结构

```text
src/
  components/    大屏卡片、图表容器、地图模块
  data/          大屏静态数据和图表配置
  lib/           ECharts 按需引入封装
  utils/         rem 适配逻辑
```

## 部署

### GitHub Pages

仓库已配置 GitHub Pages 工作流，推送到 `main` 分支后可通过 GitHub Actions 自动构建并部署。

部署前请在 GitHub 仓库设置中确认：

1. 进入 `Settings > Pages`
2. `Build and deployment` 选择 `GitHub Actions`

工作流文件位置：

```text
.github/workflows/deploy-pages.yml
```

### Vercel

仓库已提供 `vercel.json`，导入仓库到 Vercel 后可直接部署。

## 说明

当前地图区域使用的是内置示意 GeoJSON，适合演示结构和视觉效果。如果需要真实中国地图、省市下钻、接口联动或实时数据刷新，可以继续扩展。

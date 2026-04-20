# 心情气象站 - 部署指南

## 快速部署到 Vercel（推荐）

### 方式一：通过 GitHub 部署（推荐）

1. **创建 GitHub 仓库**
   - 访问 https://github.com
   - 点击右上角 "+" -> "New repository"
   - 仓库名称填写 `mood-weather-station`
   - 选择 Private（私有）或 Public
   - 点击 "Create repository"

2. **推送代码到 GitHub**
   ```bash
   git remote add origin https://github.com/你的用户名/mood-weather-station.git
   git branch -M main
   git push -u origin main
   ```

3. **部署到 Vercel**
   - 访问 https://vercel.com
   - 使用 GitHub 账号登录
   - 点击 "Add New..." -> "Project"
   - 选择刚创建的 GitHub 仓库
   - 点击 "Deploy"
   - 等待部署完成，获取在线 URL

### 方式二：通过 Vercel CLI 部署

```bash
npm i -g vercel
vercel login
vercel
```

### 方式三：直接上传部署

1. 访问 https://vercel.com/new
2. 选择 "Import Third-party Git Repository" 或跳过
3. 直接将 index.html、styles.css、app.js 三个文件拖拽上传

---

## 部署到 Netlify

1. 访问 https://app.netlify.com/drop
2. 将 `index.html`、`styles.css`、`app.js` 三个文件拖拽到页面
3. 自动生成在线 URL

---

## 部署到 GitHub Pages

1. 将代码推送到 GitHub 仓库
2. 进入仓库 -> Settings -> Pages
3. Source 选择 `main` branch 和 `/ (root)`
4. 点击 Save，等待部署

---

## 功能说明

- **首页**：点击天气图标记录今日心情
- **日历**：查看历史心情记录
- **统计**：查看本月心情分布

## 本地预览

双击 `index.html` 即可在浏览器中本地预览完整功能。

## 数据存储

所有数据存储在浏览器 localStorage 中，清除浏览器数据会重置记录。
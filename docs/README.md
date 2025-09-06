# 3ziye 组织官网 - Jekyll 实现

这是 3ziye 开源组织的官方网站实现，基于 Jekyll 静态网站生成器构建，托管于 GitHub Pages。网站包含组织介绍、项目展示、团队成员、博客动态等核心功能模块。

## 网站功能

- 响应式设计，适配桌面端、平板和移动设备
- 项目展示系统（支持分类筛选、视图切换）
- 团队成员介绍
- 博客文章发布系统
- 动态交互效果与平滑动画
- 符合现代设计标准的 UI 界面

## 本地开发环境搭建

### 前置条件

- Ruby (2.5.0 或更高版本)
- RubyGems
- GCC 和 Make

### 安装步骤

1. 克隆仓库到本地
   ```bash
   git clone https://github.com/3ziye/3ziye.github.io.git
   cd 3ziye.github.io
   ```

2. 安装依赖包
   ```bash
   bundle install
   ```

3. 启动本地开发服务器
   ```bash
   bundle exec jekyll serve
   ```

4. 在浏览器中访问 `http://localhost:4000` 查看网站

## 目录结构说明
3ziye.github.io/
├── _config.yml                 # 网站核心配置文件
├── _data/                      # 数据文件目录
│   ├── navigation.yml          # 导航菜单配置
│   ├── projects.yml            # 项目数据
│   └── stats.yml               # 统计数据
├── _includes/                  # 可复用组件
│   ├── header.html             # 网站头部
│   ├── footer.html             # 网站底部
│   ├── hero.html               # 首页横幅
│   └── ...
├── _layouts/                   # 页面布局模板
│   ├── default.html            # 默认布局
│   ├── page.html               # 普通页面布局
│   ├── post.html               # 博客文章布局
│   └── ...
├── _posts/                     # 博客文章
│   ├── 2024-09-01-welcome.md   # 示例文章
│   └── ...
├── _sass/                      # Sass 样式源文件
│   ├── _base.scss              # 基础样式
│   ├── _project-styles.scss    # 项目页面样式
│   └── ...
├── assets/                     # 静态资源
│   ├── css/                    # 编译后的 CSS
│   ├── js/                     # JavaScript 文件
│   └── images/                 # 图片资源
├── team/                       # 团队成员页面
│   ├── _members/               # 团队成员数据
│   └── index.md                # 团队页面
├── projects/                   # 项目页面
│   └── index.md                # 项目列表页
├── blog/                       # 博客页面
│   └── index.md                # 博客列表页
├── index.md                    # 网站首页
├── about.md                    # 关于我们页面
├── Gemfile                     # Ruby 依赖管理
└── README.md                   # 项目说明文档

## 内容管理

### 添加新博客文章

1. 在 `_posts` 目录下创建新文件，命名格式为 `YYYY-MM-DD-文章标题.md`
2. 添加 YAML 头信息：
   ```yaml
   ---
   layout: post
   title: "文章标题"
   date: 2024-09-15 10:00:00 +0800
   categories: 技术更新
   tags: [jekyll, 开发]
   ---
   ```
3. 在头信息下方添加 Markdown 格式的文章内容

### 添加新项目

1. 编辑 `_data/projects.yml` 文件
2. 按照现有项目格式添加新项目信息：
   ```yaml
   - id: new-project
     title: "新项目名称"
     description: "项目详细描述"
     category: 工具类
     image: "project-image.jpg"
     github_url: "https://github.com/3ziye/new-project"
     demo_url: "https://3ziye.github.io/new-project"
     stars: 120
     contributors: 8
     last_updated: "2024-09-10"
   ```
3. 在 `assets/images/projects/` 目录添加项目图片

### 添加团队成员

1. 在 `team/_members` 目录下创建新的 Markdown 文件，文件名建议为成员 GitHub 用户名
2. 添加内容：
   ```yaml
   ---
   name: "成员姓名"
   role: "职位/角色"
   avatar: "avatar-image.jpg"
   github: "github-username"
   twitter: "twitter-username"
   bio: "简短个人介绍"
   ---
   ```
3. 在 `assets/images/team/` 目录添加成员头像

## 部署方式

项目采用 GitHub Pages 自动部署：

1. 将代码推送到 `main` 分支
2. GitHub 会自动运行 Jekyll 构建过程
3. 构建完成后，网站会部署到 `https://3ziye.github.io`

## 自定义与扩展

- 如需修改网站样式，可编辑 `_sass` 目录下的 SCSS 文件
- 如需添加新页面，可创建新的 Markdown 文件并设置合适的布局
- 如需添加新功能，可在 `assets/js` 目录添加自定义 JavaScript

## 贡献指南

欢迎为 3ziye 组织官网贡献代码或内容：

1. Fork 本仓库
2. 创建特性分支 (`git checkout -b feature/amazing-feature`)
3. 提交更改 (`git commit -m 'Add some amazing feature'`)
4. 推送到分支 (`git push origin feature/amazing-feature`)
5. 打开 Pull Request

## 联系我们

如有任何问题或建议，请联系：dc@3ziye.com
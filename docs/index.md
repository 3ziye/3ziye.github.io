---
layout: default
title: 3ziye 开源组织
---
<div class="page-container">
  {% include hero.html %}

  <section class="features">
    <div class="container">
      <h2>🚀 我们的使命</h2>
      <p>3ziye 是一个致力于开源技术研发与知识分享的社区组织，我们通过协作开发有价值的项目，帮助开发者成长，推动技术生态发展。</p>
      
      <div class="feature-grid">
        <div class="feature-item">
          <h3>🤝 开源协作</h3>
          <p>倡导开放、协作的开发模式，让优质代码惠及更多人</p>
        </div>
        <div class="feature-item">
          <h3>📚 技术分享</h3>
          <p>通过博客、教程和讲座传播前沿技术知识</p>
        </div>
        <div class="feature-item">
          <h3>👥 社区建设</h3>
          <p>构建友好的开发者社区，促进成员间的交流与学习</p>
        </div>
      </div>
    </div>
  </section>

  <section class="latest-projects">
    <div class="container">
      <h2>💻 项目列表</h2>
      <div class="project-grid">
        {% for project in site.data.projects limit:3 %}
          <div class="project-card">
            <img src="/assets/images/projects/{{ project.image }}" alt="{{ project.title }}">
            <div class="project-content">
              <h3><a href="{{ project.github_url }}">🔗 {{ project.title }}</a></h3>
              <p>{{ project.description | truncate: 100 }}</p>
            </div>
          </div>
        {% endfor %}
      </div>
      <!-- <div class="view-more">
        <a href="/projects" class="btn primary-btn">📋 查看全部项目</a>
      </div> -->
    </div>
  </section>

  <section class="join-us">
    <div class="container">
      <h2>🌟 加入我们</h2>
      <p>无论你是经验丰富的开发者还是刚入门的新手，我们都欢迎你的加入！</p>
      <a href="https://github.com/3ziye" class="btn primary-btn" target="_blank">🔍 在 GitHub 上关注我们</a>
    </div>
  </section>
</div>
---
layout: page
title: 我们的项目
permalink: /projects/
---

<div class="page-container">

# 项目展示

探索 3ziye 组织开发和维护的开源项目，欢迎参与贡献或提出宝贵意见。

<div class="project-filters">
  <div class="filter-controls">
    <button class="filter-btn active" data-filter="all">全部项目</button>
    {% for category in site.project_categories %}
      <button class="filter-btn" data-filter="{{ category | downcase | replace: ' ', '-' }}">
        {{ category }}
      </button>
    {% endfor %}
  </div>
  <div class="view-controls">
    <button class="view-btn active" data-view="grid">
      <i class="fas fa-th"></i> 网格视图
    </button>
    <button class="view-btn" data-view="list">
      <i class="fas fa-list"></i> 列表视图
    </button>
  </div>
</div>

<div class="project-container grid-view">
  {% for project in site.data.projects %}
    <div class="project-item" data-category="{{ project.category | downcase | replace: ' ', '-' }}">
      <div class="project-card">
        <div class="project-image">
          <img src="/assets/images/projects/{{ project.image }}" alt="{{ project.title }}">
          <span class="project-category">{{ project.category }}</span>
        </div>
        <div class="project-info">
          <h3 class="project-title">
            <a href="{{ project.github_url }}" target="_blank">{{ project.title }}</a>
          </h3>
          <p class="project-description">{{ project.description }}</p>
          <div class="project-actions">
            <a href="{{ project.github_url }}" target="_blank" class="btn primary-btn">GitHub</a>
            {% if project.demo_url %}
              <a href="{{ project.demo_url }}" target="_blank" class="btn secondary-btn">演示</a>
            {% endif %}
          </div>
        </div>
      </div>
    </div>
  {% endfor %}
</div>
</div>
    
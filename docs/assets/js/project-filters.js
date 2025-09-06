document.addEventListener('DOMContentLoaded', function() {
  // 筛选按钮功能
  const filterButtons = document.querySelectorAll('.filter-btn');
  const projectItems = document.querySelectorAll('.project-item');
  
  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      // 更新按钮状态
      filterButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
      
      const filter = button.getAttribute('data-filter');
      
      // 筛选项目
      projectItems.forEach(item => {
        if (filter === 'all' || item.getAttribute('data-category') === filter) {
          item.style.opacity = '1';
          item.style.transform = 'translateY(0)';
          item.style.display = 'block';
        } else {
          item.style.opacity = '0';
          item.style.transform = 'translateY(20px)';
          setTimeout(() => {
            item.style.display = 'none';
          }, 300);
        }
      });
    });
  });
  
  // 视图切换功能
  const viewButtons = document.querySelectorAll('.view-btn');
  const projectContainer = document.querySelector('.project-container');
  
  viewButtons.forEach(button => {
    button.addEventListener('click', () => {
      // 更新按钮状态
      viewButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
      
      const view = button.getAttribute('data-view');
      
      // 切换视图
      if (view === 'grid') {
        projectContainer.classList.remove('list-view');
        projectContainer.classList.add('grid-view');
      } else {
        projectContainer.classList.remove('grid-view');
        projectContainer.classList.add('list-view');
      }
    });
  });
  
  // 加载更多功能
  const loadMoreBtn = document.getElementById('load-more');
  let itemsLoaded = 6; // 初始加载的项目数量
  
  loadMoreBtn.addEventListener('click', () => {
    // 显示加载状态
    loadMoreBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> 加载中...';
    
    // 模拟加载延迟
    setTimeout(() => {
      // 显示更多项目（实际应用中应该从服务器加载）
      const hiddenItems = document.querySelectorAll('.project-item:nth-child(n+' + (itemsLoaded + 1) + ')');
      
      if (hiddenItems.length > 0) {
        hiddenItems.forEach((item, index) => {
          if (index < 3) { // 每次加载3个项目
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
            item.style.display = 'block';
          }
        });
        
        itemsLoaded += 3;
        
        // 如果没有更多项目可加载
        if (itemsLoaded >= projectItems.length) {
          loadMoreBtn.innerHTML = '没有更多项目';
          loadMoreBtn.disabled = true;
          loadMoreBtn.classList.add('disabled');
        } else {
          loadMoreBtn.innerHTML = '加载更多';
        }
        
        // 显示通知
        showNotification('已加载更多项目');
      } else {
        loadMoreBtn.innerHTML = '没有更多项目';
        loadMoreBtn.disabled = true;
        loadMoreBtn.classList.add('disabled');
      }
    }, 1000);
  });
  
  // 移动端菜单切换
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileNav = document.getElementById('mobile-nav');
  
  mobileMenuBtn.addEventListener('click', () => {
    mobileMenuBtn.classList.toggle('open');
    mobileNav.classList.toggle('active');
  });
  
  // 显示通知函数
  function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    document.body.appendChild(notification);
    
    // 3秒后自动移除通知
    setTimeout(() => {
      notification.remove();
    }, 3000);
  }
});
    
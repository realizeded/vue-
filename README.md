# Vue.js开发去哪儿网WebAapp 
# 预览
 ![image](http://localhost:8080/gif1.gif)
## 功能页面
* 1 首页:实现了多区域轮播的功能，以及多区域列表的展示

* 2 热门推荐景点详情页: 实现公用的画廊组件，以及递归展示的列表组件。

* 3 城市选择页:在这个页面实现了城市展示、城市搜索、城市右侧字母和左侧区块动态联动的效果，当用户在城市列表切换了新的城市后，首页对应的城市
也会跟着变化  

## 技术点
* 1 vue-awesome-swiper实现轮播图、画廊
* 2 递归组件实现详情页列表
* 3 使用Vuex实现数据共享
* 4 使用localStorage + Vuex实现状态持久化
* 5 使用ajax获取模拟数据
* 6 使用fast-click解决移动端点击300ms延迟问题
* 7 使用媒体查询 + less + rem 进行屏幕自适应
## 性能优化
* 1.对城市选择搜索框 用函数防抖解决频繁请求的问题
* 2.使用keep-alive缓存组件  



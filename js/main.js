import DateTimeUtil from './utils/date-time.js';
import ChartManager from './charts/manager.js';
import DataUpdater from './data-updater.js';

// 页面初始化
document.addEventListener('DOMContentLoaded', () => {
    // 初始化日期时间显示并每秒更新
    DateTimeUtil.updateDateTime();
    setInterval(() => DateTimeUtil.updateDateTime(), 1000);
    
    // 初始化图表
    ChartManager.init();
    
    // 初始化数据更新器
    DataUpdater.init();
});
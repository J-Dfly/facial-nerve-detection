// 日期时间格式化工具
const DateTimeUtil = {
    formatTime(date) {
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');
        const seconds = String(date.getSeconds()).padStart(2, '0');
        return `${hours}:${minutes}:${seconds}`;
    },
    
    formatDate(date) {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}年${month}月${day}日`;
    },
    
    updateDateTime() {
        const now = new Date();
        document.getElementById('current-time').textContent = this.formatTime(now);
        document.getElementById('current-date').textContent = this.formatDate(now);
    }
};

export default DateTimeUtil;
// 数据更新器
const DataUpdater = {
    init() {
        // 每30秒更新一次数据
        setInterval(() => this.updateRandomData(), 30000);
    },
    
    updateRandomData() {
        // 更新预测计数（随机增减）
        const totalEl = document.getElementById('today-total');
        const currentTotal = parseInt(totalEl.textContent.replace(',', ''));
        const newTotal = currentTotal + Math.floor(Math.random() * 10) + 1;
        totalEl.textContent = newTotal.toLocaleString();
        
        // 轻微更新精度值
        const precisionEl = document.getElementById('avg-precision');
        const currentPrecision = parseFloat(precisionEl.textContent);
        const newPrecision = (currentPrecision + (Math.random() * 0.4 - 0.2)).toFixed(1);
        precisionEl.textContent = `${newPrecision}%`;
        
        // 更新当前预测时间
        const now = new Date();
        document.getElementById('current-predict-time').textContent = 
            DateTimeUtil.formatTime(now);
    }
};

export default DataUpdater;
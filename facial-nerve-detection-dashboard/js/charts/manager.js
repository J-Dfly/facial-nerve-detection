// 图表管理器
const ChartManager = {
    init() {
        this.initPredictionTrendChart();
        this.initNerveTypeChart();
    },
    
    initPredictionTrendChart() {
        const ctx = document.getElementById('predictionTrendChart').getContext('2d');
        
        // 生成模拟数据
        const hours = Array.from({length: 12}, (_, i) => `${i + 8}:00`);
        const predictionCounts = hours.map(() => Math.floor(Math.random() * 150) + 50);
        const accuracyData = hours.map(() => Math.floor(Math.random() * 5) + 93);
        
        this.predictionTrendChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: hours,
                datasets: [
                    {
                        label: '预测次数',
                        data: predictionCounts,
                        borderColor: Config.colors.primary,
                        backgroundColor: 'rgba(22, 93, 255, 0.1)',
                        fill: true,
                        tension: 0.4,
                        yAxisID: 'y'
                    },
                    {
                        label: '平均精度 (%)',
                        data: accuracyData,
                        borderColor: Config.colors.secondary,
                        backgroundColor: 'transparent',
                        tension: 0.4,
                        yAxisID: 'y1'
                    }
                ]
            },
            options: Config.chartOptions.history
        });
    },
    
    initNerveTypeChart() {
        const ctx = document.getElementById('nerveTypeChart').getContext('2d');
        
        this.nerveTypeChart = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: ['面神经', '三叉神经', '颞神经', '下颌神经', '其他神经'],
                datasets: [{
                    data: [35, 25, 18, 12, 10],
                    backgroundColor: [
                        Config.colors.primary,
                        Config.colors.secondary,
                        Config.colors.accent,
                        Config.colors.warning,
                        Config.colors['dark-2']
                    ],
                    borderWidth: 0,
                    hoverOffset: 5
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                cutout: '70%',
                plugins: {
                    legend: {
                        position: 'bottom',
                        labels: {
                            padding: 15,
                            color: 'rgba(255, 255, 255, 0.7)',
                            boxWidth: 10,
                            usePointStyle: true
                        }
                    },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                const label = context.label || '';
                                const value = context.raw || 0;
                                const total = context.dataset.data.reduce((a, b) => a + b, 0);
                                const percentage = Math.round((value / total) * 100);
                                return `${label}: ${value}次 (${percentage}%)`;
                            }
                        }
                    }
                }
            }
        });
    }
};

export default ChartManager;
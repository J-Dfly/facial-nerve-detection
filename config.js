// 配置文件 - 集中管理所有可配置项
const Config = {
  // 颜色配置 - 华为风格专业配色
  colors: {
    primary: '#165DFF',      // 华为蓝 - 主色调
    secondary: '#0FC6C2',    // 辅助色 - 青色
    accent: '#722ED1',       // 强调色 - 紫色
    success: '#00B42A',      // 成功色 - 绿色
    warning: '#FF7D00',      // 警告色 - 橙色
    danger: '#F53F3F',       // 危险色 - 红色
    dark: '#1D2129',         // 深色背景
    'dark-2': '#4E5969'      // 次要深色
  },
  
  // 图片资源路径配置 - 统一管理图片资源
  images: {
    nerveDistribution: 'images/nerve_distribution_3d.jpg',
    facialNerveSample: 'images/sample_facial_nerve.jpg',
    trigeminalNerveSample: 'images/sample_trigeminal_nerve.jpg',
    temporalNerveSample: 'images/sample_temporal_nerve.jpg',
    mandibularNerveSample: 'images/sample_mandibular_nerve.jpg'
  },
  
  // 神经类型数据
  nerveTypes: {
    'facial-nerve': {
      title: '面神经',
      description: '面部主要运动神经，控制大部分面部表情肌'
    },
    'trigeminal-nerve': {
      title: '三叉神经',
      description: '面部最粗大的神经，负责面部感觉和咀嚼肌运动'
    },
    'temporal-nerve': {
      title: '颞神经',
      description: '控制额肌和眼轮匝肌，负责抬眉和闭眼动作'
    },
    'mandibular-nerve': {
      title: '下颌神经',
      description: '三叉神经分支，负责下颌区域感觉和咀嚼肌运动'
    }
  },
  
  // 图表配置
  chartOptions: {
    // 实时数据图表配置
    realTime: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        x: {
          display: false
        },
        y: {
          min: 40,
          max: 110,
          display: false
        }
      },
      plugins: {
        legend: {
          display: false
        },
        tooltip: {
          enabled: false
        }
      },
      animation: false
    },
    // 历史趋势图表配置
    history: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        x: {
          grid: {
            color: 'rgba(255, 255, 255, 0.05)'
          },
          ticks: {
            color: 'rgba(255, 255, 255, 0.7)'
          }
        },
        y: {
          min: 0,
          max: 200,
          grid: {
            color: 'rgba(255, 255, 255, 0.05)'
          },
          ticks: {
            color: 'rgba(255, 255, 255, 0.7)'
          },
          title: {
            display: true,
            text: '预测次数',
            color: 'rgba(255, 255, 255, 0.7)'
          }
        },
        y1: {
          position: 'right',
          min: 90,
          max: 100,
          grid: {
            drawOnChartArea: false
          },
          ticks: {
            color: 'rgba(15, 198, 194, 0.7)',
            callback: function(value) {
              return value + '%';
            }
          },
          title: {
            display: true,
            text: '平均精度 (%)',
            color: 'rgba(15, 198, 194, 0.7)'
          }
        }
      },
      plugins: {
        legend: {
          position: 'top',
          labels: {
            color: 'rgba(255, 255, 255, 0.7)',
            boxWidth: 12,
            usePointStyle: true
          }
        }
      }
    }
  }
};

import { LineChart } from './charts/LineChart';

console.log('=== main.ts 시작 ===');

// DOM 로드 대기
document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM 로드 완료');

  const categoryData = [
    { type: 'A', count: 12, other: 1 },
    { type: 'B', count: 15, other: 2 },
    { type: 'C', count: 20, other: 3 },
  ];

  const dateData = [
    { date: '2025-01-01', count: 10, temp: 4 },
    { date: '2025-01-02', count: 15, temp: 11 },
    { date: '2025-01-03', count: 20, temp: 7 },
  ];

  const categoryChart = new LineChart('#category-chart-container', categoryData, {
    xKey: 'type',
    yKey: 'count',
    width: 600,
    height: 300,
  });
  categoryChart.render();

  const dateChart = new LineChart('#date-chart-container', dateData, {
    xKey: 'date',
    yKey: 'count',
    width: 600,
    height: 300,
  });
  dateChart.render();
});

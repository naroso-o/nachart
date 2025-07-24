import * as d3 from 'd3';

export type LineChartData = Record<string, number | Date | string>;
const DEFAULT_PADDING = { top: 20, right: 20, bottom: 30, left: 40 };

export class LineChart {
  private container: string;
  private data: LineChartData[];
  private options: { xKey: string; yKey: string; width: number; height: number };

  constructor(
    container: string,
    data: LineChartData[],
    options: { xKey: string; yKey: string; width: number; height: number }
  ) {
    this.container = container;
    this.data = data;
    this.options = options;
  }

  private createChart(): void {
    const containerElement = document.querySelector(this.container);

    if (!containerElement) {
      console.error(`컨테이너를 찾을 수 없습니다: ${this.container}`);
      return;
    }

    d3.select(this.container).selectAll('svg').remove();

    const svg = d3
      .select(this.container)
      .append('svg')
      .attr('width', this.options.width + DEFAULT_PADDING.left + DEFAULT_PADDING.right)
      .attr('height', this.options.height + DEFAULT_PADDING.top + DEFAULT_PADDING.bottom);

    const xDomain = this.data.map(d => d[this.options.xKey] as string);
    const yDomain = [0, d3.max(this.data, d => d[this.options.yKey] as number) ?? 0];

    /** x축은 scaleBand로 일정한 간격으로 데이터 배치  */
    const xScale = d3.scaleBand().domain(xDomain).range([0, this.options.width]);
    /** y축은 scaleLinear로 연속적인 값 배치  */
    const yScale = d3.scaleLinear().domain(yDomain).range([this.options.height, 0]);

    /** x축 눈금 방향 아래쪽 */
    const xAxis = d3.axisBottom(xScale);
    /** y축 눈근 방향 왼쪽 */
    const yAxis = d3.axisLeft(yScale);

    // group 요소 추가하여 축 생성
    svg.append('g').attr('transform', `translate(0, ${this.options.height})`).call(xAxis);
    svg.append('g').call(yAxis);
  }

  render(): void {
    // DOM이 로드된 후 실행
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => {
        this.createChart();
      });
    } else {
      this.createChart();
    }
  }
}

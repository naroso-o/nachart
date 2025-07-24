# Nachart

d3, svg 기반 커스텀 차트 라이브러리입니다. 학습의 목적도 함께 가집니다.

## 개발 배경

차트 라이브러리를 만들어야 할 일이 생겼는데, 해당 환경에 맞추어 Canvas API를 선택하게 되었습니다. 인터랙션 범위, 데이터의 양 등을 요소를 고려하여 한 선택이지만 d3, svg로 커스텀 차트 라이브러리를 만들 때의 장단점 역시 직접 경험하고 싶었습니다.

그래서 개인 프로젝트로서 차트 라이브러리 개발을 시작하게 되었습니다.

## 개발 목표

- 사용이 간편한 차트 라이브러리를 개발합니다.
- D3 + SVG vs Canvas 특성을 이해하고 비교하며 개발합니다.

## 기술 스택

- **D3.js**: 데이터 기반 DOM 조작 및 시각화
- **SVG**: 벡터 기반 그래픽 렌더링
- **TypeScript**: 타입 안정성과 개발 편의성
- **Vite**: 빠른 개발 서버와 번들링
- **pnpm**: 효율적인 패키지 관리
- **ESLint + Prettier**: 코드 품질 및 포맷팅

## 프로젝트 구조

```
.
├── README.md
├── index.html                    # 개발용 HTML 페이지
├── package.json
├── pnpm-lock.yaml
├── rollup.config.js             # 라이브러리 번들링 설정
├── src
│   ├── charts
│   │   └── LineChart.ts         # 라인 차트 구현
│   └── main.ts                  # 개발용 엔트리 포인트
├── tsconfig.json                # TypeScript 설정
└── vite.config.ts              # Vite 개발 환경 설정
```

## 설치 및 실행

### 개발 환경 설정

```bash
# 의존성 설치
pnpm install

# 개발 서버 실행
pnpm dev

# 라이브러리 빌드
pnpm build

# 코드 품질 검사
pnpm lint
pnpm format
```

## 사용법

### 기본 사용 예시

```typescript
import { LineChart } from 'nachart-d3-library';

const data = [
  { x: 'A', y: 10 },
  { x: 'B', y: 20 },
  { x: 'C', y: 15 },
  { x: 'D', y: 25 },
];

const chart = new LineChart('#chart-container', data, {
  width: 600,
  height: 400,
  xKey: 'x',
  yKey: 'y',
});

chart.render();
```

### HTML 설정

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Nachart Example</title>
  </head>
  <body>
    <div id="chart-container"></div>
    <script type="module" src="your-script.js"></script>
  </body>
</html>
```

## 개발 로드맵

### Phase 1 (현재)

- [x] 프로젝트 초기 설정
- [ ] LineChart 기본 구현
- [ ] BarChart 구현
- [ ] 기본 상호작용 (hover, click)

### Phase 2

- [ ] 애니메이션 효과
- [ ] 테마 시스템

## 참고 자료

- [D3.js 공식 문서](https://d3js.org/)
- [SVG 명세](https://www.w3.org/TR/SVG2/)
- [TypeScript 핸드북](https://www.typescriptlang.org/docs/)
- [Vite 가이드](https://vitejs.dev/guide/)

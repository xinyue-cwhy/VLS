import * as echarts from 'echarts/core'
import {
  BarChart,
  EffectScatterChart,
  LineChart,
  MapChart,
  PieChart,
  type BarSeriesOption,
  type EffectScatterSeriesOption,
  type LineSeriesOption,
  type MapSeriesOption,
  type PieSeriesOption,
} from 'echarts/charts'
import {
  GraphicComponent,
  GeoComponent,
  GridComponent,
  LegendComponent,
  TooltipComponent,
  VisualMapComponent,
  type GraphicComponentOption,
  type GeoComponentOption,
  type GridComponentOption,
  type LegendComponentOption,
  type TooltipComponentOption,
  type VisualMapComponentOption,
} from 'echarts/components'
import { CanvasRenderer } from 'echarts/renderers'
import type { ComposeOption, EChartsType } from 'echarts/core'

echarts.use([
  BarChart,
  EffectScatterChart,
  LineChart,
  MapChart,
  PieChart,
  GraphicComponent,
  GeoComponent,
  GridComponent,
  LegendComponent,
  TooltipComponent,
  VisualMapComponent,
  CanvasRenderer,
])

export type ECOption = ComposeOption<
  | BarSeriesOption
  | EffectScatterSeriesOption
  | LineSeriesOption
  | MapSeriesOption
  | PieSeriesOption
  | GraphicComponentOption
  | GeoComponentOption
  | GridComponentOption
  | LegendComponentOption
  | TooltipComponentOption
  | VisualMapComponentOption
>

export interface ResponsiveECOption extends ECOption {
  media?: Array<{
    query: {
      minWidth?: number
      maxWidth?: number
      minHeight?: number
      maxHeight?: number
    }
    option: ECOption
  }>
}

export { echarts }
export type { EChartsType }

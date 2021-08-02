import { StaticRenderer } from '@connectv/sdh';
import register from 'jsdom-global';
import { ConfigOverride } from "@codedoc/core";
import { Mermaid } from "./components";

const renderer = new StaticRenderer();
register();

export interface FlowChartOptions {
    diagramPadding?: number,
    htmlLabels?: boolean,
    nodeSpacing?: number,
    rankSpacing?: number,
    curve?: 'basis' | 'linear' | 'cardinal',
    useMaxWidth?: boolean,
    defaultRenderer?: 'dagre-d3' | 'dagre-wrapper',
}

export interface SequenceDiagramOptions {
    activationWidth?: number,
    diagramMarginX?: number,
    diagramMarginY?: number,
    actorMargin?: number,
    width?: number,
    height?: number,
    boxMargin?: number,
    boxTextMargin?: number,
    noteMargin?: number,
    messageMargin?: number,
    messageAlign?: 'left' | 'center' | 'right',
    mirrorActors?: boolean,
    bottomMarginAdj?: number,
    useMaxWidth?: boolean,
    rightAngles?: boolean,
    showSequencenumbers?: number,
    actorFontSize?: number,
    actorFontFamily?: string,
    actorFontWeight?: number,
    noteFontSize?: number,
    noteFontFamily?: string,
    noteFontWeight?: number,
    noteAlign?: 'left' | 'center' | 'right',
    messageFontSize?: number,
    messageFontFamily?: string,
    messageFontWeight?: number,
    wrap?: boolean,
    wrapPadding?: number,
    labelBoxWidth?: number,
    labelBoxHeight?: number
}

export interface GanttChartOptions {
    titleTopMargin?: number,
    barHeight?: number,
    barGap?: number,
    topPadding?: number,
    rightPadding?: number,
    leftPadding?: number,
    gridLineStartPadding?: number,
    fontSize?: number,
    sectionFontSize?: number,
    numberSectionStyles?: number,
    axisFormat?: string,
    useMaxWidth?: boolean,
    topAxis?: boolean
}

export interface JourneyDiagramOptions {
    diagramMarginX?: number,
    diagramMarginY?: number,
    actorMargin?: number,
    width?: number,
    height?: number,
    boxMargin?: number,
    boxTextMargin?: number,
    noteMargin?: number,
    messageMargin?: number,
    messageAlign?: number,
    bottomMarginAdj?: number,
    useMaxWidth?: boolean,
    rightAngles?: boolean,
    defaultRenderer?: 'dagre-d3' | 'dagre-wrapper'
}

export interface ERDiagramOptions {
    diagramPadding?: number,
    layoutDirection?: 'TB' | 'BT' | 'LR' | 'RL',
    minEntityWidth?: number,
    minEntityHeight?: number,
    entityPadding?: number,
    stroke?: string,
    fill?: string,
    fontSize?: number,
    useMaxWidth?: boolean
}

export interface PieChartOptions {
    useMaxWidth?: boolean
}

export interface RequirementDiagramOptions {
    useMaxWidth?: boolean,

}

export interface MermaidOptions {
    startOnLoad?: boolean,
    theme?: 'default' | 'forest' | 'dark' | 'neutral',
    fontFamily?: string,
    logLevel?: 1 | 2 | 3 | 4 | 5,
    arrowMarkerAbsolute?: boolean,
    flowchart?: FlowChartOptions,
    sequence?: SequenceDiagramOptions,
    gantt?: GanttChartOptions,
    journey?: JourneyDiagramOptions,
    er?: ERDiagramOptions,
    pie?: PieChartOptions,
    req?: RequirementDiagramOptions
}

export function mermaidPlugin(config?: MermaidOptions) {

    return function(): ConfigOverride {
        const options = (config) ? config : { startOnLoad: true };

        return {
            markdown: {
                customComponents: {
                    Mermaid,
                }
            },
            page: {
                scripts: [
                    <script src="https://cdn.jsdelivr.net/npm/mermaid@8.11.2/dist/mermaid.core.min.js"/>,
                    <script>
                        {`mermaid.initialize(${JSON.stringify(options)});
                        window.addEventListener('navigation', () => { mermaid.init(); });
                        console.log('Mermaid Plugin Initialized');`}
                    </script>
                ]
            }
        }
    };
}

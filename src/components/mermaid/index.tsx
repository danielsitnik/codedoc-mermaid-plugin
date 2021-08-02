import { RendererLike } from '@connectv/html';
import { ThemedComponentThis } from "@connectv/jss-theme";
import { CodedocTheme } from "@codedoc/core";

export function Mermaid(
    this: ThemedComponentThis<CodedocTheme>,
    _: any,
    renderer: RendererLike<any, any>,
    content: any
) {
    const marker = <div>{content}</div>;
    const diagram = (marker.textContent || '').trim();

    return <div class="mermaid">{diagram}</div>;
}

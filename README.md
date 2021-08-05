# codedoc-mermaid-plugin
This plugin enables the use of [Mermaid](https://mermaid-js.github.io) diagrams in [Codedoc](https://codedoc.cc) documents.

## Installation
Using the Codedoc CLI, run the following command inside your project's folder:
```bash
$ codedoc install codedoc-mermaid-plugin
```

## Configuration
To use the plugin, first edit your `config.ts` file like below.
Make sure you import the plugin at the top of the file, and then add it to the `plugins` section in the `configuration` function.

```ts
import { configuration } from '@codedoc/core';
import { mermaidPlugin } from 'codedoc-mermaid-plugin' // --> import the plugin
import { theme } from './theme';

export const config = /*#__PURE__*/configuration({
    theme,
    page: {
        title: {
            base: 'Mermaid Plugin'
        }
    },
    plugins: [
        mermaidPlugin()   // --> make sure you add this section
    ]
});
```

### Customizing Configuration
Mermaid's configuration can be changed by passing a `MermaidOptions` object to the `mermaidPlugin()` function.
Basically all the options described [here](https://mermaid-js.github.io/mermaid/#/Setup) are supported.

For example, if you wanted to change the theme to `neutral` and to change the spacing between flowchart nodes, you would do this:
```ts
// imports removed for brevity
export const config = /*#__PURE__*/configuration({
    theme,
    page: {
        title: {
            base: 'Mermaid Plugin'
        }
    },
    plugins: [
        mermaidPlugin({
            theme: "neutral",
            flowchart: {
                nodeSpacing: 75
            }
        })
    ]
});
```

## Usage
To render diagrams in your documents, all you need to do is wrap Mermaid's diagram syntax in markdown `block-quote` elements (Codedoc calls them "quoted components") like below:
```md
> :Mermaid
> > graph LR
> >   Start --> End
```

Another way to do it is with just one `>` sign, but you **must** add a blank line below `:Mermaid`:
```md
> :Mermaid
>
> graph LR
>   Start --> End
```
Refer to the "Diagram Syntax" section of Mermaid's [documentation](https://mermaid-js.github.io) to learn how to use each of the diagrams.

## Contributing
If you'd like to contribute to this plugin, here are some ideas for improvements:
1. Add some styling so the diagrams can be rendered inside some container, similar to the code blocks. 
2. Find a way to dynamically change the theme when switching between light/dark mode. Right now the `neutral` theme is the one that works best with both modes.

## License
[MIT](https://choosealicense.com/licenses/mit/)

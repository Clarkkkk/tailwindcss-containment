import createPlugin from 'tailwindcss/plugin'
import type { Config, PluginCreator } from 'tailwindcss/types/config'
import { intrinsicMatchUtilities, intrinsicUtilities } from './intrinsic'

const plugin: {
    handler: PluginCreator
    config?: Partial<Config> | undefined
} = createPlugin(function ({ addUtilities, matchUtilities }) {
    addUtilities([
        {
            '.contain-none': { contain: 'none' },
            '.contain-strict': { contain: 'strict' },
            '.contain-content': { contain: 'content' },
            '.contain-size': { contain: 'size' },
            '.contain-inline-size': { contain: 'inline-size' },
            '.contain-layout': { contain: 'layout' },
            '.contain-style': { contain: 'style' },
            '.contain-paint': { contain: 'paint' }
        },
        {
            '.content-auto': {
                'content-visibility': 'auto'
            },
            '.content-hidden': {
                'content-visibility': 'hidden'
            },
            '.content-visible': {
                'content-visibility': 'visible'
            }
        },
        ...intrinsicUtilities
    ])

    matchUtilities({
        contain: (value) => ({
            contain: value
        }),
        ...intrinsicMatchUtilities
    })
})

export default plugin

import postcss from 'postcss'
import tailwindcss from 'tailwindcss'
import plugin from '../index'

export async function getCss(classes: string) {
    const postcssPlugin = tailwindcss({
        content: [{ raw: classes }],
        plugins: [plugin]
    })
    const result = await postcss([postcssPlugin]).process('@tailwind utilities')
    return result.css
}

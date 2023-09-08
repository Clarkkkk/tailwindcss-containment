import { describe, expect, test } from 'vitest'
import { getCss } from './utils'

describe('contain', () => {
    test('keyword values', async () => {
        const classes =
            'contain-none contain-strict contain-content contain-size contain-inline-size contain-layout contain-style contain-paint'

        const css = await getCss(classes)
        expect(css).toMatchInlineSnapshot(`
          ".contain-none {
              contain: none
          }
          .contain-strict {
              contain: strict
          }
          .contain-content {
              contain: content
          }
          .contain-size {
              contain: size
          }
          .contain-inline-size {
              contain: inline-size
          }
          .contain-layout {
              contain: layout
          }
          .contain-style {
              contain: style
          }
          .contain-paint {
              contain: paint
          }"
        `)
    })

    test('multiple values', async () => {
        const classes = 'contain-[paint_layout_style] contain-[layout_style]'
        const css = await getCss(classes)
        expect(css).toMatchInlineSnapshot(`
          ".contain-\\\\[layout_style\\\\] {
              contain: layout style
          }
          .contain-\\\\[paint_layout_style\\\\] {
              contain: paint layout style
          }"
        `)
    })
})

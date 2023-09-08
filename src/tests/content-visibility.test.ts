import { describe, expect, test } from 'vitest'
import { getCss } from './utils'

describe('content-visibility', () => {
    test('keyword values', async () => {
        const classes = 'content-auto content-hidden content-visible'

        const css = await getCss(classes)
        expect(css).toMatchInlineSnapshot(`
          ".content-auto {
              content-visibility: auto
          }
          .content-hidden {
              content-visibility: hidden
          }
          .content-visible {
              content-visibility: visible
          }"
        `)
    })
})

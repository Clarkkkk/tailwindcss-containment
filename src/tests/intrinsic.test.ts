import { describe, expect, test } from 'vitest'
import { intrinsicUtilities } from '../intrinsic'
import { getCss } from './utils'

describe('contain-intrinsic-size', () => {
    test('arbitrary values', async () => {
        const classes =
            'intrinsic-[120px] intrinsic-[auto_120px_auto_300px] intrinsic-w-[120px] intrinsic-h-[auto_120px]'

        const css = await getCss(classes)
        expect(css).toMatchInlineSnapshot(`
          ".intrinsic-\\\\[120px\\\\] {
              contain-intrinsic-size: 120px
          }
          .intrinsic-\\\\[auto_120px_auto_300px\\\\] {
              contain-intrinsic-size: auto 120px auto 300px
          }
          .intrinsic-h-\\\\[auto_120px\\\\] {
              contain-intrinsic-height: auto 120px
          }
          .intrinsic-w-\\\\[120px\\\\] {
              contain-intrinsic-width: 120px
          }"
        `)
    })

    test('full class list', () => {
        expect(intrinsicUtilities.map((obj) => Object.keys(obj))).toMatchInlineSnapshot(`
          [
            [
              ".intrinsic-0",
              ".intrinsic-none",
              ".intrinsic-1",
              ".intrinsic-2",
              ".intrinsic-3",
              ".intrinsic-4",
              ".intrinsic-5",
              ".intrinsic-6",
              ".intrinsic-7",
              ".intrinsic-8",
              ".intrinsic-9",
              ".intrinsic-10",
              ".intrinsic-11",
              ".intrinsic-12",
              ".intrinsic-14",
              ".intrinsic-16",
              ".intrinsic-20",
              ".intrinsic-24",
              ".intrinsic-28",
              ".intrinsic-32",
              ".intrinsic-36",
              ".intrinsic-40",
              ".intrinsic-44",
              ".intrinsic-48",
              ".intrinsic-52",
              ".intrinsic-56",
              ".intrinsic-60",
              ".intrinsic-64",
              ".intrinsic-72",
              ".intrinsic-80",
              ".intrinsic-96",
              ".intrinsic-px",
              ".intrinsic-0\\\\.5",
              ".intrinsic-1\\\\.5",
              ".intrinsic-2\\\\.5",
              ".intrinsic-3\\\\.5",
            ],
            [
              ".intrinsic-auto-0",
              ".intrinsic-auto",
              ".intrinsic-auto-1",
              ".intrinsic-auto-2",
              ".intrinsic-auto-3",
              ".intrinsic-auto-4",
              ".intrinsic-auto-5",
              ".intrinsic-auto-6",
              ".intrinsic-auto-7",
              ".intrinsic-auto-8",
              ".intrinsic-auto-9",
              ".intrinsic-auto-10",
              ".intrinsic-auto-11",
              ".intrinsic-auto-12",
              ".intrinsic-auto-14",
              ".intrinsic-auto-16",
              ".intrinsic-auto-20",
              ".intrinsic-auto-24",
              ".intrinsic-auto-28",
              ".intrinsic-auto-32",
              ".intrinsic-auto-36",
              ".intrinsic-auto-40",
              ".intrinsic-auto-44",
              ".intrinsic-auto-48",
              ".intrinsic-auto-52",
              ".intrinsic-auto-56",
              ".intrinsic-auto-60",
              ".intrinsic-auto-64",
              ".intrinsic-auto-72",
              ".intrinsic-auto-80",
              ".intrinsic-auto-96",
              ".intrinsic-auto-px",
              ".intrinsic-auto-0\\\\.5",
              ".intrinsic-auto-1\\\\.5",
              ".intrinsic-auto-2\\\\.5",
              ".intrinsic-auto-3\\\\.5",
            ],
            [
              ".intrinsic-w-0",
              ".intrinsic-w-none",
              ".intrinsic-w-1",
              ".intrinsic-w-2",
              ".intrinsic-w-3",
              ".intrinsic-w-4",
              ".intrinsic-w-5",
              ".intrinsic-w-6",
              ".intrinsic-w-7",
              ".intrinsic-w-8",
              ".intrinsic-w-9",
              ".intrinsic-w-10",
              ".intrinsic-w-11",
              ".intrinsic-w-12",
              ".intrinsic-w-14",
              ".intrinsic-w-16",
              ".intrinsic-w-20",
              ".intrinsic-w-24",
              ".intrinsic-w-28",
              ".intrinsic-w-32",
              ".intrinsic-w-36",
              ".intrinsic-w-40",
              ".intrinsic-w-44",
              ".intrinsic-w-48",
              ".intrinsic-w-52",
              ".intrinsic-w-56",
              ".intrinsic-w-60",
              ".intrinsic-w-64",
              ".intrinsic-w-72",
              ".intrinsic-w-80",
              ".intrinsic-w-96",
              ".intrinsic-w-px",
              ".intrinsic-w-0\\\\.5",
              ".intrinsic-w-1\\\\.5",
              ".intrinsic-w-2\\\\.5",
              ".intrinsic-w-3\\\\.5",
            ],
            [
              ".intrinsic-w-auto-0",
              ".intrinsic-w-auto",
              ".intrinsic-w-auto-1",
              ".intrinsic-w-auto-2",
              ".intrinsic-w-auto-3",
              ".intrinsic-w-auto-4",
              ".intrinsic-w-auto-5",
              ".intrinsic-w-auto-6",
              ".intrinsic-w-auto-7",
              ".intrinsic-w-auto-8",
              ".intrinsic-w-auto-9",
              ".intrinsic-w-auto-10",
              ".intrinsic-w-auto-11",
              ".intrinsic-w-auto-12",
              ".intrinsic-w-auto-14",
              ".intrinsic-w-auto-16",
              ".intrinsic-w-auto-20",
              ".intrinsic-w-auto-24",
              ".intrinsic-w-auto-28",
              ".intrinsic-w-auto-32",
              ".intrinsic-w-auto-36",
              ".intrinsic-w-auto-40",
              ".intrinsic-w-auto-44",
              ".intrinsic-w-auto-48",
              ".intrinsic-w-auto-52",
              ".intrinsic-w-auto-56",
              ".intrinsic-w-auto-60",
              ".intrinsic-w-auto-64",
              ".intrinsic-w-auto-72",
              ".intrinsic-w-auto-80",
              ".intrinsic-w-auto-96",
              ".intrinsic-w-auto-px",
              ".intrinsic-w-auto-0\\\\.5",
              ".intrinsic-w-auto-1\\\\.5",
              ".intrinsic-w-auto-2\\\\.5",
              ".intrinsic-w-auto-3\\\\.5",
            ],
            [
              ".intrinsic-h-0",
              ".intrinsic-h-none",
              ".intrinsic-h-1",
              ".intrinsic-h-2",
              ".intrinsic-h-3",
              ".intrinsic-h-4",
              ".intrinsic-h-5",
              ".intrinsic-h-6",
              ".intrinsic-h-7",
              ".intrinsic-h-8",
              ".intrinsic-h-9",
              ".intrinsic-h-10",
              ".intrinsic-h-11",
              ".intrinsic-h-12",
              ".intrinsic-h-14",
              ".intrinsic-h-16",
              ".intrinsic-h-20",
              ".intrinsic-h-24",
              ".intrinsic-h-28",
              ".intrinsic-h-32",
              ".intrinsic-h-36",
              ".intrinsic-h-40",
              ".intrinsic-h-44",
              ".intrinsic-h-48",
              ".intrinsic-h-52",
              ".intrinsic-h-56",
              ".intrinsic-h-60",
              ".intrinsic-h-64",
              ".intrinsic-h-72",
              ".intrinsic-h-80",
              ".intrinsic-h-96",
              ".intrinsic-h-px",
              ".intrinsic-h-0\\\\.5",
              ".intrinsic-h-1\\\\.5",
              ".intrinsic-h-2\\\\.5",
              ".intrinsic-h-3\\\\.5",
            ],
            [
              ".intrinsic-h-auto-0",
              ".intrinsic-h-auto",
              ".intrinsic-h-auto-1",
              ".intrinsic-h-auto-2",
              ".intrinsic-h-auto-3",
              ".intrinsic-h-auto-4",
              ".intrinsic-h-auto-5",
              ".intrinsic-h-auto-6",
              ".intrinsic-h-auto-7",
              ".intrinsic-h-auto-8",
              ".intrinsic-h-auto-9",
              ".intrinsic-h-auto-10",
              ".intrinsic-h-auto-11",
              ".intrinsic-h-auto-12",
              ".intrinsic-h-auto-14",
              ".intrinsic-h-auto-16",
              ".intrinsic-h-auto-20",
              ".intrinsic-h-auto-24",
              ".intrinsic-h-auto-28",
              ".intrinsic-h-auto-32",
              ".intrinsic-h-auto-36",
              ".intrinsic-h-auto-40",
              ".intrinsic-h-auto-44",
              ".intrinsic-h-auto-48",
              ".intrinsic-h-auto-52",
              ".intrinsic-h-auto-56",
              ".intrinsic-h-auto-60",
              ".intrinsic-h-auto-64",
              ".intrinsic-h-auto-72",
              ".intrinsic-h-auto-80",
              ".intrinsic-h-auto-96",
              ".intrinsic-h-auto-px",
              ".intrinsic-h-auto-0\\\\.5",
              ".intrinsic-h-auto-1\\\\.5",
              ".intrinsic-h-auto-2\\\\.5",
              ".intrinsic-h-auto-3\\\\.5",
            ],
            [
              ".intrinsic-block-0",
              ".intrinsic-block-none",
              ".intrinsic-block-1",
              ".intrinsic-block-2",
              ".intrinsic-block-3",
              ".intrinsic-block-4",
              ".intrinsic-block-5",
              ".intrinsic-block-6",
              ".intrinsic-block-7",
              ".intrinsic-block-8",
              ".intrinsic-block-9",
              ".intrinsic-block-10",
              ".intrinsic-block-11",
              ".intrinsic-block-12",
              ".intrinsic-block-14",
              ".intrinsic-block-16",
              ".intrinsic-block-20",
              ".intrinsic-block-24",
              ".intrinsic-block-28",
              ".intrinsic-block-32",
              ".intrinsic-block-36",
              ".intrinsic-block-40",
              ".intrinsic-block-44",
              ".intrinsic-block-48",
              ".intrinsic-block-52",
              ".intrinsic-block-56",
              ".intrinsic-block-60",
              ".intrinsic-block-64",
              ".intrinsic-block-72",
              ".intrinsic-block-80",
              ".intrinsic-block-96",
              ".intrinsic-block-px",
              ".intrinsic-block-0\\\\.5",
              ".intrinsic-block-1\\\\.5",
              ".intrinsic-block-2\\\\.5",
              ".intrinsic-block-3\\\\.5",
            ],
            [
              ".intrinsic-block-auto-0",
              ".intrinsic-block-auto",
              ".intrinsic-block-auto-1",
              ".intrinsic-block-auto-2",
              ".intrinsic-block-auto-3",
              ".intrinsic-block-auto-4",
              ".intrinsic-block-auto-5",
              ".intrinsic-block-auto-6",
              ".intrinsic-block-auto-7",
              ".intrinsic-block-auto-8",
              ".intrinsic-block-auto-9",
              ".intrinsic-block-auto-10",
              ".intrinsic-block-auto-11",
              ".intrinsic-block-auto-12",
              ".intrinsic-block-auto-14",
              ".intrinsic-block-auto-16",
              ".intrinsic-block-auto-20",
              ".intrinsic-block-auto-24",
              ".intrinsic-block-auto-28",
              ".intrinsic-block-auto-32",
              ".intrinsic-block-auto-36",
              ".intrinsic-block-auto-40",
              ".intrinsic-block-auto-44",
              ".intrinsic-block-auto-48",
              ".intrinsic-block-auto-52",
              ".intrinsic-block-auto-56",
              ".intrinsic-block-auto-60",
              ".intrinsic-block-auto-64",
              ".intrinsic-block-auto-72",
              ".intrinsic-block-auto-80",
              ".intrinsic-block-auto-96",
              ".intrinsic-block-auto-px",
              ".intrinsic-block-auto-0\\\\.5",
              ".intrinsic-block-auto-1\\\\.5",
              ".intrinsic-block-auto-2\\\\.5",
              ".intrinsic-block-auto-3\\\\.5",
            ],
            [
              ".intrinsic-inline-0",
              ".intrinsic-inline-none",
              ".intrinsic-inline-1",
              ".intrinsic-inline-2",
              ".intrinsic-inline-3",
              ".intrinsic-inline-4",
              ".intrinsic-inline-5",
              ".intrinsic-inline-6",
              ".intrinsic-inline-7",
              ".intrinsic-inline-8",
              ".intrinsic-inline-9",
              ".intrinsic-inline-10",
              ".intrinsic-inline-11",
              ".intrinsic-inline-12",
              ".intrinsic-inline-14",
              ".intrinsic-inline-16",
              ".intrinsic-inline-20",
              ".intrinsic-inline-24",
              ".intrinsic-inline-28",
              ".intrinsic-inline-32",
              ".intrinsic-inline-36",
              ".intrinsic-inline-40",
              ".intrinsic-inline-44",
              ".intrinsic-inline-48",
              ".intrinsic-inline-52",
              ".intrinsic-inline-56",
              ".intrinsic-inline-60",
              ".intrinsic-inline-64",
              ".intrinsic-inline-72",
              ".intrinsic-inline-80",
              ".intrinsic-inline-96",
              ".intrinsic-inline-px",
              ".intrinsic-inline-0\\\\.5",
              ".intrinsic-inline-1\\\\.5",
              ".intrinsic-inline-2\\\\.5",
              ".intrinsic-inline-3\\\\.5",
            ],
            [
              ".intrinsic-inline-auto-0",
              ".intrinsic-inline-auto",
              ".intrinsic-inline-auto-1",
              ".intrinsic-inline-auto-2",
              ".intrinsic-inline-auto-3",
              ".intrinsic-inline-auto-4",
              ".intrinsic-inline-auto-5",
              ".intrinsic-inline-auto-6",
              ".intrinsic-inline-auto-7",
              ".intrinsic-inline-auto-8",
              ".intrinsic-inline-auto-9",
              ".intrinsic-inline-auto-10",
              ".intrinsic-inline-auto-11",
              ".intrinsic-inline-auto-12",
              ".intrinsic-inline-auto-14",
              ".intrinsic-inline-auto-16",
              ".intrinsic-inline-auto-20",
              ".intrinsic-inline-auto-24",
              ".intrinsic-inline-auto-28",
              ".intrinsic-inline-auto-32",
              ".intrinsic-inline-auto-36",
              ".intrinsic-inline-auto-40",
              ".intrinsic-inline-auto-44",
              ".intrinsic-inline-auto-48",
              ".intrinsic-inline-auto-52",
              ".intrinsic-inline-auto-56",
              ".intrinsic-inline-auto-60",
              ".intrinsic-inline-auto-64",
              ".intrinsic-inline-auto-72",
              ".intrinsic-inline-auto-80",
              ".intrinsic-inline-auto-96",
              ".intrinsic-inline-auto-px",
              ".intrinsic-inline-auto-0\\\\.5",
              ".intrinsic-inline-auto-1\\\\.5",
              ".intrinsic-inline-auto-2\\\\.5",
              ".intrinsic-inline-auto-3\\\\.5",
            ],
          ]
        `)
    })

    test('all static values', async () => {
        expect(intrinsicUtilities).toMatchInlineSnapshot(`
          [
            {
              ".intrinsic-0": {
                "contain-intrinsic-size": "0px;",
              },
              ".intrinsic-0\\\\.5": {
                "contain-intrinsic-size": "0.125rem;",
              },
              ".intrinsic-1": {
                "contain-intrinsic-size": "0.25rem;",
              },
              ".intrinsic-10": {
                "contain-intrinsic-size": "2.5rem;",
              },
              ".intrinsic-11": {
                "contain-intrinsic-size": "2.75rem;",
              },
              ".intrinsic-12": {
                "contain-intrinsic-size": "3rem;",
              },
              ".intrinsic-14": {
                "contain-intrinsic-size": "3.5rem;",
              },
              ".intrinsic-16": {
                "contain-intrinsic-size": "4rem;",
              },
              ".intrinsic-1\\\\.5": {
                "contain-intrinsic-size": "0.375rem;",
              },
              ".intrinsic-2": {
                "contain-intrinsic-size": "0.5rem;",
              },
              ".intrinsic-20": {
                "contain-intrinsic-size": "5rem;",
              },
              ".intrinsic-24": {
                "contain-intrinsic-size": "6rem;",
              },
              ".intrinsic-28": {
                "contain-intrinsic-size": "7rem;",
              },
              ".intrinsic-2\\\\.5": {
                "contain-intrinsic-size": "0.625rem;",
              },
              ".intrinsic-3": {
                "contain-intrinsic-size": "0.75rem;",
              },
              ".intrinsic-32": {
                "contain-intrinsic-size": "8rem;",
              },
              ".intrinsic-36": {
                "contain-intrinsic-size": "9rem;",
              },
              ".intrinsic-3\\\\.5": {
                "contain-intrinsic-size": "0.875rem;",
              },
              ".intrinsic-4": {
                "contain-intrinsic-size": "1rem;",
              },
              ".intrinsic-40": {
                "contain-intrinsic-size": "10rem;",
              },
              ".intrinsic-44": {
                "contain-intrinsic-size": "11rem;",
              },
              ".intrinsic-48": {
                "contain-intrinsic-size": "12rem;",
              },
              ".intrinsic-5": {
                "contain-intrinsic-size": "1.25rem;",
              },
              ".intrinsic-52": {
                "contain-intrinsic-size": "13rem;",
              },
              ".intrinsic-56": {
                "contain-intrinsic-size": "14rem;",
              },
              ".intrinsic-6": {
                "contain-intrinsic-size": "1.5rem;",
              },
              ".intrinsic-60": {
                "contain-intrinsic-size": "15rem;",
              },
              ".intrinsic-64": {
                "contain-intrinsic-size": "16rem;",
              },
              ".intrinsic-7": {
                "contain-intrinsic-size": "1.75rem;",
              },
              ".intrinsic-72": {
                "contain-intrinsic-size": "18rem;",
              },
              ".intrinsic-8": {
                "contain-intrinsic-size": "2rem;",
              },
              ".intrinsic-80": {
                "contain-intrinsic-size": "20rem;",
              },
              ".intrinsic-9": {
                "contain-intrinsic-size": "2.25rem;",
              },
              ".intrinsic-96": {
                "contain-intrinsic-size": "24rem;",
              },
              ".intrinsic-none": {
                "contain-intrinsic-size": "none",
              },
              ".intrinsic-px": {
                "contain-intrinsic-size": "1px;",
              },
            },
            {
              ".intrinsic-auto": {
                "contain-intrinsic-size": "auto",
              },
              ".intrinsic-auto-0": {
                "contain-intrinsic-size": "auto 0px;",
              },
              ".intrinsic-auto-0\\\\.5": {
                "contain-intrinsic-size": "auto 0.125rem;",
              },
              ".intrinsic-auto-1": {
                "contain-intrinsic-size": "auto 0.25rem;",
              },
              ".intrinsic-auto-10": {
                "contain-intrinsic-size": "auto 2.5rem;",
              },
              ".intrinsic-auto-11": {
                "contain-intrinsic-size": "auto 2.75rem;",
              },
              ".intrinsic-auto-12": {
                "contain-intrinsic-size": "auto 3rem;",
              },
              ".intrinsic-auto-14": {
                "contain-intrinsic-size": "auto 3.5rem;",
              },
              ".intrinsic-auto-16": {
                "contain-intrinsic-size": "auto 4rem;",
              },
              ".intrinsic-auto-1\\\\.5": {
                "contain-intrinsic-size": "auto 0.375rem;",
              },
              ".intrinsic-auto-2": {
                "contain-intrinsic-size": "auto 0.5rem;",
              },
              ".intrinsic-auto-20": {
                "contain-intrinsic-size": "auto 5rem;",
              },
              ".intrinsic-auto-24": {
                "contain-intrinsic-size": "auto 6rem;",
              },
              ".intrinsic-auto-28": {
                "contain-intrinsic-size": "auto 7rem;",
              },
              ".intrinsic-auto-2\\\\.5": {
                "contain-intrinsic-size": "auto 0.625rem;",
              },
              ".intrinsic-auto-3": {
                "contain-intrinsic-size": "auto 0.75rem;",
              },
              ".intrinsic-auto-32": {
                "contain-intrinsic-size": "auto 8rem;",
              },
              ".intrinsic-auto-36": {
                "contain-intrinsic-size": "auto 9rem;",
              },
              ".intrinsic-auto-3\\\\.5": {
                "contain-intrinsic-size": "auto 0.875rem;",
              },
              ".intrinsic-auto-4": {
                "contain-intrinsic-size": "auto 1rem;",
              },
              ".intrinsic-auto-40": {
                "contain-intrinsic-size": "auto 10rem;",
              },
              ".intrinsic-auto-44": {
                "contain-intrinsic-size": "auto 11rem;",
              },
              ".intrinsic-auto-48": {
                "contain-intrinsic-size": "auto 12rem;",
              },
              ".intrinsic-auto-5": {
                "contain-intrinsic-size": "auto 1.25rem;",
              },
              ".intrinsic-auto-52": {
                "contain-intrinsic-size": "auto 13rem;",
              },
              ".intrinsic-auto-56": {
                "contain-intrinsic-size": "auto 14rem;",
              },
              ".intrinsic-auto-6": {
                "contain-intrinsic-size": "auto 1.5rem;",
              },
              ".intrinsic-auto-60": {
                "contain-intrinsic-size": "auto 15rem;",
              },
              ".intrinsic-auto-64": {
                "contain-intrinsic-size": "auto 16rem;",
              },
              ".intrinsic-auto-7": {
                "contain-intrinsic-size": "auto 1.75rem;",
              },
              ".intrinsic-auto-72": {
                "contain-intrinsic-size": "auto 18rem;",
              },
              ".intrinsic-auto-8": {
                "contain-intrinsic-size": "auto 2rem;",
              },
              ".intrinsic-auto-80": {
                "contain-intrinsic-size": "auto 20rem;",
              },
              ".intrinsic-auto-9": {
                "contain-intrinsic-size": "auto 2.25rem;",
              },
              ".intrinsic-auto-96": {
                "contain-intrinsic-size": "auto 24rem;",
              },
              ".intrinsic-auto-px": {
                "contain-intrinsic-size": "auto 1px;",
              },
            },
            {
              ".intrinsic-w-0": {
                "contain-intrinsic-width": "0px;",
              },
              ".intrinsic-w-0\\\\.5": {
                "contain-intrinsic-width": "0.125rem;",
              },
              ".intrinsic-w-1": {
                "contain-intrinsic-width": "0.25rem;",
              },
              ".intrinsic-w-10": {
                "contain-intrinsic-width": "2.5rem;",
              },
              ".intrinsic-w-11": {
                "contain-intrinsic-width": "2.75rem;",
              },
              ".intrinsic-w-12": {
                "contain-intrinsic-width": "3rem;",
              },
              ".intrinsic-w-14": {
                "contain-intrinsic-width": "3.5rem;",
              },
              ".intrinsic-w-16": {
                "contain-intrinsic-width": "4rem;",
              },
              ".intrinsic-w-1\\\\.5": {
                "contain-intrinsic-width": "0.375rem;",
              },
              ".intrinsic-w-2": {
                "contain-intrinsic-width": "0.5rem;",
              },
              ".intrinsic-w-20": {
                "contain-intrinsic-width": "5rem;",
              },
              ".intrinsic-w-24": {
                "contain-intrinsic-width": "6rem;",
              },
              ".intrinsic-w-28": {
                "contain-intrinsic-width": "7rem;",
              },
              ".intrinsic-w-2\\\\.5": {
                "contain-intrinsic-width": "0.625rem;",
              },
              ".intrinsic-w-3": {
                "contain-intrinsic-width": "0.75rem;",
              },
              ".intrinsic-w-32": {
                "contain-intrinsic-width": "8rem;",
              },
              ".intrinsic-w-36": {
                "contain-intrinsic-width": "9rem;",
              },
              ".intrinsic-w-3\\\\.5": {
                "contain-intrinsic-width": "0.875rem;",
              },
              ".intrinsic-w-4": {
                "contain-intrinsic-width": "1rem;",
              },
              ".intrinsic-w-40": {
                "contain-intrinsic-width": "10rem;",
              },
              ".intrinsic-w-44": {
                "contain-intrinsic-width": "11rem;",
              },
              ".intrinsic-w-48": {
                "contain-intrinsic-width": "12rem;",
              },
              ".intrinsic-w-5": {
                "contain-intrinsic-width": "1.25rem;",
              },
              ".intrinsic-w-52": {
                "contain-intrinsic-width": "13rem;",
              },
              ".intrinsic-w-56": {
                "contain-intrinsic-width": "14rem;",
              },
              ".intrinsic-w-6": {
                "contain-intrinsic-width": "1.5rem;",
              },
              ".intrinsic-w-60": {
                "contain-intrinsic-width": "15rem;",
              },
              ".intrinsic-w-64": {
                "contain-intrinsic-width": "16rem;",
              },
              ".intrinsic-w-7": {
                "contain-intrinsic-width": "1.75rem;",
              },
              ".intrinsic-w-72": {
                "contain-intrinsic-width": "18rem;",
              },
              ".intrinsic-w-8": {
                "contain-intrinsic-width": "2rem;",
              },
              ".intrinsic-w-80": {
                "contain-intrinsic-width": "20rem;",
              },
              ".intrinsic-w-9": {
                "contain-intrinsic-width": "2.25rem;",
              },
              ".intrinsic-w-96": {
                "contain-intrinsic-width": "24rem;",
              },
              ".intrinsic-w-none": {
                "contain-intrinsic-width": "none",
              },
              ".intrinsic-w-px": {
                "contain-intrinsic-width": "1px;",
              },
            },
            {
              ".intrinsic-w-auto": {
                "contain-intrinsic-width": "auto",
              },
              ".intrinsic-w-auto-0": {
                "contain-intrinsic-width": "auto 0px;",
              },
              ".intrinsic-w-auto-0\\\\.5": {
                "contain-intrinsic-width": "auto 0.125rem;",
              },
              ".intrinsic-w-auto-1": {
                "contain-intrinsic-width": "auto 0.25rem;",
              },
              ".intrinsic-w-auto-10": {
                "contain-intrinsic-width": "auto 2.5rem;",
              },
              ".intrinsic-w-auto-11": {
                "contain-intrinsic-width": "auto 2.75rem;",
              },
              ".intrinsic-w-auto-12": {
                "contain-intrinsic-width": "auto 3rem;",
              },
              ".intrinsic-w-auto-14": {
                "contain-intrinsic-width": "auto 3.5rem;",
              },
              ".intrinsic-w-auto-16": {
                "contain-intrinsic-width": "auto 4rem;",
              },
              ".intrinsic-w-auto-1\\\\.5": {
                "contain-intrinsic-width": "auto 0.375rem;",
              },
              ".intrinsic-w-auto-2": {
                "contain-intrinsic-width": "auto 0.5rem;",
              },
              ".intrinsic-w-auto-20": {
                "contain-intrinsic-width": "auto 5rem;",
              },
              ".intrinsic-w-auto-24": {
                "contain-intrinsic-width": "auto 6rem;",
              },
              ".intrinsic-w-auto-28": {
                "contain-intrinsic-width": "auto 7rem;",
              },
              ".intrinsic-w-auto-2\\\\.5": {
                "contain-intrinsic-width": "auto 0.625rem;",
              },
              ".intrinsic-w-auto-3": {
                "contain-intrinsic-width": "auto 0.75rem;",
              },
              ".intrinsic-w-auto-32": {
                "contain-intrinsic-width": "auto 8rem;",
              },
              ".intrinsic-w-auto-36": {
                "contain-intrinsic-width": "auto 9rem;",
              },
              ".intrinsic-w-auto-3\\\\.5": {
                "contain-intrinsic-width": "auto 0.875rem;",
              },
              ".intrinsic-w-auto-4": {
                "contain-intrinsic-width": "auto 1rem;",
              },
              ".intrinsic-w-auto-40": {
                "contain-intrinsic-width": "auto 10rem;",
              },
              ".intrinsic-w-auto-44": {
                "contain-intrinsic-width": "auto 11rem;",
              },
              ".intrinsic-w-auto-48": {
                "contain-intrinsic-width": "auto 12rem;",
              },
              ".intrinsic-w-auto-5": {
                "contain-intrinsic-width": "auto 1.25rem;",
              },
              ".intrinsic-w-auto-52": {
                "contain-intrinsic-width": "auto 13rem;",
              },
              ".intrinsic-w-auto-56": {
                "contain-intrinsic-width": "auto 14rem;",
              },
              ".intrinsic-w-auto-6": {
                "contain-intrinsic-width": "auto 1.5rem;",
              },
              ".intrinsic-w-auto-60": {
                "contain-intrinsic-width": "auto 15rem;",
              },
              ".intrinsic-w-auto-64": {
                "contain-intrinsic-width": "auto 16rem;",
              },
              ".intrinsic-w-auto-7": {
                "contain-intrinsic-width": "auto 1.75rem;",
              },
              ".intrinsic-w-auto-72": {
                "contain-intrinsic-width": "auto 18rem;",
              },
              ".intrinsic-w-auto-8": {
                "contain-intrinsic-width": "auto 2rem;",
              },
              ".intrinsic-w-auto-80": {
                "contain-intrinsic-width": "auto 20rem;",
              },
              ".intrinsic-w-auto-9": {
                "contain-intrinsic-width": "auto 2.25rem;",
              },
              ".intrinsic-w-auto-96": {
                "contain-intrinsic-width": "auto 24rem;",
              },
              ".intrinsic-w-auto-px": {
                "contain-intrinsic-width": "auto 1px;",
              },
            },
            {
              ".intrinsic-h-0": {
                "contain-intrinsic-height": "0px;",
              },
              ".intrinsic-h-0\\\\.5": {
                "contain-intrinsic-height": "0.125rem;",
              },
              ".intrinsic-h-1": {
                "contain-intrinsic-height": "0.25rem;",
              },
              ".intrinsic-h-10": {
                "contain-intrinsic-height": "2.5rem;",
              },
              ".intrinsic-h-11": {
                "contain-intrinsic-height": "2.75rem;",
              },
              ".intrinsic-h-12": {
                "contain-intrinsic-height": "3rem;",
              },
              ".intrinsic-h-14": {
                "contain-intrinsic-height": "3.5rem;",
              },
              ".intrinsic-h-16": {
                "contain-intrinsic-height": "4rem;",
              },
              ".intrinsic-h-1\\\\.5": {
                "contain-intrinsic-height": "0.375rem;",
              },
              ".intrinsic-h-2": {
                "contain-intrinsic-height": "0.5rem;",
              },
              ".intrinsic-h-20": {
                "contain-intrinsic-height": "5rem;",
              },
              ".intrinsic-h-24": {
                "contain-intrinsic-height": "6rem;",
              },
              ".intrinsic-h-28": {
                "contain-intrinsic-height": "7rem;",
              },
              ".intrinsic-h-2\\\\.5": {
                "contain-intrinsic-height": "0.625rem;",
              },
              ".intrinsic-h-3": {
                "contain-intrinsic-height": "0.75rem;",
              },
              ".intrinsic-h-32": {
                "contain-intrinsic-height": "8rem;",
              },
              ".intrinsic-h-36": {
                "contain-intrinsic-height": "9rem;",
              },
              ".intrinsic-h-3\\\\.5": {
                "contain-intrinsic-height": "0.875rem;",
              },
              ".intrinsic-h-4": {
                "contain-intrinsic-height": "1rem;",
              },
              ".intrinsic-h-40": {
                "contain-intrinsic-height": "10rem;",
              },
              ".intrinsic-h-44": {
                "contain-intrinsic-height": "11rem;",
              },
              ".intrinsic-h-48": {
                "contain-intrinsic-height": "12rem;",
              },
              ".intrinsic-h-5": {
                "contain-intrinsic-height": "1.25rem;",
              },
              ".intrinsic-h-52": {
                "contain-intrinsic-height": "13rem;",
              },
              ".intrinsic-h-56": {
                "contain-intrinsic-height": "14rem;",
              },
              ".intrinsic-h-6": {
                "contain-intrinsic-height": "1.5rem;",
              },
              ".intrinsic-h-60": {
                "contain-intrinsic-height": "15rem;",
              },
              ".intrinsic-h-64": {
                "contain-intrinsic-height": "16rem;",
              },
              ".intrinsic-h-7": {
                "contain-intrinsic-height": "1.75rem;",
              },
              ".intrinsic-h-72": {
                "contain-intrinsic-height": "18rem;",
              },
              ".intrinsic-h-8": {
                "contain-intrinsic-height": "2rem;",
              },
              ".intrinsic-h-80": {
                "contain-intrinsic-height": "20rem;",
              },
              ".intrinsic-h-9": {
                "contain-intrinsic-height": "2.25rem;",
              },
              ".intrinsic-h-96": {
                "contain-intrinsic-height": "24rem;",
              },
              ".intrinsic-h-none": {
                "contain-intrinsic-height": "none",
              },
              ".intrinsic-h-px": {
                "contain-intrinsic-height": "1px;",
              },
            },
            {
              ".intrinsic-h-auto": {
                "contain-intrinsic-height": "auto",
              },
              ".intrinsic-h-auto-0": {
                "contain-intrinsic-height": "auto 0px;",
              },
              ".intrinsic-h-auto-0\\\\.5": {
                "contain-intrinsic-height": "auto 0.125rem;",
              },
              ".intrinsic-h-auto-1": {
                "contain-intrinsic-height": "auto 0.25rem;",
              },
              ".intrinsic-h-auto-10": {
                "contain-intrinsic-height": "auto 2.5rem;",
              },
              ".intrinsic-h-auto-11": {
                "contain-intrinsic-height": "auto 2.75rem;",
              },
              ".intrinsic-h-auto-12": {
                "contain-intrinsic-height": "auto 3rem;",
              },
              ".intrinsic-h-auto-14": {
                "contain-intrinsic-height": "auto 3.5rem;",
              },
              ".intrinsic-h-auto-16": {
                "contain-intrinsic-height": "auto 4rem;",
              },
              ".intrinsic-h-auto-1\\\\.5": {
                "contain-intrinsic-height": "auto 0.375rem;",
              },
              ".intrinsic-h-auto-2": {
                "contain-intrinsic-height": "auto 0.5rem;",
              },
              ".intrinsic-h-auto-20": {
                "contain-intrinsic-height": "auto 5rem;",
              },
              ".intrinsic-h-auto-24": {
                "contain-intrinsic-height": "auto 6rem;",
              },
              ".intrinsic-h-auto-28": {
                "contain-intrinsic-height": "auto 7rem;",
              },
              ".intrinsic-h-auto-2\\\\.5": {
                "contain-intrinsic-height": "auto 0.625rem;",
              },
              ".intrinsic-h-auto-3": {
                "contain-intrinsic-height": "auto 0.75rem;",
              },
              ".intrinsic-h-auto-32": {
                "contain-intrinsic-height": "auto 8rem;",
              },
              ".intrinsic-h-auto-36": {
                "contain-intrinsic-height": "auto 9rem;",
              },
              ".intrinsic-h-auto-3\\\\.5": {
                "contain-intrinsic-height": "auto 0.875rem;",
              },
              ".intrinsic-h-auto-4": {
                "contain-intrinsic-height": "auto 1rem;",
              },
              ".intrinsic-h-auto-40": {
                "contain-intrinsic-height": "auto 10rem;",
              },
              ".intrinsic-h-auto-44": {
                "contain-intrinsic-height": "auto 11rem;",
              },
              ".intrinsic-h-auto-48": {
                "contain-intrinsic-height": "auto 12rem;",
              },
              ".intrinsic-h-auto-5": {
                "contain-intrinsic-height": "auto 1.25rem;",
              },
              ".intrinsic-h-auto-52": {
                "contain-intrinsic-height": "auto 13rem;",
              },
              ".intrinsic-h-auto-56": {
                "contain-intrinsic-height": "auto 14rem;",
              },
              ".intrinsic-h-auto-6": {
                "contain-intrinsic-height": "auto 1.5rem;",
              },
              ".intrinsic-h-auto-60": {
                "contain-intrinsic-height": "auto 15rem;",
              },
              ".intrinsic-h-auto-64": {
                "contain-intrinsic-height": "auto 16rem;",
              },
              ".intrinsic-h-auto-7": {
                "contain-intrinsic-height": "auto 1.75rem;",
              },
              ".intrinsic-h-auto-72": {
                "contain-intrinsic-height": "auto 18rem;",
              },
              ".intrinsic-h-auto-8": {
                "contain-intrinsic-height": "auto 2rem;",
              },
              ".intrinsic-h-auto-80": {
                "contain-intrinsic-height": "auto 20rem;",
              },
              ".intrinsic-h-auto-9": {
                "contain-intrinsic-height": "auto 2.25rem;",
              },
              ".intrinsic-h-auto-96": {
                "contain-intrinsic-height": "auto 24rem;",
              },
              ".intrinsic-h-auto-px": {
                "contain-intrinsic-height": "auto 1px;",
              },
            },
            {
              ".intrinsic-block-0": {
                "contain-intrinsic-block-size": "0px;",
              },
              ".intrinsic-block-0\\\\.5": {
                "contain-intrinsic-block-size": "0.125rem;",
              },
              ".intrinsic-block-1": {
                "contain-intrinsic-block-size": "0.25rem;",
              },
              ".intrinsic-block-10": {
                "contain-intrinsic-block-size": "2.5rem;",
              },
              ".intrinsic-block-11": {
                "contain-intrinsic-block-size": "2.75rem;",
              },
              ".intrinsic-block-12": {
                "contain-intrinsic-block-size": "3rem;",
              },
              ".intrinsic-block-14": {
                "contain-intrinsic-block-size": "3.5rem;",
              },
              ".intrinsic-block-16": {
                "contain-intrinsic-block-size": "4rem;",
              },
              ".intrinsic-block-1\\\\.5": {
                "contain-intrinsic-block-size": "0.375rem;",
              },
              ".intrinsic-block-2": {
                "contain-intrinsic-block-size": "0.5rem;",
              },
              ".intrinsic-block-20": {
                "contain-intrinsic-block-size": "5rem;",
              },
              ".intrinsic-block-24": {
                "contain-intrinsic-block-size": "6rem;",
              },
              ".intrinsic-block-28": {
                "contain-intrinsic-block-size": "7rem;",
              },
              ".intrinsic-block-2\\\\.5": {
                "contain-intrinsic-block-size": "0.625rem;",
              },
              ".intrinsic-block-3": {
                "contain-intrinsic-block-size": "0.75rem;",
              },
              ".intrinsic-block-32": {
                "contain-intrinsic-block-size": "8rem;",
              },
              ".intrinsic-block-36": {
                "contain-intrinsic-block-size": "9rem;",
              },
              ".intrinsic-block-3\\\\.5": {
                "contain-intrinsic-block-size": "0.875rem;",
              },
              ".intrinsic-block-4": {
                "contain-intrinsic-block-size": "1rem;",
              },
              ".intrinsic-block-40": {
                "contain-intrinsic-block-size": "10rem;",
              },
              ".intrinsic-block-44": {
                "contain-intrinsic-block-size": "11rem;",
              },
              ".intrinsic-block-48": {
                "contain-intrinsic-block-size": "12rem;",
              },
              ".intrinsic-block-5": {
                "contain-intrinsic-block-size": "1.25rem;",
              },
              ".intrinsic-block-52": {
                "contain-intrinsic-block-size": "13rem;",
              },
              ".intrinsic-block-56": {
                "contain-intrinsic-block-size": "14rem;",
              },
              ".intrinsic-block-6": {
                "contain-intrinsic-block-size": "1.5rem;",
              },
              ".intrinsic-block-60": {
                "contain-intrinsic-block-size": "15rem;",
              },
              ".intrinsic-block-64": {
                "contain-intrinsic-block-size": "16rem;",
              },
              ".intrinsic-block-7": {
                "contain-intrinsic-block-size": "1.75rem;",
              },
              ".intrinsic-block-72": {
                "contain-intrinsic-block-size": "18rem;",
              },
              ".intrinsic-block-8": {
                "contain-intrinsic-block-size": "2rem;",
              },
              ".intrinsic-block-80": {
                "contain-intrinsic-block-size": "20rem;",
              },
              ".intrinsic-block-9": {
                "contain-intrinsic-block-size": "2.25rem;",
              },
              ".intrinsic-block-96": {
                "contain-intrinsic-block-size": "24rem;",
              },
              ".intrinsic-block-none": {
                "contain-intrinsic-block-size": "none",
              },
              ".intrinsic-block-px": {
                "contain-intrinsic-block-size": "1px;",
              },
            },
            {
              ".intrinsic-block-auto": {
                "contain-intrinsic-block-size": "auto",
              },
              ".intrinsic-block-auto-0": {
                "contain-intrinsic-block-size": "auto 0px;",
              },
              ".intrinsic-block-auto-0\\\\.5": {
                "contain-intrinsic-block-size": "auto 0.125rem;",
              },
              ".intrinsic-block-auto-1": {
                "contain-intrinsic-block-size": "auto 0.25rem;",
              },
              ".intrinsic-block-auto-10": {
                "contain-intrinsic-block-size": "auto 2.5rem;",
              },
              ".intrinsic-block-auto-11": {
                "contain-intrinsic-block-size": "auto 2.75rem;",
              },
              ".intrinsic-block-auto-12": {
                "contain-intrinsic-block-size": "auto 3rem;",
              },
              ".intrinsic-block-auto-14": {
                "contain-intrinsic-block-size": "auto 3.5rem;",
              },
              ".intrinsic-block-auto-16": {
                "contain-intrinsic-block-size": "auto 4rem;",
              },
              ".intrinsic-block-auto-1\\\\.5": {
                "contain-intrinsic-block-size": "auto 0.375rem;",
              },
              ".intrinsic-block-auto-2": {
                "contain-intrinsic-block-size": "auto 0.5rem;",
              },
              ".intrinsic-block-auto-20": {
                "contain-intrinsic-block-size": "auto 5rem;",
              },
              ".intrinsic-block-auto-24": {
                "contain-intrinsic-block-size": "auto 6rem;",
              },
              ".intrinsic-block-auto-28": {
                "contain-intrinsic-block-size": "auto 7rem;",
              },
              ".intrinsic-block-auto-2\\\\.5": {
                "contain-intrinsic-block-size": "auto 0.625rem;",
              },
              ".intrinsic-block-auto-3": {
                "contain-intrinsic-block-size": "auto 0.75rem;",
              },
              ".intrinsic-block-auto-32": {
                "contain-intrinsic-block-size": "auto 8rem;",
              },
              ".intrinsic-block-auto-36": {
                "contain-intrinsic-block-size": "auto 9rem;",
              },
              ".intrinsic-block-auto-3\\\\.5": {
                "contain-intrinsic-block-size": "auto 0.875rem;",
              },
              ".intrinsic-block-auto-4": {
                "contain-intrinsic-block-size": "auto 1rem;",
              },
              ".intrinsic-block-auto-40": {
                "contain-intrinsic-block-size": "auto 10rem;",
              },
              ".intrinsic-block-auto-44": {
                "contain-intrinsic-block-size": "auto 11rem;",
              },
              ".intrinsic-block-auto-48": {
                "contain-intrinsic-block-size": "auto 12rem;",
              },
              ".intrinsic-block-auto-5": {
                "contain-intrinsic-block-size": "auto 1.25rem;",
              },
              ".intrinsic-block-auto-52": {
                "contain-intrinsic-block-size": "auto 13rem;",
              },
              ".intrinsic-block-auto-56": {
                "contain-intrinsic-block-size": "auto 14rem;",
              },
              ".intrinsic-block-auto-6": {
                "contain-intrinsic-block-size": "auto 1.5rem;",
              },
              ".intrinsic-block-auto-60": {
                "contain-intrinsic-block-size": "auto 15rem;",
              },
              ".intrinsic-block-auto-64": {
                "contain-intrinsic-block-size": "auto 16rem;",
              },
              ".intrinsic-block-auto-7": {
                "contain-intrinsic-block-size": "auto 1.75rem;",
              },
              ".intrinsic-block-auto-72": {
                "contain-intrinsic-block-size": "auto 18rem;",
              },
              ".intrinsic-block-auto-8": {
                "contain-intrinsic-block-size": "auto 2rem;",
              },
              ".intrinsic-block-auto-80": {
                "contain-intrinsic-block-size": "auto 20rem;",
              },
              ".intrinsic-block-auto-9": {
                "contain-intrinsic-block-size": "auto 2.25rem;",
              },
              ".intrinsic-block-auto-96": {
                "contain-intrinsic-block-size": "auto 24rem;",
              },
              ".intrinsic-block-auto-px": {
                "contain-intrinsic-block-size": "auto 1px;",
              },
            },
            {
              ".intrinsic-inline-0": {
                "contain-intrinsic-inline-size": "0px;",
              },
              ".intrinsic-inline-0\\\\.5": {
                "contain-intrinsic-inline-size": "0.125rem;",
              },
              ".intrinsic-inline-1": {
                "contain-intrinsic-inline-size": "0.25rem;",
              },
              ".intrinsic-inline-10": {
                "contain-intrinsic-inline-size": "2.5rem;",
              },
              ".intrinsic-inline-11": {
                "contain-intrinsic-inline-size": "2.75rem;",
              },
              ".intrinsic-inline-12": {
                "contain-intrinsic-inline-size": "3rem;",
              },
              ".intrinsic-inline-14": {
                "contain-intrinsic-inline-size": "3.5rem;",
              },
              ".intrinsic-inline-16": {
                "contain-intrinsic-inline-size": "4rem;",
              },
              ".intrinsic-inline-1\\\\.5": {
                "contain-intrinsic-inline-size": "0.375rem;",
              },
              ".intrinsic-inline-2": {
                "contain-intrinsic-inline-size": "0.5rem;",
              },
              ".intrinsic-inline-20": {
                "contain-intrinsic-inline-size": "5rem;",
              },
              ".intrinsic-inline-24": {
                "contain-intrinsic-inline-size": "6rem;",
              },
              ".intrinsic-inline-28": {
                "contain-intrinsic-inline-size": "7rem;",
              },
              ".intrinsic-inline-2\\\\.5": {
                "contain-intrinsic-inline-size": "0.625rem;",
              },
              ".intrinsic-inline-3": {
                "contain-intrinsic-inline-size": "0.75rem;",
              },
              ".intrinsic-inline-32": {
                "contain-intrinsic-inline-size": "8rem;",
              },
              ".intrinsic-inline-36": {
                "contain-intrinsic-inline-size": "9rem;",
              },
              ".intrinsic-inline-3\\\\.5": {
                "contain-intrinsic-inline-size": "0.875rem;",
              },
              ".intrinsic-inline-4": {
                "contain-intrinsic-inline-size": "1rem;",
              },
              ".intrinsic-inline-40": {
                "contain-intrinsic-inline-size": "10rem;",
              },
              ".intrinsic-inline-44": {
                "contain-intrinsic-inline-size": "11rem;",
              },
              ".intrinsic-inline-48": {
                "contain-intrinsic-inline-size": "12rem;",
              },
              ".intrinsic-inline-5": {
                "contain-intrinsic-inline-size": "1.25rem;",
              },
              ".intrinsic-inline-52": {
                "contain-intrinsic-inline-size": "13rem;",
              },
              ".intrinsic-inline-56": {
                "contain-intrinsic-inline-size": "14rem;",
              },
              ".intrinsic-inline-6": {
                "contain-intrinsic-inline-size": "1.5rem;",
              },
              ".intrinsic-inline-60": {
                "contain-intrinsic-inline-size": "15rem;",
              },
              ".intrinsic-inline-64": {
                "contain-intrinsic-inline-size": "16rem;",
              },
              ".intrinsic-inline-7": {
                "contain-intrinsic-inline-size": "1.75rem;",
              },
              ".intrinsic-inline-72": {
                "contain-intrinsic-inline-size": "18rem;",
              },
              ".intrinsic-inline-8": {
                "contain-intrinsic-inline-size": "2rem;",
              },
              ".intrinsic-inline-80": {
                "contain-intrinsic-inline-size": "20rem;",
              },
              ".intrinsic-inline-9": {
                "contain-intrinsic-inline-size": "2.25rem;",
              },
              ".intrinsic-inline-96": {
                "contain-intrinsic-inline-size": "24rem;",
              },
              ".intrinsic-inline-none": {
                "contain-intrinsic-inline-size": "none",
              },
              ".intrinsic-inline-px": {
                "contain-intrinsic-inline-size": "1px;",
              },
            },
            {
              ".intrinsic-inline-auto": {
                "contain-intrinsic-inline-size": "auto",
              },
              ".intrinsic-inline-auto-0": {
                "contain-intrinsic-inline-size": "auto 0px;",
              },
              ".intrinsic-inline-auto-0\\\\.5": {
                "contain-intrinsic-inline-size": "auto 0.125rem;",
              },
              ".intrinsic-inline-auto-1": {
                "contain-intrinsic-inline-size": "auto 0.25rem;",
              },
              ".intrinsic-inline-auto-10": {
                "contain-intrinsic-inline-size": "auto 2.5rem;",
              },
              ".intrinsic-inline-auto-11": {
                "contain-intrinsic-inline-size": "auto 2.75rem;",
              },
              ".intrinsic-inline-auto-12": {
                "contain-intrinsic-inline-size": "auto 3rem;",
              },
              ".intrinsic-inline-auto-14": {
                "contain-intrinsic-inline-size": "auto 3.5rem;",
              },
              ".intrinsic-inline-auto-16": {
                "contain-intrinsic-inline-size": "auto 4rem;",
              },
              ".intrinsic-inline-auto-1\\\\.5": {
                "contain-intrinsic-inline-size": "auto 0.375rem;",
              },
              ".intrinsic-inline-auto-2": {
                "contain-intrinsic-inline-size": "auto 0.5rem;",
              },
              ".intrinsic-inline-auto-20": {
                "contain-intrinsic-inline-size": "auto 5rem;",
              },
              ".intrinsic-inline-auto-24": {
                "contain-intrinsic-inline-size": "auto 6rem;",
              },
              ".intrinsic-inline-auto-28": {
                "contain-intrinsic-inline-size": "auto 7rem;",
              },
              ".intrinsic-inline-auto-2\\\\.5": {
                "contain-intrinsic-inline-size": "auto 0.625rem;",
              },
              ".intrinsic-inline-auto-3": {
                "contain-intrinsic-inline-size": "auto 0.75rem;",
              },
              ".intrinsic-inline-auto-32": {
                "contain-intrinsic-inline-size": "auto 8rem;",
              },
              ".intrinsic-inline-auto-36": {
                "contain-intrinsic-inline-size": "auto 9rem;",
              },
              ".intrinsic-inline-auto-3\\\\.5": {
                "contain-intrinsic-inline-size": "auto 0.875rem;",
              },
              ".intrinsic-inline-auto-4": {
                "contain-intrinsic-inline-size": "auto 1rem;",
              },
              ".intrinsic-inline-auto-40": {
                "contain-intrinsic-inline-size": "auto 10rem;",
              },
              ".intrinsic-inline-auto-44": {
                "contain-intrinsic-inline-size": "auto 11rem;",
              },
              ".intrinsic-inline-auto-48": {
                "contain-intrinsic-inline-size": "auto 12rem;",
              },
              ".intrinsic-inline-auto-5": {
                "contain-intrinsic-inline-size": "auto 1.25rem;",
              },
              ".intrinsic-inline-auto-52": {
                "contain-intrinsic-inline-size": "auto 13rem;",
              },
              ".intrinsic-inline-auto-56": {
                "contain-intrinsic-inline-size": "auto 14rem;",
              },
              ".intrinsic-inline-auto-6": {
                "contain-intrinsic-inline-size": "auto 1.5rem;",
              },
              ".intrinsic-inline-auto-60": {
                "contain-intrinsic-inline-size": "auto 15rem;",
              },
              ".intrinsic-inline-auto-64": {
                "contain-intrinsic-inline-size": "auto 16rem;",
              },
              ".intrinsic-inline-auto-7": {
                "contain-intrinsic-inline-size": "auto 1.75rem;",
              },
              ".intrinsic-inline-auto-72": {
                "contain-intrinsic-inline-size": "auto 18rem;",
              },
              ".intrinsic-inline-auto-8": {
                "contain-intrinsic-inline-size": "auto 2rem;",
              },
              ".intrinsic-inline-auto-80": {
                "contain-intrinsic-inline-size": "auto 20rem;",
              },
              ".intrinsic-inline-auto-9": {
                "contain-intrinsic-inline-size": "auto 2.25rem;",
              },
              ".intrinsic-inline-auto-96": {
                "contain-intrinsic-inline-size": "auto 24rem;",
              },
              ".intrinsic-inline-auto-px": {
                "contain-intrinsic-inline-size": "auto 1px;",
              },
            },
          ]
        `)
    })
})

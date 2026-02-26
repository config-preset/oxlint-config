import {describe, expect, test} from "vitest";
import {resolveConfig} from "../src/config.ts";

describe("resolveConfig", () => {
    test('loading config success', async () => {

        const config = await resolveConfig()

        console.log('use config:', config)

        expect(config.typescript).toBe(true)
        expect(config.vue).toBe(false)
    })

    test('overrides should be used first when passing overrides', async () => {
        const config = await resolveConfig({vue: true})

        console.log('use config:', config)
        expect(config.vue).toBe(true)
        expect(config.typescript).toBe(true)
    })
})
import type { IOptions } from './types.ts'
import { loadConfig } from 'c12'

export const resolveConfig = async (options: Partial<IOptions> = {}) => {
    const defaultConfig = {
        vue: false,
        lib: false,
        typescript: true,
    }

    const { config } = await loadConfig<IOptions>({
        name: 'oxlint-config',
        defaults: defaultConfig,
        overrides: {
            ...defaultConfig,
            ...options,
        },
    })

    return {
        cwd: process.cwd(),
        ...config,
    }
}

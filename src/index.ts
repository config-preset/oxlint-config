import type { OxlintConfig } from 'oxlint'
import { defineConfig } from 'oxlint'

export const lonewolfyx = (): OxlintConfig => {
    // const config = resolveConfig(options).then(r => r)
    return defineConfig({
        rules: {
            'eslint/arrow-body-style': 'error',
        },
    })
}

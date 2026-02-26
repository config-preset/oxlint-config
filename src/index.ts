import type { OxlintConfig } from 'oxlint'

export const lonewolfyx = (): OxlintConfig => {
    // const config = resolveConfig(options).then(r => r)
    return {
        rules: {
            'eslint/arrow-body-style': 'error',
        },
    }
}

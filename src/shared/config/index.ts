export const HELP_TEL = getEnvVar('VITE_APP_HELP_TEL')

function getEnvVar(key: string) {
    // @ts-ignore
    const envVar = import.meta.env[key]
    if (envVar === undefined) {
        throw new Error(`Env variable ${key} is required`)
    }
    return envVar
}

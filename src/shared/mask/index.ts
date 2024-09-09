export default {
    decimal(max:number){
        return {
            mask: `${max}`,
            tokens: {
                z: {
                    pattern: /[.,]/,
                    optional: true
                },
                0: {
                    pattern: /\d/,
                    multiple: true
                },
                9: {
                    pattern: /\d/,
                    optional: true
                }
            },
            postProcess: (val: string) => {
                if(val[0] === '0') {
                    const startZero = val.slice(0,1) === '0' && !!val.slice(1,2) && val.slice(1,2) !== '.'
                    if(val.length && startZero) {
                        val = '0.' + val.slice(1,2)
                    }
                }
                if(val[0] === '.' || val[0] === ','){
                    val = '0.'
                }
                return val
            }
        }
    },

    numeric(max:number){
        return {
            mask: `${max}`,
            tokens: {
                '9': {
                    pattern: /[0-9]/,
                    optional: true
                }
            },
            postProcess: (val: string) => {
                if(val[0] === '0'){
                    val = ''
                }
                return val
            }
        }
    },
}

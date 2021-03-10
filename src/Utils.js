
export const firstLetterCapital = (s) => {
     if (typeof s !== 'string') return ''
     return s.charAt(0).toUpperCase() + s.slice(1)
}

export const calculateAverage = (valor) => {
     const total = valor.reduce((a, b) => a + b, 0)
     const result = total / valor.length
     const final = result.toFixed(0)
     return final
}

export const calculateMaxValue = (valor) => {
     const max = valor.reduce((a, b) => Math.max(a, b))
     return max
}
export const calculateMinValue = (valor) => {
     const max = valor.reduce((a, b) => Math.min(a, b))
     return max
}

export const dateSeparator = (date) => date.split('-')
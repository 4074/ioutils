function debounce(func: Function, wait: number, leading = false) {
    let context: any, args: any
    let timer = null
    let result: any

    function invoke() {
        timer = null
        result = func.apply(context, args)
    }

    function debounced () {
        context = this
        args = arguments

        if (leading && !timer) {
            invoke()
        } else {
            clearTimeout(timer)
            timer = setTimeout(invoke, wait)
        }

        return result
    }

    return debounced
}
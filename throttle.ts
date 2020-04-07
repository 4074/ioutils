export default function throttle(func: Function, wait: number): Function {
    let args: any, context: any
    let lastInvokeTime = 0
    let timer = null
    let result: any

    function invoke() {
        timer = null
        lastInvokeTime = new Date().getTime()
        result = func.apply(context, args)
    }

    function throttled() {
        args = arguments
        context = this
        if (timer) return

        const time = new Date().getTime()
        const remaining = wait - (time - lastInvokeTime)

        if (remaining <= 0) {
            invoke()
        } else {
            timer = setTimeout(invoke, remaining)
        }

        return result
    }

    return throttled
}
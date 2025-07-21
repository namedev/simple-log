function SimpleLogger() {
    let context = '';
    if (typeof arguments[0] !== 'undefined') {
        context = arguments[0];
    }

    const args = () => {
        return Array.prototype.slice.call(arguments);
    };
    const _printDate = () => {
        return new Date().toISOString();
    };

    function log() {
        console.log.apply(
            console,
            ['[LOG::' + context + ']' + _printDate() + '\n'].concat(args(arguments))
        );
    }

    function warn() {
        console.warn.apply(
            console,
            ['[WARN::' + context + ']' + _printDate() + '\n'].concat(args(arguments))
        );
    }

    function error() {
        console.error.apply(
            console,
            ['[ERROR::' + context + ']' + _printDate() + '\n'].concat(args(arguments))
        );
    }

    return {
        log,
        warn,
        error,
    };
}

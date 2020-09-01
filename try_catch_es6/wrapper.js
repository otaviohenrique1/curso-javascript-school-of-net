const forkTale = require('folktale/Result');

exports.tryFn = async function tryFn(fn) {
    try {
        const resultFn = await fn();
        return forkTale.Ok(resultFn);
    } catch (err) {
        return forkTale.Error(err.message)
    }
}
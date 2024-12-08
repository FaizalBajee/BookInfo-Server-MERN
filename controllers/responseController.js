module.exports = {
    success(msg, content) {
        return {
            success: true,
            message: msg,
            content: content || {}
        }
    },
    failed(msg, content) {
        return {
            success: false,
            message: msg,
            content: content || {}
        }
    }
}
import SecureLS from 'secure-ls'

// encodingType: 加密方式,可以有多种情况选择 isCompression: 数量过大时是否压缩
const ls = new SecureLS({ encodingType: 'aes', isCompression: false })

export const get = (key) => ls.get(key)
export const set = (key, value) => ls.set(key, value)
export const remove = (key) => ls.remove(key)

export default { get, set, remove }
// ps: 该文件展示了两种导出,实际应用中,选择其中一种即可

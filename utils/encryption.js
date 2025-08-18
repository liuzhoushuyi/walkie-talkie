import CryptoJS from 'crypto-js'
export function encrypt(text, key) {
  return CryptoJS.AES.encrypt(text, key).toString()
}
export function decrypt(cipher, key) {
  return CryptoJS.AES.decrypt(cipher, key).toString(CryptoJS.enc.Utf8)
}
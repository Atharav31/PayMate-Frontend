import CryptoJS from "crypto-js";

const key = CryptoJS.enc.Hex.parse("your-32-byte-hex-key"); // Replace with your actual key
const iv = CryptoJS.enc.Hex.parse("your-16-byte-hex-iv"); // Replace with your actual IV

export const decrypt = (encryptedResponse) => {
  const decrypted = CryptoJS.AES.decrypt(encryptedResponse.encryptedData, key, {
    iv: CryptoJS.enc.Hex.parse(encryptedResponse.iv),
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7,
  });
  return JSON.parse(CryptoJS.enc.Utf8.stringify(decrypted));
};

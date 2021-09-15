/** This code is from https://www.isummation.com/blog/convert-arraybuffer-to-base64-string-and-vice-versa/ */
module.exports = {
    toBase64: function (buffer) {
        var binary = '';
        var bytes = new Uint8Array(buffer);
        var len = bytes.byteLength;
        for (var i = 0; i < len; i++) {
            binary += String.fromCharCode(bytes[i]);
        }
        return window.btoa(binary);
    },
    toArrayBuffer: function (base64, returnBytes) {
        var binary_string = window.atob(base64);
        var len = binary_string.length;
        var bytes = new Uint8Array(len);
        for (var i = 0; i < len; i++) {
            bytes[i] = binary_string.charCodeAt(i);
        }

        return returnBytes ? bytes : bytes.buffer;
    }
}

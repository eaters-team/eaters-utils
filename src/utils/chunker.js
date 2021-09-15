module.exports = {
    chunk: async function (file, chunkSize) {
        const _chunkSize = chunkSize ? chunkSize : 1024 * 16;
        let start = 0;
        let end = file.size;
        let chunks = [];
        let id = Math.random().toString(36).substr(2, 9);

        while (start < end) {
            let nextStart = start + _chunkSize;
            let chunk = await file.slice(start, nextStart).arrayBuffer()
            chunks.push(chunk);
            start = nextStart;
        }
        return [{ id: id, name: file.name, type: file.type, count: chunks.length, chunks: [] }, ...chunks];
    },
    rebuilder: {
        file: {},
        rebuild: function (chunk, rebuilt) {
            let utf8decoder = new TextDecoder();
            try {
                //JSON
                let text = utf8decoder.decode(chunk)
                let data = JSON.parse(text);
                this.file = data;
            } catch (e) {
                //ArrayBuffer
                this.file.chunks.push(chunk);
                if (this.file.chunks.length === this.file.count) {
                    let file = new File([new Blob(this.file.chunks)], this.file.name, { type: this.file.type });
                    rebuilt(file);
                }
            }
        }
    }
}

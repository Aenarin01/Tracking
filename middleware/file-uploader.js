const Minio = require('minio');


const minioClient = new Minio.Client({
    endPoint: 'localhost',
    port: 9000,
    useSSL: false,
    accessKey: 'PVAM5GAO07ABPSW1G9RK',
    secretKey: 'juEQ8yAAwr0d9L+Pwj4eUhLu5p+SoOQODL2W1ZbO'
});


const file = 'C:\\ren.jpeg';

const metaData = {
    'Content-Type': 'application/octet-stream',
    'X-Amz-Meta-Testing': 1234,
    'example': 5678
}
minioClient.fPutObject('images', 'ren.jpeg', file, metaData, function(err, etag) {
    if (err) return console.log(err)
    console.log('File uploaded successfully.')
});

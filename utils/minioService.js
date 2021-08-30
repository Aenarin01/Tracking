const Minio = require("minio");
const minioClient = new Minio.Client({
    endPoint: 'localhost',
    port: 9000,
    useSSL: false,
    accessKey: 'PVAM5GAO07ABPSW1G9RK',
    secretKey: 'juEQ8yAAwr0d9L+Pwj4eUhLu5p+SoOQODL2W1ZbO'
})

const minioService = {};

minioService.Minio = Minio
minioService.minioClient = minioClient

module.exports = minioService

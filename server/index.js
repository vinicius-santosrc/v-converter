const express = require('express');
const cors = require('cors');
const ytdl = require('ytdl-core');
const fs = require("fs");
const app = express();

const port = 3001

app.use(express.json());
app.use(cors())

app.get(`/api/convert`, async (req, res) => {
    try {
        const { videoURL } = req.query

        const videoDetails = await ytdl.getInfo(videoURL)

        res.json(videoDetails)
    }
    catch (error) {
        console.log(error)
    }

})

app.get('/download', async (req, res) => {
    const link = req.query.link;

    try {
        const videoInfo = await ytdl.getInfo(link);

        const videoFormat = videoInfo.formats.reverse().find(format => format.hasAudio && format.hasVideo);
        //const videoFormat = ytdl.chooseFormat(videoInfo.formats, { quality: 'hightest' });

        if (!videoFormat) {
            return res.status(404).json({ error: 'Formato de vídeo não encontrado.' });
        }

        res.header({
            'Content-Type': videoFormat.mimeType,
            'Content-Disposition': `attachment; filename="${videoInfo.videoDetails.title}.mp4"`,
        });

        ytdl(link, { format: videoFormat })
            .pipe(res)
            .on('error', (error) => {
                console.error('Erro durante o streaming do vídeo:', error);
                res.status(500).json({ error: 'Erro durante o streaming do vídeo.' });
            });
    } catch (error) {
        console.error('Erro ao obter informações do vídeo:', error);
        res.status(500).json({ error: 'Erro ao obter informações do vídeo.' });
    }
});

app.get('/downloadmp3', async (req, res) => {
    const link = req.query.link;

    try {
        const videoInfo = await ytdl.getInfo(link);

        const videoFormat = videoInfo.formats.reverse().find(format => format.hasAudio && !format.hasVideo);
        //const videoFormat = ytdl.chooseFormat(videoInfo.formats, { quality: 'hightest' });

        if (!videoFormat) {
            return res.status(404).json({ error: 'Formato de vídeo não encontrado.' });
        }

        res.header({
            'Content-Type': videoFormat.mimeType,
            'Content-Disposition': `attachment; filename="${videoInfo.videoDetails.title}.mp4"`,
        });

        ytdl(link, { format: videoFormat })
            .pipe(res)
            .on('error', (error) => {
                console.error('Erro durante o streaming do vídeo:', error);
                res.status(500).json({ error: 'Erro durante o streaming do vídeo.' });
            });
    } catch (error) {
        console.error('Erro ao obter informações do vídeo:', error);
        res.status(500).json({ error: 'Erro ao obter informações do vídeo.' });
    }
});


app.listen(port, () => {
    console.log("Servidor rodando na porta: ", port)
})
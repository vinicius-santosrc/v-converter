import { useState } from 'react';
import axios from 'axios';
import Banner from '../images/mp4-banner.webp';

const ConverterMp4 = () => {

    const [url, setURL] = useState(null);
    const [videoDetails, setVideoDetails] = useState([]);
    const [loading, setLoading] = useState(false);
    const [urlTypeSelected, seturlTypeSelected] = useState(null);

    async function StartConvertMP4() {
        setLoading(true)
        if (!url) {
            setLoading(false)
            return
        }
        try {
            const response = await axios.get("http://localhost:3001/api/convert", {
                params: {
                    videoURL: url
                }
            })

            setVideoDetails(response.data)
            setLoading(false)
        }
        catch (error) {
            console.log(error)
            setLoading(false)
        }
    }

    async function downloadVideo() {
        try {
            const response = await fetch(`http://localhost:3001/download?link=${url}`);
            const videoBlob = await response.arrayBuffer();

            // Convert the ArrayBuffer to Blob
            const videoBlobObject = new Blob([videoBlob], { type: 'video/mp4' });

            // Create a new video element and set its source to the Blob

            var a = document.createElement("a");
            a.style.display = 'none';
            a.href = URL.createObjectURL(videoBlobObject);
            //a.href = videoBlobObject;
            a.download = `${videoDetails.videoDetails.title + " - V-CONVERTER"}.mp4`;
            a.click();

        } catch (error) {
            console.error(error);
        }
    }



    return (
        <>
            <section
                className="lg:w-[100%] m-auto"
            >
                <img
                    className="w-[100%] h-[450px] object-cover"
                    src={Banner}
                />
            </section>
            <section className="lg:w-[1200px] m-auto my-10 max[900px]: p-5">
                <h2 className="text-2xl font-medium">Conversão Youtube para MP4</h2>
                <h1 className="text-purple-800 text-3xl font-bold">Comece agora:</h1>
                <div className="lg:flex gap-5 justify-end text-black m-auto my-10 text-center max[900px]: block flex-wrap">
                    <input
                        className="text-black p-5 py-4 rounded-3xl outline-none border lg:w-[50%]  max[900px]: w-[100%]"
                        placeholder="Insira o URL do vídeo"
                        value={url}
                        onChange={(e) => { setURL(e.target.value) }}
                    />
                    <div>
                        {loading ?
                            <button
                                className='bg-purple-800 cursor-pointer text-white p-10 py-4 rounded-3xl max[900px]: my-5 w-[100%]'>
                                <span>LOADING</span>
                            </button>
                            :
                            <button
                                onClick={StartConvertMP4}
                                className='bg-purple-800 cursor-pointer text-white p-10 py-4 rounded-3xl max[900px]: my-5 w-[100%]'>
                                <span>CONVERTER</span>
                            </button>
                        }

                    </div>
                </div>
            </section>
            {videoDetails != "" &&
                <section className='lg:w-[1200px] p-5 m-auto text-center justify-center'>
                    <div className='flex items-center gap-5'>
                        <img onClick={() => window.open(videoDetails.videoDetails.video_url)} className='lg:w-[500px] cursor-pointer' src={videoDetails.videoDetails.thumbnails[0].url} />
                        <div className='text-left'>
                            <p>Visualizações: {videoDetails.videoDetails.viewCount}</p>
                            <h1>{videoDetails.videoDetails.title}</h1>
                            <p>{videoDetails.videoDetails.author.name}</p>
                        </div>
                    </div>
                    <div className='block m-auto'>
                        <div className='w-[100%]'>
                            <button
                                onClick={downloadVideo}
                                className='w-[100%] py-3 bg-purple-800 text-white text-bold'
                            >
                                BAIXAR SELECIONADO
                            </button>
                        </div>
                    </div>


                </section>
            }
        </>

    )
}

export default ConverterMp4
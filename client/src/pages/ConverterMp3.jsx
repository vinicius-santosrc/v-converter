import Banner from '../images/mp3-banner.webp'


const ConverterMp3 = () => {
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
                <h2 className="text-2xl font-medium">Conversão Youtube para MP3</h2>
                <h1 className="text-purple-800 text-3xl font-bold">Comece agora:</h1>
                <div className="lg:flex gap-5 justify-end text-black m-auto my-10 text-center max[900px]: block flex-wrap">
                    <input
                        className="text-black px-5 py-3 rounded-3xl outline-none border lg:w-[50%]  max[900px]: w-[100%] "
                        placeholder="Insira o URL do vídeo"
                    />
                    <div>
                        <button
                            className='bg-purple-800 cursor-pointer text-white p-10 py-4 rounded-3xl max[900px]: my-5 w-[100%]'>
                            <span>CONVERTER</span>
                        </button>
                    </div>
                </div>
            </section>
        </>

    )
}

export default ConverterMp3
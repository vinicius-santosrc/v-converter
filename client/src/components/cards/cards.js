import CardsWrapper from "./cards-wrap"
import Mp4Image from '../../images/converter-mp4.webp'
import Mp3Image from '../../images/converter-mp3.webp'

const Cards = () => {

    const listCards = [
        {
            id: 1,
            nome: "Converter MP4",
            description: "Faça o download de vídeos do Youtube em MP4",
            redirect: "/converter-mp4",
            imageURL: Mp4Image
        },
        {
            id: 2,
            nome: "Converter MP3",
            description: "Faça o download de vídeos do Youtube em Audio",
            redirect: "/converter-mp3",
            imageURL: Mp3Image
        },
    ]

    return (
        <>
            <section className="lg:flex my-10 justify-center gap-5 lg:w-[1200px] m-auto max[900px]: inline-flex flex-wrap w-[100%] px-10">
                {listCards.map((item) => {
                    return (
                        <CardsWrapper
                            key={item.id}
                            title={item.nome}
                            description={item.description}
                            url={item.redirect}
                            imageURL={item.imageURL}
                        />
                    )
                })}
            </section>
        </>

    )
}

export default Cards
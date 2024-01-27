import { useNavigate } from "react-router-dom"

function CardsWrapper(props) {

    const Nav = useNavigate();

    return (
        <div onClick={() => Nav(props.url)} className="lg:w-[450px] max[900px]: w-[500px]">

            <div>
                <img src={props.imageURL} />
            </div>
            <div className="my-5">
                <div>
                    <h1 className="font-bold text-lg">{props.title}</h1>
                </div>
                <div>
                    <p>{props.description}</p>
                </div>
                <div>
                    <button className="w-[100%] py-3 my-5 bg-purple-500 rounded-xl text-white cursor-pointer" onClick={() => Nav(props.url)}>COMEÇAR</button>
                </div>
            </div>


        </div>
    )
}

export default CardsWrapper
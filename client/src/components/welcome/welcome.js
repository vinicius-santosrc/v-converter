import { useEffect, useState } from "react";

const Welcome = () => {

    const getFraseWelcome = () => {
        const data = new Date();
        const horario = data.getHours();

        if(horario > 0 && horario < 7) {
            return 'Boa madrugada'
        }
        else if (horario >= 7 && horario < 12) {
            return 'Bom dia'
        }
        else if (horario >= 12 && horario < 19) {
            return 'Boa tarde'
        }
        else {
            return 'Boa noite'
        }
    }

    const frase_welcome = getFraseWelcome()

    return (
        <section className="lg:w-[1200px] my-5 m-auto lg:text-center max[900px]: w-[100%] text-left px-10">
            <h1 className="font-bold lg:text-3xl max[900px]: text-2xl">{frase_welcome}!</h1>
            <p className="lg:text-3xl font-medium max[900px]: text-2xl">O que você deseja hoje?</p>
        </section>
    )
}

export default Welcome
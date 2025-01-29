import { useContext, useEffect, useState } from "react";
import { TailSpin } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";
import Treino from "../../../models/Treino";
import { AuthContext } from "../../../contexts/AuthContext";
import TreinoServices from "../../../services/TreinoServices";
import { CardTreino } from "../cardtreino/CardTreino";

function ListarTreino() {

    const navigate = useNavigate();
    const treinoServices = new TreinoServices()

    const [treinos, setTreinos] = useState<Treino[]>([])

     const { usuario, handleLogout } = useContext(AuthContext)
    const token = usuario.token

    async function buscarTreinos() {
        try {
            await treinoServices.buscarTreinos( setTreinos, {
                headers: { Authorization: token }
            })
        } catch (error: any) {
            if (error.toString().includes('403')) {
                handleLogout()
            }
        }

    }

    useEffect(() => {
        if (token === '') {
            alert('Você precisa estar logado!')
            navigate('/')
        }
    }, [token])

    useEffect(() => {
        buscarTreinos()
    }, [treinos.length])

    return (
        <>
            {treinos.length === 0 && (
                <TailSpin
                    visible={true}
                    height="80"
                    width="80"
                    color="#4fa94d"
                    ariaLabel="tail-spin-loading"
                    radius="1"
                    wrapperStyle={{}}
                    wrapperClass=""
                />
            )}

            <div className=" bg-gradient-to-br from-black to-red-950 flex justify-center w-full my-4">
                <div className="container flex flex-col">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {treinos.map((treino) => (
                            <CardTreino key={treino.id} treino={treino} />
                        ))}
                    </div>
                </div>
            </div>

        </>
    )

}
export default ListarTreino;
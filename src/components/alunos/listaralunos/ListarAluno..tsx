import { useContext, useEffect, useState } from "react";
import { TailSpin } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";
import Aluno from "../../../models/Alunos";
import AlunoServices from "../../../services/AlunoServices";
import { AuthContext } from "../../../contexts/AuthContext";
import { CardAluno } from "../cardaluno/CardAluno";
import Imc from "../../../models/Imc";

function ListarAluno() {

    const alunoServices = new AlunoServices()
    const navigate = useNavigate();

    const [alunos, setAlunos] = useState<Imc[]>([])

    const { usuario, handleLogout } = useContext(AuthContext)
    const token = usuario.token

    async function buscarAlunos() {
        try {
            await alunoServices.buscarAlunos( setAlunos, {
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
        buscarAlunos()
    }, [alunos.length])

    return (
        <>
            {alunos.length === 0 && (
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

            <div className=' bg-gradient-to-br from-black to-red-950 container mx-auto my-4 
                grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'
            >
                {alunos.map((aluno) => (
                    <CardAluno key={aluno.aluno.id} aluno={aluno} />
                ))}

            </div>
        </>
    );
}
export default ListarAluno;
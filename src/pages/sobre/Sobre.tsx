import image1 from './../../assets/imgacademia.webp';
import image2 from './../../assets/bruna.webp';
import image3 from './../../assets/sansao.webp';
import image4 from './../../assets/rodrigo.webp';
import image5 from './../../assets/vincius.webp';
import image6 from './../../assets/rute.webp';
import image7 from './../../assets/gabriel.webp';
import image8 from './../../assets/aline.webp';
import image9 from './../../assets/vivian.webp';
import image11 from "./../../assets/istockphoto-1279902517-612x612.jpg"
import image12 from "./../../assets/pag3.jpg"
import image13 from "./../../assets/imgtreinadordiv.webp"

import 'boxicons/css/boxicons.min.css';

function Sobre() {
    return (
        <div className="min-h-screen max-w-6xl mx-auto mt-16 px-4 sm:px-8">
            <h2 className="text-5xl font-bold text-center text-gray-900 mb-16 tracking-wide">NOSSA HISTÓRIA</h2>
            <div className="flex flex-col lg:flex-row justify-between items-start mb-16 gap-8">
                <div className="w-full lg:w-1/2 pr-8">
                    <p className="text-2xl text-gray-700 leading-relaxed text-justify">
                        A nossa academia nasceu com o propósito de transformar vidas
                        através da prática de atividades físicas, criando um ambiente acolhedor
                        e motivador para todos. Desde a nossa fundação, acreditamos que o bem-estar físico
                        e mental andam lado a lado e que cada pessoa possui um
                        potencial único a ser desenvolvido.
                    </p>
                </div>

                <div 
                    className="w-full lg:w-1/2 h-96 bg-cover bg-center rounded-xl shadow-lg transform hover:scale-105 transition duration-500 ease-in-out"
                    style={{ backgroundImage: `url(${image1})` }}
                >
                    <div className="w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
                        <h3 className="text-white text-4xl font-bold opacity-0 hover:opacity-100 transition-all duration-500 ease-in-out">
                            Transforme Sua Vida
                        </h3>
                    </div>
                </div>
            </div>

            <h2 className="text-5xl font-bold text-center text-gray-900 mb-16 tracking-wide">QUEM SOMOS?</h2>
            <div className="flex flex-col lg:flex-row justify-between items-center mb-16 gap-8">
                <div className="w-full lg:w-1/2 pr-8 lg:pr-16 mt-8 lg:mt-0">
                    <p className="text-2xl text-gray-700 leading-relaxed text-justify">
                        Com profissionais altamente qualificados, oferecemos treinamentos personalizados, modernos e adaptáveis para todas as idades e níveis de condicionamento físico. Nosso objetivo é proporcionar um espaço seguro e inovador, onde nossos alunos possam alcançar seus objetivos e superar seus próprios limites.
                    </p>
                </div>

                <div className="rounded-lg shadow-xl overflow-hidden transition duration-300 w-full lg:w-1/2">
                    <img
                        src={image13}
                        alt="Treinamento Personalizado"
                        className="w-full h-full object-cover transition-transform duration-300 ease-in-out transform hover:scale-105"
                    />
                </div>
            </div>

            <div className="flex flex-col lg:flex-row justify-between items-center mb-16 gap-8">
                <div className="rounded-lg shadow-xl overflow-hidden w-full lg:w-1/2">
                    <img
                        src={image12}
                        alt="Ambiente Aconchegante"
                        className="w-full h-full object-cover transition-transform duration-300 ease-in-out transform hover:scale-105"
                    />
                </div>

                <div className="w-full lg:w-1/2 pl-8 lg:pl-16 mt-8 lg:mt-0">
                    <p className="text-2xl text-gray-700 leading-relaxed text-justify">
                        Somos mais do que uma academia, somos uma comunidade que se apoia e cresce junta. Ao longo dos anos, construímos uma história de dedicação, superação e resultados, sempre com foco no melhor para nossos clientes.
                    </p>
                </div>
            </div>

            <div className="flex flex-col lg:flex-row justify-between items-center mb-16 gap-8">
                <div className="w-full lg:w-1/2 pr-8 lg:pr-16 mt-8 lg:mt-0">
                    <p className="text-2xl text-gray-700 leading-relaxed text-justify">
                        Junte-se a nós e faça parte dessa jornada rumo a uma vida mais saudável e plena!
                    </p>
                </div>

                <div className="rounded-lg shadow-xl overflow-hidden w-full lg:w-1/2">
                    <img
                        src={image11}
                        alt="Ambiente Aconchegante"
                        className="w-full h-full object-cover transition-transform duration-300 ease-in-out transform hover:scale-105"
                    />
                </div>
            </div>

            <h1 className="text-5xl font-bold text-center text-gray-900 mb-16 tracking-wide">NOSSO TIME</h1>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 mt-16">
                {[ 
                    { name: 'Bruna', img: image2, github: 'https://github.com/brartioli', linkedin: 'https://www.linkedin.com/in/brunaartioli/' },
                    { name: 'Sansao', img: image3, github: 'https://github.com/sansaovieira', linkedin: 'https://www.linkedin.com/in/sansaovieira' },
                    { name: 'Rodrigo', img: image4, github: 'https://github.com/rudr1gu', linkedin: 'https://www.linkedin.com/in/rudr1gu' },
                    { name: 'Rute', img: image6, github: 'https://github.com/Rute-r', linkedin: 'https://www.linkedin.com/in/rutesrsousa/' },
                    { name: 'Vinicius', img: image5, github: 'https://github.com/vsmau', linkedin: 'https://www.linkedin.com/in/vmsou/' },
                    { name: 'Gabriel', img: image7, github: 'https://github.com/AlvessGS', linkedin: 'https://www.linkedin.com/in/gabriel-aalves/' },
                    { name: 'Aline', img: image8, github: 'https://github.com/4lineferreira', linkedin: 'https://www.linkedin.com/in/alineapferreiras//' },
                    { name: 'Vivian', img: image9, github: 'https://github.com/vivianrcc', linkedin: 'https://www.linkedin.com/in/vivianrcc' }
                ].map(({ name, img, github, linkedin }) => (
                    <div key={name} className="text-center transition-transform transform hover:scale-105">
                        <img
                            src={img}
                            alt={name}
                            className="w-3/4 h-auto rounded-full shadow-xl mx-auto transition duration-300 ease-in-out"
                        />
                        <div className="mt-4 flex justify-center space-x-4">
                            <a href={github} target="_blank" rel="noopener noreferrer">
                                <i className="bx bxl-github text-3xl text-gray-700 hover:text-black transition duration-300"></i>
                            </a>
                            <a href={linkedin} target="_blank" rel="noopener noreferrer">
                                <i className="bx bxl-linkedin text-3xl text-blue-500 hover:text-blue-700 transition duration-300"></i>
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Sobre;

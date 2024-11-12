import ProductZoom from '../../components/ProdutcItem/ProductZoom';
import Rating from '@mui/material/Rating';
import QuantityBox from '../../components/ProdutcItem/QuantityBox';
import Button from '@mui/material/Button';
import { FaCartShopping } from "react-icons/fa6";
import { useState } from "react";
import { FaHandHoldingHeart } from "react-icons/fa";
import { IoGitCompare } from "react-icons/io5";
import Tooltip from '@mui/material/Tooltip';
import teste from '../../assets/Suino_Sem_Fundo.png';
import RelatedProducts from '../../components/Related/RelatedProducts';

const ProductDetail = () => {
    const [activeSize, setActiveSize] = useState(null);
    const [activeTabs, setActiveTabs] = useState(0);

    const isActive = (index) => {
        setActiveSize(index);
    }

    return (
        <>
            <section className="productDetails py-10">
                <div className="container mx-auto">
                    <div className="flex flex-col md:flex-row">
                        <div className="md:w-1/3 p-5">
                            <ProductZoom />
                        </div>
                        <div className="md:w-2/3 p-5">
                            <h2 className="text-2xl font-semibold capitalize">Bovino Adulto Tradicional 200g</h2>
                            <ul className="flex items-center list-none mb-3">
                                <li className="mr-4">
                                    <div className="flex items-center">
                                        <span className="text-gray-500 mr-2">Bovino:</span>
                                        <span>Best for Pet</span>
                                    </div>
                                </li>
                                <li className="mr-4">
                                    <div className="flex items-center">
                                        <Rating name="read-only" value={4.5} precision={0.5} readOnly size="small" />
                                        <span className="text-gray-500 ml-2 cursor-default">1 Review</span>
                                    </div>
                                </li>
                                <li>
                                    <div className="flex items-center">
                                        <span className="text-gray-500 mr-2">UME:</span>
                                        <span>ZU49VOR</span>
                                    </div>
                                </li>
                            </ul>

                            <div className="flex items-center mb-3">
                                <span className="line-through text-gray-500">R$20,00</span>
                                <span className="text-red-500 ml-2">R$14,00</span>
                            </div>

                            <span className="bg-green-500 text-white px-2 py-1 rounded">À VENDA </span>

                            <p className="mt-2">
                                Essa é uma dieta para gatos adultos. Composição Básica: paleta bovina, coração de galinha, abobrinha italiana,
                                batata doce, chuchu, suplemento de vitaminas e minerais e salsinha. <br />
                                Níveis de garantia por kg:<br /> NEM: 1683,9kcal, Umidade (max): 833,33g,
                                Proteína (min): 243,62g, Extrato Etéreo (min): 64,13g, Matéria Fibrosa
                                (max): 5,34g; Matéria Mineral (max): 0g; Cálcio (min): 2194,42mg; Cálcio
                                (max): 5931,03mg; Fósforo (min): 1853,44mg.
                            </p>

                            <div className="flex items-center mt-3">
                                <span>Peso: 200g</span>
                                <ul className="flex ml-4">
                                    <li className="mr-2">
                                        <button
                                            className={`px-3 py-1 border rounded ${activeSize === 0 ? 'bg-blue-500 text-white' : 'border-gray-400'}`}
                                            onClick={() => isActive(0)}
                                        >200g</button>
                                    </li>
                                    <li>
                                        <button
                                            className={`px-3 py-1 border rounded ${activeSize === 1 ? 'bg-blue-500 text-white' : 'border-gray-400'}`}
                                            onClick={() => isActive(1)}
                                        >500g</button>
                                    </li>
                                </ul>
                            </div>

                            <div className="flex items-center mt-3">
                                <QuantityBox />
                                <Button className="bg-blue-500 text-white px-4 py-2 rounded-lg ml-4">
                                    <FaCartShopping /> Adicionar ao Carrinho
                                </Button>

                                <Tooltip title="Adicionar a minha lista de desejos" placement="top">
                                    <Button className="bg-blue-500 text-white px-4 py-2 rounded-full ml-4">
                                        <FaHandHoldingHeart />
                                    </Button>
                                </Tooltip>

                                <Tooltip title="Comparar" placement="top">
                                    <Button className="bg-blue-500 text-white px-4 py-2 rounded-full ml-4">
                                        <IoGitCompare />
                                    </Button>
                                </Tooltip>
                            </div>
                        </div>
                    </div>

                    <br />

                    <div className="card mt-5 p-5 border rounded shadow">
                        <div className="customTabs">
                            <ul className="flex list-none mb-5">
                                <li className="mr-4">
                                    <Button
                                        className={`px-4 py-2 rounded ${activeTabs === 0 ? 'bg-blue-500 text-white' : 'text-blue-500'}`}
                                        onClick={() => setActiveTabs(0)}
                                    >Descrição</Button>
                                </li>
                                <li className="mr-4">
                                    <Button
                                        className={`px-4 py-2 rounded ${activeTabs === 1 ? 'bg-blue-500 text-white' : 'text-blue-500'}`}
                                        onClick={() => setActiveTabs(1)}
                                    >Informações adicionais</Button>
                                </li>
                                <li>
                                    <Button
                                        className={`px-4 py-2 rounded ${activeTabs === 2 ? 'bg-blue-500 text-white' : 'text-blue-500'}`}
                                        onClick={() => setActiveTabs(2)}
                                    >Avaliações (3)</Button>
                                </li>
                            </ul>

                            <br />

                            {activeTabs === 0 && (
                                <div className="tabContent">
                                    <p>oi eu sou uma avaliação</p>
                                </div>
                            )}

                            {activeTabs === 1 && (
                                <div className="tabContent">
                                    <table className="table-auto border-collapse border border-gray-200 w-full">
                                        <tbody>
                                            <tr className="border border-gray-200">
                                                <th className="border border-gray-200 px-4 py-2">Para cima</th>
                                                <td className="border border-gray-200 px-4 py-2">
                                                    <p>35"L x 24"W x 37-45"H(front to back wheel)</p>
                                                </td>
                                            </tr>
                                            {/* Repeat as necessary */}
                                        </tbody>
                                    </table>
                                </div>
                            )}

                            {activeTabs === 2 && (
                                <div className="tabContent">
                                    <div className="flex flex-col">
                                        <div className="mb-4">
                                            <h3 className="text-lg font-semibold">Perguntas e respostas dos clientes</h3>
                                            <br />

                                            <div className='flex p-4 border rounded shadow mb-4'>
                                                <div className='flex-shrink-0'>
                                                    <img src={teste} alt="" className="rounded-full w-12 h-12" />
                                                    <span className='block text-center font-bold'>Matheus</span>
                                                </div>
                                                <div className='ml-4 flex-1'>
                                                    <div className='flex items-center'>
                                                        <h5 className='text-gray-600'>24/09/2024</h5>
                                                        <div className='ml-auto'>
                                                            <Rating name="half-rating-read" value={5} precision={0.5} readOnly size="small" />
                                                        </div>
                                                    </div>
                                                    <p>gostei muito</p>
                                                </div>
                                            </div>

                                            <form className="reviewForm">
                                                <h4>Adicionar avaliação</h4>
                                                <div className="mb-4">
                                                    <textarea className="border rounded w-full p-2" placeholder="Escreva uma nova avaliação" name="review"></textarea>
                                                </div>

                                                <div className='flex mb-4'>
                                                    <div className='flex-1'>
                                                        <Rating name="rating" value={4.5} precision={1} />
                                                    </div>
                                                </div>

                                                <div className="form-group">
                                                    <Button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-lg">
                                                        Enviar avaliação
                                                    </Button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    <br />

                    <RelatedProducts title="PRODUTOS RELACIONADOS" />
                    <RelatedProducts title="PRODUTOS VISUALIZADOS RECENTEMENTE" />
                </div>
            </section>
        </>
    );
}

export default ProductDetail;

import { Link } from 'react-router-dom';
import miau1 from '../../assets/Suino_Sem_Fundo.png';
import QuantityBox from '../../components/ProdutcItem/QuantityBox';
import { FaRegTrashCan } from "react-icons/fa6";
import Button from '@mui/material/Button';
import { CiMoneyCheck1 } from "react-icons/ci";
import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { AuthProvider, useAuth } from '../../components/Context/useAuth';
import { MyContext } from '../../components/Context/mycontext';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
    const { user } = useAuth();
    const { carrinho, setCarrinho, deliveryPrice, deliveryCity } = useContext(MyContext);
    const [isPaymentModalOpen, setPaymentModalOpen] = useState(false);

    const calculeteTotal = () => {
        const subtotal = carrinho.reduce((total, item) => total + (item.preco_real_venda * item.quantidade), 0);
        return subtotal + (deliveryPrice || 0); 
    };

    const handleQuantityChange = async (itemId, newQuantity) => {
        const updateCarrinho = carrinho.map(item => 
            item.id === itemId ? { ...item, quantidade: newQuantity } : item
        );
        setCarrinho(updateCarrinho);
    };  

    const handleRemoveItem = async (itemId) => {
        const updateCarrinho = carrinho.filter(item => item.id !== itemId);
        setCarrinho(updateCarrinho);
    };

    useEffect(() => {
        const fetchCarrinho = async () => {
            if (user) {
                try {
                    const response = await axios.get('http://localhost:3000/carrinhos/meu-carrinho', {
                        headers: { Authorization: `Bearer ${user.token}` } 
                    });
                    const updatedCarrinho = response.data;
                    setCarrinho(updatedCarrinho);
                } catch (error) {
                    console.error('Erro ao buscar carrinho:', error);
                }
            }
        };

        fetchCarrinho();
    }, [user]);

    const navigate = useNavigate();

    const handlePagamentoClick = () => {
        const totalCarrinho = calculeteTotal();
        navigate('/Pagamento', { state: { total: totalCarrinho } });
    };

    const openPaymentModal = () => {
        setPaymentModalOpen(true);
    };

    const closePaymentModal = () => {
        setPaymentModalOpen(false);
    };

    return (
        <>
            <section className="py-8">
                <div className="container mx-auto">
                    <h2 className="text-2xl font-bold mb-2">Seu Carrinho</h2>
                    {carrinho.length > 0 ? (
                        <p>Existem <b className='text-red-500'> {carrinho.length} </b> produtos no seu carrinho</p>
                    ) : (
                        <p>Seu carrinho está vazio.</p>
                    )}
                    <div className="flex flex-wrap">
                        <div className="w-full md:w-3/4 pr-5">
                            <div className="overflow-x-auto">
                                <table className="min-w-full">
                                    <thead className='bg-[#e3e3e3] overflow-hidden'>
                                        <tr className="bg-gray-200">
                                            <th className="py-2 text-left">Produtos</th>
                                            <th className="py-2 text-left">Preço por unidade</th>
                                            <th className="py-2 text-left">Quantidade</th>
                                            <th className="py-2 text-left">Subtotal</th>
                                            <th className="py-2 text-left">Remover</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {carrinho.map((item) => (
                                            <tr key={item.id} className="border-b">
                                                <td className="py-4">
                                                    <Link to={`/ProductDetail/${item.id}`}>
                                                        <div className="flex items-center">
                                                            <div className='w-16 h-16 overflow-hidden'>
                                                                <img className="w-full h-full object-cover" src={miau1} alt={item.nome} />
                                                            </div>
                                                            <div className="px-3">
                                                                <h6 className="font-semibold">{item.nome}</h6>
                                                            </div>
                                                        </div>
                                                    </Link>
                                                </td>
                                                <td className="py-4">R${parseFloat(item.preco_real_venda).toFixed(2)}</td>
                                                <td className="py-4">
                                                    <QuantityBox 
                                                        quantity={item.quantidade} 
                                                        onChange={(newQuantity) => handleQuantityChange(item.id, newQuantity)}  
                                                    />
                                                </td>
                                                <td className="py-4">R${(parseFloat(item.preco_real_venda) * item.quantidade).toFixed(2)}</td>
                                                <td className="py-4 text-center">
                                                    <span className='cursor-pointer text-red-500' onClick={() => handleRemoveItem(item.id)}>
                                                        <FaRegTrashCan className='ml-5' />
                                                    </span>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div className="w-full md:w-1/4">
                            <div className='bg-white border rounded-lg p-4 shadow-md'>
                                <h4 className="text-lg font-semibold mb-4">CARRINHO TOTAL</h4>

                                <div className='flex justify-between mb-2'>
                                    <span>Subtotal</span>
                                    <span className='text-red-500 font-bold'>R${calculeteTotal().toFixed(2)}</span>
                                </div>

                                <div className='flex justify-between mb-2'>
                                    <span>Delivery</span>
                                    <span>R${(deliveryPrice || 0).toFixed(2)}</span>
                                </div>

                                <div className='flex justify-between mb-2'>
                                    <span>Estimado para</span>
                                    <span className='font-bold'>{deliveryCity}</span>
                                </div>

                                <div className='flex justify-between'>
                                    <span>Total</span>
                                    <span className='text-red-500 font-bold'>R${(calculeteTotal()).toFixed(2)}</span>
                                </div>

                                <br />
                                <Button onClick={handlePagamentoClick} className='btn-pagamentos'>
                                    <CiMoneyCheck1 className='mr-2' />Pagamento
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Cart;

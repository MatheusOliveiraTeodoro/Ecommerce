import { useState } from 'react';
import { FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import { HiOutlineQuestionMarkCircle } from "react-icons/hi";
import { IoIosArrowDown } from "react-icons/io";
import { RiVisaLine } from "react-icons/ri";
import { FaCcMastercard } from "react-icons/fa6";
import { FaPix } from "react-icons/fa6";
import { PiPiggyBankFill } from "react-icons/pi";
import Button from '@mui/material/Button';
import { IoTriangleSharp } from "react-icons/io5";
import { useLocation } from 'react-router-dom'; 
import Calendario from '../../components/Calendario/calendar';

const Pagamento = () => {
    const location = useLocation();
    console.log(location.state);
    const totalCarrinho = location.state?.total || 0;

    const [isChecked, setIsChecked] = useState(''); // Controla qual método de pagamento está selecionado
    const [isDateModalOpen, setIsDateModalOpen] = useState(false);
    const [isSecCodeInfoOpen, setIsSecCodeInfoOpen] = useState(false);
    const [isCardNumberVisible, setIsCardNumberVisible] = useState(true); // Número do cartão visível por padrão
    const [isSecCodeVisible, setIsSecCodeVisible] = useState(true); // Código de segurança visível por padrão
    const [parcelamento, setParcelamento] = useState(null); // Estado para controlar o parcelamento selecionado
    const [valorParcelado, setValorParcelado] = useState(totalCarrinho);

    const handleSelectPaymentMethod = (paymentMethod) => {
        setIsChecked(paymentMethod);
    };

    const handleToggleDateModal = () => {
        setIsDateModalOpen(!isDateModalOpen);
    };

    const handleToggleSecCodeInfo = () => {
        setIsSecCodeInfoOpen(!isSecCodeInfoOpen);
    };

    const toggleCardNumberVisibility = () => {
        setIsCardNumberVisible(!isCardNumberVisible);
    };

    const toggleSecCodeVisibility = () => {
        setIsSecCodeVisible(!isSecCodeVisible);
    };

    const handleParcelamentoSelect = (parcel) => {
        setParcelamento(parcel);
        if (parcel === '1x') {
            setValorParcelado(totalCarrinho);
        } else if (parcel === '2x') {
            setValorParcelado(totalCarrinho / 2);
        }
    };

    return (
        <div className="p-6 max-w-4xl mx-auto">
            {/* Título com linhas */}
            <div className="flex items-center justify-center mb-4">
                <div className="border-t flex-grow"></div>
                <h1 className="font-bold mx-4 text-xl text-gray-600">Pagamento</h1>
                <div className="border-t flex-grow"></div>
            </div>

            {/* Subtítulo com ícone */}
            <div className="flex items-center justify-center mb-8">
                <FaLock className="text-yellow-600/70 mr-2" />
                <h2 className="text-yellow-600/70">Pagamento 100% seguro</h2>
            </div>

            {/* Opções de pagamento */}
            <div className="flex justify-between mb-8">
                {/* Cartão de Crédito */}
                <div className={`relative cursor-pointer w-1/3 py-4 px-2 text-center rounded-md border ${isChecked === 'cartao' ? 'border-red-500 bg-blue-100' : 'border-gray-300'}`}>
                    <div className="absolute top-2 right-2">
                        <button 
                            className="w-6 h-6 rounded-full border-2 border-gray-200 bg-blue-600 text-white flex items-center justify-center"
                            onClick={() => handleSelectPaymentMethod('cartao')}
                        >
                            {isChecked === 'cartao' ? '✓' : ''}
                        </button>
                    </div>
                    <div className="flex justify-center mb-2">
                        <RiVisaLine className='text-5xl text-blue-800 mr-5' />
                        <FaCcMastercard className='text-5xl text-orange-600' />
                    </div>
                    <h2 className="text-lg">Cartão de Crédito</h2>
                </div>

                {/* Boleto */}
                <div className={`relative cursor-pointer w-1/4 py-4 px-2 text-center rounded-md border ${isChecked === 'boleto' ? 'border-red-500 bg-blue-100' : 'border-gray-300'}`}>
                    <div className="absolute top-2 right-2">
                        <button 
                            className="w-6 h-6 rounded-full border-2 border-gray-200 bg-blue-600 text-white flex items-center justify-center"
                            onClick={() => handleSelectPaymentMethod('boleto')}
                        >
                            {isChecked === 'boleto' ? '✓' : ''}
                        </button>
                    </div>
                    <div className="flex justify-center mb-2">
                        <PiPiggyBankFill className='text-5xl' />
                    </div>
                    <h2 className='text-lg'>Boleto</h2>
                </div>

                {/* Pix */}
                <div className={`relative cursor-pointer w-1/4 py-4 px-2 text-center rounded-md border ${isChecked === 'pix' ? 'border-red-500 bg-blue-100' : 'border-gray-300'}`}>
                    <div className="absolute top-2 right-2">
                        <button 
                            className="w-6 h-6 rounded-full border-2 border-gray-200 bg-blue-600 text-white flex items-center justify-center"
                            onClick={() => handleSelectPaymentMethod('pix')}
                        >
                            {isChecked === 'pix' ? '✓' : ''}
                        </button>
                    </div>
                    <div className="flex justify-center mb-2">
                        <FaPix className='text-emerald-400 text-5xl' />
                    </div>
                    <h2 className=' text-lg'>Pix</h2>
                </div>
            </div>

            {/* Campos do Cartão de Crédito */}
            {isChecked === 'cartao' && (
                <div className="space-y-6">
                    {/* Número do Cartão */}
                    <div className="flex items-center space-x-4">
                        <label htmlFor="cardNumber" className="w-1/3">Número do Cartão</label>
                        <div className="relative w-2/3">

                            <input 
                                type={isCardNumberVisible ? 'text' : 'password'}
                                id="cardNumber" 
                                className="w-full p-2 border border-gray-300 rounded-md"
                                placeholder="0000 0000 0000 0000"
                                maxLength="19"
                                pattern="\d{4} \d{4} \d{4} \d{4}"
                                onInput={(e) => e.target.value = e.target.value.replace(/\D/g, '').replace(/(\d{4})(?=\d)/g, '$1 ').trim()}
                            />
                            <div 
                                className="absolute right-2 top-2 cursor-pointer"
                                onClick={toggleCardNumberVisibility}
                            >
                                {isCardNumberVisible ? <FaEye className='mt-1' /> : <FaEyeSlash className='mt-1' />}
                            </div>
                        </div>
                    </div>

                    {/* Nome Impresso */}
                    <div className="flex items-center space-x-4">
                        <label htmlFor="cardName" className="w-1/3">Nome Impresso</label>
                        <input 
                            type="text" 
                            id="cardName" 
                            className="w-2/3 p-2 border border-gray-300 rounded-md" 
                            placeholder="Digite exatamente igual ao impresso no cartao"
                        />
                    </div>

                    {/* Data de Expiração */}
                    <div className="flex items-center space-x-4">
                        <label htmlFor="expiryDate" className="w-1/3 flex items-center relative">
                            Data de Expiração
                        </label>
                        <div className="flex items-center space-x-4 w-2/3">
                            <div className="relative"> 
                                <Button className="absolute right-2 top-2">
                                    <IoTriangleSharp className="cursor-pointer text-black rotate-180" /><Calendario /> 
                                </Button>
                            </div>
                        </div>
                    </div>

                    {/* Parcelamento */}
                    <div className="flex items-center space-x-4">
                        <label htmlFor="parcelamento" className="w-1/3">Parcelamento</label>
                        <div className="relative w-2/3">
                            <button 
                                onClick={() => handleParcelamentoSelect(parcelamento === null ? '1x' : null)}
                                className="w-full p-2 border border-gray-300 rounded-md flex justify-between items-center"
                            >
                                {parcelamento || 'Selecione'}
                                <IoIosArrowDown className="ml-2" />
                            </button>
                            {parcelamento === null && (
                                <div className="absolute bg-white border p-2 rounded-md mt-2 shadow-lg w-full z-20">
                                    <button onClick={() => handleParcelamentoSelect('1x')} className="w-full text-left">1x sem juros</button>
                                    <button onClick={() => handleParcelamentoSelect('2x')} className="w-full text-left">2x sem juros</button>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Mostrar o valor das parcelas */}
                    {parcelamento && (
                        <div className="flex items-center space-x-4">
                            <label className="w-1/3">Valor da Parcela</label>
                            <div className="w-2/3">
                                <input 
                                    type="text" 
                                    className="w-full p-2 border border-gray-300 rounded-md"
                                    value={`R$ ${valorParcelado.toFixed(2)} por parcela`}
                                    readOnly
                                />
                            </div>
                        </div>
                    )}

                    {/* Código de Segurança */}
                    <div className="flex items-center space-x-4">
                        <label htmlFor="securityCode" className="w-1/3">Código de Segurança</label>
                        <div className="relative w-20">
                            <input 
                                type={isSecCodeVisible ? 'text' : 'password'}
                                id="securityCode" 
                                className="w-full p-2 border border-gray-300 rounded-md"
                                placeholder="000"
                                maxLength="4"
                            />
                            <div 
                                className="absolute right-2 top-2 cursor-pointer"
                                onClick={toggleSecCodeVisibility}
                            >
                                {isSecCodeVisible ? <FaEye className='mt-1' /> : <FaEyeSlash className='mt-1' />}
                            </div>
                        </div>
                        <HiOutlineQuestionMarkCircle 
                            onClick={handleToggleSecCodeInfo} 
                            className="cursor-pointer text-gray-500"
                        />
                    </div>

                    {/* Modal do Código de Segurança */}
                    {isSecCodeInfoOpen && (
                        <div className="absolute bg-white border p-4 rounded-md shadow-lg mt-2 z-20">
                            <p>O código de segurança é um número de 3 ou 4 dígitos impresso no verso do seu cartão.</p>
                        </div>
                    )}
                </div>
            )}

            {/* Botão Confirmar Pagamento */}
            <div className="mt-8 confirmar-btn">
                <Button className="">Confirmar Pagamento</Button>
            </div>
        </div>


    );
};

export default Pagamento;

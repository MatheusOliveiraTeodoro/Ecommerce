import Rating from '@mui/material/Rating';
import { SlSizeFullscreen } from "react-icons/sl";
import Button from '@mui/material/Button';
import { FaCartShopping } from "react-icons/fa6";
import { useContext, useState } from 'react';
import { MyContext } from '../../App';
import ProductModal from './ProductModal';
import teste from "../../assets/muffin.png";

const ProductItem = ({ product }) => {
    const context = useContext(MyContext);
    const [isOpenProductModal, setisOpenProductModal] = useState(false);

    const viewProductDetails = () => {
        context.setisOpenProductModal(true);
    };

    const closeProductModal = () => {
        setisOpenProductModal(false);
    };

    if (!product) {
        return null; 
    }

    const { nome, preco_sem_desconto, preco_real_venda, desconto } = product;

    const precoSemDescontoNum = preco_sem_desconto ? parseFloat(preco_sem_desconto) : 0;
    const precoRealVendaNum = parseFloat(preco_real_venda);

    return (
        <>
            <div className="w-full h-auto border border-black/10 cursor-pointer relative rounded-sm mx-auto transition-all ease-in-out">
                <div className="overflow-hidden relative group">
                    <img src={teste} alt={nome} className="w-100 transition ease-in-out hover:opacity-100" />

                    {desconto && precoSemDescontoNum > 0 && (
                        <span className="inline-block pt-1 px-2 pb-1 absolute top-2 left-2 z-50 bg-[#2bbef9] rounded-3xl text-[#fff] font-semibold text-xs align-baseline text-center whitespace-nowrap leading-none">
                             {Math.round(((precoSemDescontoNum - precoRealVendaNum) / precoSemDescontoNum) * 100)}%
                        </span>
                    )}

                    <div className="actions absolute top-5 right-3 flex flex-col gap-2 transition-all ease-in-out opacity-0 group-hover:opacity-100 transform group-hover:translate-x-0 translate-x-3">
                        <Button onClick={viewProductDetails}><SlSizeFullscreen className='text-black' /></Button>
                        <Button><FaCartShopping className='text-black' /></Button>
                    </div>
                </div>

                <div className="p-4">
                    <h4 className='text-sm font-semibold'>{nome}</h4>
                    <span className="text-green-500 block">À Venda</span>
                    <Rating className="mt-2" name="read-only" value={5} readOnly size="small" precision={0.5} />

                    <div className="flex">
                        {precoSemDescontoNum > 0 && (
                            <span className="text-base font-bold text-black/20 line-through">
                              R${precoSemDescontoNum.toFixed(2)}
                            </span>
                        )}
                            <span className="text-base font-bold text-red-600 ml-2">
                                R${precoRealVendaNum.toFixed(2)}
                            </span>
                    </div>
                </div>
            </div>

            {isOpenProductModal && <ProductModal closeProductModal={closeProductModal} />}
        </>
    );
};

export default ProductItem;

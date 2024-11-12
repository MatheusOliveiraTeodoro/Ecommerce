import { useContext } from 'react';
import { ModalContext } from '../../App';
import { IoCloseCircle } from 'react-icons/io5';
import { Rating } from '@mui/material';
import { IoMdHeart } from 'react-icons/io';
import { MdOutlineCompareArrows } from 'react-icons/md';
import ProductZoom from "./ProductZoom";
import QuantityBox from "./QuantityBox";
import { Button } from "@mui/material";

const ProductModal = (props) => {
    const context = useContext(ModalContext);

    return (
        <>
            <div className={`fixed inset-0 z-50 productModal ${context.isOpenProductModal ? 'flex' : 'hidden'} items-center justify-center bg-black bg-opacity-50`}>
                <div className="bg-white rounded-lg p-4 w-11/12 md:w-9/12 lg:w-8/12 max-h-[90vh] overflow-y-auto">
                    <div className="flex justify-between items-center mb-4">
                        <h4 className="font-bold text-xl text-black/80">Bovino Adulto</h4>
                        <Button className="close_" onClick={() => context.setisOpenProductModal(false)}>
                            <IoCloseCircle size={24} />
                        </Button>
                    </div>
                    <div className="flex items-center mb-2">
                        <div className="flex items-center mr-4">
                            <span>Bovino:</span>
                            <span className="ml-2 font-bold">Adulto</span>
                        </div>
                        <Rating name="read-only" value={5} size="small" precision={0.5} readOnly />
                    </div>
                    <hr />

                    <div className="flex flex-wrap mt-2">
                        <div className="w-full md:w-5/12">
                            <ProductZoom />
                        </div>

                        <div className="w-full md:w-7/12">
                            <div className="flex items-center mb-3">
                                <span className="line-through text-base text-gray-500 mr-2">R$9,35</span>
                                <span className="text-red-600 text-lg font-bold">R$7,25</span>
                            </div>

                            <span className="bg-green-200 text-green-600 px-2 py-1 text-sm rounded">À VENDA</span>
                            <p className="mt-3">
                                Essa é uma dieta com índice e carga glicêmica baixo. Possui níveis otimizados de proteína. É ideal para cães obesos com dificuldade de emagrecer, cães diabéticos, pacientes oncológicos, pacientes que perderam massa muscular (sarcopênicos) e com disfunção cognitiva. Recomenda-se o acompanhamento veterinário e nutrológico do pet.<br />
                                Contém: acém, patinho, moela, quinoa, abóbora cabotiá, chuchu, pimentão vermelho, vagem, chia, psyllium husk, óleo de linhaça dourada, óleo de girassol prensado a frio, suplemento de vitaminas e minerais, sal rosa e salsinha.<br />
                                Níveis de garantia em 200g: NEM: 249,2kcal / Umidade: 102,8g / Carboidrato: 10g / Proteína: 34g / Gordura: 7,6g / Fibra: 4,96g / Sódio: 106,8mg
                            </p>

                            <div className="flex items-center mt-4">
                                <QuantityBox />
                                <Button className="btn-blue btn-lg btn-big btn-round ml-3">Adicionar ao carrinho</Button>
                            </div>

                            <div className="flex items-center mt-5 btModal">
                                <Button className="btn-round btn-sml"><IoMdHeart /> Adicionar a lista de desejos</Button>
                                <Button className="btn-round btn-sml ml-3"><MdOutlineCompareArrows /> COMPARAR</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProductModal;

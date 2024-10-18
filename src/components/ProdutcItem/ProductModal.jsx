import { useContext } from "react";
import { MyContext } from "../../App";

import { Button, Dialog } from "@mui/material";
import { IoCloseCircle } from "react-icons/io5";
import { Rating } from "@mui/material";
import { MdOutlineCompareArrows } from "react-icons/md";
import { IoMdHeart } from "react-icons/io";
import QuantityBox from "./QuantityBox";
import ProductZoom from "./ProductZoom";

const ProductModal = (props) =>{ 


    const context = useContext(MyContext)

    return(
        <>
            <Dialog open={context.isOpenProductModal} className="productModal" onClose={() => 
                context.setisOpenProductModal(false)}>
                    <Button className="close_" onClick={() => context.setisOpenProductModal(false)}>
                    <IoCloseCircle /></Button>
                    <h4 className="mb-1 font-bold text-xl text-black/80">Bovino Adulto 200g</h4>

                    <div className="flex items-center">
                        <div className="flex items-center mr-2">
                            <span>Bovino:</span>
                            <span className="ml-2"><b>Adulto</b></span>
                        </div>

                        <Rating name="read-only" value={5} size="small" precision={0.5} readOnly />
                    </div>

                    <hr />

                    <div className="row mt-2 productDetaileModal">
                        <div className="col-md-5">
                            <ProductZoom />  
                        </div> 


                        <div className="w-7/12">
                            <div className="flex items-center mb-2 p-4">
                                <span className="mr-2 lg text-base font-bold text-black/20 line-through">R$9,35</span>
                                <span className="text-red-600 lg text-base font-bold">R$7,25</span>
                            </div>

                            <span className="absolute top-5 left-5 z-50 bg-[#e5f8ed] text-[#16b858]">A VENDA</span>
                            <p>Descricao aqui</p>

                            <div className="flex items-center">
                                <QuantityBox />
                                <Button className="btn-blue btn-lg btn-big btn-round">Adicionar ao carrinho</Button>
                            </div>

                            <div className="flex items-center mt-3 action">
                                <Button className="btn-round btn-sml" variant="outlined"><IoMdHeart />&nbsp; Adicionar a lista de desejos</Button>
                                <Button className="btn-round btn-sml" variant="outlined"><MdOutlineCompareArrows />&nbsp; COMPARAR</Button>
                            </div>

                        </div>
                    </div>

            </Dialog>
        </>
    )
}

export default ProductModal;
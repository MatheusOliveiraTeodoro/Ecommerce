import Rating from '@mui/material/Rating'
import { SlSizeFullscreen } from "react-icons/sl";
import Suino1 from "../../assets/Suino_Sem_Fundo.png"
import Button from '@mui/material/Button'
import { FaCartShopping } from "react-icons/fa6";
import { useContext, useState } from 'react';
import { MyContext } from '../../App';
import ProductModal from './ProductModal';

      const ProductItem = (props) =>{

      const context = useContext(MyContext);

      const [isOpenProductModal, setisOpenProductModal] = useState(false);

      const viewProductDetails =(id)=>{
        context.setisOpenProductModal(true);
      }

      const closeProductModal = () =>{
        setisOpenProductModal(false);
      }

    return(
        <>
        <div className={`w-full h-auto border border-black/10 cursor-pointer relative rounded-sm mx-auto transition-all ease-in-out`}>
          <div className="overflow-hidden relative group">
                      <img src={Suino1} alt="" className="w-100 transition ease-in-out hover:opacity-100" />

                    <span className="inline-block pt-1 px-2 pb-1 absolute top-2 left-2 z-50 bg-[#2bbef9]
                    rounded-3xl text-[#fff] font-semibold text-xs align-baseline text-center whitespace-nowrap
                    leading-none">28%</span>

                    <div className="actions absolute top-5 right-3 flex flex-col gap-2 transition-all
                    ease-in-out opacity-0 group-hover:opacity-100 transform group-hover:translate-x-0 translate-x-3">
                      <Button onClick={() => viewProductDetails(1)}><SlSizeFullscreen className='text-black' /></Button> 
                      <Button><FaCartShopping className='text-black'  /></Button>
                    </div>

                    </div>

                    <div className="p-4">
                    <h4 className='text-sm font-semibold'>Suino Peles Sensiveis</h4>
                    <span className="text-green-500 block">Em Estoque</span>
                    <Rating className="mt-2" name="read-only" value={5} readOnly size="small" precision={0.5} 
                    />

                    <div className="flex">
                      <span className="text-base font-bold text-black/20 line-through">R$20,00</span>
                      <span className="text-base font-bold text-red-600 ml-2">R$14,00</span>
                    </div>

                    </div>

        </div>

          {
            isOpenProductModal===true && <ProductModal closeProductModal={closeProductModal} />
          }

        </>
    )
}

export default ProductItem
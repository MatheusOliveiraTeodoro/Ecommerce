import { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "../../components/Sidebar/sidebar";
import { Button } from "@mui/material";
import banner from "../../assets/banner-filtro.png";
import { IoIosMenu } from "react-icons/io";
import { CgMenuGridR } from "react-icons/cg";
import { HiViewGrid } from "react-icons/hi";
import { FaAngleDown } from "react-icons/fa6";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ProductItem from "../../components/ProdutcItem/ProductItem";
import Pagination from '@mui/material/Pagination';

const Loja = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [produtos, setProdutos] = useState([]);
    const openDropdown = Boolean(anchorEl);
    const [productView, setProductView] = useState('four');
    const [currentPage, setCurrentPage] = useState(1);
    const produtosPorPagina = 12;

    useEffect(() => {

        const fetchProducts = async () => {
            try {
                const response = await axios.get('http://localhost:3000/produto');
                console.log(response.data); 
                setProdutos(response.data);
            } catch (error) {
                console.error("Erro ao buscar produtos:", error);
            }
        };
        

        fetchProducts();
    }, []);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const indexOfLastProduct = currentPage * produtosPorPagina;
    const indexOfFirstProduct = indexOfLastProduct - produtosPorPagina;
    const currentProducts = produtos.slice(indexOfFirstProduct, indexOfLastProduct);


    const handlePageChange = (event, value) => {
        setCurrentPage(value);
    };

    return (
        <section className="p-9">
            <div className="container">
                <div className="flex gap-5">
                    <Sidebar />

                    <div className="w-4/5 pl-12 flex-none basis-4/5">
                        <img src={banner} style={{ borderRadius: '8px' }} className="w-full" alt="" />

                        <div className="mt-3 mb-3 flex items-center w-full h-auto bg-[#e4e5ea] pt-4 px-6">
                            <div className="flex items-center btnWrapper">
                                
                            <Button className={productView === 'one' ? 'act' : ''} onClick={() => setProductView('one')}>
                                <IoIosMenu />
                            </Button>

                            <Button className={productView === 'three' ? 'act' : ''} onClick={() => setProductView('three')}>
                                <HiViewGrid />
                            </Button>

                            <Button className={productView === 'four' ? 'act' : ''} onClick={() => setProductView('four')}>
                                <CgMenuGridR />
                            </Button>

                            </div>
                            <div className="ml-auto showByFilter">
                                <Button onClick={handleClick}>Mostrar 9<FaAngleDown /></Button>
                                <Menu
                                    className="w-full showPerPageDropdown"
                                    id="basic-menu"
                                    anchorEl={anchorEl}
                                    open={openDropdown}
                                    onClose={handleClose}
                                    MenuListProps={{
                                        'aria-labelledby': 'basic-button',
                                    }}
                                >
                                    <MenuItem onClick={handleClose}>10</MenuItem>
                                    <MenuItem onClick={handleClose}>20</MenuItem>
                                    <MenuItem onClick={handleClose}>30</MenuItem>
                                    <MenuItem onClick={handleClose}>40</MenuItem>
                                    <MenuItem onClick={handleClose}>50</MenuItem>
                                    <MenuItem onClick={handleClose}>60</MenuItem>
                                </Menu>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {currentProducts.length > 0 ? (
                                currentProducts.map((produto) => (
                                    <ProductItem key={produto.id} product={produto} />
                                ))
                            ) : (
                                <div>Carregando produtos...</div>
                            )}
                        </div>

                        <div className="flex items-center justify-center mt-3">
                            <Pagination 
                            count={Math.ceil(produtos.length / produtosPorPagina)} 
                            page={currentPage}
                            onChange={handlePageChange}
                            color="primary" 
                            size="large" 
                            
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Loja;

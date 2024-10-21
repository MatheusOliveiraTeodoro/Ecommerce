    import React, { useState } from 'react'; 
    import { FaAngleDown } from "react-icons/fa6";
    import { Button, Dialog } from "@mui/material";
    import { IoIosSearch } from "react-icons/io";
    import { IoIosCloseCircle } from "react-icons/io";
    import Slide from '@mui/material/Slide';

    const Transition = React.forwardRef(function Transition(props, ref) {
        return <Slide direction="up" ref={ref} {...props} />;
    });

    const CityDrop = () => {
        const [isOpenModal, setisOpenModal] = useState(false);
        const [abortController, setAbortController] = useState(null);
        const [entregas, setEntregas] = useState([]);
        const [searchTerm, setSearchTerm] = useState('');

        const fetchEntregas = async () => {
            const controller = new AbortController();
            setAbortController(controller);

            try {
                const response = await fetch('http://localhost:3000/preco-delivery');
                const data = await response.json();
                setEntregas(data);
            } catch (error) {
                if (error.name === 'AbortError') {
                    console.log('Requisição abortada');
                } else {
                    console.error('Erro ao buscar entregas:', error);
                }
            }
        };

        const handleCloseModal = () => {
            if (abortController) {
                abortController.abort(); 
            }
            setisOpenModal(false); 
        };

        const normalizeString = (str) => {
            return str.normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase();
        };

        const filteredEntregas = entregas.filter(entrega => 
            normalizeString(entrega.nome).includes(normalizeString(searchTerm))
        );

        return (
            <div className="sm:col-span-10">
                <Button 
                    className="cityDrop" 
                    onClick={() => {
                        setisOpenModal(true);
                        fetchEntregas();
                    }}
                >
                    <div className="flex flex-col pt-4">
                        <span className="text-xs capitalize text-black/40">Sua Localização</span>
                        <span className="text-sm capitalize text-[#233a95] mb-2 font-bold leading-4">Campinas</span>
                    </div>
                    <span className="ml-auto"><FaAngleDown className="opacity-70" /></span>
                </Button>   

                <Dialog 
                    onClose={handleCloseModal} 
                    open={isOpenModal} 
                    className="locationModal"
                    TransitionComponent={Transition}
                >
                    <h4 className="text-lg font-semibold mb-0">Escolha sua Localização de Delivery</h4>
                    <p className="text-black/70 text-sm">Escolha a sua localização e nós vamos especificar o preço para sua área.</p>
                    <Button className="close_" onClick={handleCloseModal}>
                        <IoIosCloseCircle className="text-2xl text-red-800" />
                    </Button>
                    <div className="headerSearch w-full h-14 bg-[#f3f4f7] pt-1 relative rounded-md border border-black/10">
                        <input
                            className="bg-transparent outline-none text-base text-black/80 w-full h-11 border-0 pt-0 px-5"
                            type="text"
                            placeholder="Pesquise sua área"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>

                    <ul className="mb-0 cityList max-h-96 overflow-x-hidden overflow-y-scroll mt-1">
                        {filteredEntregas.map((entrega) => (
                            <li key={entrega.id} className="w-full list-none">
                                <Button onClick={handleCloseModal}>
                                    <div className="flex flex-col">
                                        <span className="text-sm capitalize flex text-sky-600 font-bold">{entrega.nome}</span>
                                        <span className="text-xs text-black/40">Preço: R${entrega.preco}, Dias: {entrega.dias_entrega}</span>
                                    </div>
                                </Button>
                            </li>
                        ))}
                    </ul>
                </Dialog>
            </div>
        );
    };

    export default CityDrop;

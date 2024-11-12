import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import gif2 from '../../assets/gif2.gif';
import natal from '../../assets/gif_natal.gif'

const Sidebar = ({ onFilterChange }) => {
    const [value, setValue] = useState([10, 170]);

    return (
        <div className='w-1/5 flex-none basis-1/4 max-h-96'>
            <div className='sticky top-1/4'>
                <div className='mb-9'>
                    <h6 className='font-bold text-sm mb-4'>CATEGORIA DE PRODUTOS</h6>
                    <div className='scroll overflow-y-scroll overflow-x-hidden max-h-48'>
                        <ul className='mb-0'>
                            <li className='list-none -mb-4 w-full'>
                                <FormControlLabel className='w-full' control={<Checkbox />} label="BOVINO" />
                            </li>
                            <li className='list-none -mb-4 w-full'>
                                <FormControlLabel className='w-full' control={<Checkbox />} label="FRANGO" />
                            </li>
                            <li className='list-none -mb-4 w-full'>
                                <FormControlLabel className='w-full' control={<Checkbox />} label="SUÍNO" />
                            </li>
                            <li className='list-none -mb-4 w-full'>
                                <FormControlLabel className='w-full' control={<Checkbox />} label="PEIXE" />
                            </li>
                        </ul>
                    </div>
                </div>

                <div className='mb-9'>
                    <h6 className='font-bold text-sm mb-4'>FILTRAR POR PREÇO</h6>
                    <RangeSlider 
                        value={value} 
                        onInput={setValue} 
                        min={10} 
                        max={170} 
                        step={1} 
                    />
                    <div className='flex pt-2 pb-2'>
                        <span>De: <strong className='text-[#343a40]'>R$ {value[0]}</strong></span>
                        <span className='ml-auto'>Até: <strong className='text-[#343a40]'>R$ {value[1]}</strong></span>
                    </div>
                </div>

                <div className='mb-9'>
                    <h6 className='font-bold text-sm mb-4'>CATEGORIA DE PRODUTOS</h6>
                    <div className='scroll max-h-48 overflow-y-scroll overflow-x-hidden'>
                        <ul className='mb-0'>
                            <li className='list-none -mb-4 w-full'>
                                <FormControlLabel className='w-full' control={<Checkbox />} label="Em estoque" />
                            </li>
                            <li className='list-none -mb-4 w-full'>
                                <FormControlLabel className='w-full' control={<Checkbox />} label="À venda" />
                            </li>
                        </ul>
                    </div>
                </div>

                <div className='mb-9'>
                    <h6 className='font-bold text-sm mb-4'>SUBCATEGORIAS</h6>
                    <div className='scroll overflow-y-scroll overflow-x-hidden max-h-48'>
                        <ul className='mb-0'>
                            {/* Repetição de subcategorias com Checkbox */}
                            {["Adulto", "Filhote", "Senior", "Grain Free", "Tradicional", "Baixo Fósforo", "Essencial", "Crua", "Low Carb", "Low Fat", "Peles Sensíveis", "Ultra Low Carbs", "Petiscos", "Especiais"].map((item) => (
                                <li className='list-none -mb-4 w-full' key={item}>
                                    <FormControlLabel className='w-100' control={<Checkbox />} label={item} />
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <Link to="#"><img src={gif2} className='w-full gif-banner' alt="" /></Link>
                <Link to="#"><img src={natal} className='w-full gif-banner mt-10' alt="" /></Link>

            </div>
        </div>
    );
}

export default Sidebar;

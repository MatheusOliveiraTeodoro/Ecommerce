import { Button } from "@mui/material";
import { useState } from "react";
import { IoMenuOutline } from "react-icons/io5";
import { GoTriangleDown } from "react-icons/go";
import { Link } from "react-router-dom";

const Navigation = () => {
    const [isopenSidebarVal, setisopenSidebarVal] = useState(false);
    const [isSubMenuOpen, setIsSubMenuOpen] = useState(false); // Estado para o submenu "Loja"
    const [bovinoSubMenuOpen, setBovinoSubMenuOpen] = useState(false); // Estado para submenu "BOVINO"
    const [suinoSubMenuOpen, setSuinoSubMenuOpen] = useState(false); // Estado para submenu "SUÍNO"
    const [frangoSubMenuOpen, setFrangoSubMenuOpen] = useState(false); // Estado para submenu "FRANGO"
    const [peixeSubMenuOpen, setPeixeSubMenuOpen] = useState(false); // Estado para submenu "PEIXE"

    return (
        <nav className="border-b border-black/30">
            <div className="container mx-auto sm:px-4 lg:px-8 mb-3">
                <div className="flex flex-wrap items-center justify-between">
                    {/* Botão Categorias */}
                    <div className="flex-shrink-0 w-[20%]">
                        <div className="relative">
                            <Button className="allCatTab flex items-center" onClick={() => setisopenSidebarVal(!isopenSidebarVal)}>
                                <span className="text-xl"><IoMenuOutline className="text-xl" /></span>
                                <span className="font-semibold">CATEGORIAS</span>
                                <span className="ml-1 text-lg"><GoTriangleDown /></span>
                            </Button>
                            {/* Sidebar de Categorias */}
                            <div className={`sidebarNav w-full h-0 opacity-0 bg-[#fff] absolute top-full left-0 border border-black/10 pt-4 px-0 transition-all z-50 ${isopenSidebarVal ? 'open h-auto opacity-100' : 'invisible'}`}>
                                <ul>
                                    {/* Categoria BOVINO */}
                                    <li
                                        onMouseEnter={() => setBovinoSubMenuOpen(true)}
                                        onMouseLeave={() => setBovinoSubMenuOpen(false)}
                                        className="w-full list-none pt-0 px-2 static"
                                    >
                                        <Link to="/"><Button>BOVINO</Button></Link>
                                        <div className={`submenu absolute top-0 left-full w-60 h-auto bg-[#fff] z-50 border-l border-black/10 pt-5 transition-all ease-in-out 
                                        ${bovinoSubMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
                                            <Link to="/">Petiscos</Link>
                                            <Link to="/">Dietas Regulares</Link>
                                            <Link to="/">Dietas Preescritas</Link>
                                        </div>
                                    </li>

                                    {/* Categoria SUÍNO */}
                                    <li
                                        onMouseEnter={() => setSuinoSubMenuOpen(true)}
                                        onMouseLeave={() => setSuinoSubMenuOpen(false)}
                                        className="w-full list-none pt-0 px-2 relative"
                                    >
                                        <Link to="/"><Button>SUÍNO</Button></Link>
                                        <div className={`submenu absolute top-0 left-full w-60 h-auto bg-[#fff] z-50 border-l border-black/10 pt-5 transition-all ease-in-out 
                                        ${suinoSubMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
                                            <Link to="/">Petiscos</Link>
                                            <Link to="/">Dietas Regulares</Link>
                                            <Link to="/">Dietas Preescritas</Link>
                                        </div>
                                    </li>

                                    {/* Categoria FRANGO */}
                                    <li
                                        onMouseEnter={() => setFrangoSubMenuOpen(true)}
                                        onMouseLeave={() => setFrangoSubMenuOpen(false)}
                                        className="w-full list-none pt-0 px-2 relative"
                                    >
                                        <Link to="/"><Button>FRANGO</Button></Link>
                                        <div className={`submenu absolute top-0 left-full w-60 h-auto bg-[#fff] z-50 border-l border-black/10 pt-5 transition-all ease-in-out 
                                        ${frangoSubMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
                                            <Link to="/">Petiscos</Link>
                                            <Link to="/">Dietas Regulares</Link>
                                            <Link to="/">Dietas Preescritas</Link>
                                        </div>
                                    </li>

                                    {/* Categoria PEIXE */}
                                    <li
                                        onMouseEnter={() => setPeixeSubMenuOpen(true)}
                                        onMouseLeave={() => setPeixeSubMenuOpen(false)}
                                        className="w-full list-none pt-0 px-2  relative"
                                    >
                                        <Link to="/"><Button>PEIXE</Button></Link>
                                        <div className={`submenu absolute top-0 left-full w-60 h-auto bg-[#fff] z-50 border-l border-black/10 pt-5 transition-all ease-in-out 
                                        ${peixeSubMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
                                            <Link to="/">Petiscos</Link>
                                            <Link to="/">Dietas Regulares</Link>
                                            <Link to="/">Dietas Preescritas</Link>
                                        </div>
                                    </li>

                                   {/* Outros itens */}
                                   {['FILHOTE','ADULTO','SENIOR','TRADICIONAL','ESSENCIAL', 
                                        'GRAIN FREE','BAIXO FÓSFORO','PELES SENSIVEIS','LOW FAT', 
                                        'LOW CARBO','ULTRA LOW CARB','CRUA','PETISCOS','MOLHOS',
                                        'ESPECIAIS','KITS','PRESCRITA'].map((item) => (
                                        <li key={item}><Link to="/"><Button>{item}</Button></Link></li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Menu de Navegação */}
                    <div className="flex-grow w-auto navPart2">
                        <ul className="flex justify-end space-x-4">
                            <li><Link to="/"><Button>Home</Button></Link></li>

                            {/* Botão Loja com Submenu */}
                            <li
                                onMouseEnter={() => setIsSubMenuOpen(true)}
                                onMouseLeave={() => setIsSubMenuOpen(false)}
                                className="relative"
                            >
                                <Link to="/Loja"><Button>Loja</Button></Link>
                                <div className={`submenu shadow absolute top-full left-0 w-60 h-auto bg-[#fff] z-50 border-l border-black/10 pt-5 transition-all ease-in-out 
                                ${isSubMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
                                    <Link to="/"><Button>Petiscos</Button></Link>
                                    <Link to="/"><Button>Dietas Regulares</Button></Link>
                                    <Link to="/"><Button>Dietas Preescritas</Button></Link>
                                </div>
                            </li>

                            <li><Link to="/Contato"><Button>Contato</Button></Link></li>
                            <li><Link to="/"><Button>Blog</Button></Link></li>
                            <li><Link to="/FAQ"><Button>FAQ</Button></Link></li>
                            <li><Link to="/"><Button>Seja um parceiro</Button></Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navigation;

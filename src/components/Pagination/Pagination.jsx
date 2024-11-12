import React, { useState, useContext } from 'react';
import ProductItem from './ProductItem';
import PetiscoItem from './PetiscoItem';
import { MyContext } from '../../App';

const PaginationComponent = ({ items, itemsPerPage }) => {
    const context = useContext(MyContext);
    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = Math.ceil(items.length / itemsPerPage);

    const handleNext = () => {
        if (currentPage < totalPages) {
            setCurrentPage(prev => prev + 1);
        }
    };

    const handlePrevious = () => {
        if (currentPage > 1) {
            setCurrentPage(prev => prev - 1);
        }
    };

    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentItems = items.slice(startIndex, startIndex + itemsPerPage);

    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {currentItems.map(item => (
                    item.tipo === 'produto' ? (
                        <ProductItem key={item.id} product={item} />
                    ) : (
                        <PetiscoItem key={item.id} petisco={item} />
                    )
                ))}
            </div>

            <div className="flex justify-between mt-4">
                <button onClick={handlePrevious} disabled={currentPage === 1}>
                    Anterior
                </button>
                <span>Página {currentPage} de {totalPages}</span>
                <button onClick={handleNext} disabled={currentPage === totalPages}>
                    Próximo
                </button>
            </div>
        </div>
    );
};

export default PaginationComponent;

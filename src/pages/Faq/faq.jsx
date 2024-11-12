import { useState } from "react";
import testimonial from "../../assets/Testimonial.png";
import { FaLongArrowAltDown } from "react-icons/fa";

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const questionsAndAnswers = [
        {
            question: "Como é entregue a comida e qual a validade?",
            answer: "Nossas refeições são entregues porcionadas para cada dia de consumo, refrigeradas/congeladas e embaladas a vácuo. Duram 6 meses no freezer e 2 dias na geladeira.",
        },
        {
            question: "Como é feita a transição de ração para Alimentação Natural?",
            answer: "A transição de ração para Alimentação Natural (AN) deve ser feita de forma gradativa para que não haja nenhum distúrbio gastrointestinal. Recomendamos seguir o seguinte fluxo:\n\nDias 1 e 2: 75% ração e 25% AN.\n\nDias 3 e 4: 50% ração e 50% AN.\n\nDias 5 e 6: 25% ração e 75% AN.\n\nDia 7 em diante: 100% AN.\n\nCaso tenha alguma dúvida, por favor, entre em contato que esclareceremos.",
        },
        {
            question: "Vocês têm vales-presente?",
            answer: "Caso queira presentear alguém com as refeições, basta entrar em contato, selecionar o tipo de refeição que deseja, informar quantas quer e efetuar a compra. Após, entregaremos no endereço solicitado.",
        },
        {
            question: "Quais são as formas de pagamento?",
            answer: "Aceitamos transferência bancária prévia, PIX, Cartão de crédito ou dinheiro no momento do recebimento das refeições.",
        },
        {
            question: "Onde vocês entregam?",
            answer: "Entregamos nas seguintes cidades: Americana, Amparo, Arthur Nogueira, Atibaia, Bragança Paulista, Cabreúva, Caieiras, Cajamar, Campinas, Campo Limpo Paulista, Cosmópolis, Holambra, Hortolândia, Indaiatuba, Itatiba, Itupeva, Jaguariúna, Jundiaí, Limeira, Louveira, Nova Odessa, Paulínia, Pedreira, Piracicaba, Rafard, Rio Claro, Santa Bárbara D'Oeste, São Paulo capital*, Sorocaba, Sumaré, Valinhos, Várzea Paulista e Vinhedo.\n\n* Em São Paulo capital, favor nos chamar no WhatsApp para confirmar se atendemos seu bairro.",
        },
        {
            question: "Qual o prazo de entrega?",
            answer: "Após a confirmação do pagamento, entregamos em até 3 dias úteis. Toda nossa produção é feita fresquinha. Por isso esse prazo.",
        },
    ];

    const toggleAnswer = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <>
            <div className="flex flex-col items-center p-6">
                <div className="relative w-4/5 h-auto bg-sky-100 rounded-2xl p-4 flex flex-col justify-between">
                    <div className="absolute top-4 left-4 bg-sky-200 text-black/50 font-semibold text-sm rounded-md px-2">FAQ</div>
                    <div className="flex flex-wrap mt-10">
                        <h4 className="text-blue-950 font-bold text-5xl w-full capitalize">Vamos falar sobre<br /> Alimentação Natural</h4>
                        <div className="text-gray-700 w-48 mt-6">Aqui nós promovemos soluções para as situações mais comuns. Desde registro e acesso à sua conta até pagamento e inscrição.</div>
                    </div>
                    <div className="flex items-center mt-6">
                        <img src={testimonial} alt="Ajuda" className="w-1/3 ml-64 mb-36 object-cover rounded-md absolute" />
                        <div className="text-gray-700 w-48 relative">Nós promovemos auxilio das 7h - 17h com suas duvidas sobre AN</div>
                    </div>
                </div>

                <div className="bg-blue-700 w-4/5 mt-6 p-6 rounded-lg">
                    <h3 className="text-white text-4xl font-semibold">Geral</h3>
                    <div className="mt-4">
                        {questionsAndAnswers.map((item, index) => (
                            <div key={index}>
                                <h2 
                                    className="font-semibold text-white flex items-center justify-between cursor-pointer"
                                    onClick={() => toggleAnswer(index)}
                                >
                                    {item.question}
                                    <FaLongArrowAltDown className={`ml-2 transform transition-transform ${openIndex === index ? 'rotate-180' : ''}`} />
                                </h2>
                                {openIndex === index && (
                                    <div className="text-gray-200 mt-2">{item.answer}</div>
                                )}
                                {index < questionsAndAnswers.length - 1 && <hr className="border-white border-opacity-30 my-2" />}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default FAQ;

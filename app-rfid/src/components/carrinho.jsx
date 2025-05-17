import React, { useEffect, useState } from 'react';

export default function Carrinho() {
    const [produtos, setProdutos] = useState([]);
    const [total, setTotal] = useState(0);

    const adicionarProduto = (produto) => {
        setProdutos((prev) => [...prev, produto]);
    };

    useEffect(() => {
        const novoTotal = produtos.reduce((acc, item) => acc + item.preco, 0);
        setTotal(novoTotal);
    }, [produtos]);

    return (
        <div className='p-4 max-w-md mx-auto'>
            <h1 className='text-2x1 font-bold mb-4'>Cesta #00123</h1>
            <ul className='mb-4'>
                {produtos.map((item, index) => (
                    <li key={index} className='flex justify-between border-b py-2'>
                        <span>{item.nome}</span>
                        <span>R$ {item.preco.toFixed(2)}</span>
                    </li>
                ))}
            </ul>

            <div className='font-semibold text-right mb-4'>
                Total: R$ {total.toFixed(2)}
            </div>

            <button 
                className='bg-green-600 text-white px-4 py-2 rounded'
                onClick={() => alert('Compra finalizada!')}    
            >
                Finalizar compra
            </button>

            <div className='mt-6'>
                <h2 className='font-bold mb-2'>Simular leitura RFID</h2>
                <button 
                    className='bg-blue-500 text-white px-2 py-1 mr-2 rounded'
                    onClick={() => adicionarProduto({ nome: 'Arroz', preco: 20 })}    
                >
                    Arroz
                </button>
                <button 
                    className='bg-blue-500 text-white px-2 py-1 mr-2 rounded'
                    onClick={() => adicionarProduto({ nome: 'Feijão', preco: 15 })}    
                >
                    Feijão
                </button>
                <button 
                    className='bg-blue-500 text-white px-2 py-1 mr-2 rounded'
                    onClick={() => adicionarProduto({ nome: 'Macarrão', preco: 10 })}    
                >
                    Macarrão
                </button>
            </div>
        </div>
    )
}
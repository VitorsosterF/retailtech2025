import React, { useEffect, useState } from 'react';

export default function Carrinho() {
    const [produtos, setProdutos] = useState([]);
    const [total, setTotal] = useState(0);
    const cestaId = 'cesta_123';

    useEffect(() => {
        async function fetchProdutos() {
            try {
                const res = await fetch('https://backend-rfid-2vqp.onrender.com/api/cesta/cliente123');
                const data = await res.json();
                if (data.produtos && Array.isArray(data.produtos)) {
                    setProdutos(data.produtos);
                }
            } catch (err) {
                console.error('Erro ao buscar produtos:', err);
            }
        }

        fetchProdutos();
    }, []);

    useEffect(() => {
        const novoTotal = produtos.reduce((acc, item) => acc + item.preco, 0);
        setTotal(novoTotal);
    }, [produtos]);

    const adicionarProduto = (produto) => {
        setProdutos((prev) => [...prev, produto]);
    };

    const handleDelete = () => {
        setProdutos([]);
    };

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

            <div className='items-center justify-between'>
                <button 
                    className='bg-green-600 mr-2 text-white px-4 py-2 rounded'
                    onClick={() => alert('Compra finalizada!')}    
                >
                    Finalizar compra
                </button>

                <button
                    className='bg-green-600 text-white px-4 py-2 rounded'
                    onClick={handleDelete}
                >
                    Limpar tudo
                </button>
            </div>
        </div>
    )
}
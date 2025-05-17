import React, { useEffect, useState } from 'react';

export default function Carrinho() {
    const [produtos, setProdutos] = useState([]);
    const [total, setTotal] = useState(0);
    const cestaId = 'cliente123';

    useEffect(() => {
        fetch(`https://backend-rfid-2vqp.onrender.com/api/cesta/${cestaId}`)
            .then(response => {
                if (!response.ok) throw new Error('Erro ao buscar produtos');
                return response.json();
            })
            .then(data => {
                setProdutos(data.produtos || []);
            })
            .catch(error => {
                console.error('Erro ao carregar produtos: ', error);
            });
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
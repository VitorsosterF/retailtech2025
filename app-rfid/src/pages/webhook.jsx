import { useEffect } from "react";

function WebhookPage() {
    useEffect(() => {
        const produto = {
            nome: 'Camisa Slim (Preta)',
            preco: 129.99,
            id_cesta: 'cesta_123'
        };

        const url = `https://backend-rfid-2vqp.onrender.com/webhook/adicionar-item?id_cesta=${encodeURIComponent(id_cesta)}&nome=${encodeURIComponent(nome)}&preco=${preco}`;

        const cestaId = 'cesta_123';

        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Erro na requisição');
                }
                return response.json();
            })
            .then(data => {
                console.log('Produto adicionado com sucesso!', data);
            })
            .catch(error => {
                console.error('Erro ao adicionar produto:', error);
            });
    }, []);

    return (
        <div className="bg-grey-600 p-2 text-center">
            <h1 className="font-bold">Produto adicionado ao carrinho!</h1>
        </div>
    );
}

export default WebhookPage
import { useEffect } from "react";

function WebhookPage() {
    useEffect(() => {
        const produto = {
            id_cesta: 'cesta_123',
            nome: 'Camisa Slim (Preta)',
            preco: 129.99
        };

        fetch('https://backend-rfid-2vqp.onrender.com/webhook/adicionar-item', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(produto)
        })
        .then(res => res.json())
        .then(data => console.log('Item adicionado com sucesso:', data))
        .catch(err => console.error('Erro ao adicionar item:', err));
    }, []);

    return (
        <div className="bg-grey-600 p-2 text-center">
            <h1 className="font-bold">Produto adicionado ao carrinho!</h1>
        </div>
    );
}

export default WebhookPage;

import { useEffect } from "react";

function WebhookPage() {
    useEffect(() => {
        const produto = {
            nome: 'Produto NFC',
            preco: 9.99
        };

        const cestaId = 'cesta_123';

        fetch(`https://backend-rfid-2vqp.onrender.com/api/cesta/${cestaId}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ produtos: [produto] })
        })
            .then(response => response.json())
            .then(data => {
                console.log('Produto adicional!', data);
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
import { useEffect } from "react";

function WebhookPage() {
    useEffect(() => {
        
        const url = 'https://backend-rfid-2vqp.onrender.com/webhook/adicionar-item?id_cesta=cesta_123&nome=Camisa%20Slim%20(Preta)&preco=129.99';

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
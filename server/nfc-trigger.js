import { useEffect } from "react";
import { useRouter } from "next/router";

export default function NFCTrigger() {
  const router = useRouter();

  useEffect(() => {
    const { produto, cesta } = router.query;

    if (!produto || !cesta) return;

    
    const API_URL = `https://backend-rfid-2vqp.onrender.com/api/cesta/${cesta}`;

    
    fetch(API_URL)
      .then((res) => res.ok ? res.json() : { produtos: [] })
      .then((data) => {
        const produtosAtuais = data.produtos || [];

        
        const novaCesta = [...produtosAtuais, { id: produto, qtd: 1 }];

        
        return fetch(API_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ produtos: novaCesta }),
        });
      })
      .then(() => {
        
        router.push(`/carrinho?id=${cesta}`);
      });
  }, [router.query]);

  return <p>Adicionando item ao carrinho...</p>;
}

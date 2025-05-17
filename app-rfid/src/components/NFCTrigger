import { useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";

export default function NFCTrigger() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    const produto = searchParams.get("produto");
    const cesta = searchParams.get("id");

    if (!produto || !cesta) return;

    console.log("📲 Tag NFC lida com sucesso!");
    console.log("🛒 Produto:", produto);
    console.log("🧺 Cesta:", cesta);

    setTimeout(() => {
      navigate(`/carrinho?id=${cesta}`);
    }, 2000);
  }, [searchParams, navigate]);

  return <p>Lendo tag NFC... redirecionando</p>;
}

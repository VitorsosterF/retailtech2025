import { useEffect } from "react";
import { useRouter } from "next/router";

export default function NFCTrigger() {
  const router = useRouter();

  useEffect(() => {
    const { produto, cesta } = router.query;

    // Espera o router carregar
    if (!produto || !cesta) return;

    // ✅ Exibe no console se a URL foi acessada corretamente
    console.log("📲 Tag NFC lida com sucesso!");
    console.log("🛒 Produto:", produto);
    console.log("🧺 Cesta:", cesta);

    // Redireciona para o carrinho depois de 2 segundos
    setTimeout(() => {
      router.push(`/carrinho?id=${cesta}`);
    }, 2000);
  }, [router.query]);

  return <p>Lendo tag NFC... redirecionando</p>;
}

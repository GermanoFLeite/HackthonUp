import { Grid, GridItem, Box, Flex } from "@chakra-ui/react";
import React from "react";
import NewsCard from "../Components/NewsCard";
import woman from "../assets/woman.webp";
import loja from "../assets/lojapm.jpg";

function Noticias() {
  return (
    <>
      <Flex>
        <Box p={10} w="60%">
          <NewsCard
            titleNews={
              "Mulheres em cargos de liderança impulsionam agenda ESG."
            }
            imageUrl={woman}
            textButton={"Ver Notícia"}
            news={
              "Para especialistas, a presença feminina em altas posições traz boa perspectiva para as políticas das empresas"
            }
            textModalNews={
              "“Depois de uma trajetória como diretora comercial da Pague Menos, eu já sentei na mesa com diretores de multinacionais que ficaram aguardando e perguntando que horas chegaria o chefe. Eu respondi: “A chefe sou eu. É comigo que você vai negociar'”, relembra Rodrigues.Essa situação não foi isolada. Rodrigues aponta que, independentemente do cargo que ocupam, as mulheres costumam carregar mais de uma responsabilidade além do trabalho, como o cuidado com os filhos. “Eu já precisei sair de uma reunião para levar um filho ao médico. Tive que me justificar várias vezes para isso. Pensava: ‘como vou dizer? Como vai ser?’, ressalta a presidente.Se a necessidade partisse de um homem, ela acredita que a postura das pessoas no trabalho seria diferente. “Poderiam dizer: “Isso que é um pai”. É como se fosse uma tarefa extra curricular para o homem ou um ponto a mais, enquanto para nós é uma questão de organização”, afirma.  Confira completo em https://einvestidor.estadao.com.br/comportamento/mulheres-cargos-lideranca-impulsionam-esg"
            }
            closeButton={"fechar"}
          />
        </Box>

        <Box p={10} w="60%">
          <NewsCard
            titleNews={"Pague Menos cresce mais."}
            imageUrl={loja}
            textButton={"Ver Notícia"}
            news={"Pague Menos disparara"}
            textModalNews={
              "As ações da rede de farmácias Pague Menos dispararam 9,6% na terça-feira (18) após o anúncio da compra da rede Extrafarma, pertencente ao grupo Ultra, por R$ 700 milhões. O Ultra havia comprado a Extrafarma em 2013 por R$ 1 bilhão, buscando sinergias com sua rede de postos de combustíveis, mas o negócio acabou não dando os resultados esperados. Com a venda, a Ultrapar deve dedicar-se à expansão no setor de energia, disputando refinarias a serem vendidas pela Petrobras. Com a aquisição, a Pague Menos se torna a segunda maior varejista de remédios do País em número de lojas, perdendo apenas para a Raia Drogasil. Ela também eleva sua participação de mercado nas regiões Norte e Nordeste. No Nordeste, a presença sobe de 19,5% para 23,3%. Na região Norte, a participação de mercado quase dobra, subindo de 9,9% para 18,9%. O market share nacional cresce de 5,7% para 7%. A transferência da gestão da Extrafarma à Pague Menos ocorrerá após a conclusão das condições precedentes da operação, incluindo sua aprovação pelo Conselho Administrativo de Defesa Econômica (Cade). "
            }
            closeButton={"fechar"}
          />
        </Box>
      </Flex>
    </>
  );
}

export default Noticias;

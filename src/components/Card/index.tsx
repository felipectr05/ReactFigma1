import * as S from "./styles";
export interface ICard {
  data: string
  titulo: string
  mensagem: string
}
export const Card = ({ data, titulo, mensagem }: ICard) => {
  return (
    <S.Aside>
      <h3>
        <strong>Ligue:0800 4002-8922 </strong> {data}
      </h3>
      <h4>Para  {titulo}</h4>
      <p>Mensagem: {mensagem}</p>
    </S.Aside>
  );
};

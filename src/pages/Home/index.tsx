import * as S from './styles'
import araras from "../../assets/Araras.jpg"
import floresta from "../../assets/floresta.jpg"
export function Home() {
  return (
    <S.Section>
      <img src={araras} alt="araras na esquerda" />
      <img src={floresta} alt="Floresta na direita" />
      <h1></h1>
    </S.Section>

  )
}

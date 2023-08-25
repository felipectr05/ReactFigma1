import * as S from "./styles"

export function Header() {
  return (
    <S.Header>
     <h1>S.O.S Amazônia</h1>
      <S.NavBar>
        <ul>
          <li>
            <a href="/">Página Inicial</a>
          </li>
          <li>
            <a href="/list">Lista</a>
          </li>
        </ul>
      </S.NavBar>
    </S.Header>
  )
}
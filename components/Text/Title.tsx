import { FC } from 'react'
import { Subtitle, Title, TitleWrapper } from './title.style'

interface IPageTitle {
  title? : string;
  subtitle? : string;
}

const PageTitle:FC<IPageTitle> = ({title, subtitle}) => {
  return (
    <TitleWrapper>
      <Subtitle>{subtitle}</Subtitle>
      <Title>{title}</Title>
    </TitleWrapper>
  )
}

export default PageTitle
import { FC } from 'react'
import { Growing } from '../../styles/global.animation';
import { SlideUpText } from './text.animation';
import { Subtitle, Title, TitleWrapper } from './title.style'

interface IPageTitle {
  title : string;
  subtitle : string;
}

const PageTitle:FC<IPageTitle> = ({title, subtitle}) => {
  return (
    <TitleWrapper>
      <Subtitle><SlideUpText>{subtitle}</SlideUpText></Subtitle>
      <Title variants={Growing}>{title}</Title>
    </TitleWrapper>
  )
}

export default PageTitle
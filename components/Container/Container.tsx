import React, { FC, ReactNode } from 'react'
import { RFContainer } from './container.style';

interface IContainer {
    children : ReactNode;
}

const Container:FC<IContainer>= ({children}) => {
  return (
    <RFContainer>{children}</RFContainer>
  )
}

export default Container
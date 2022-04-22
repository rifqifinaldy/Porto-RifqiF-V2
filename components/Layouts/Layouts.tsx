import React, { FC, ReactNode } from 'react'
import { RFContainer, RFGrid } from './layouts.style';

interface IChildren {
    children? : ReactNode;
}

export const Container:FC<IChildren>= ({children}) => {
  return (
    <RFContainer>{children}</RFContainer>
  )
}

export const Grid:FC<IChildren>=({children}) => {
  return (
    <RFGrid>{children}</RFGrid>
  )
}

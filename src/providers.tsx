'use client'

import StyledComponentsRegistry from './lib/registry'
import { GlobalStyle } from './app/GlobalStyle'

function Providers(props: React.PropsWithChildren) {
  return (
    <StyledComponentsRegistry>
      <GlobalStyle />
      {props.children}
    </StyledComponentsRegistry>
  )
}

export default Providers

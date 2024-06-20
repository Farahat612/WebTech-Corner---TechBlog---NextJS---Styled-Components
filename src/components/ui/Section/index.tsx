import { SectionContainer } from './styled'

interface SectionProps {
  children: React.ReactNode
}

const Section = ({ children }: SectionProps) => {
  return <SectionContainer>{children}</SectionContainer>
}

export default Section

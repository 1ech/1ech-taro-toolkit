import styled from '@pancakeswap/mp-styled'
import { SpaceProps } from 'styled-system'
import { CardTheme } from './types'

export interface CardHeaderProps extends SpaceProps {
  variant?: keyof CardTheme['cardHeaderBackground']
}

const CardHeader = styled.div<CardHeaderProps>`
  background: ${({ theme, variant = 'default' }) => theme.card.cardHeaderBackground[variant]};
  border-radius: ${({ theme }) => `${theme.radii.card} ${theme.radii.card} 0 0`};
`
CardHeader.defaultProps = {
  p: '24px',
}

export default CardHeader

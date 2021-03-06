import styled from '@pancakeswap/mp-styled'
import { PancakeTheme } from '../../theme'
import { Colors } from '../../theme/types'
import { scaleVariants, styleVariants } from './theme'
import { TagProps, variants } from './types'

interface ThemedProps extends TagProps {
  theme: PancakeTheme
}

const getOutlineStyles = ({ outline, theme, variant: variantKey = variants.PRIMARY }: ThemedProps) => {
  if (outline) {
    const themeColorKey = styleVariants[variantKey].backgroundColor as keyof Colors
    const color = theme.colors[themeColorKey]

    return `
      color: ${color};
      background: ${theme.colors.background};
      border: 2px solid ${color};
    `
  }

  return ''
}

export const StyledTag = styled.div<TagProps>`
  align-items: center;
  border-radius: 16px;
  color: #ffffff;
  display: inline-flex;
  font-weight: 400;
  white-space: nowrap;
  ${({ textTransform }) => textTransform && `text-transform: ${textTransform};`}
  ${({ scale }) => scaleVariants[scale]}
  ${({ variant }) => styleVariants[variant]}
  ${getOutlineStyles}
`

export default null

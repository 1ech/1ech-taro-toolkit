import React from 'react'
import { ThemeSwitcher } from '@pancakeswap/mp-uikit'
import Provider from 'src/Provider'
export default function Page() {
  const [isDark, setIsDark] = React.useState(false)
  const toggleTheme = React.useCallback(() => setIsDark(!isDark), [isDark])
  return (
    <Provider>
      <ThemeSwitcher isDark={isDark} toggleTheme={toggleTheme} />
    </Provider>
  )
}

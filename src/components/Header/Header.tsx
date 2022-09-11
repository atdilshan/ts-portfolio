import clsx from 'clsx'

import ThemeSwitch from './ThemeSwitch'
import LanguageSwitch from './LanguageSwitch'

export interface Props {
  className?: string
}

const Header = ({ className }: Props) => {
  return (
    <div className={clsx(className)}>
      <ThemeSwitch/>
      <LanguageSwitch/>
    </div>
  )
}

export default Header

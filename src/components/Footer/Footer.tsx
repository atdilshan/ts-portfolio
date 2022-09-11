import clsx from 'clsx'

import SocialMedia from './SocialMedia'
import SchoolInfo from './SchoolInfo'

export interface Props {
  className?: string
}

const Footer = ({ className }: Props) => {
  return (
    <div className={clsx(className)}>
      <SchoolInfo/>
      <SocialMedia/>
    </div>
  )
}

export default Footer

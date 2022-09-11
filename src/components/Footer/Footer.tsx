import clsx from 'clsx'

import SocialMedia from './SocialMedia'

export interface Props {
  className?: string
}

const Footer = ({ className }: Props) => {
  return (
    <div className={clsx(className)}>
      <SocialMedia/>
    </div>
  )
}

export default Footer

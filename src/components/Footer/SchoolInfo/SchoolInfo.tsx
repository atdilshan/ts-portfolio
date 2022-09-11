import clsx from 'clsx'

export interface Props {
  className?: string
}

const SchoolInfo = ({ className }: Props) => {
  return (
    <div className={clsx(className)}>
      <span>SchoolInfo</span>
    </div>
  )
}

export default SchoolInfo

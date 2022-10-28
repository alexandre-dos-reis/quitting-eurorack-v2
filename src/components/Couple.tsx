import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export const Couple = ({ children }: Props) => {
  return <div className="grid grid-cols-2 justify-center items-center gap-x-5 md:block">{children}</div>
}

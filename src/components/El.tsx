import { ReactNode } from 'react'

export function El({ children }: { children: ReactNode }) {
  return <div className="text-start md:text-center">{children}</div>
}

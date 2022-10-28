import { ReactNode } from 'react'

export function Tag({ children, bgColor }: { children: ReactNode; bgColor: string }) {
  return (
    <div className={`rounded-xl text-end md:text-center text-gray-800 md:mb-3`}>
      <span className={`${bgColor} rounded-xl px-2 py-1 whitespace-nowrap`}>{children}</span>
    </div>
  )
}

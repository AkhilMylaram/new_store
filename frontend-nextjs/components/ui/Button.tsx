import { ButtonHTMLAttributes } from 'react'
import clsx from 'classnames'

export default function Button({ className, ...props }: ButtonHTMLAttributes<HTMLButtonElement>) {
  return <button className={clsx('px-4 py-2 rounded bg-pink-500 text-white', className)} {...props} />
}

import { Module } from 'src/graphql/generated'
import { ENV_VARS } from 'src/utils/env-vars'

export function Link({ module }: { module: Module }): JSX.Element {
  const { modulargrid: link, name, manufacturer } = module

  const className = 'underline underline-offset-4 hover:opacity-50'

  if (link?.startsWith('http')) {
    return (
      <a className={className} href={link} target="_blank" rel="noreferrer noopener">
        See offer <span className="relative">🎁</span>
      </a>
    )
  }
  if (link) {
    return (
      <a
        className={className}
        href={`https://www.modulargrid.net/e/offers/view/${link}`}
        target="_blank"
        rel="noreferrer noopener"
      >
        See offer on ModularGrid <span className="relative">✨</span>
      </a>
    )
  } else {
    return (
      <a
        className={`${className}`}
        href={`mailto:${ENV_VARS.EMAIL}?subject=${manufacturer} - ${name}`}
      >
        Email me <span className="relative -top-1">📬</span>
      </a>
    )
  }
}

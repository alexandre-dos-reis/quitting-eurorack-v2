import { gql } from 'graphql-request'
import { Module } from './graphql/generated'
import { ENV_VARS } from './utils/env-vars'
import { ReactNode } from 'react'
import { useQuery } from '@tanstack/react-query'
import { sdk } from './graphql/gql-request/sdk'
import { Link } from './components/Link'
import { Tag } from './components/Tag'
import { El } from './components/El'
import { Couple } from './components/Couple'

gql`
  query getModules {
    module {
      id
      manufacturer
      name
      condition
      box_included
      modulargrid
      price
      rack_rash
      pictures {
        directus_files_id {
          id
        }
      }
    }
  }
`

export default function App() {
  const { data, isLoading, isError } = useQuery(['modules'], () => sdk.getModules())
  const imageTransform = 'fit=cover&width=80&height=80&quality=80'

  if (isLoading) {
    return <h1 className="text-center text-4xl mt-5 mb-5">...Loading</h1>
  }

  if (isError) {
    return (
      <h1 className="text-center text-4xl mt-5 mb-5">Sorry come back later, an error occured !</h1>
    )
  }

  return (
    <>
      <h1 className="text-center text-4xl mt-5 mb-5">👋 Hello, I'm quitting Eurorack. 😭</h1>
      <div className='text-center opacity-50 mb-5'>At least, I'm reducing my rack...</div>
      <h2 className="text-center text-2xl mb-5">Here's my selling list:</h2>
      <main className='grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-5 px-5 mb-24'>
        {data?.module.map(m => {
          return (
            <article key={m.id} className="border border-gray-600 p-5 rounded-lg">
              <section className="grid grid-cols-1 md:grid-cols-7 gap-4">
                <Couple>
                  <Tag bgColor="bg-blue-500">Manufacturer</Tag>
                  <El>{m.manufacturer}</El>
                </Couple>
                <Couple>
                  <Tag bgColor="bg-yellow-500">Name</Tag>
                  <El>{m.name}</El>
                </Couple>
                <Couple>
                  <Tag bgColor="bg-pink-500">Condition</Tag>
                  <El>{m.condition}</El>
                </Couple>
                <Couple>
                  <Tag bgColor="bg-green-500">Box included</Tag>
                  <El>{m.box_included ? 'Yes' : 'No'}</El>
                </Couple>
                <Couple>
                  <Tag bgColor="bg-orange-500">Price</Tag>
                  <El>{m.price} €</El>
                </Couple>
                <Couple>
                  <Tag bgColor="bg-purple-500">Rack rash</Tag>
                  <El>{m.rack_rash ? 'Yes' : 'No'}</El>
                </Couple>
                <Couple>
                  <Tag bgColor="bg-red-500">Link</Tag>
                  <El>
                    <Link module={m as Module} />
                  </El>
                </Couple>
              </section>

              {m.pictures && m.pictures?.length > 0 && (
                <div className="flex flex-wrap justify-center items-center gap-5 mt-9 md:mt-5">
                  {m.pictures?.map((p, i) => (
                    <a
                      key={p?.directus_files_id?.id}
                      href={`${ENV_VARS.ASSETS_ENDPOINT}/${p?.directus_files_id?.id}`}
                    >
                      <img
                        className="w-20 h-20 object-cover rounded-md hover:opacity-50 transition-opacity"
                        src={`${ENV_VARS.ASSETS_ENDPOINT}/${p?.directus_files_id?.id}?${imageTransform}`}
                      />
                    </a>
                  ))}
                </div>
              )}
            </article>
          )
        })}
      </main>
    </>
  )
}

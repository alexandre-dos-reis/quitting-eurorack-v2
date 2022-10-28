import { getSdk } from '../generated'
import { client } from './client'

export const sdk = getSdk(client)

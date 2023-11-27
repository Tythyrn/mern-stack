import { atom } from 'jotai'

const user = JSON.parse(localStorage.getItem('user'))

export const userAtom = atom(user ? user : null);
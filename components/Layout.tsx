import { ReactChild, ReactChildren } from 'react'
import {Navbar} from './Navbar'

interface AuxProps {
  children: ReactChild | ReactChildren
}

const Layout = ({children}: AuxProps) => {
  return (
    <>
    <Navbar />
    {children}
    </>
  )
}
export default Layout
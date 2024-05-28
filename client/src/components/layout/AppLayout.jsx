import React from 'react'
import Header from './Header'
import Title from '../shared/Title'

const AppLayout = () => (WrappedComponent) => {
  return (props) => {
    return (
      <>
        <Title />
        <Header />
        <WrappedComponent {...props} />
      </>
    )
  }
}

export default AppLayout
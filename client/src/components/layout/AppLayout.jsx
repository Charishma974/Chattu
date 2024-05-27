import React from 'react'
import Header from './Header'

const AppLayout = () => (WrappedComponent) => {
  return (props) => {
    return (
        <div>
            <Header />
            <WrappedComponent {...props} />
            <div>Footer</div>
        </div>
    )
  }
}

export default AppLayout
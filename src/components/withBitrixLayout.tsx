import React from 'react'
import Layout from './Layout'

export const withBitrixLayout = <T extends object>(Component: React.ComponentType<T>) => {
  const Inner = (props: T): React.ReactElement => {
    return (
      <Layout>
        <Component {...props} />
      </Layout>
    )
  }

  return Inner
}

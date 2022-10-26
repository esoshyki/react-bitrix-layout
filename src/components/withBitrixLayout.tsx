import React from 'react'

export const withBitrixLayout = <T extends object>(Component: React.ComponentType<T>) => {
  const Inner = (props: T): React.ReactElement => {
    return (
      <div className='bitrix'>
        <h1>Bitrix Layout</h1>

        <div className='app'>
          <Component {...props} />
        </div>
      </div>
    )
  }

  return Inner
}

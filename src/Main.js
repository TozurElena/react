import React from 'react'
import { useAlertToggle } from './alert/AlertContext'

export default function Main() {
  const toggle = useAlertToggle()
  return (
    <>
      <h1>Salut avec Context</h1>
      <button onClick={toggle} className='btn btn-success'>Show alert</button>
    </>
  )
}
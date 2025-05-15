'use client'

import { useEffect } from 'react'

const AddBootstrap = () => {
  const importBs = async () => {
    // @ts-expect-error bootstrap import
    await import('bootstrap/dist/js/bootstrap.min.js')
  }
  useEffect(() => {
    importBs()
  }, [])
  return <></>
}

export default AddBootstrap

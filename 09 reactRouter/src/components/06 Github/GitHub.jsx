import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function GitHub() {
  //   const [data, setData] = useState([])

  //   useEffect(() => {
  //     fetch('https://api.github.com/users/hiteshchoudhary')
  //       .then((response) => response.json())
  //       .then((data) => {
  //         console.log(data)
  //         setData(data)
  //       })
  //   }, [])

  const data = useLoaderData()

  return (
    <>
      <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">
        GitHub followers : {data?.followers}
        <img
          src={data?.avatar_url}
          alt="Git picture"
          width={250}
          className="ml-auto mr-auto mt-5 mb-5"
        />
      </div>
    </>
  )
}

export default GitHub

export const githubInfoLoader = async () => {
  const response = await fetch('https://api.github.com/users/hiteshchoudhary')
  return response.json()
}

// Notes :
// 1. Loader Invocation:
// When the route matching path='github' is accessed, the loader function (githubInfoLoader) is invoked automatically by react-router-dom before rendering the GitHub component.
// This means that before the GitHub component is rendered, the loader function fetches data from the GitHub API.

// 2. Accessing Loaded Data in Component:
// Inside the GitHub component, you're using the useLoaderData hook provided by react-router-dom.
// This hook allows you to access the data that was loaded by the loader function (githubInfoLoader) in the parent route.
// When the GitHub component is rendered, useLoaderData retrieves the data that was loaded by the loader function and stores it in the data variable.
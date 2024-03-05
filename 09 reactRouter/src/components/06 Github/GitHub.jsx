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

import { useEffect, useState } from "react"

function Shop(){

    const [data, setData] = useState(null)
    const [isLoading, setLoading] = useState(false)

    // useEffect(() => {
    //     setLoading(true)
    //     getJsonData()
    //         .then((res) => res.json())
    //         .then((data) => {
    //             setData(data)
    //             setLoading(false)
    //         })
    // }, [])

    useEffect(() => {
        setLoading(true)
        fetch(`http://localhost:3001/shop`)
          .then((res) => res.json())
          .then((data) => {
            setData(data)
            setLoading(false)
          })
      }, [])

    return(
        <div>{data}</div>
    )
}

export default Shop

export default function handler(req, res) {
    res.status(200).json({text: 'Hello'})
}
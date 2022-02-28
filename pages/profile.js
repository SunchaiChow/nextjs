import { useEffect, useState } from "react"

function Profile() {

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

    if (isLoading) return <p>Loading...</p>
    if (!data) return <p>No Profile data</p>

    return (
        <div>
            <h1>{data[0].title}</h1>
            <p>{data[0].description}</p>
            <button onClick={() => onClickButton()}>click</button>
        </div>
    )

}

function onClickButton(){
    // alert();
}

export async function getJsonData(){

    const res = await fetch(`http://localhost:3001/shop`)
    const data = await res.json();
    return { props: {datas : data}}

    // try {
    //     let response = await fetch('https://jsonplaceholder.typicode.com/todos/');
    //     let responseJson = await response.json();
    //     return responseJson;
    // }catch (error) {
    //     throw error;
    // }
}

export default Profile
import Link from "next/link"
import Router from "next/router"
import Header from "../componests/header"
import Layout from "../componests/Layout"

function handleClickIndex(){
    Router.push({
        pathname: '/new-index'
    })
}

function NewAbout(){

    return (
        <Layout>
            <h1>About</h1>
        </Layout>
    )

    // return (
    //     <div>
    //         <a onClick={() => handleClickIndex()} style={style}>Index Page</a>
    //         <h1>About</h1>
    //     </div>
    // )

    // return(
    //     <div>
    //         <Link href="/new-index">
    //             <a>Index Page</a>
    //         </Link>
    //         <h1>About</h1>
    //     </div>
    // )
}

export default NewAbout
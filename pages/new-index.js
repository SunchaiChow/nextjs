import Link from 'next/link'
import Router from "next/router"
import Header from '../componests/header'
import Layout from '../componests/Layout'

function handleSubmit(e){
    e.preventDefault()
    const name = e.target.name.value
    Router.push({
        pathname: '/hello',
        query: {name: name}
    })
}

function NewIndex() {

    return (
        <Layout>
            <h1>Sawatdee Next.js</h1>
            <form onSubmit={(e) => handleSubmit(e)}>
                <span>ชื่อ: </span>
                <input type="text" name='name'/>
                <button type='submit'>Go</button>
            </form>
        </Layout>
    )

    // return (
    //     <div>
    //         <a onClick={() => handleClickAbout()} style={style}>About Page</a>
    //         <h1>Sawatdee next.js</h1>
    //         <p>Index</p>
    //     </div>
    // )

    // return(
    // <div>
    //     <Link href="/new-about">
    //         <a>About Page</a>
    //     </Link>
    //     <h1>Sawatdee Next.js</h1>
    //     <p>Index</p>
    // </div>
    // );
}

export default NewIndex
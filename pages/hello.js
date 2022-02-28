import { useRouter } from "next/router"
import Layout from "../componests/Layout"

function Hello(props){
    const router = useRouter()
    const {name} = router.query
    const {id} = router.query
    // alert('Name : '+name)
    return (
        <Layout>
            <h1>สวัสดี{name}</h1>
        </Layout>
    )
}

export default Hello
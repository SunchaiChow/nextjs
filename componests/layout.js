import Footer from "./Footer"
import Header from "./header"

function Layout(props){
    return (
        <div>
            <Header/>
            {props.children}
            <Footer/>
        </div>
    )
}

export default Layout
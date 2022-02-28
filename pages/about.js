import fetch from 'isomorphic-unfetch'
import {getAllShops, ShopService} from './services/shop-service';

function About({datas}) {
    
    const result = datas.map(item => {
        const container = {}

        container.title = item.title;
        container.description = item.description;
        return container;
        });
    console.log('result : '+result[0].title);

    return (
    <div>
        {/* {datas[0].title} */}
        {datas.map((item) => (
            <div>
                <div>Title : {item.title}</div>
                <div>Description : {item.description}</div>
            </div>
        ))}
    </div>)
}

// export async function getServerSideProps() {
//     const res = await fetch(`http://localhost:3001/shop`)
//     const data = await res.json()
//     // const data = JSON.stringify(res);
//     console.log('data : '+ data.view);
//     return { props: {data} }
// }

export const getStaticProps = async () => {
    const res = await fetch(`http://localhost:3001/shop`)
    const data = await res.json();
    return { props: {datas : data}}
}

// export async function getServerSideProps(){
//     const res = await fetch(`http://localhost:3001/shop`, {
//         method: 'GET',
//         headers: {'Content-Type': 'application/json'}
//       })
//       console.log('Complete getServerSideProps');
//     //   return JSON.stringify(res);
//     const data = JSON.stringify(res);
//     return {
//         props: {data}
//     }
// }

export default About
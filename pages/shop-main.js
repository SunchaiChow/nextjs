import Link from 'next/link';
import { useEffect, useState } from 'react';
import styles from '../styles/shopmain.module.css';
import ShopService from './services/shop-service.ts';

function ShopMain(){

    return (
        <div>
            <div className={styles.divTitleMain}>Shop-Main</div>
                <div>
                    <div className={styles.divTitleItem}>
                        <button onClick={ShopService.onClickShopService}>Create</button>
                    </div>
                    <div className={styles.divTitleItem}>Find</div>
                    <div className={styles.divTitleItem}>Update</div>
                    <div className={styles.divTitleItem}>Delete</div>
                </div>
                <Link href="/">About Page</Link>
                <button onClick={()=>{getAllShop()}}>Button</button>
        </div>
    )
}

async function getAllShop(){
    const [data, setData] = useState(null)
    const [isLoading, setLoading] = useState(false)
    useEffect(() => {
        fetch('http://localhost:3001/shop')
        .then((res) => res.json())
        .then((data) => {
            setData(data)
        })
    }, [])
    return await data;
}

export default ShopMain
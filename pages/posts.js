function Posts ({posts}){
    return <div>Posts + {posts} </div>
    // return  (
    //             <div>
    //                 <h1>Posts</h1>
    //                 <ul>
    //                     {posts.length > 0 ? posts.map((post) => <li>{post}</li>) : "No posts"}
    //                 </ul>
    //             </div>
    //         )
}

export default Posts

export async function getStaticProps() {
    const res = await fetch('https://.../posts');
    console.log("res : "+ res);
    const posts1 = res.json();
    const posts = JSON.stringify(posts1);
    console.log("posts : "+posts);
    return {
        props: {
            posts,
        },
    };
}
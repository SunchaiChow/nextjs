function Content1({ posts }) {
    return (
        <ul>
            {posts.map((post) => (
                <li>{post.title}</li>
            ))}
        </ul>
    )
}

export async function getStaticProps(){
    const res = await fetch('https://localhost:3000/posts')
    const posts = await res.json()
    return {
        props: {
            posts,
            // message: "complete",
        },
    }
}

export default Content1
import fetch from 'isomorphic-unfetch'
import { title } from 'process'

function CreateShop() {
    const str ={
        title,
        description,
        category,
        like,
        view,
    }
    const registerShop = async event => {
        event.preventDefault()
        const res = await fetch(
            'http://localhost:3001/shop',
            {
                body: JSON.stringify({
                    title: event.target.title.value,
                    description: event.target.description.value,
                    category: event.target.category.value,
                    like: event.target.like.value,
                    view: event.target.view.value,
                }),
                headers: {
                    'Content-Type': 'application/json'
                },
                method: 'POST'
            }
        )

        const result = await res.json()
        console.log(result.title)
    }

    return (
            <div>
                <head><script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(str) }}
                /></head>
                Create Page
                <form onSubmit={registerShop}>
                    <div>
                        <hi>title</hi>
                        <input id="title" type="text"/>
                    </div>
                    <div>
                        <hi>description</hi>
                        <input id="description" type="text"/>
                    </div>
                    <div>
                        <hi>category</hi>
                        <input id="category" type="text"/>
                    </div>
                    <div>
                        <hi>like</hi>
                        <input id="like" type="number"/>
                    </div>
                    <div>
                        <hi>view</hi>
                        <input id="view" type="number"/>
                    </div>
                    <div>
                        <button type="submit">summit</button>
                        <button type="reset">reset</button>
                    </div>
                </form>
            </div>
            
            
    )

}

export default CreateShop
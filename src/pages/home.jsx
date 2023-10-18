import React, { useState, useEffect } from 'react'
import Navbar from '../component/navbar'
import Card from '../component/card'


const Home = () => {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetch("https://klab-blog-api.onrender.com/api/klab/blog/readAllBlogs")
            .then((response) => response.json())
            .then((res) => {
                if (res.data) {
                    setPosts(res.data)
                }
            })
    }, [])
    // const products = [
    //     {
    //         name: 'Itel 31',
    //         image: 'https://plus.unsplash.com/premium_photo-1670328876789-2b3e51a3fd61?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHdhbGwlMjBiYWNrZ3JvdW5kfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60',
    //         price: '500$',
    //         description: 'This product is just for testing',
    //         link: '/cart'
    //     },
    //     {
    //         name: 'Iphone 19',
    //         image: 'https://plus.unsplash.com/premium_photo-1670328876789-2b3e51a3fd61?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHdhbGwlMjBiYWNrZ3JvdW5kfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60',
    //         price: '500$',
    //         description: 'This product is just for testing',
    //         link: '/cart'
    //     },
    //     {
    //         name: 'Tecno camon 19',
    //         image: 'https://plus.unsplash.com/premium_photo-1670328876789-2b3e51a3fd61?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHdhbGwlMjBiYWNrZ3JvdW5kfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60',
    //         price: '500$',
    //         description: 'This product is just for testing',
    //         link: '/cart'
    //     },

    //     {
    //         name: 'pixel 7',
    //         image: 'https://plus.unsplash.com/premium_photo-1670328876789-2b3e51a3fd61?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHdhbGwlMjBiYWNrZ3JvdW5kfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60',
    //         price: '500$',
    //         description: 'This product is just for testing',
    //         link: '/cart'
    //     },
    //     {
    //         name: 'redmi noto 7',
    //         image: 'https://plus.unsplash.com/premium_photo-1670328876789-2b3e51a3fd61?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHdhbGwlMjBiYWNrZ3JvdW5kfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60',
    //         price: '500$',
    //         description: 'This product is just for testing',
    //         link: '/cart'
    //     }

    // ]
    console.log("POSTS", posts)
    // console.log("PRODUCTS", products)
    return (
        <div>
            <Navbar />
            <section className="hero">
                <h1>Welcome</h1>
            </section>

            <section className="grid-container">

                {posts.length > 0 ? posts.map((post, index) => (
                    <Card key={index} name={post.blogTitle} image={post.bogImage} author={post.author} description={post.blogContent} link={post.link} />
                )
                ) : <p>Loading posts...</p>}
            </section>
        </div>
    )
}

export default Home
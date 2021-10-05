import { useState, useEffect } from "react";
import BlogList from "../child-components/BlogList";
import blogList from "../data/blogList";

const Home = () => {

const [name, setName] = useState("Hazim");
const [blogs, setBlogs] = useState("");
const [isLoading, setLoading] = useState(true);
const isClicked = false;
const title = "Welcome to The Pet Blog"

const handleClick = () => {
    console.log("Hello Hazim");
}

const handleSecondClick = (msg) => {
    console.log(`${msg} Hazim`)
}

const handleChangeName = (newName) => {
    // if (isClicked)
    setName(newName);
}

const handleDelete = (id) => {
    const newBlogs = blogs.filter(blog => blog.id !== id)
    setBlogs(newBlogs)
}

useEffect(()=>{
    fetch("http://localhost:3000/blogs")
    .then(res => {
        return res.json();
    })
    .then(data => {
        console.log(data);
        setLoading(false)
        setBlogs(data)
        
    });
    
},[])

    return (  
        <div className="home">
                <h2>This is Homepage</h2>
                <h1>Welcome {name}</h1>
                <button onClick={handleClick} >Click Me</button>
                <button onClick={() => handleSecondClick("Bye Bye")} >Click me again</button>
                <button onClick={()=> handleChangeName("Laziem")} >Change Name</button>
                {isLoading && <div>Loading...Please be patient..</div>}
                {blogs && <BlogList blogs = {blogs} title = {title} handleDelete={handleDelete}/>}
        </div>
    );
}
 
export default Home;
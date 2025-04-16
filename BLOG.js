let blogs = JSON.parse(localStorage.getItem("blogs")) || [];

function addPost() {
    const title = document.getElementById("title").value;
    const content = document.getElementById("content").value;
    
    if (!title || !content) {
        alert("Please fill in all fields!");
        return;
    }

    blogs.push({ title, content });
    localStorage.setItem("blogs", JSON.stringify(blogs));
    
    displayBlogs();
}

function displayBlogs() {
    const list = document.getElementById("blog-list");
    list.innerHTML = "";
    
    blogs.forEach((blog, index) => {
        list.innerHTML += `<li>
            <h3>${blog.title}</h3>
            <p>${blog.content}</p>
            <button onclick="deleteBlog(${index})">❌ Delete</button>
        </li>`;
    });
}

function deleteBlog(index) {
    blogs.splice(index, 1);
    localStorage.setItem("blogs", JSON.stringify(blogs));
    displayBlogs();
}

// AI-Suggested Feeds (Mocked Data)
const suggestedArticles = ["The Future of AI", "How to Learn JavaScript", "Designing a Great UI"];
document.getElementById("suggested-articles").innerHTML = suggestedArticles.map(article => `<li>${article}</li>`).join("");

displayBlogs();

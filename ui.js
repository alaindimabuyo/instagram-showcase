class UI{
    constructor(){
        this.profile = document.getElementById('profile')
    }
    
    showProfile(user){
        let output =''
        user.forEach((post)=>{
            output += `
            <div class="container">
                <div class ="row pt-5">
                    <div class = "col-md-6">
                        <img src="${post.images.standard_resolution.url}" class ="img-fluid mb-2" >
                        <a href = "${post.link}" target="_blank" class ="btn btn-success btn-block">View Post</a>
                        
                    </div>
                    <div class = "col-md-6 pt-2">
                        <br><br>
                        <ul>
                            <li class ="list-group-item">Likes: ${post.likes.count}</li>
                            <li class ="list-group-item">Comments: ${post.comments.count}</li>
                            <li class ="list-group-item">Date Created: ${post.created_time}</li>
                            <li class ="list-group-item">Filter Used: ${post.filter}</li>
                            
                        </ul>
                    </div>
                </div>
            </div>
            `
        })
        
        document.getElementById('profile').innerHTML = output;
    }
    showAlain(user){
        let output = `
        <div class="container">
            <div class ="row pt-5">
                <div class = "col-md-6">
                        <div class="card-body">
                        <img src="${user.profile_picture}" class ="img-fluid mb-2" >
                        <h5>${user.full_name}</h5>  
                        </div>
                </div>
                <div class = "col-md-6">
                    <h5>${user.username}</h5>
                        <span class="badge badge-pill badge-info">Posts: ${user.counts.media}</span>
                        <span class="badge badge-pill badge-success">Followers: ${user.counts.followed_by}</span>
                        <span class="badge badge-pill badge-danger">Following: ${user.counts.follows}</span>
                </div>
            </div>
        </div>
        `
        document.getElementById('alainprofile').innerHTML = output;
    
    }
}
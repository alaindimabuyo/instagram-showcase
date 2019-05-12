class UI{
    constructor(){
        this.profile = document.getElementById('profile')
    }

    showProfile(user){
        console.log(user)
        let output =''
        user.forEach((data)=>{
            output += `
            <div class="container">
                <div class ="row pt-5">
                    <div class = "col-md-6">
                        <img src="${data.images.standard_resolution.url}" class ="img-fluid mb-2" >
                        <a href = "${data.link}" target="_blank" class ="btn btn-warning btn-block">View Post</a>
                        
                    </div>
                    <div class = "col-md-6 pt-2">
                        <br><br>
                        <ul>
                            <li class ="list-group-item">Likes: ${data.likes.count}</li>
                            <li class ="list-group-item">Comments: ${data.comments.count}</li>
                            <li class ="list-group-item">Date Created: ${data.created_time}</li>
                            <li class ="list-group-item">Filter Used: ${data.filter}</li>
                            
                        </ul>
                    </div>
                </div>
            </div>
            `
        })
        document.getElementById('profile').innerHTML = output;
    }
}
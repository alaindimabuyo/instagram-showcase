class instagram{
    async get(){
        const res = await fetch('https://api.instagram.com/v1/users/self/media/recent/?access_token=572689804.63f8a73.e5efe8f25c0e4f779be15e11467498be');
        const resAlain = await fetch('https://api.instagram.com/v1/users/self/?access_token=572689804.63f8a73.e5efe8f25c0e4f779be15e11467498be');
        const data = await res.json()
        const dataAlain = await resAlain.json()
        
        return {
            data,
            dataAlain
        }
    }
}







        

  






const insta = new instagram()
const asd = new UI;

insta.get()
    .then(data=> {
        asd.showProfile(data.data)
    })




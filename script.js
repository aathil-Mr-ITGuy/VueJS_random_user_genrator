const randomUser = {
    data(){
        return{
            name : 'Aathil',
            email: 'ibnu@gmail.com',
            gender: 'male',
            picture: 'https://randomuser.me/api/portraits/men/10.jpg'
        }
    },
    methods:{
        async getUser(){
            const res = await fetch('https://randomuser.me/api')
            const {results} = await res.json()
            this.name = results[0].name.first
            this.email = results[0].email
            this.gender = results[0].gender
            this.picture = results[0].picture.large
        }

    }
}

Vue.createApp(randomUser).mount('#user')
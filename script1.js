let username = document.querySelector('.username')
let password = document.querySelector('.password')
let login = document.querySelector('.login')
let error = document.querySelector('.error')


let storage = [{
    username: 'kminchelle',
    password: '0lelplR'
}
]


function stay() {
    if (localStorage.getItem('user')) {
        let getLocalData = localStorage.getItem('user')
        let parser = JSON.parse(getLocalData)
        console.log(parser[0].username === 'kminchelle' && parser[0].password === '0lelplR');
        if (parser[0].username === 'kminchelle' && parser[0].password === '0lelplR') {
            location.pathname = 'index2.html'
        }
    }
}

stay()

login.addEventListener('click', function getDAta() {
    if (username.value === 'kminchelle' && password.value === '0lelplR') {
        localStorage.setItem('user', JSON.stringify(storage))
        location.pathname = 'index2.html'

        fetch(`https://reqres.in/api/users`, {
            method: "POST",
            body: JSON.stringify({
                username: username.value,
                password: password.value
            }),
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            },
        }).then(function(response){
            return response.json()
        }).then(function(data){
            console.log(data);
        })
    }
    else {
        error.innerHTML = 'Wrong username or password'
    }
})
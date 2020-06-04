/* globals fetch */

let url = 'https://api.github.com/users/shelbysoutter'
let basicsElement = document.querySelector('.basics')
let storyElement = document.querySelector('.story')

fetch(url)
.then(function (response) {
    return response.json()
})
.then(function (data) {
    let nameLi = document.createElement('li')
    nameLi.innerText = 'Name: ' + data.name
    basicsElement.appendChild(nameLi)
    let urlLi = document.createElement('li')
    urlLi.innerText = 'GitHub URL: ' + data.url
    basicsElement.appendChild(urlLi)
    let websiteLi = document.createElement('li')
    websiteLi.innerText = 'Website :' + data.blog
    basicsElement.appendChild(websiteLi)
    let bioLi = document.createElement('p')
    bioLi.innerText = data.bio
    storyElement.appendChild(bioLi)
    let profilePic = document.createElement('li')
    profilePic.innerHTML = createImage(data.avatar_url)
    storyElement.appendChild(profilePic)
})

function createImage (url) {
    return `<img src=${url}>`
}
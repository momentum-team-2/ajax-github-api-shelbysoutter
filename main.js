/* globals fetch */

let url = 'https://api.github.com/users/shelbysoutter'
let basicsElement = document.querySelector('.basics')
let storyElement = document.querySelector('.story')

fetch(url)
.then(function (response) {
    return response.json()
})
.then(function (data) {
    console.log(data)
    let template = createProfileCard(data)
    document.querySelector('.target').innerHTML = template
})

function createDOMElements () {
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
    profilePic.classList.add("mw5")
}

function createImage (url) {
    return `<img src=${url}>`
}

function createProfileCard (data) {
    return `
    <article class="flex-container mw6 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10">
        <div class="tc flex-container flex-column">
            <img src=${data.avatar_url} class="br-100 h4 w4 dib" title="Photo of a kitty staring at you">
            <h1 class="f4">${data.name}</h1>
        </div>
        <div class="bio-site pl3">
            <h3>The Story</h3>
            <p class="bio-site pb3 lh-copy measure center f6 black-70">
            ${data.bio}
            </p>
            <h3>The Basics</h3>
            <a href=${data.repos_url}>GitHub Projects</a>
        </div>
    </article>
    `
}

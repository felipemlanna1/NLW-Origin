const LiksSocialMedia = {
  github: 'felipemoreiral',
  youtube: 'felipemlanna',
  facebook: 'felipemlanna',
  instagram: 'felipemlanna',
  linkedin: 'in/felipemlanna'
}

let changeSocialMediaLinks = () => {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href =
      'https://www.' + social + '.com/' + LiksSocialMedia[social]
  }
}

changeSocialMediaLinks()

let getGitHubProfileInfos = () => {
  console.log(LiksSocialMedia)
  const url = 'https://api.github.com/users/' + LiksSocialMedia.github

  console.log(url)

  fetch(url)
    .then(response => response.json())
    .then(data => {
      console.log(data)
      userName.textContent = data.name
      bio.textContent = data.bio
      userLink.href = data.html_url
      userImage.src = data.avatar_url
      userLogin.textContent += data.login
    })
}

getGitHubProfileInfos()
/*Padrões de trabalho Java Script (Formato de criação de functions e variaveis)

camelCase
PascalCase
snake_case*/

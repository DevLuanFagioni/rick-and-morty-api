const content = document.querySelector(".content")

async function getApi(i) {
  try{
    const response = await fetch(`https://rickandmortyapi.com/api/character/${i}`)
    const data = await response.json()
    
    if(!response.ok){
      throw new Error(response.status)
    }

    let contentApi = document.createElement('div')

    contentApi.innerHTML = `
      <div class="content-api" >
        <img src="${data.image}" alt="">
        <div>
          <div>
            <h1 class="name">${data.name}</h1>
            <h4><span class="status">${data.status}</span> - <span class="specie">${data.species}</span></h4>
          </div>
          <div>
            <p>Origin:</p>
            <p >${data.origin.name}</p>
          </div>
          <div>
            <p>Location:</p>
            <p class="first-location">${data.location.name}</p>
          </div>
        </div>
      </div>
    `
      

    content.appendChild(contentApi)
  }catch(e){
    console.log(e.message)
  }
  
}

for (let i = 0; i < 100; i++) {
  getApi(i)
}

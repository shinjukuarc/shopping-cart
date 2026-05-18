const container=document.querySelector('.container')
const itemNameEntry=document.querySelector('.item-name-input')
const priceEntry=document.querySelector('.price-input')
const addToCart=document.querySelector('.add-to-cart')
const list=document.querySelector('.list')
const totalOutput=document.querySelector('.total')

let total=0
totalOutput.textContent=`Total: $${total}`


let cartAdditionProcess = (e) => {
    if (itemNameEntry.value!=='' && +priceEntry.value>0) {
        const subcontainer=document.createElement('div')
        subcontainer.classList.add('sub-container')
        list.appendChild(subcontainer)
        const item=document.createElement('div')
        item.classList.add('item')
        item.textContent=`${itemNameEntry.value} - `
        const price=document.createElement('span')
        const prc=document.createElement('div')
        price.classList.add('price')
        prc.hidden=true
        prc.textContent=priceEntry.value
        price.textContent=`$${priceEntry.value}`
        const rmBtn=document.createElement('button')
        rmBtn.classList.add('remove')
        rmBtn.textContent='remove item'

        subcontainer.appendChild(item)
        item.appendChild(price)
        subcontainer.appendChild(prc)
        subcontainer.appendChild(rmBtn)

        total+=+prc.textContent

        itemNameEntry.value=''
        priceEntry.value=''

        rmBtn.onclick=()=> {
            let toRemove=+prc.textContent
            list.removeChild(subcontainer)
            total-=toRemove
            totalOutput.textContent=`Total: $${total}`
        }
        totalOutput.textContent=`Total: $${total}`
    }
}

addToCart.addEventListener('click', cartAdditionProcess)
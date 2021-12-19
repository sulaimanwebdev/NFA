window.userWalletAddress = null
const loginButton = document.getElementById('loginButton')
const userWallet = document.getElementById('userWallet')

function toggleButton() {
  if (!window.ethereum) {
    loginButton.innerText = 'MetaMask is not installed'
    loginButton.classList.remove('bg-purple-500', 'text-white')
    loginButton.classList.add('bg-gray-500', 'text-gray-100', 'cursor-not-allowed')
    return false
  }

  loginButton.addEventListener('click', loginWithMetaMask)
}

async function loginWithMetaMask() {
  const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' })
    .catch((e) => {
      console.error(e.message)
      return
    })
  if (!accounts) { return }

  window.userWalletAddress = accounts[0]
  userWallet.innerText = window.userWalletAddress
  loginButton.innerText = 'Sign out of MetaMask'

  loginButton.removeEventListener('click', loginWithMetaMask)
  setTimeout(() => {
    loginButton.addEventListener('click', signOutOfMetaMask)
  }, 200)
}

function signOutOfMetaMask() {
  window.userWalletAddress = null
  userWallet.innerText = ''
  loginButton.innerText = 'Sign in with MetaMask'

  loginButton.removeEventListener('click', signOutOfMetaMask)
  setTimeout(() => {
    loginButton.addEventListener('click', loginWithMetaMask)
  }, 200)
}

window.addEventListener('DOMContentLoaded', () => {
  toggleButton()
});






























let quantityNumber = document.querySelector('.quantityNumber');
let totalPrice = document.querySelector('.totalPrice');
let minusBtn = document.querySelector('.minusBtn');
let plusBtn = document.querySelector('.plusBtn');

let count = 1;
totalPrice.textContent = ".014";
plusBtn.addEventListener('click', () =>{
if(count < 10){
    count+=1;
    quantityNumber.textContent = count;
}
else{
count = 10;   
}

if(count === 1){
    totalPrice.textContent = ".014";
}

if(count === 2){
    totalPrice.textContent = ".028";
}

if(count === 3){
    totalPrice.textContent = ".042";
}

if(count === 4){
    totalPrice.textContent = ".056";
}

if(count === 5){
    totalPrice.textContent = ".070";
}


if(count === 6){
    totalPrice.textContent = ".084";
}

if(count === 7){
    totalPrice.textContent = ".098";
}

if(count === 8){
    totalPrice.textContent = ".112";
}

if(count === 9){
    totalPrice.textContent = ".126";
}


if(count === 10){
    totalPrice.textContent = ".140";
}

})







minusBtn.addEventListener('click', () =>{
 if(count > 0){
    count-=1;
    quantityNumber.textContent = count;
 
 }

 if(count === 0){
    totalPrice.textContent = "0";
}

 if(count === 1){
    totalPrice.textContent = ".014";
}

if(count === 2){
    totalPrice.textContent = ".028";
}

if(count === 3){
    totalPrice.textContent = ".042";
}

if(count === 4){
    totalPrice.textContent = ".056";
}

if(count === 5){
    totalPrice.textContent = ".070";
}


if(count === 6){
    totalPrice.textContent = ".084";
}

if(count === 7){
    totalPrice.textContent = ".098";
}

if(count === 8){
    totalPrice.textContent = ".112";
}

if(count === 9){
    totalPrice.textContent = ".126";
}


if(count === 10){
    totalPrice.textContent = ".140";
}




  })


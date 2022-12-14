import { token } from "./api.js"
import { username } from "./api.js"

let navElement;
let sellLink = "./login.html";
let profileLink = "./login.html";

if (token) {
    navElement = `            
    <a href="./profile.html" class="text-gray">${username}</a>
    <a href="/" class=" text-secondary font-bold border px-2 py-1 rounded logOutBtn">Log out</a>
    `
    sellLink = "./sell.html";
    profileLink = "./profile.html";
} else {
    navElement = `            
    <a href="./login.html" class="border px-2 py-1 rounded border-accent font-bold text-accent">Log in</a>
    <a href="./register.html" class="bg-accent font-bold text-main px-2 py-1 border border-accent rounded">Register</a>
    `
}

export let navbar = document.querySelector("#navbar").innerHTML = `
<section class="bg-main py-2">
    <div class="flex justify-between max-w-7xl mx-auto md:px-8 p-2 text-secondary font-montserrat">
        <div class="flex gap-3 items-center">
            <div>
                <a class="font-bold text-xl" href="./index.html">Yuuup!</a>
            </div>
            <div class="hidden md:flex gap-2">
                <a href="./auction.html" class="hover:text-gray">Auction</a>
                <a href="${sellLink}" class="hover:text-gray">Sell</a>
                <a href="${profileLink}" class="hover:text-gray">Profile</a>
            </div>
        </div>
        <div class="hidden md:flex items-center gap-4">${navElement}</div>
        <div class="block md:hidden">
            <button id="toggleMobileMenu">
            <svg width="32" height="20" viewBox="0 0 32 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect y="7" width="32" height="5" rx="2.5" fill="#F5F5F5"/>
                <rect y="15" width="17" height="5" rx="2.5" fill="#F5F5F5"/>
                <rect x="15" width="17" height="5" rx="2.5" fill="#F5F5F5"/>
            </svg> 
            </button>
        </div>
    </div>
</section>
<section class="bg-main hidden md:hidden" id="mobileMenu">
    <div class="p-2  text-secondary font-montserrat">
        <div class="flex font-bold text-xl flex-col gap-6 mt-20">
            <a href="./auction.html" class="hover:text-gray">Auction</a>
            <a href="${sellLink}" class="hover:text-gray">Sell</a>
            <a href="${profileLink}" class="hover:text-gray">Profile</a>
        </div>
        <div class="flex mt-20 flex-row items-center justify-between gap-4">${navElement}</div>
    </div>
</section>
`
const toggleMobileMenu = document.querySelector("#toggleMobileMenu");
const mobileMenu = document.querySelector("#mobileMenu");

toggleMobileMenu.addEventListener("click", () => {
    if (mobileMenu.classList.contains("hidden")) {
        mobileMenu.classList.remove("hidden");
    } else {
        mobileMenu.classList.add("hidden");
    }
})

if (token) {
    const logOutButton = document.querySelectorAll(".logOutBtn");
    logOutButton.forEach(button => {
        button.addEventListener("click", () => {
            localStorage.clear();
            window.location.href = "/"
        })
    })
}
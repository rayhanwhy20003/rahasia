const card1 = document.getElementById("card1");
const button = document.getElementById("button");
const quit = document.getElementById("button-out");
    

        button.addEventListener("click", () => {
            card1.classList.add("flip");
            button.innerHTML = "❤️❤️❤️";
        });
        quit.addEventListener("click", () => {
            card1.classList.remove("flip");
            button.innerHTML = "Klik";
            alert("terima kasih sudah membaca pesan🙏");
        });

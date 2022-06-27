const navButton = document.getElementsByClassName("nav_btn");
const layoutOneButton = navButton[0];
const layoutTwoButton = navButton[1];
const layoutThreeButton = navButton[2];

const container = document.getElementById("container");
const cards = Array.from(document.querySelectorAll(".card"));


const removeLayout_3 = (card, key) => {
    switch (key) {
        case 0:
            card.classList.remove("card1");
            break;
        case 1:
            card.classList.remove("card2");
            break;
        case 2:
            card.classList.remove("card3");
            break;
        case 3:
            card.classList.remove("card4");
            break;
        case 4:
            card.classList.remove("card5");
            break;
        default:
            break;
    }
};

const changeLayout = (e) => {
    const layout = e.target.innerText;
    switch (layout) {
        case "Layout 1":
            container.classList.remove("layout_2");
            container.classList.remove("layout_3");
            container.classList.add("layout_1");
            cards.map((card, key) => {
                card.classList.remove("layout_2_card");
                card.classList.add("layout_1_card");
                removeLayout_3(card, key);
            });
            break;
        case "Layout 2":
            container.classList.remove("layout_1");
            container.classList.remove("layout_3");
            container.classList.add("layout_2");
            cards.map((card, key) => {
                card.classList.remove("layout_1_card");
                card.classList.add("layout_2_card");
                removeLayout_3(card, key);
            });
            break;
        case "Layout 3":
            container.classList.remove("layout_1");
            container.classList.remove("layout_2");
            container.classList.add("layout_3");
            cards.map((card) => card.classList.remove("layout_1_card"));
            cards.map((card) => card.classList.remove("layout_2_card"));

            cards.map((card, key) => {
                card.classList.remove("layout_1_card");
                switch (key) {
                    case 0:
                        card.classList.add("card1");
                        break;
                    case 1:
                        console.log(2);
                        card.classList.add("card2");
                        break;
                    case 2:
                        card.classList.add("card3");
                        break;
                    case 3:
                        card.classList.add("card4");
                        break;
                    case 4:
                        card.classList.add("card5");
                        break;
                    default:
                        break;
                }
            });

            break;
        default:
            break;
    }
};

layoutOneButton.addEventListener("click", (e) => changeLayout(e));
layoutTwoButton.addEventListener("click", (e) => changeLayout(e));
layoutThreeButton.addEventListener("click", (e) => changeLayout(e));

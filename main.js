const app = document.getElementById("app");

const cards = [
    {
        title: "Startup Framework",                    
        desc: "Startup is a powerful tool for quick and convenient proto-typing of your projects. It will fit most projects because it contains up-to-date and modern web elements.", // Строка
        background: "#EBEAED",
        titleColor: "#1E0E62",
        parColor: "#1E0E62",
        btntext: "Explore",                      
        btnColor: "#1E0E62",                  
        backgroundColor: "#ffffff"              
    }, 
    {
        title: "Web Generator",                    
        desc: "Startup is a powerful tool for quick and convenient proto-typing of your projects. It will fit most projects because it contains up-to-date and modern web elements.", // Строка
        background: "#ffffff",
        titleColor: "#1E0E62",
        parColor: "#15143966",
        btntext: "Explore",                      
        btnColor: "#ffffff",                  
        backgroundColor: "#25DAC5"
    },
    {
        title: "Slides 4",                    
        desc: "All of these components are made in the same style, and can easily be inegrated into projects, allowing you to create hundreds of solutions for your future projects.", // Строка
        background: "#482BE7",
        titleColor: "#ffffff",
        parColor: "#ffffff",
        btntext: "Explore",                      
        btnColor: "#1E0E62",                  
        backgroundColor: "#ffffff"
    },
    {
        title: "Postcards",                   
        desc: "All frequently used elements are now in symbols. Use them to create interfaces really fast. Easily change icons, colors and text. Add new symbols to customize your design.", // Строка
        background: "url('./assets/Placeholder.png')",
        titleColor: "#ffffff",
        parColor: "#ffffff",
        btntext: "Explore",                      
        btnColor: "#1E0E62",                  
        backgroundColor: "#ffffff"
    }
];



const header = document.createElement("header");
header.classList.add("header");

const main = document.createElement("main");
main.classList.add("main");

const footer = document.createElement("footer");
footer.classList.add("footer");

const wrap = document.createElement("wrapper");
wrap.classList.add("wrapper");

function CreateHeader(name) {
    this.element = document.createElement('h1');
    this.element.classList.add("header");
    this.element.textContent = name;
}

function CreateButton(btntext, btnColor, backgroundColor) {
    this.element = document.createElement('div');
    this.element.classList.add("button");
    this.element.style["background-color"] = backgroundColor;
    let lab = document.createElement('p');
    lab.classList.add("text-button");
    lab.textContent = btntext;
    lab.style["color"] = btnColor;
    this.element.appendChild(lab);
}

function CreateCont (title, desc, titleColor, parColor) {
    this.element = document.createElement('div');
    this.element.classList.add('content');

    let titletag = document.createElement('h5');
    titletag.style["color"] = titleColor;
    titletag.textContent = title;
    titletag.classList.add("card-title");
    this.element.appendChild(titletag);

    let paragraphtag = document.createElement('p');
    paragraphtag.textContent = desc;
    paragraphtag.classList.add("card-text");
    paragraphtag.style["color"] = parColor;
    

    this.element.appendChild(paragraphtag);
}

function CreateCard({title, desc, background, titleColor, parColor, btntext, btnColor, backgroundColor}) {
    this.element = document.createElement('div');
    this.element.classList.add('card');

    if (background.includes('url')) {
        this.element.style["background-image"] = background;
    } else {
        this.element.style["background-color"] = background;
    }

    let button = new CreateButton(btntext, btnColor, backgroundColor);
    button.element.classList.add("card-button");
    let textCard = new CreateCont(title, desc, titleColor, parColor);
    this.element.appendChild(textCard.element);
    this.element.appendChild(button.element);
}
  
let myHeader = new CreateHeader("Last works");
header.appendChild(myHeader.element)
app.appendChild(header);

let headerButton = new CreateButton('Explore Showcase', '#1E0E62', '#ffffff')
headerButton.element.classList.add("header-button");
header.appendChild(headerButton.element)
app.appendChild(header);


for (let c in cards) {
    let card = new CreateCard(cards[c]);
    wrap.appendChild(card.element);
    main.appendChild(wrap);
    app.appendChild(main);
}


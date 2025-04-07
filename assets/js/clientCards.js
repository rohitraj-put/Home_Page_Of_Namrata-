const clientCards = [
    {
        name: "Google",
        logo: "https://img.icons8.com/color/100/000000/google-logo.png"
    },
    {
        name: "LinkedIn",
        logo: "https://img.icons8.com/color/100/000000/linkedin.png"
    },
    {
        name: "Yahoo",
        logo: "https://img.icons8.com/color/100/000000/yahoo.png"
    },
    {
        name: "Amazon",
        logo: "https://img.icons8.com/color/100/000000/amazon.png"
    },
    {
        name: "Netflix",
        logo: "https://img.icons8.com/color/48/000000/netflix.png"
    },
    {
        name: "Mac OS",
        logo: "https://img.icons8.com/ios-filled/100/000000/mac-os.png"
    },
    {
        name: "Dell",
        logo: "https://img.icons8.com/color/48/000000/dell--v1.png"
    },
    {
        name: "HP",
        logo: "https://img.icons8.com/color/100/000000/hp.png"
    },
    {
        name: "eBay",
        logo: "https://img.icons8.com/color/100/000000/ebay.png"
    },
    {
        name: "IBM",
        logo: "https://img.icons8.com/color/100/000000/ibm.png"
    },
    {
        name: "SAP",
        logo: "https://img.icons8.com/color/100/000000/sap.png"
    }
];


const clientCardContainer = document.getElementById("clientCards");

clientCards.forEach(client => {
    clientCardContainer.innerHTML += `
    <div class="card-client">
        <div class="card-body">
            <img class="logo" src=${client.logo} alt=${client.name} />
        </div>
    </div>
    `;
});
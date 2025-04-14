const clientCards = [

    {
        name: "SAP",
        logo: "https://namratauniversal.com/img/client-8.jpg"
    }
    , {
        name: "SAP",
        logo: "https://namratauniversal.com/img/client-9.png"
    },
    {
        name: "SAP",
        logo: "https://namratauniversal.com/img/client-10.png"
    },
    {
        name: "SAP",
        logo: "https://namratauniversal.com/img/client-14.png"
    },
    {
        name: "SAP",
        logo: "https://namratauniversal.com/img/client-13.png"
    },
    {
        name: "SAP",
        logo: "https://namratauniversal.com/img/client-18.png"
    },
    {
        name: "SAP",
        logo: "https://namratauniversal.com/img/client-17.png"
    },
    {
        name: "SAP",
        logo: "https://namratauniversal.com/img/client-19.jpeg"
    },
    {
        name: "SAP",
        logo: "https://namratauniversal.com/img/client-20.jpg"
    },
    {
        name: "SAP",
        logo: "https://namratauniversal.com/img/client-22.png"
    },
    {
        name: "SAP",
        logo: "https://jingleholidaybazar.com/images/mainlogo.gif"
    },
    {
        name: "SAP",
        logo: "https://namratauniversal.com/img/client-25.jpeg"
    },
    {
        name: "SAP",
        logo: "https://namratauniversal.com/img/client-26.png"
    },
    {
        name: "Google",
        logo: "https://namratauniversal.com/img/client-16.png"
    },
    {
        name: "LinkedIn",
        logo: "https://namratauniversal.com/img/client-23.png"
    },
    {
        name: "Yahoo",
        logo: "https://namratauniversal.com/img/client-15.png"
    },
    {
        name: "Amazon",
        logo: "https://namratauniversal.com/img/client-5.jpg"
    },
    {
        name: "Netflix",
        logo: "https://namratauniversal.com/img/client-6.jpg"
    },
    {
        name: "Mac OS",
        logo: "https://namratauniversal.com/img/client-1.jpg"
    },
    , {
        name: "SAP",
        logo: "https://namratauniversal.com/img/client-21.png"
    },
    {
        name: "Dell",
        logo: "https://namratauniversal.com/img/client-2.jpg"
    },
    {
        name: "HP",
        logo: "https://namratauniversal.com/img/client-3.jpg"
    },
    {
        name: "IBM",
        logo: "https://namratauniversal.com/img/client-11.png"
    },
    {
        name: "SAP",
        logo: "https://namratauniversal.com/img/client-12.png"
    }

];

// style="aspect-ratio: 3/2;"

const clientCardContainer = document.getElementById("clientCards");

clientCards.forEach(client => {
    clientCardContainer.innerHTML += `
    <div class="card-client" data-aos="zoom-in">
        <div class="card-body">
            <img class="logo" src=${client.logo} alt=${client.name} />
        </div>
    </div>
    `;
});
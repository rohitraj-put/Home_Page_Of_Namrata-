const testimonials = [
    {
      name: "Mamta Rani",
      role: "Business Woman",
      image: "https://namratauniversal.com/img/review/Mamta%20Rani.jpg",
      rating: 5,
      testimonial: "Nice Experience with Namrata universal. Really satisfied with services. I can say this is top website design company in noida."
    },
    {
      name: "Suraj",
      role: "Human",
      image: "https://namratauniversal.com/img/review/suraj.jpg",
      rating: 4,
      testimonial: "Namrata universal are the best website creater , I have ever and I would suggest more n more people for website designing."
    },
    {
      name: "Kriti Dixit",
      role: "Business Woman",
      image: "https://namratauniversal.com/img/review/Kritee%20Dixit.jpg",
      rating: 5,
      testimonial: "Team Namrata universal really good service provider. completely down to earth,Completely satisfied with your service."
    }
  ];
  
  const testimonialCard=document.getElementById("testimonialCards")

  testimonials.forEach(client=>{
    testimonialCard.innerHTML += `
    <div class="col-12 col-md-4 " data-aos="zoom-in">
          <div class="card border-0 border-bottom border-primary shadow-sm">
            <div class="card-body p-4 p-xxl-5 bg-light ">
              <figure>
                <div class="d-flex justify-content-between align-items-center mb-4">
                  <img style="width: 80px; height: 80px;" class=" rounded rounded-circle border border-5 border-info"
                    loading="lazy"
                    src=${client.image}
                    alt=${client.name}>
                  <div>
                    <h4 style="color: #ff695f;" class="mb-2">${client.name}</h4>
                    <h5 class="fs-6 text-secondary mb-0">${client.role}</h5>
                    <h5 style="color: #ff695f;">⭐⭐⭐⭐⭐</h5>
                   
                  </div>
                </div>
                <figcaption>
                  <div class="bsb-ratings text-warning mb-3" data-bsb-star="5" data-bsb-star-off="0"></div>
                  <blockquote class="bsb-blockquote-icon mb-4">${client.testimonial}</blockquote>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>

    `
  })
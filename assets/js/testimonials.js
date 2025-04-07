const testimonials = [
    {
      name: "Luna John",
      role: "UX Designer",
      image: "https://img.freepik.com/premium-vector/avatar-profile-icon-flat-style-female-user-profile-vector-illustration-isolated-background-women-profile-sign-business-concept_157943-38866.jpg",
      rating: 5,
      testimonial: "We were so impressed with the work they did for us. They were able to take our vision and turn it into a reality, and they did it all on time and within budget. We would highly recommend them to anyone looking for a reliable partner."
    },
    {
      name: "Luna John",
      role: "UX Designer",
      image: "https://img.freepik.com/premium-vector/avatar-profile-icon-flat-style-female-user-profile-vector-illustration-isolated-background-women-profile-sign-business-concept_157943-38866.jpg",
      rating: 4,
      testimonial: "We were looking for a company that could help us develop a new website that was both visually appealing and user-friendly. We are so happy with the results, and we would highly recommend them to anyone looking for a new website."
    },
    {
      name: "Luna John",
      role: "UX Designer",
      image: "https://img.freepik.com/premium-vector/avatar-profile-icon-flat-style-female-user-profile-vector-illustration-isolated-background-women-profile-sign-business-concept_157943-38866.jpg",
      rating: 5,
      testimonial: "We were looking for a company that could help us with our branding. We needed a website and marketing materials. They were able to create a brand identity that we loved. They worked with us to develop a logo that represented our company."
    }
  ];
  
  const testimonialCard=document.getElementById("testimonialCards")

  testimonials.forEach(client=>{
    testimonialCard.innerHTML += `
    <div class="col-12 col-md-4 ">
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
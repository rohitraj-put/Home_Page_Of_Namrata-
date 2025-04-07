const softwareData = [
    {
      title: "CRM Software",
      image: "https://cdn.pixabay.com/photo/2015/05/28/14/53/ux-788002_1280.jpg",
      description: "CRM software stands for customer relationship management software. It is a tool that helps businesses to manage and organize customer data, such as contact information, sales history, and other related activities."
    },
    {
      title: "SAP Software",
      image: "https://cdn.pixabay.com/photo/2019/12/12/11/40/engineer-4690505_1280.jpg",
      description: "The full form of SAP is System Applications and Products in data processing. SAP software is a type of Enterprise Resource Planning (ERP) solution that provides businesses with tools to manage business processes and operations"
    },
    {
      title: "ERP Software",
      image: "https://cdn.pixabay.com/photo/2018/07/12/21/32/subscribe-3534409_1280.jpg",
      description: "ERP stands for enterprise resource planning and this is kind of accounting software that is used for managing business activities like accounting, finance, procurement, project management , supply chain and manufacturing"
    },
    {
      title: "Billing Software",
      image: "https://img.freepik.com/free-photo/invoice-bill-paid-payment-financial-account-concept_53876-122994.jpg?ga=GA1.1.1235659308.1743403253&semt=ais_hybrid&w=740",
      description: "Billing software, also known as invoicing software, is a type of computer program that helps businesses generate, manage, and track invoices. It streamlines the billing process by automating many of the tasks involved in creating and managing invoices. Additionally,"
    },
    {
      title: "Hospital Management Software",
      image: "https://img.freepik.com/free-photo/discussing-financial-reports_1098-18276.jpg?ga=GA1.1.1235659308.1743403253&semt=ais_hybrid&w=740",
      description: "Hospital management software is designed to help healthcare providers and administrators better manage the operations of their organization. This type of software provides features that allow users to easily track financial information, patient records, employee information and more"
    },
    {
      title: "Application Management Software",
      image: "https://img.freepik.com/free-photo/representation-user-experience-interface-design_23-2150169860.jpg?ga=GA1.1.1235659308.1743403253&semt=ais_hybrid&w=740",
      description: "Application management software is a tool used to manage and monitor the performance, availability, and security of applications. It helps organizations keep track of their application environment by providing automated tools for performing tasks such as tracking user access"
    },
    {
      title: "Multimedia Software",
      image: "https://img.freepik.com/premium-vector/video-editor-program-is-displayed-computer-application-editing-video-clips-film-montage_681307-141.jpg?ga=GA1.1.1235659308.1743403253&semt=ais_hybrid&w=740",
      description: "Multimedia software is a type of computer program used to edit, display and create various forms of multimedia content. This includes audio, video, images, animation and text"
    },
    {
      title: "Programming Software",
      image: "https://img.freepik.com/free-photo/rear-view-programmer-working-all-night-long_1098-18697.jpg?ga=GA1.1.1235659308.1743403253&semt=ais_hybrid&w=740",
      description: "Programming software is a type of computer program that allows users to create, edit and modify code for computing systems. It consists of various tools such as text editors, compilers, debuggers and interpreters that help developers write high-quality code in an efficient manner"
    }
  ];
  
    const container = document.getElementById("cardContainer");
  
    softwareData.forEach(card => {
      container.innerHTML += `
        <div class="col-lg-4 mb-4">
          <div class="card">
            <img src="${card.image}" alt="" class="card-img-top">
            <div class="card-body">
              <h5 class="card-title" style="font-weight: 800;">${card.title}</h5>
              <p class="card-text">${card.description}</p>
            </div>
          </div>
        </div>
      `;
    });
  
/* eslint-disable no-undef */
function resetForm() {
  $("#modalForm")[0].reset();
}

async function get(parameter) {
  try {
    const response = await fetch(`https://milicic.net/get.php?${parameter}`); 
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json(); 
    return data; 
  } catch (error) {
      console.error('Fetch error:', error); 
      return false;
  }
}

$(document).ready(function () {
  $("#clear-form").click(function () {
    console.log("reset");
    resetForm();
  });


  // $(".show-list").click(async function() {
  //   if ($(this).data("list") === "ultimi 100") {
  //     const data = await get('count=100');
      
  //     if (data) {
  //       $('main > *').not('#list').hide();
  //       $('#list')
  //       .empty()
  //       .append('<h2 class="h5 list-title mb-2">Elenco delle ultime 100 proprietà</h2>')
  //       console.log(data);
  //       data.forEach(element => {
  //         const card =   `<div class="card mb-2 mt-4 card-ultimi">
  //         <div class="d-flex inner-card-ultimi">
  //           <div style="flex: 0 0 45%;">
  //             <img src="${element.imageUrl}" class="img-fluid rounded-start image-card-ultimi" alt="Image">
  //           </div>
  //           <div class="d-flex flex-column justify-content-between p-3" style="flex: 0 0 55%;">
  //             <div>
  //                 <!-- title and price -->
  //               <h5 class="card-ultimi-title mb-1">Okrug Gornji<span class="fw-light"> (ČIOVO)</span></h5>
  //               <p class="card-ultimi-price mt-0 fw-bolder"><span class="fw-bolder">280.000</span> €</p>
  //                 <!-- details with icons -->
  //               <div class="d-flex align-items-center card-ultimi-info mt-2">
  //                 <img src="./src/images/house_icon.png" alt="Apartment icon" class="me-2">
  //                 <p class="mb-0">Apartamento, 84m<sup>2</sup></p>
  //               </div>
  //               <div class="d-flex align-items-center card-ultimi-info">
  //                 <img src="./src/images/person_icon.png" alt="Seller icon" class="me-2">
  //                 <p class="mb-0 ">Venditore: <a href="https://www.trgostan.hr/en/hotels-and-villas/hvar-jelsa-vitarnja-three-room-villa-with-pool-wine-shop-and-terraces-60-m-from-the-sea-4714.html" class="text-decoration-underline">RE/MAX CITY</a>
  //               </div>
        
  //               <div class="d-flex align-items-center mb-2 card-ultimi-info">
  //                 <img src="./src/images/fullcircle_icon.png" alt="ID icon" class="me-2">
  //                 <p class="mb-0">ID: <span class="fw-bold">1104002</span></p>
  //               </div>
        
  //               <p class="card-ultimi-text mb-2">Three bedroom villa with swimming pool, wine cellar, and terraces, 60 m from the sea.</p>
  //             </div>
  //             <!-- button -->
  //             <div class="d-flex justify-content-end mt-auto">
  //               <a href="#" class="btn btn-primary text-white rounded card-ultimi-button p-1">Vedi i dettagli ></a> 
  //             </div>
  //           </div>
  //         </div>
  //         </div>`;

  //         $('#list').append(card);
  //       })
  //     }
     

    
       
  //   }
  // })
});



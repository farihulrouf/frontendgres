fetch('http://localhost:8000/api/dataJasa Konsultasis/getstatic?tahun=2023')
.then((response) => response.json())
.then((data) => {

  for (i = 0; i < data["data"].length; i++) {
      // console.log(data["products"][i]["id"]);
      temp = document.createElement('div');
      //div.classList.add("myDiv")
      temp.className = 'card card-style';
      temp.innerHTML = '<div class="card-body">'+
  
        '<div class="row">'+
          '<div class="col mt-0 w-100">'+
             '<h5 class="card-title"> '+data["data"][i]["jenis"] +'</h5>'+
           '</div>'+
           '<div class="col-auto">'+
              '<div class="stat text-primary">'+
                  '<i class="align-middle" data-feather="truck">'+ 
                   '</i>'+
               '</div>'+
           '</div>'+
         '</div>'+
        '<h1 class="mt-1 mb-3">'+ data["data"][i]["jumlah"] +'</h1>'+
        '<div class="mb-0">'+
           '<span class="text-danger">'+
               '<i class="mdi mdi-arrow-bottom-right">'+
               '</i>'+
            '</span>'+
            '<span class="text-muted">'+ "Rp " +data["data"][i]["total"].toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.') +'</span>'+
         '</div>'+
      
   ' </div>';
      document.getElementsByClassName('wix')[0].appendChild(temp);
    }
    
  });	fetch('http://localhost:8000/api/dataJasa Konsultasis/getstatic?tahun=2023')
  .then((response) => response.json())
  .then((data) => {

    for (i = 0; i < data["data"].length; i++) {
        // console.log(data["products"][i]["id"]);
        temp = document.createElement('div');
		//div.classList.add("myDiv")
        temp.className = 'card card-style';
        temp.innerHTML = '<div class="card-body">'+
    
          '<div class="row">'+
            '<div class="col mt-0 w-100">'+
               '<h5 class="card-title"> '+data["data"][i]["jenis"] +'</h5>'+
             '</div>'+
             '<div class="col-auto">'+
                '<div class="stat text-primary">'+
                    '<i class="align-middle" data-feather="truck">'+ 
				     '</i>'+
                 '</div>'+
             '</div>'+
           '</div>'+
          '<h1 class="mt-1 mb-3">'+ data["data"][i]["jumlah"] +'</h1>'+
          '<div class="mb-0">'+
             '<span class="text-danger">'+
                 '<i class="mdi mdi-arrow-bottom-right">'+
                 '</i>'+
              '</span>'+
              '<span class="text-muted">'+ "Rp " +data["data"][i]["total"].toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.') +'</span>'+
           '</div>'+
        
     ' </div>';
        document.getElementsByClassName('wix')[0].appendChild(temp);
      }
	  
	});
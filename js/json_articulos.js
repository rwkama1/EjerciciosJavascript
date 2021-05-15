    let arrayarticulos;

    arrayarticulos=
    [
        {
            id:1,
            nombre:"Articulo1",
            precio:10
        },
        {
            id:2,
            nombre:"Articulo2",
            precio:20
        }  ,
        {
            id:3,
            nombre:"Articulo3",
            precio:30
        }  ,
        {
            id:4,
            nombre:"Articulo4",
            precio:40
        },
        {
           id:5,
           nombre:"Articulo5",
           precio:50
         },  
          {
            id:6,
            nombre:"Articulo6",
            precio:60
          },  
          {
            id:7,
            nombre:"Articulo7",
            precio:10
          }  
]
 
const mostrar_datos=()=>
{
    arrayarticulos.map(article=>
        {
            let tr2=document.createElement("tr");
            //**************************************** */
            let tdname=document.createElement('td');
            tdname.textContent=article.id;
            tr2.appendChild(tdname);
            //*********************************************** */
          
            let tdproducer=document.createElement('td');
            tdproducer.textContent=article.nombre;
            tr2.appendChild(tdproducer);
            //************************************************* */
         
            let tdtype=document.createElement('td');
            tdtype.textContent=article.precio;
            tr2.appendChild(tdtype);
            //**************************************** */
        

            document.getElementById("cuerpoTabla").appendChild(tr2);
          
        })

 
}
const filter_by_name=()=> {
    var input, filter, table, tr, td, i;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[1];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    }
  }
    
    

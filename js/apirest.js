const list_program_from_api=async()=>
{
     var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
      
      const response = await fetch("https://apin-extjs-radiotrasmitter.vercel.app/api/program/program", requestOptions)
      const result=await response.json();
      return result;
      
}
const mostrar_datos=async()=>
{
    const listprograms=await list_program_from_api();
    listprograms.map(program=>
        {
            let tr2=document.createElement("tr");
            //**************************************** */
            let tdname=document.createElement('td');
            tdname.textContent=program._name;
            tr2.appendChild(tdname);
            //*********************************************** */
          
            let tdproducer=document.createElement('td');
            tdproducer.textContent=program._producer;
            tr2.appendChild(tdproducer);
            //************************************************* */
         
            let tdtype=document.createElement('td');
            tdtype.textContent=program._type;
            tr2.appendChild(tdtype);
            //**************************************** */
        
            let tdprice=document.createElement('td');
            tdprice.textContent=program._pricexseg;
            tr2.appendChild(tdprice);

            document.getElementById("cuerpoTabla").appendChild(tr2);
          
        })
 
}


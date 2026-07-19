function generarSensor() {
    let temperatura = (Math.random() * 10 + 20).toFixed(2); // 20°C - 30°C
    let humedad = (Math.random() * 20 + 40).toFixed(2); // 40% - 60%

    return {
        temperatura: temperatura,
        humedad: humedad
    };
}

function enviarDatos() {
     const temperaturaDiv = document.getElementById('temperaturaDiv');
     const humedadDiv = document.getElementById('humedadDiv');

    let datos = generarSensor();
    
   //console.log(datos)
   
         
    fetch("https://sensor-nuevo-n3051udz5-heyden2014s-projects.vercel.app/recibir.php", {method: 'POST', body: JSON.stringify(datos)})
      
    .then(response=>response.json())
        .then((data)=>{
            //console.log(respuestaU);

           console.log('Temperatura:', data.temperatura)
           console.log('Humedad:', data.humedad)

           temperaturaDiv.innerHTML = ` <h2>Temperatura: ${data.temperatura}</h2><br>`;

            humedadDiv.innerHTML = `<h2> Humedad: ${data.humedad}</h2><br>`;
                    
                    
            }

    //.then(data => console.log("Respuesta del servidor:", data)
    
)
     
    .catch(error => console.error("Error:", error));
    
}


setInterval(enviarDatos, 5000);

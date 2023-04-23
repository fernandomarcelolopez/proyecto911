const username = document.getElementById('username')
const password = document.getElementById('password')
const button = document.getElementById('button')

button.addEventListener('click',(e) => {
	e.preventDefault()
	const data1= {
		username: username.value,
		password: password.value
	}
	const myInit = {method: 'GET'};
	var dire = 'api/validarpass.php?username='+ data1.username +'&password='+ data1.password;
	const myRequest = new Request(dire,myInit);
	
	var respuesta = fetch(myRequest)
		.then (response =>  {
			if(response.status == 200) {
				return response.json();
			} 
			else {
				throw "Respuesta incorrecta del servidor" 
			}
		})
		.then (data => {
			console.log(data)
			console.log(dire)	
			if (data.respcode=="200") {
				var direccion = 'front/portal.html?token='+data.conexion;
        		window.location = direccion;
			} 
			else if (data.respcode=="400")  {
				const falla = document.getElementById('falla');
				falla.style.visibility = "visible";
				falla.innerText = "Usuario inexistente"
			}
			else if (data.respcode=="401")  {
				const falla = document.getElementById('falla');
				falla.style.visibility = "visible"
				falla.innerText = "Contraseña invalida"
			}
			else  {
				const falla = document.getElementById('falla');
				falla.style.visibility = "visible"
			}
		})
})
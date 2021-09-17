    
    
        function insert(num){
            document.getElementById("display").value = document.getElementById("display").value + num
            
        }

        function backspace(){
            let dataDisplay = document.getElementById("display")
            let result = dataDisplay.value.substr(0, dataDisplay.value.length - 1)
            dataDisplay.value = result
        }

        function clean (){
            document.getElementById("display").value = '';
        
        }

        function calcular(){
            let resultado = document.getElementById("display").value
            if (resultado){
                document.getElementById("display").value = eval(resultado)
            }
        }
    
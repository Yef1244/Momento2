
import { StyleSheet, Text, View, TextInput, Button} from 'react-native';
import React,{useState} from 'react';


export default function App() {
  //Definir los estados(variables) de este componente
  const[vlrPrestamo,setvlrPrestamo] = useState('');
  const[tipoPrestamo,settipoPrestamo] = useState('');
  const[nroCuotas,setnroCuotas] = useState('');
  const[vlrCuota,setvlrCuota] = useState('');
  const[totalDeuda,settotalDeuda] = useState('');

  //metodos

   const calcular = ()=>{
    if(tipoPrestamo == 'vivienda'){
      let interes = 0.01
      let totalInteres = parseFloat(vlrPrestamo) * parseFloat(interes)
      let total = (parseFloat(totalInteres) * parseFloat(nroCuotas))  + parseFloat(vlrPrestamo)
      settotalDeuda(total)
      let cuota = parseFloat(total) / parseFloat(nroCuotas)
      setvlrCuota(cuota.toFixed(2))
    }
    else if(tipoPrestamo == 'educacion'){
      let interes = 0.005
      let totalInteres = parseFloat(vlrPrestamo) * parseFloat(interes)
      let total = (parseFloat(totalInteres) * parseFloat(nroCuotas))  + parseFloat(vlrPrestamo)
      settotalDeuda(total)
      let cuota = parseFloat(total) / parseFloat(nroCuotas)
      setvlrCuota(cuota.toFixed(2))
    }
    }

  const limpiar = () =>{
    setvlrPrestamo('');
    settipoPrestamo('');
    setnroCuotas('');
    setvlrCuota('');
    settotalDeuda('');
  }

  return (
    <View style={styles.container}>
      <View >
      <Text>{'\n'}</Text>
        <Text style={styles.titulo}>
            Simulador de Credito
        </Text>
        <Text>{'\n'}Valor Préstamo</Text>
        <TextInput style={styles.textInput}
        placeholder='Ingrese el valor del prestamo'
        onChangeText={vlrPrestamo => setvlrPrestamo(vlrPrestamo)}
        value = {vlrPrestamo}
        />
        <Text>{'\n'}Tipo Préstamo</Text>
        <TextInput style={styles.textInput}
        placeholder='Ingrese el tipo prestamo'
        onChangeText={tipoPrestamo => settipoPrestamo(tipoPrestamo)}
        value = {tipoPrestamo}
        />
        <Text>{'\n'}Número Cuotas</Text>
        <TextInput style={styles.textInput}
        placeholder='Ingrese el número de cuotas'
        onChangeText={nroCuotas => setnroCuotas(nroCuotas)}
        value = {nroCuotas}
        />
        <Text>{'\n'}Valor  de la Cuota</Text>
        <TextInput 
        value = {vlrCuota}
        />
        <Text>{'\n'}Total de la Deuda </Text>
        <TextInput 
        value = {totalDeuda}
        />
        <Text>{'\n'}</Text>
        <Button 
        title ="Calcular" 
        onPress={()=>calcular()}
        />
         <Text>{'\n'}</Text>
        <Button 
        title ="Limpiar Datos"
        onPress={()=>limpiar()} 
        />

    
      </View>
      
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection:'colum'
  },
  textInput:{
    backgroundColor: '#d6d6d6',
    color: '#010101',
    height: 40,
    padding: 5,
    marginBottom: 15,
    width: 400,
    borderRadius: 4
  },
  titulo: {
    fontSize: 30,
    fontWeight: 'bold',
  }
});

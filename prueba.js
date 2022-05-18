
import { StyleSheet, Text, View, TextInput, Button} from 'react-native';
import React,{useState,useEffect} from 'react';
import RNPickerSelect from 'react-native-picker-select';
import { Switch, TouchableOpacity } from 'react-native-web';


export default function App() {
    const [vlrPrestamo, setvlrPrestamo] = useState('');
    const [tipoPrestamo, settipoPrestamo] = useState('');
    const [nroCuotas, setnroCuotas] = useState(0);
    const [cuotasManejo, setcuotasManejo] = useState(false)
    const [vlrCuota, setvlrCuota] = useState(0);
    const [totalDeuda, settotalDeuda] = useState(0);
    const itemsPrestamo = [
        {label: 'vivienda', value: 'viv'},
        {label: 'Educacion', value: 'edu'},
        {label: 'Vehiculo', value: 'veh'},
    ];
    const itemsCuotas = [
        {label: '12', value: '12'},
        {label: '24', value: '24'},
        {label: '38', value: '38'},
    ];

    return (

    <View style={styles.container}>
        <Image 
            style={{width: 50, height: 50, borderRadius: 10, resizeMode: 'stretch'}}
            source={require()}>
        </Image>
        <Text>Valor Préstamo</Text>
        <TextInput 
        style={{width: 200, height: 30, textAlign: 'center', padding: 5}}
        placeholder='Ingrese valor prestamo'
        onChangeText={(vlrPrestamo) => setvlrPrestamo(vlrPrestamo)}
        value={vlrPrestamo}
        />
        <View>
            <Text>Tipo de Préstamo</Text>
            <RNPickerSelect
            placeholder={{
                label:'Seleccione tipo de prestamo',
                value:''
            }}
            onValueChange={(tipoPrestamo) => settipoPrestamo(tipoPrestamo)}
            items={itemsPrestamo}
            />
        </View>
        <View>
            <Text>Número de Cuotas</Text>
            <RNPickerSelect
            placeholder={{
                label:'Seleccione numero de cuotas',
                value:''
            }}
            onValueChange={(nroCuotas) => setnroCuotas(nroCuotas)}
            items={itemsCuotas}
            />
        </View>
        <View>
            <Text>Cuota de Manejo</Text>
            <Switch
            onValueChange={(cuotasManejo) => setcuotasManejo(cuotasManejo)}
            value={cuotasManejo}
            />
        </View>
        <View>
            <Text>Valor Cuota</Text>
            <TextInput
            style={{textAlign: 'center'}}
            value={vlrCuota}
            />
        </View>
        <View>
            <Text>Total Deuda</Text>
            <TextInput
            style={{textAlign: 'center'}}
            value={totalDeuda}
            />
        </View>
        <View>
            <TouchableOpacity
            style={{color: 'blue', backgroundColor:'gray', borderRadius: 10, padding: 5, width: 150, height: 30, 
            textAlign: 'center'}}
            >
            <Text style={{color: 'white'}}>Calcular</Text>
            </TouchableOpacity>
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

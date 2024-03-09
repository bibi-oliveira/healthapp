import React, {useState} from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet} from 'react-native';
import ResultIMC from "./ResultIMC";
import  styles  from "./style";

export default function Form(){

const[Height, setHeight] = useState(null)
const[Weight, setWeight] = useState(null)
const[MessageImc, setMessageImc]= useState("Preencha o peso e altura")
const[Imc, setImc] = useState(null)
const[TextButton, setTextButton] = useState("Calcular")

function ImcCalculator() {
  // Substituindo as vírgulas por ponto
  let heightWithoutComma = Height.replace(',', '.');
  let weightWithoutComma = Weight.replace(',', '.');

  // Calculo do IMC
  let imcValue = (weightWithoutComma / (heightWithoutComma * heightWithoutComma)).toFixed(2);
  setImc(imcValue);
}

function validationImc(){
  if (Weight != null && Height != null) {
    ImcCalculator()
    setHeight(null)
    setWeight(null)
    setMessageImc("Seu Imc é Igual:")
    setTextButton("Calcular Novamente")
    return
  }
  setImc(null)
  setTextButton("Calcular")
  setMessageImc("Preencha o peso e altura")
}

  return(
    <View  style={styles.formContext}>
      <View style={styles.form}>

        <Text style={styles.formLabel}  >Altura:  </Text>
        <TextInput
          placeholder="Ex: 1.72"
          keyboardType="numeric"
          onChangeText={setHeight} 
          value={Height} 
          style={styles.formInput}
        />

        <Text style={styles.formLabel}  >Peso:  </Text>
        <TextInput 
          placeholder="Ex: 80.250" 
          keyboardType="numeric"
          onChangeText={setWeight} 
          value={Weight} 
          style={styles.formInput}
        />

        <TouchableOpacity style={styles.buttonCalculator}
        onPress={() => validationImc() } >
          <Text style={styles.textButtonCalculator}>{TextButton}</Text>
        </TouchableOpacity>
      </View>
      <ResultIMC MessageResultImc={MessageImc} ResultImc={Imc}/>
    </View>
  );
}

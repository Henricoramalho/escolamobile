import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React, { useState } from "react";
import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import type { RootStackParamList } from "../navigation/AppNavigator";

type CadastrarTurmaNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "CadastrarTurma"
>;

export default function CadastrarTurmaScreen() {
  const [nomeTurma, setNomeTurma] = useState("");
  const navigation = useNavigation<CadastrarTurmaNavigationProp>();

  const handleCadastrar = async () => {
    const idProfessor = await AsyncStorage.getItem("professorId");

    if (!idProfessor) {
      Alert.alert(
        "Erro",
        "ID do professor não encontrado. Faça login novamente."
      );
      return;
    }

    if (!nomeTurma.trim()) {
      Alert.alert("Atenção", "Por favor, insira o nome da turma.");
      return;
    }

    try {
      const response = await fetch("http://192.168.137.79:3001/turmas", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nome: nomeTurma.trim(),
          professor: Number(idProfessor),
        }),
      });

      if (!response.ok) throw new Error("Erro ao criar a turma");

      const turmaCriada = await response.json();
      console.log("Turma criada:", turmaCriada);
      Alert.alert("Sucesso", "Turma cadastrada com sucesso!");

      setNomeTurma(""); // limpa o input
      navigation.navigate("Dashboard"); // volta pro dashboard
    } catch (error) {
      console.error("Erro ao cadastrar turma:", error);
      Alert.alert(
        "Erro",
        "Falha ao cadastrar turma. Tente novamente mais tarde."
      );
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastrar Turma</Text>

      <Text style={styles.label}>Nome da Turma:</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite o nome da turma"
        value={nomeTurma}
        onChangeText={setNomeTurma}
      />

      <TouchableOpacity style={styles.button} onPress={handleCadastrar}>
        <Text style={styles.buttonText}>Criar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f0f4f8",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 30,
    textAlign: "center",
    color: "#007acc",
  },
  label: { fontSize: 16, marginBottom: 8, color: "#555" },
  input: {
    borderWidth: 1.5,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 12,
    fontSize: 16,
    marginBottom: 20,
    backgroundColor: "#fff",
  },
  button: {
    backgroundColor: "#007acc",
    paddingVertical: 12,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: { color: "#fff", fontSize: 16, fontWeight: "bold" },
});

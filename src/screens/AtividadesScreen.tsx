import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React, { useEffect, useState } from "react";
import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import type { RootStackParamList } from "../navigation/AppNavigator";

type AtividadesNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Atividades"
>;

interface Atividade {
  id: number;
  titulo: string;
}

export default function AtividadesScreen() {
  const [professorNome, setProfessorNome] = useState<string | null>(null);
  const [atividades, setAtividades] = useState<Atividade[]>([]);
  const navigation = useNavigation<AtividadesNavigationProp>();

  useEffect(() => {
    const carregarProfessor = async () => {
      const nome = await AsyncStorage.getItem("professorNome");
      setProfessorNome(nome || "Professor");
    };

    const carregarAtividades = async () => {
      const idTurma = await AsyncStorage.getItem("turmaId");
      if (!idTurma) return;

      try {
        const response = await fetch(
          `http://192.168.137.79:3001/atividades/turma/${idTurma}`
        );
        if (!response.ok) throw new Error("Falha ao carregar atividades");

        const dados = await response.json();
        setAtividades(dados);
      } catch (error) {
        console.error("Erro ao carregar atividades:", error);
      }
    };

    carregarProfessor();
    carregarAtividades();
  }, []);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.professorInfo}>Bem-vindo, {professorNome}</Text>
        <Text style={styles.headerTitle}>Escola Linda</Text>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.navigate("Dashboard")}
        >
          <Text style={styles.backText}>Voltar</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.dashboardHeader}>
        <Text style={styles.dashboardTitle}>Atividades</Text>
        <TouchableOpacity
          style={styles.cadastrarButton}
          onPress={() => navigation.navigate("CadastrarAtividade")}
        >
          <Text style={styles.cadastrarText}>Cadastrar Atividade</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.atividadesSection}>
        <Text style={styles.sectionTitle}>Atividades da Turma</Text>
        <FlatList
          data={atividades}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.atividadeRow}>
              <Text style={styles.atividadeId}>{item.id}</Text>
              <Text style={styles.atividadeTitulo}>{item.titulo}</Text>
            </View>
          )}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f0f4f8", paddingTop: 90 },
  header: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    backgroundColor: "#007acc",
    padding: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    zIndex: 1000,
  },
  headerTitle: { color: "#fff", fontSize: 18, fontWeight: "bold" },
  professorInfo: {
    color: "#fff",
    backgroundColor: "rgba(255,255,255,0.2)",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 25,
  },
  backButton: {
    backgroundColor: "#fff",
    padding: 8,
    borderRadius: 25,
  },
  backText: { color: "#007acc", fontWeight: "600" },

  dashboardHeader: {
    marginTop: 20,
    backgroundColor: "#007acc",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  dashboardTitle: { fontSize: 22, color: "#fff", fontWeight: "bold" },
  cadastrarButton: {
    marginTop: 10,
    backgroundColor: "#fff",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 25,
  },
  cadastrarText: { color: "#007acc", fontWeight: "600" },

  atividadesSection: {
    marginTop: 20,
    padding: 20,
    backgroundColor: "#fff",
    borderRadius: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#007acc",
    marginBottom: 10,
    textAlign: "center",
  },
  atividadeRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  atividadeId: { width: 30, textAlign: "center" },
  atividadeTitulo: { flex: 1, textAlign: "center" },
});

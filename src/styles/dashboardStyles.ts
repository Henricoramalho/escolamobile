import { Dimensions, StyleSheet } from "react-native";

const { width, height } = Dimensions.get("window");

const scaleFont = (size: number): number => size * (width / 375);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f4f8",
    paddingTop: Math.max(height * 0.08, 60),
    paddingHorizontal: 15,
  },

  header: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    backgroundColor: "#007acc",
    paddingVertical: 10,
    paddingHorizontal: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    zIndex: 1000,
  },
  headerTitle: { color: "#fff", fontSize: scaleFont(18), fontWeight: "bold" },

  professorInfo: {
    color: "#fff",
    backgroundColor: "rgba(255,255,255,0.2)",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 25,
  },

  logoutButton: {
    backgroundColor: "#fff",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 25,
  },
  logoutText: { color: "#007acc", fontWeight: "600" },

  dashboardHeader: {
    marginTop: 20,
    backgroundColor: "#007acc",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  dashboardTitle: {
    fontSize: scaleFont(22),
    color: "#fff",
    fontWeight: "bold",
  },
  dashboardSubtitle: {
    fontSize: scaleFont(16),
    color: "#e0e0e0",
    marginVertical: 8,
  },

  cadastrarTurmaButton: {
    backgroundColor: "#fff",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 25,
  },
  cadastrarTurmaText: { color: "#007acc", fontWeight: "600" },

  turmasSection: {
    marginTop: 20,
    padding: 15,
    backgroundColor: "#fff",
    borderRadius: 10,
  },
  turmasTitle: {
    fontSize: scaleFont(18),
    fontWeight: "600",
    color: "#007acc",
    marginBottom: 12,
    textAlign: "center",
  },
  turmaRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
  turmaId: { flexBasis: "10%", textAlign: "center", minWidth: 30 },
  turmaNome: { flex: 1, textAlign: "center", minWidth: 80 },

  verDetalhes: {
    backgroundColor: "#007acc",
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 6,
    marginBottom: 5,
  },
  deletarTurma: {
    backgroundColor: "#e74c3c",
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 6,
    marginBottom: 5,
  },
  buttonText: { color: "#fff", fontWeight: "600", fontSize: scaleFont(12) },
});

export default styles;

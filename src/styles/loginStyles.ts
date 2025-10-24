import { Dimensions, StyleSheet } from "react-native";

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f4f8",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },

  header: {
    width: "100%",
    backgroundColor: "#007acc",
    paddingVertical: 15,
    position: "absolute",
    top: 0,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowRadius: 5,
    elevation: 3,
  },
  headerText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    letterSpacing: 1,
    textTransform: "uppercase",
  },

  title: {
    marginTop: height * 0.08, // menor que antes
    marginBottom: 15,
    color: "#333",
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
  },

  form: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 8,
    width: "90%", // usa percentual ao invés de Math.min
    maxWidth: 400, // evita ficar enorme em tablet
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 3,
  },

  label: {
    color: "#555",
    fontWeight: "600",
    marginBottom: 8,
    fontSize: 14,
  },

  input: {
    width: "100%",
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginBottom: 15,
    borderWidth: 1.5,
    borderColor: "#ccc",
    borderRadius: 5,
    fontSize: 16,
  },

  button: {
    backgroundColor: "#007acc",
    paddingVertical: 12,
    borderRadius: 5,
    alignItems: "center",
  },

  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default styles;

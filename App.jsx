import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Vibration,
} from "react-native";
import { useState } from "react";

export default function App() {
  const [currentNumber, setCurrentNumber] = useState("");
  const [lastNumber, setLastNumber] = useState("");

  const buttons = [
    "C",
    "DEL",
    "/",
    7,
    8,
    9,
    "*",
    4,
    5,
    6,
    "-",
    1,
    2,
    3,
    "+",
    0,
    ".",
    "=",
  ];

  function calculator() {
    let lastArr = currentNumber[currentNumber.length - 1];

    if (
      lastArr === "/" ||
      lastArr === "*" ||
      lastArr === "-" ||
      lastArr === "+" ||
      lastArr === "."
    ) {
      setCurrentNumber(currentNumber);
      return;
    } else {
      let result = eval(currentNumber).toString();
      setCurrentNumber(result);
      return;
    }
  }

  function handleInput(buttonPressed) {
    if (
      buttonPressed === "+" ||
      buttonPressed === "-" ||
      buttonPressed === "*" ||
      buttonPressed === "/"
    ) {
      Vibration.vibrate(35);
      setCurrentNumber(currentNumber + buttonPressed);
      return;
    } else if (
      buttonPressed === 1 ||
      buttonPressed === 2 ||
      buttonPressed === 3 ||
      buttonPressed === 4 ||
      buttonPressed === 5 ||
      buttonPressed === 6 ||
      buttonPressed === 7 ||
      buttonPressed === 8 ||
      buttonPressed === 9 ||
      buttonPressed === 0 ||
      buttonPressed === "."
    ) {
      Vibration.vibrate(35);
    }
    switch (buttonPressed) {
      case "DEL":
        Vibration.vibrate(35);
        setCurrentNumber(currentNumber.substring(0, currentNumber.length - 1));
        return;
      case "C":
        Vibration.vibrate(35);
        setLastNumber("");
        setCurrentNumber("");
        return;
      case "=":
        Vibration.vibrate(35);
        setLastNumber(currentNumber + "=");
        calculator();
        return;
    }
    setCurrentNumber(currentNumber + buttonPressed);
  }

  const styles = StyleSheet.create({
    header: {
      maxWidth: "100%",
      minHeight: "5%",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "grey",
      marginTop: 40,
    },
    headerText: {
      maxHeight: 45,
      color: "#fff",
      margin: 10,
      fontSize: 25,
    },
    results: {
      maxWidth: "100%",
      minHeight: "25%",
      alignItems: "flex-end",
      justifyContent: "flex-end",
    },
    resultText: {
      maxHeight: 45,
      color: "#ffad33",
      margin: 15,
      fontSize: 40,
    },
    historyText: {
      color: "#cc7a00",
      fontSize: 20,
      marginRight: 10,
      alignSelf: "flex-end",
    },
    buttons: {
      width: "100%",
      height: "34%",
      flexDirection: "row",
      flexWrap: "wrap",
    },
    button: {
      margin: 1,
      alignItems: "center",
      justifyContent: "center",
      minWidth: "24%",
      minHeight: "54%",
      flex: 2,
    },
    textButton: {
      color: "#fff",
      fontSize: 28,
    },
  });

  return (
    <View>
      <View style={styles.header}>
        <Text style={styles.headerText}>Calculator - 電卓</Text>
      </View>
      <View style={styles.results}>
        <Text style={styles.historyText}>{lastNumber}</Text>
        <Text style={styles.resultText}>{currentNumber}</Text>
      </View>
      <View style={styles.buttons}>
        {buttons.map((button) =>
          button === "=" ||
          button === "/" ||
          button === "*" ||
          button === "-" ||
          button === "+" ? (
            <TouchableOpacity
              key={button}
              style={[styles.button, { backgroundColor: "#ffad33" }]}
              onPress={() => handleInput(button)}
            >
              <Text
                style={[styles.textButton, { color: "white", fontSize: 32 }]}
              >
                {button}
              </Text>
            </TouchableOpacity>
          ) : button === 0 ? (
            <TouchableOpacity
              key={button}
              style={[
                styles.button,
                {
                  backgroundColor: typeof button === "number" && "#303946",
                  minWidth: "36%",
                },
              ]}
              onPress={() => handleInput(button)}
            >
              <Text style={styles.textButton}>{button}</Text>
            </TouchableOpacity>
          ) : button === "." || button === "DEL" ? (
            <TouchableOpacity
              key={button}
              style={[
                styles.button,
                {
                  backgroundColor: button === "." ? "#303946" : "#804d00",
                  minWidth: "37%",
                },
              ]}
              onPress={() => handleInput(button)}
            >
              <Text style={styles.textButton}>{button}</Text>
            </TouchableOpacity>
          ) : button === "C" ? (
            <TouchableOpacity
              key={button}
              style={[
                styles.button,
                {
                  backgroundColor: "#804d00",
                  minWidth: "36%",
                },
              ]}
              onPress={() => handleInput(button)}
            >
              <Text style={styles.textButton}>{button}</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              key={button}
              style={[
                styles.button,
                {
                  backgroundColor: typeof button === "number" && "#303946",
                },
              ]}
              onPress={() => handleInput(button)}
            >
              <Text style={styles.textButton}>{button}</Text>
            </TouchableOpacity>
          )
        )}
      </View>
    </View>
  );
}

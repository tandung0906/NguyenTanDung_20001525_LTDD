import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Button, Alert, TouchableOpacity } from 'react-native';

export default function PasswordGenerator() {
  const [passwordLength, setPasswordLength] = useState('');
  const [includeLowerCase, setIncludeLowerCase] = useState(false);
  const [includeUpperCase, setIncludeUpperCase] = useState(false);
  const [includeNumber, setIncludeNumber] = useState(false);
  const [includeSpecialSymbol, setIncludeSpecialSymbol] = useState(false);

  // Hàm để tạo mật khẩu
  const generatePassword = () => {
    let charSet = '';
    if (includeLowerCase) charSet += 'abcdefghijklmnopqrstuvwxyz';
    if (includeUpperCase) charSet += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (includeNumber) charSet += '0123456789';
    if (includeSpecialSymbol) charSet += '!@#$%^&*()_+~`|}{[]:;?><,./-=';
    
    if (charSet === '' || passwordLength === '' || isNaN(passwordLength)) {
      Alert.alert('Lỗi', 'Vui lòng nhập độ dài mật khẩu hợp lệ và chọn ít nhất một tùy chọn!');
      return;
    }

    let password = '';
    for (let i = 0; i < parseInt(passwordLength); i++) {
      const randomIndex = Math.floor(Math.random() * charSet.length);
      password += charSet[randomIndex];
    }

    Alert.alert('Mật khẩu của bạn:', password);
  };

  const renderCheckbox = (label, value, setValue) => {
    return (
      <View style={styles.optionContainer}>
        <Text>{label}</Text>
        <TouchableOpacity
          style={[styles.checkbox, value && styles.checkboxChecked]}
          onPress={() => setValue(!value)}
        />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>PASSWORD GENERATOR</Text>
      <TextInput
        style={styles.input}
        placeholder="Mật khẩu của bạn"
        editable={false} // Đây là trường hiển thị kết quả mật khẩu
      />
      
      <View style={styles.optionContainer}>
        <Text>Password length</Text>
        <TextInput
          style={styles.lengthInput}
          keyboardType="numeric"
          value={passwordLength}
          onChangeText={(text) => setPasswordLength(text)}
        />
      </View>

      {renderCheckbox('Include lower case letters', includeLowerCase, setIncludeLowerCase)}
      {renderCheckbox('Include upper case letters', includeUpperCase, setIncludeUpperCase)}
      {renderCheckbox('Include number', includeNumber, setIncludeNumber)}
      {renderCheckbox('Include special symbol', includeSpecialSymbol, setIncludeSpecialSymbol)}

      <Button title="GENERATE PASSWORD" onPress={generatePassword} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#2c2c54',
    justifyContent: 'center',
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 5,
    height: 40,
    marginBottom: 20,
    paddingLeft: 10,
  },
  optionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  lengthInput: {
    width: 50,
    backgroundColor: '#fff',
    borderRadius: 5,
    height: 40,
    paddingLeft: 10,
  },
  checkbox: {
    width: 24,
    height: 24,
    borderWidth: 2,
    borderColor: '#fff',
    borderRadius: 3,
  },
  checkboxChecked: {
    backgroundColor: '#0066FF',
  },
});

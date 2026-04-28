import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Button, Image, TextInput, Alert } from 'react-native';

export default function App() {
	const [nome, setNome] = useState('')
	const [preco, setPreco] = useState()
	const [codigo, setCodigo] = useState('')
	const [estoque, setEstoque] = useState()
	const [erroNome, setErroNome] = useState('')
	const [erroPreco, setErroPreco] = useState('')
	const [erroCodigo, setErroCodigo] = useState('')
	const [erroEstoque, setErroEstoque] = useState('')

	function validar() {
		const apenasNumeros = /^[0-9]+$/;
		const apenasLetras = /^[a-zA-Z]+$/;
		const codigoValido = /^[A-Za-z0-9]+$/;

		if (!apenasLetras.test(nome)) {
			setErroNome('Somente letras no nome')
			return
		} else {
			setErroCodigo(undefined)
		}

		if (nome.length < 3) {
			setErroNome('Nome somente com mais de 3 letras')
			return
		} else {
			setErroNome(undefined)
		}

		if (!apenasNumeros.test(preco)) {
			setErroPreco('Somente numeros')
		} else {
			setErroPreco(undefined)
		}

		if (preco <= 0) {
			setErroPreco('Somente preços acima de 0')
		} else {
			setErroPreco(undefined)
		}

		if (!apenasNumeros.test(estoque)) {
			setErroEstoque('Estoque somente contem numeros')
			return
		} else {
			setErroEstoque(undefined)
		}
		if (estoque < 0) {
			setErroEstoque('O estoque não pode ser negativo')
			return
		} else {
			setErroEstoque(undefined)
		}

		if (!codigoValido.test(codigo)) {
			setErroCodigo('Formato invaldio. Em ordem, 3 letras e 4 números')
		} else {
			setErroCodigo(undefined)
		}

		Alert.alert('Nome gravado com sucesso')

	}
	return (
		<View style={styles.container}>

			<Image style={styles.icon} source={require('./assets/icone.png')} />
			<Text style={styles.titulo}>Adicionar produto</Text>
			<Text>Preencha os dados do inventário</Text>

			<View style={styles.div_input_loongo}>

				<Text>Nome do produto</Text>
				<TextInput
					style={styles.input_loongo}
					placeholder='Ex: RAM'
					placeholderTextColor={'gray'}
					onChangeText={setNome}
					value={nome}
				/>

				{erroNome && <Text style={{ color: 'red' }}>{erroNome}</Text>}
			</View>
			<View style={styles.div_input_curto}>
				<View>
					<Text>Preço (reais)</Text>
					<TextInput
						style={styles.input_curto}
						placeholder='0.00'
						placeholderTextColor={'gray'}
						onChangeText={setPreco}
						value={preco}
					/>
					{erroPreco && <Text style={{ color: 'red' }}>{erroPreco}</Text>}
				</View>
				<View>
					<Text>Estoque</Text>
					<TextInput
						style={styles.input_curto}
						placeholder='0'
						placeholderTextColor={'gray'}
						onChangeText={setEstoque}
						value={estoque}
					/>
					{erroEstoque && <Text style={{ color: 'red' }}>{erroEstoque}</Text>}
				</View>
			</View>
			<View style={styles.div_input_loongo}>
				<Text>Código identificador</Text>
				<TextInput
					style={styles.input_loongo}
					placeholder='ABC1234'
					placeholderTextColor={'grey'}
					onChangeText={setCodigo}
					value={codigo}
				/>
				{erroCodigo && <Text style={{ color: 'red' }}>{erroCodigo}</Text>}
			</View>
			<Button title='Gravar produto' onPress={validar} />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
	icon: {
		width: 50,
		height: 50
	},
	titulo: {
		fontSize: 24,
		fontWeight: 'bold'
	},
	div_input_loongo: {
		padding: 30
	},
	input_loongo: {
		width: 400,
		padding: 10,
		borderRadius: 10,
		borderWidth: 1
	},
	div_input_curto: {
		flexDirection: 'row',
		gap: 50
	},
	input_curto: {
		width: 175,
		padding: 10,
		borderRadius: 10,
		borderWidth: 1
	},
});
![logo coffeeshop](./assets/logo.png)

Repositório com o projeto exemplo utilizado na palestra sobre React Native.

Abaixo está listado o motivo das escolhas sobre as bibliotecas utilizadas, como instalar e rodar o projeto!

## Preview do app
![screenshot do app](https://i.imgur.com/xlFBX7f.png)

---- 

## Como instalar o projeto

1. Clone o repositório. `git clone https://github.com/eduduardo/coffee-shop.git`
2. Rode: `yarn install` ou `npm install`
3. Para rodar o projeto no android: `react-native run-android`
4. Para rodar o projeto no iOS: `react-native run-ios`

### Como rodar manualmente no iOS
1. Depois do `yarn install`
2. Rode: `cd ios/ && pod install`
3. Abra `ios/CoffeeShop.xcworkspace` no XCODE (version >= 12)
4. Faça o build do projeto com o target de simulador ou device físico
5. Rode no terminal `yarn start` para inicial o servidor de bundle.

### Manual run Android
1. Depois do `yarn install`
2. Rode `cd android/ && sh gradlew installDebug`
3. Rode no terminal `yarn start` para inicial o servidor de bundle.

----

## Stack de tecnologias utilizadas

### Código de produção

1. [react-native](https://github.com/facebook/react-native) - utilizado em sua versão mais recente.
2. [react-navigation](https://github.com/react-navigation/react-navigation) - utilizado para o roteamento, facilitando bastante na criação do modal do requisito
3. [react-native-elements](https://github.com/react-native-elements/react-native-elements) - utilizado para agilizar o design dos componentes básicos, principalmente da busca.
4. [react-native-vector-icons](https://github.com/oblador/react-native-vector-icons) - utilizado para utilizar ícones do [Feather](https://feathericons.com/)

## Visual
O logo foi feito utilizando o _logo maker_ do [Adobe Spark](https://spark.adobe.com/express-apps/logo-maker/).

3. Cores utilizadas: `#4A2C29`

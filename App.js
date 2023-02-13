import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Inicio from "./components/Inicio";
import Contatos from "./components/Contatos";
import Produtos from "./components/Produtos";

const Menu = createBottomTabNavigator().Navigator;
const Itens = createBottomTabNavigator().Screen;

export default function App() {
  return (
    <NavigationContainer>
      <Menu>
        <Itens name="Início" component={Inicio}/>
        <Itens name="Contatos" component={Contatos}/>
        <Itens name="Produtos" component={Produtos}/>
      </Menu>
    </NavigationContainer>
  );
}
import estilos from './Topo.module.css';
import Logo from '../assets/logo.png';
import iconeSol from '../assets/sun.png';
import iconeLua from '../assets/moon.png';
import Image from 'next/image';

export default function Topo(props) {
  return(
    <header className={props.temaEscuro ? estilos.topo_modo_escuro : estilos.topo_modo_claro}>
      <Image className={estilos.logo} src={Logo} alt="logomarca"/>
      <button onClick={props.alterarTema} className={props.temaEscuro ? estilos.btn_modo_escuro : estilos.btn_modo_claro}>
        <Image className={estilos.iconesBtn} src={props.temaEscuro ? iconeSol : iconeLua} alt='icone'/>
      </button>
    </header>
  )
}
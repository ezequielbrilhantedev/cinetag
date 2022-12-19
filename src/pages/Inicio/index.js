import Banner from 'components/Banner';
import Rodape from 'components/Rodape';
import Titulo from 'components/Titulo';
import Cabecalho from './../../components/Cabecalho/index';

function Inicio() {
  return (
    <>
      <Cabecalho />
      <Banner imagem="home" />
      <Titulo>
        <h1>Um lugar para guardar seus vídeos e filmes</h1>
      </Titulo>
      <Rodape />
    </>
  );
}

export default Inicio;

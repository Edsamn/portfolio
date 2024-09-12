import DefaultLayout from "../layout/DefaultLayout";
import eu from "../assets/eu.jpg";

function Home() {
  return (
    <DefaultLayout>
      <h1>Hello World!</h1>
      <img src={eu} alt="Eu e meu gato." />
      <h2>Meu Nome é Eduardo Marinho Silva Ribas e estou trilhando o caminho de Desenvolvedor Web Full-stack.</h2>
      <p>
        Decidir entrar na área de tecnologia em meados de 2021, quando fiz o Programa Starter da Growdev, onde aprendi
        várias tecnologias necessárias para desenvolver aplicações web completas. Aqui vai uma lista com as tecnologias
        que aprendi:
      </p>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>Javascript</li>
        <li>Node.js</li>
        <li>Typescript</li>
        <li>React</li>
        <li>postgreSQL</li>
        <li>PrismaORM</li>
      </ul>
      <p>
        Também aprendi a consumir e criar APIs e fazer o deploy das aplicações na internet, tanto back-end(usando
        Render) como front-end(usando Vercel).
      </p>
      <h2>Meus projetos:</h2>
    </DefaultLayout>
  );
}

export default Home;

import eu from "../assets/eu.jpg";

function Presentation() {
  return (
    <>
      <h2>Meu Nome é Eduardo Marinho Silva Ribas e estou trilhando o caminho de Desenvolvedor Web Full-stack.</h2>
      <div
        style={{
          display: "flex",
          height: "500px",
          width: "1000px",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <img src={eu} alt="Eu e meu gato." />
        <p>
          Em 2020 me formei gestor de recursos humanos pela Feevale, mas logo depois decidi fazer a migração para a área
          de tecnologia em meados de 2021, quando fiz o Programa Starter da Growdev, onde aprendi várias tecnologias
          necessárias para desenvolver aplicações web completas. Aqui vai uma lista com as tecnologias que aprendi:
        </p>
      </div>
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
    </>
  );
}

export default Presentation;

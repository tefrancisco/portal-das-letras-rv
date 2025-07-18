export const About = () => {
  return (
    <section
      id="about"
      className="h-full w-screen flex flex-col md:flex-row overflow-hidden"
    >
      <div
        id="about-left"
        className="h-1/2 w-full pb-10 pt-10 md:w-1/2 md:h-screen flex items-center justify-center"
      >
        
        <img src="img/if-black.png" className="" />

      </div>

      <div
        id="about-right"
        className="h-1/2 md:w-1/2 pb-10 pt-10 md:h-screen flex items-center justify-center mb-0 overflow-hidden"
      >
        <div className="h-full md:w-1/2 text-center pl-5 pr-4 flex flex-col items-center justify-center mb-0">
          <h1 className="text-6xl mb-5 title-font text-black">Sobre</h1>

          <p className="text-2xl mb-10 max-w-lg mx-auto font-weight-400 text-justify p-font text-black">
            O website ‘Portal das Letras’ é produto de um projeto de iniciação
            científica do Instituto Federal do Triângulo Mineiro, e tem como
            objetivo auxiliar no estudo dos conteúdos de literatura presentes
            na grade curricular do ensino médio, tudo em um só lugar e com fácil
            acesso.
          </p>
        </div>
      </div>
    </section>
  );
};

import React, { useState, useEffect } from "react";
import capa from "../src/assets/capa.png";
import logo from "../src/assets/logo.png";
import quemSomos from "../src/assets/quemSomos.png";
import setorAdm from "../src/assets/setorAdm1.png";
import setorOp from "../src/assets/setorOp.png";
import setorSaude from "../src/assets/setorSaude.png";
import setorEscola from "../src/assets/setorEscola1.png";
import setorHotel from "../src/assets/setorHotel.png";
import setorManu from "../src/assets/setorManu.png";
import catalogo from "../src/assets/catalogo.png";
import contatoB from "../src/assets/contatoBriefing.jpg";
import prototipo from "../src/assets/designPrototipo.jpg";
import producao from "../src/assets/producaoQualidade1.jpg";
import entrega from "../src/assets/entregaPosvenda2.jpg";
import AgendamentoSection from "../src/components/agendamentoSection";

// Main App component
const App = () => {
  // State to manage the current active section for navigation (simulated routing)
  const [activeSection, setActiveSection] = useState("home");
  // State to manage the mobile menu visibility
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to handle navigation clicks and close mobile menu
  const handleNavClick = (sectionId) => {
    setActiveSection(sectionId);
    // Scroll to the section smoothly
    document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false); // Close menu after clicking a link
  };

  // Toggle mobile menu visibility
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Header / Navbar - Usando a cor de fundo bg-sky-100 */}
      <header className="bg-sky-100 items-center w-full flex shadow-md py-4 sticky top-0 z-50">
        <div className="container mx-auto px-4 flex justify-between items-center">
          {/* Atna Logo - Agora com a tag <img> e largura w-30 */}
          <a
            href="#"
            className="flex items-center space-x-2 w-30"
            onClick={() => handleNavClick("hero")}
          >
            <img src={logo} alt="Atna Uniformes Logo" className="h-10 " />{" "}
          </a>

          {/* Hamburger menu button for mobile */}
          <button
            className="md:hidden text-sky-950 hover:text-yellow-600 focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>

          {/* Main Navigation (hidden on mobile, shown on desktop) */}
          <nav className="hidden md:block">
            <ul className="flex space-x-6 lg:space-x-8">
              <li>
                <button
                  onClick={() => handleNavClick("quem-somos")}
                  className="text-sky-950 hover:text-yellow-600 transition-colors duration-300"
                >
                  Quem Somos
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick("produtos")}
                  className="text-sky-950 hover:text-yellow-600 transition-colors duration-300"
                >
                  Produtos
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick("catalogo")}
                  className="text-sky-950 hover:text-yellow-600 transition-colors duration-300"
                >
                  Catálogo
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick("como-funciona")}
                  className="text-sky-950 hover:text-yellow-600 transition-colors duration-300"
                >
                  Como Funciona
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick("agendamento")}
                  className="bg-sky-950 text-white px-5 py-2 rounded-full hover:bg-yellow-600 transition-colors duration-300 shadow-lg"
                >
                  Agendar Atendimento
                </button>
              </li>
            </ul>
          </nav>
        </div>

        {/* Mobile Menu (conditionally rendered) */}
        {isMenuOpen && (
          <nav className="md:hidden bg-sky-100 shadow-lg py-4 border-t border-gray-200">
            <ul className="flex flex-col items-center space-y-4">
              <li>
                <button
                  onClick={() => handleNavClick("quem-somos")}
                  className="block w-full text-center text-sky-950 hover:text-yellow-600 text-lg transition-colors duration-300 py-2"
                >
                  Quem Somos
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick("produtos")}
                  className="block w-full text-center text-sky-950 hover:text-yellow-600 text-lg transition-colors duration-300 py-2"
                >
                  Produtos
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick("catalogo")}
                  className="block w-full text-center text-sky-950 hover:text-yellow-600 text-lg transition-colors duration-300 py-2"
                >
                  Catálogo
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick("como-funciona")}
                  className="block w-full text-center text-sky-950 hover:text-yellow-600 text-lg transition-colors duration-300 py-2"
                >
                  Como Funciona
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick("agendamento")}
                  className="bg-sky-950 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-yellow-600 transition-colors duration-300 shadow-lg mt-2"
                >
                  Agendar Atendimento
                </button>
              </li>
            </ul>
          </nav>
        )}
      </header>

      {/* Hero Section */}
      <section
        id="hero"
        className="py-20 bg-linear-to-t from-white via-orange-200 to-yellow-600 text-sky-950 md:py-32 md:relative md:h-screen"
      >
        <div className="container mx-auto px-4 text-start relative z-10">
          <h1 className="text-4xl text-center md:text-start md:text-5xl  font-extrabold leading-tight mb-6">
            Uniformes Profissionais <br className="" /> Que Inspiram Confiança.
          </h1>
          <p className="text-2xl text-center md:text-start md:w-lg  md:text-3xl mb-10">
            Qualidade, durabilidade e estilo para a sua equipe se destacar em
            qualquer ambiente.
          </p>
          <div className="text-center md:text-start">
            <button
              onClick={() => handleNavClick("agendamento")}
              className="bg-sky-950 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-yellow-600 transition-colors duration-300 shadow-xl inline-block transform hover:scale-105"
            >
              Solicite um Orçamento Agora
            </button>
          </div>
        </div>
        <img
          src={capa}
          alt=""
          className="w-3xl bottom-0 right-0 mask-b-from-80% mask-b-to-90% md:absolute lg:w-4xl"
        />
      </section>

      {/* Quem Somos Section */}
      <section
        id="quem-somos"
        className="py-16 scroll-mt-96 text-sky-950 md:py-24 bg-linear-to-t from-gray-100 to-white md:scroll-mt-0"
      >
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Quem Somos</h2>
            <p className="text-md text-sky-950 leading-relaxed mb-4">
              O Atelier Neide Amaral é uma empresa especializada na criação e
              desenvolvimento de moda, com foco na entrega de produtos de alta
              qualidade em costura e matéria-prima. Cada peça passa por um
              rigoroso controle de qualidade, onde os detalhes e as
              características únicas de cada modelo são cuidadosamente
              valorizados.
              <br />
              <br />
              Nosso portfólio é amplo e versátil: produzimos desde a camisa polo
              do representante comercial até o vestido de gala usado por
              celebridades em eventos sofisticados. Independentemente do estilo
              ou ocasião, cada peça carrega o padrão de excelência que é marca
              registrada do nosso atelier.
              <br />
              <br />
              Nossa missão é fortalecer a imagem da sua marca através de
              uniformes que refletem profissionalismo, coerência e a identidade
              da sua empresa.
            </p>
          </div>
          <div className="overflow-hidden rounded-xl shadow-lg">
            {/* Imagem inspirada na última imagem de moldes */}
            <img
              src={quemSomos}
              alt="Atelier de design de uniformes"
              className="w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Produtos Section */}
      <section
        id="produtos"
        className="py-16 scroll-mt-96 bg-gray-100 md:py-24 md:scroll-mt-0"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-sky-950 mb-12">
            Nossos Produtos
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Product Card 1: */}
            <div className="bg-sky-50 rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
              <img
                src={setorAdm}
                alt="Uniformes Administrativos"
                className="w-full"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-sky-950 mb-2">
                  Uniformes Administrativos
                </h3>
                <p className="text-sky-950 mb-4">
                  Elegância e conforto para ambientes corporativos. Diversos
                  modelos, cores e tecidos.
                </p>
                <button
                  onClick={() => handleNavClick("catalogo")}
                  className="text-yellow-600 hover:underline font-medium"
                >
                  Ver mais &rarr;
                </button>
              </div>
            </div>
            {/* Product Card 2: */}
            <div className="bg-sky-50 rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
              <img
                src={setorOp}
                alt="Uniformes Operacionais"
                className="w-full"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-sky-950 mb-2">
                  Uniformes Operacionais
                </h3>
                <p className="text-sky-950 mb-4">
                  Versatilidade e durabilidade para o dia a dia, com a sua logo.
                </p>
                <button
                  onClick={() => handleNavClick("catalogo")}
                  className="text-yellow-600 hover:underline font-medium"
                >
                  Ver mais &rarr;
                </button>
              </div>
            </div>
            {/* Product Card 3: */}
            <div className="bg-sky-50 rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
              <img
                src={setorSaude}
                alt="Uniformes Clínicas e Saúde"
                className="w-full"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-sky-950 mb-2">
                  Uniformes Clínicas e Saúde
                </h3>
                <p className="text-sky-950 mb-4">
                  Proteção necessária segundo as normas de segurança.
                </p>
                <button
                  onClick={() => handleNavClick("catalogo")}
                  className="text-yellow-600 hover:underline font-medium"
                >
                  Ver mais &rarr;
                </button>
              </div>
            </div>
            {/* Product Card 4: */}
            <div className="bg-sky-50 rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
              <img
                src={setorEscola}
                alt="Uniformes Escolares"
                className="w-full"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-sky-950 mb-2">
                  Uniformes Escolares
                </h3>
                <p className="text-sky-950 mb-4">
                  Conforto, classe e alinhamento no ambiente de estudo.
                </p>
                <button
                  onClick={() => handleNavClick("catalogo")}
                  className="text-yellow-600 hover:underline font-medium"
                >
                  Ver mais &rarr;
                </button>
              </div>
            </div>
            {/* Product Card 5: Aprons and Lab Coats */}
            <div className="bg-sky-50 rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
              <img
                src={setorHotel}
                alt="Uniformes Hotelaria e Restaurante"
                className="w-full"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-sky-950 mb-2">
                  Uniformes Hotelaria e Restaurante
                </h3>
                <p className="text-sky-950 mb-4">
                  Design, conforto, estilo e ótimo caimento para o dia a dia.
                </p>
                <button
                  onClick={() => handleNavClick("catalogo")}
                  className="text-yellow-600 hover:underline font-medium"
                >
                  Ver mais &rarr;
                </button>
              </div>
            </div>
            {/* Product Card 6: Accessories */}
            <div className="bg-sky-50 rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
              <img
                src={setorManu}
                alt="Uniformes Manutenção"
                className="w-full"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-sky-950 mb-2">
                  Uniformes Serviços e Manutenção
                </h3>
                <p className="text-sky-950 mb-4">
                  Durabilidade, tecidos próprios para uso diário, com a logo da
                  sua empresa.
                </p>
                <button
                  onClick={() => handleNavClick("catalogo")}
                  className="text-yellow-600 hover:underline font-medium"
                >
                  Ver mais &rarr;
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Catalog Section */}
      <section
        id="catalogo"
        className="py-16 scroll-mt-96 bg-linear-to-t from-yellow-600 via-yellow-100 to-gray-100 md:py-24 md:scroll-mt-0"
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-sky-950 mb-8">
            Veja Nosso Catálogo Completo
          </h2>
          <p className="text-lg text-sky-950 mb-8 max-w-3xl mx-auto">
            Explore nossa vasta coleção de uniformes profissionais, com detalhes
            sobre tecidos, modelos, opções de personalização e tabelas de
            medidas.
          </p>
          <a
            href="https://drive.google.com/drive/folders/1dh6d935VkK0bmlcnAcvw0_DEeUN3RLUt?usp=sharing"
            className="bg-green-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-yellow-600 transition-colors duration-300 shadow-xl inline-block transform hover:scale-105"
          >
            Ver Catálogo Google Drive
          </a>
          <div className="mt-12">
            <img
              src={catalogo}
              alt="Preview do Catálogo de Uniformes"
              className="h-96 mx-auto rounded-xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section
        id="como-funciona"
        className="py-16 scroll-mt-96 bg-linear-to-t from-gray-50 via-yellow-100 to-yellow-600 md:py-24 md:scroll-mt-0"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-sky-950 mb-12">
            Como Funciona Nosso Processo
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Step 1 */}
            <div className="bg-sky-50 rounded-xl shadow-lg p-8 text-center transform hover:scale-105 transition-transform duration-300">
              <div className="text-blue-600 text-5xl mb-4">1</div>
              <div>
                <img
                  src={contatoB}
                  alt="montagem mão peças quebra cabeça"
                  className="w-md mb-4"
                />
              </div>
              <h3 className="text-xl font-semibold text-sky-950 mb-3">
                Contato e Briefing
              </h3>
              <p className="text-sky-950">
                Entendemos suas necessidades, setor e identidade de marca.
              </p>
            </div>
            {/* Step 2 */}
            <div className="bg-sky-50 rounded-xl shadow-lg p-8 text-center transform hover:scale-105 transition-transform duration-300">
              <div className="text-blue-600 text-5xl mb-4">2</div>
              <div>
                <img
                  src={prototipo}
                  alt="montagem mão peças quebra cabeça"
                  className="w-md mb-4"
                />
              </div>
              <h3 className="text-xl font-semibold text-sky-950 mb-3">
                Design e Prototipagem
              </h3>
              <p className="text-sky-950">
                Criamos designs exclusivos e protótipos para sua aprovação.
              </p>
            </div>
            {/* Step 3 */}
            <div className="bg-sky-50 rounded-xl shadow-lg p-8 text-center transform hover:scale-105 transition-transform duration-300">
              <div className="text-blue-600 text-5xl mb-4">3</div>
              <div>
                <img
                  src={producao}
                  alt="montagem mão segurando lupa"
                  className="w-md mb-4"
                />
              </div>
              <h3 className="text-xl font-semibold text-sky-950 mb-3">
                Produção e Qualidade
              </h3>
              <p className="text-sky-950">
                Fabricação com materiais de ponta e rigoroso controle de
                qualidade.
              </p>
            </div>
            {/* Step 4 */}
            <div className="bg-sky-50 rounded-xl shadow-lg p-8 text-center transform hover:scale-105 transition-transform duration-300">
              <div className="text-blue-600 text-5xl mb-4">4</div>
              <div>
                <img
                  src={entrega}
                  alt="caixas prontas para entregar"
                  className="w-md mb-4"
                />
              </div>
              <h3 className="text-xl font-semibold text-sky-950 mb-3">
                Entrega e Pós-Venda
              </h3>
              <p className="text-sky-950">
                Entrega rápida e suporte contínuo para sua satisfação.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule Appointment Section (Final Call to Action) */}
      <AgendamentoSection />

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-10">
        <div className="container mx-auto px-4 text-center">
          <p>
            &copy; 2025 ATE.N.A. confecções LTDA. Todos os direitos reservados.
          </p>
          <div className="mt-4 text-sm">
            <a href="#" className="hover:text-blue-500 mx-2">
              Política de Privacidade
            </a>{" "}
            |
            <a href="#" className="hover:text-blue-500 mx-2">
              Termos de Serviço
            </a>
          </div>
          <div className="mt-6 text-lg">
            <p>
              Contato: (31) 99768-0504 | vendasatelierneideamaral@gmail.com.br
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;

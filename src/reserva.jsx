<div className="bg-gray-50 text-gray-800">
  {/* Header / Navbar */}
  <header className="bg-sky-100 shadow-md py-4 sticky top-0 z-50">
    <div className="container mx-auto px-4 flex justify-between items-center">
      {/* Atna Logo */}
      <a
        href="#"
        className="flex items-center space-x-2 w-30"
        onClick={() => handleNavClick("hero")}
      >
        <img src={logo} alt="" />
      </a>
      {/* Main Navigation */}
      <nav>
        <ul className="flex space-x-6 md:space-x-8">
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
  </header>

  {/* Hero Section */}
  <section
    id="hero"
    className="h-screen w-screen flex bg-linear-to-t from-white via-orange-200 to-yellow-600 text-sky-950 md:py-32 relative"
  >
    <div className="container pl-16 px-4 text-start relative">
      <h1 className="text-4xl w-2xl md:text-6xl font-extrabold mb-6">
        Uniformes Profissionais Que Inspiram Confiança.
      </h1>
      <p className="text-lg w-lg md:text-xl mb-10">
        Qualidade, durabilidade e estilo para a sua equipe se destacar em
        qualquer ambiente.
      </p>
      <button
        onClick={() => handleNavClick("agendamento")}
        className="bg-sky-950 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-yellow-600 transition-colors duration-300 shadow-xl inline-block transform hover:scale-105"
      >
        Solicite um Orçamento Agora
      </button>
    </div>
    <img src={capa} alt="" className="w-5xl absolute bottom-0 right-0" />
  </section>

  {/* Quem Somos Section */}
  <section id="quem-somos" className="py-16 md:py-24 bg-white">
    <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      <div>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Quem Somos
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          A Atna Uniformes é especialista na criação e produção de uniformes
          profissionais de alta qualidade, atendendo às necessidades de empresas
          de diversos setores. Com anos de experiência, unimos design moderno,
          materiais duráveis e um atendimento personalizado para garantir que
          sua equipe esteja sempre bem vestida e confortável.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed">
          Nossa missão é fortalecer a imagem da sua marca através de uniformes
          que refletem profissionalismo, coerência e a identidade da sua
          empresa.
        </p>
      </div>
      <div className="relative overflow-hidden rounded-xl shadow-lg">
        {/* Image inspired by the last pattern image */}
        <img
          src={quemSomos}
          alt="Atelier de design de uniformes"
          className="w-full h-auto object-cover"
        />
      </div>
    </div>
  </section>

  {/* Produtos Section */}
  <section id="produtos" className="py-16 md:py-24 bg-gray-50">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
        Nossos Produtos
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Product Card 1: Social Shirt */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
          <img
            src="https://placehold.co/400x300/F0F4F8/6B7A90?text=Camisa+Social"
            alt="Camisa Social Profissional"
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Camisas Sociais
            </h3>
            <p className="text-gray-600 mb-4">
              Elegância e conforto para ambientes corporativos. Diversas cores e
              tecidos.
            </p>
            <button
              onClick={() => handleNavClick("catalogo")}
              className="text-blue-600 hover:underline font-medium"
            >
              Ver mais &rarr;
            </button>
          </div>
        </div>
        {/* Product Card 2: Knit T-shirt */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
          <img
            src="https://placehold.co/400x300/F0F4F8/6B7A90?text=Camiseta+Malha+PV"
            alt="Camiseta de Malha PV"
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Camisetas de Malha
            </h3>
            <p className="text-gray-600 mb-4">
              Versatilidade e durabilidade para o dia a dia, com ou sem logo.
            </p>
            <button
              onClick={() => handleNavClick("catalogo")}
              className="text-blue-600 hover:underline font-medium"
            >
              Ver mais &rarr;
            </button>
          </div>
        </div>
        {/* Product Card 3: Operational Wear */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
          <img
            src="https://placehold.co/400x300/F0F4F8/6B7A90?text=Roupa+Operacional"
            alt="Roupa Operacional"
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Uniformes Operacionais
            </h3>
            <p className="text-gray-600 mb-4">
              Resistência e segurança para setores industriais e serviços.
            </p>
            <button
              onClick={() => handleNavClick("catalogo")}
              className="text-blue-600 hover:underline font-medium"
            >
              Ver mais &rarr;
            </button>
          </div>
        </div>
        {/* Product Card 4: Women's Business Suits */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
          <img
            src="https://placehold.co/400x300/F0F4F8/6B7A90?text=Terno+Feminino"
            alt="Terno Feminino Social"
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Ternos Sociais (Feminino)
            </h3>
            <p className="text-gray-600 mb-4">
              Sofisticação e caimento perfeito para a mulher executiva.
            </p>
            <button
              onClick={() => handleNavClick("catalogo")}
              className="text-blue-600 hover:underline font-medium"
            >
              Ver mais &rarr;
            </button>
          </div>
        </div>
        {/* Product Card 5: Aprons and Lab Coats */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
          <img
            src="https://placehold.co/400x300/F0F4F8/6B7A90?text=Avental+Jaleco"
            alt="Aventais e Jalecos"
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Aventais e Jalecos
            </h3>
            <p className="text-gray-600 mb-4">
              Essenciais para áreas de saúde, gastronomia e serviços gerais.
            </p>
            <button
              onClick={() => handleNavClick("catalogo")}
              className="text-blue-600 hover:underline font-medium"
            >
              Ver mais &rarr;
            </button>
          </div>
        </div>
        {/* Product Card 6: Accessories */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
          <img
            src="https://placehold.co/400x300/F0F4F8/6B7A90?text=Acessorios"
            alt="Acessórios para Uniformes"
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Acessórios Personalizados
            </h3>
            <p className="text-gray-600 mb-4">
              Bonés, toucas, luvas e mais, para complementar o uniforme.
            </p>
            <button
              onClick={() => handleNavClick("catalogo")}
              className="text-blue-600 hover:underline font-medium"
            >
              Ver mais &rarr;
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>

  {/* Catalog Section */}
  <section id="catalogo" className="py-16 md:py-24 bg-white">
    <div className="container mx-auto px-4 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
        Baixe Nosso Catálogo Completo
      </h2>
      <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto">
        Explore nossa vasta coleção de uniformes profissionais, com detalhes
        sobre tecidos, modelos, opções de personalização e tabelas de medidas.
      </p>
      {/* Placeholder for PDF download link */}
      <a
        href="#"
        className="bg-green-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-green-700 transition-colors duration-300 shadow-xl inline-block transform hover:scale-105"
      >
        Download do Catálogo (PDF)
      </a>
      {/* Catalog preview image */}
      <div className="mt-12">
        <img
          src="https://placehold.co/800x450/E2E8F0/4A5568?text=Preview+Catalogo"
          alt="Preview do Catálogo de Uniformes"
          className="mx-auto rounded-xl shadow-lg"
        />
      </div>
    </div>
  </section>

  {/* How It Works Section */}
  <section id="como-funciona" className="py-16 md:py-24 bg-gray-50">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
        Como Funciona Nosso Processo
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Step 1 */}
        <div className="bg-white rounded-xl shadow-lg p-8 text-center transform hover:scale-105 transition-transform duration-300">
          <div className="text-blue-600 text-5xl mb-4">1</div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">
            Contato e Briefing
          </h3>
          <p className="text-gray-600">
            Entendemos suas necessidades, setor e identidade de marca.
          </p>
        </div>
        {/* Step 2 */}
        <div className="bg-white rounded-xl shadow-lg p-8 text-center transform hover:scale-105 transition-transform duration-300">
          <div className="text-blue-600 text-5xl mb-4">2</div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">
            Design e Prototipagem
          </h3>
          <p className="text-gray-600">
            Criamos designs exclusivos e protótipos para sua aprovação.
          </p>
        </div>
        {/* Step 3 */}
        <div className="bg-white rounded-xl shadow-lg p-8 text-center transform hover:scale-105 transition-transform duration-300">
          <div className="text-blue-600 text-5xl mb-4">3</div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">
            Produção e Qualidade
          </h3>
          <p className="text-gray-600">
            Fabricação com materiais de ponta e rigoroso controle de qualidade.
          </p>
        </div>
        {/* Step 4 */}
        <div className="bg-white rounded-xl shadow-lg p-8 text-center transform hover:scale-105 transition-transform duration-300">
          <div className="text-blue-600 text-5xl mb-4">4</div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">
            Entrega e Pós-Venda
          </h3>
          <p className="text-gray-600">
            Entrega rápida e suporte contínuo para sua satisfação.
          </p>
        </div>
      </div>
    </div>
  </section>

  {/* Schedule Appointment Section (Final Call to Action) */}
  <section id="agendamento" className="py-16 md:py-24 bg-blue-700 text-white">
    <div className="container mx-auto px-4 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-8">
        Pronto para Elevar sua Marca?
      </h2>
      <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto">
        Agende um atendimento com nossos especialistas e descubra como podemos
        criar os uniformes perfeitos para sua empresa.
      </p>
      <a
        href="mailto:contato@atnauniformes.com.br"
        className="bg-white text-blue-700 px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-100 transition-colors duration-300 shadow-xl inline-block transform hover:scale-105"
      >
        Agendar Atendimento Agora!
      </a>
    </div>
  </section>

  {/* Footer */}
  <footer className="bg-gray-900 text-gray-300 py-10">
    <div className="container mx-auto px-4 text-center">
      <p>
        &copy; 2025 Atna Uniformes Profissionais. Todos os direitos reservados.
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
        <p>Contato: (XX) XXXX-XXXX | contato@atnauniformes.com.br</p>
      </div>
    </div>
  </footer>
</div>;

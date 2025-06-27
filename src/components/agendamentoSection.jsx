import React, { useState } from "react";

const AgendamentoSection = () => {
  const [formData, setFormData] = useState({
    nome: "",
    numero: "", // Campo para o número de telefone
    mensagem: "", // Campo para a mensagem adicional
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleWhatsAppFormSubmit = (e) => {
    e.preventDefault();
    const { nome, numero, mensagem } = formData;

    // Constrói a mensagem para o WhatsApp
    let whatsappMessage = `Olá, gostaria de um atendimento para uniformes.\n`;
    whatsappMessage += `Meu nome é: ${nome || "Não informado"}\n`;
    whatsappMessage += `Meu número é: ${numero || "Não informado"}\n`;

    if (mensagem) {
      whatsappMessage += `Mensagem adicional: ${mensagem}\n`;
    }
    whatsappMessage += `\nEntrarei em contato aguardando retorno.`;

    // Codifica a mensagem para a URL
    const encodedMessage = encodeURIComponent(whatsappMessage);

    // Número de telefone da Neide Amaral (com código do país e DDD)
    const phoneNumber = "5531997680504"; // Formato: 55 + DDD + Número

    // Abre o WhatsApp com a mensagem pré-preenchida
    window.open(
      `https://wa.me/${phoneNumber}?text=${encodedMessage}`,
      "_blank"
    );
  };

  return (
    <section
      id="agendamento"
      className="py-16 scroll-mt-96 bg-sky-950 text-sky-50 md:py-24 md:scroll-mt-0"
    >
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">
          Pronto para Elevar sua Marca?
        </h2>
        <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto">
          Preencha o formulário para enviarmos sua solicitação direto para nosso
          WhatsApp, ou fale conosco pelas nossas redes e canais de contato!
        </p>

        {/* Formulário para WhatsApp */}
        <div className="max-w-xl mx-auto bg-sky-50 p-8 rounded-lg shadow-xl text-sky-950 mb-12">
          <h3 className="text-2xl font-bold mb-6 text-center">
            Agende seu Atendimento via WhatsApp
          </h3>
          <form onSubmit={handleWhatsAppFormSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="nome"
                className="block text-left text-sm font-medium text-sky-500 mb-1"
              >
                Seu Nome
              </label>
              <input
                type="text"
                id="nome"
                name="nome"
                value={formData.nome}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
                placeholder="Seu nome completo"
                required
              />
            </div>
            <div>
              <label
                htmlFor="numero"
                className="block text-left text-sm font-medium text-sky-500 mb-1"
              >
                Seu WhatsApp (com DDD)
              </label>
              <input
                type="tel" // Tipo 'tel' para números de telefone
                id="numero"
                name="numero"
                value={formData.numero}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
                placeholder="Ex: 31987654321"
                required
              />
            </div>
            <div>
              <label
                htmlFor="mensagem"
                className="block text-left text-sm font-medium text-sky-500 mb-1"
              >
                Mensagem (opcional)
              </label>
              <textarea
                id="mensagem"
                name="mensagem"
                value={formData.mensagem}
                onChange={handleChange}
                rows="3"
                className="w-full px-4 py-2 border border-gray-300 rounded-md "
                placeholder="Conte-nos brevemente sobre o tipo de uniforme que procura..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-green-600 text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-green-500 transition-colors duration-300 shadow-md flex items-center justify-center space-x-2"
            >
              <span>Enviar Mensagem via WhatsApp</span>
            </button>
          </form>
        </div>

        {/* Informações de Contato */}
        <div className="mt-12">
          <h3 className="text-2xl md:text-3xl font-bold mb-6">
            Nossos Contatos
          </h3>
          <ul className="text-lg md:text-xl space-y-4">
            <li>
              <span className="font-semibold">E-mail:</span>{" "}
              <a
                href="mailto:vendasatelierneideamaral@gmail.com"
                className="hover:underline text-blue-200"
              >
                vendasatelierneideamaral@gmail.com
              </a>
            </li>
            <li>
              <span className="font-semibold">Telefone:</span>{" "}
              <a
                href="tel:+5531997680504"
                className="hover:underline text-blue-200"
              >
                (31) 99768-0504
              </a>
            </li>
            <li>
              <span className="font-semibold">Instagram:</span>{" "}
              <a
                href="https://www.instagram.com/atelieeneideamaral/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline text-blue-200"
              >
                @atelieeneideamaral
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AgendamentoSection;

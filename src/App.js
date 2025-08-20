import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { GlobalStyle } from "./style/StyledComponents";
import bannerImg from "./banner.jpg";

const Header = styled.header`
  text-align: center;
  padding: 1.5rem;
  background: #2d6a4f;
  color: #ddfff7;
`;

const Banner = styled.section`
  background: url(${bannerImg}) center/cover no-repeat;
  height: 200px;

  @media (min-width: 768px) {
    height: 350px;
  }
`;

const Description = styled.section`
  padding: 2rem;
  text-align: center;

  @media (min-width: 768px) {
    max-width: 700px;
    margin: auto;
  }
`;

const CtaButton = styled.button`
  display: block;
  margin: 2rem auto;
  padding: 1rem 2rem;
  font-size: 1.1rem;
  background: #40916c;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;

  &:hover { background: #2d6a4f; }
`;

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,.45);
  display: ${({open}) => (open ? "flex" : "none")};
  align-items: center;
  justify-content: center;
  padding: 1rem;
`;

const Dialog = styled.div`
  background: #fff;
  width: 100%;
  max-width: 520px;
  border-radius: 10px;
  padding: 1.25rem;
  outline: none;

  @media (min-width: 480px) { padding: 1.5rem; }
  @media (min-width: 768px) { max-width: 560px; }
  @media (min-width: 1024px) { max-width: 600px; }
`;

const DialogHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: .75rem;
  margin-bottom: 1rem;
  color: #2C332C;
`;

const Close = styled.button`
  border: none;
  background: transparent;
  font-size: 1.5rem;
  line-height: 1;
  cursor: pointer;
`;

const Form = styled.form`
  display: grid;
  gap: .9rem;
`;

const Field = styled.div`
  text-align: left;
  display: grid;
  gap: .35rem;
`;

const Label = styled.label`
  font-size: .95rem;
`;

const Input = styled.input`
  padding: .85rem;
  border: 1px solid #cfd8dc;
  border-radius: 8px;
  font-size: 1rem;
  width: 100%;
`;

const FakeSubmit = styled.button`
  padding: .95rem 1.25rem;
  background: #2d6a4f;
  color: #fff;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
`;

const Footer = styled.footer`
  background: #081c15;
  color: white;
  text-align: center;
  padding: 1rem;
  font-size: 0.9rem;
`;

export default function App() {
  const [open, setOpen] = useState(false);
  const firstFieldRef = useRef(null);

  useEffect(() => {
    function onKeyDown(e) {
      if (e.key === "Escape") setOpen(false);
    }
    if (open) {
      document.addEventListener("keydown", onKeyDown);
      setTimeout(() => firstFieldRef.current?.focus(), 0);
    }
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  function onFakeSubmit(e) {
    e.preventDefault(); // não envia nada
    setOpen(false);     // fecha só para simular
    alert("Recebemos seu interesse! (simulação)");
  }

  return (
    <>
      <GlobalStyle />

      <Header>
        <h1>Projeto Verde Urbano</h1>
        <p>Plantando hoje, cuidando do amanhã 🌱</p>
      </Header>

      <Banner role="img" aria-label="Imagem de árvores em área urbana" />

      <Description>
        <p>
          O Projeto Verde Urbano busca reflorestar áreas das cidades, trazendo
          mais sombra, ar puro e bem-estar para todos. Junte-se como voluntário
          ou apoiador!
        </p>
      </Description>

      <CtaButton
        onClick={() => setOpen(true)}
        aria-haspopup="dialog"
        aria-expanded={open}
        aria-controls="dialog-form"
      >
        Quero Ajudar
      </CtaButton>

      <Overlay
        open={open}
        onClick={(e) => e.target === e.currentTarget && setOpen(false)}
        aria-hidden={!open}
      >
        <Dialog
          id="dialog-form"
          role="dialog"
          aria-modal="true"
          aria-labelledby="dialog-title"
        >
          <DialogHeader>
            <h2 id="dialog-title">Cadastro</h2>
            <Close onClick={() => setOpen(false)} aria-label="Fechar">×</Close>
          </DialogHeader>

          <Form onSubmit={onFakeSubmit}>
            <Field>
              <Label htmlFor="nome">Nome</Label>
              <Input id="nome" ref={firstFieldRef} placeholder="Seu nome" />
            </Field>
            <Field>
              <Label htmlFor="email">E-mail</Label>
              <Input id="email" type="email" placeholder="seuemail@exemplo.com" />
            </Field>
            <Field>
              <Label htmlFor="cidade">Cidade</Label>
              <Input id="cidade" placeholder="Sua cidade" />
            </Field>

            <FakeSubmit type="submit">Enviar (Simulação)</FakeSubmit>
          </Form>
        </Dialog>
      </Overlay>

      <Footer>
        <p>ONG Verde Urbano © 2025</p>
        <p>VerdeUrbando@gmail.com <br></br><br></br> (11) 991239-9569</p>
      </Footer>
    </>
  );
}

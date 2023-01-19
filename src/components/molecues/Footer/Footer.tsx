import { Container } from "../../atoms/Container/Container";

export const Footer = () => {
  return (
    <footer className="bg-slate-200 py-5">
      <Container>
        <p className="text-sm text-center">
          Copyright &copy; {new Date().getFullYear()}. Created by Grzegorz
          Pokorski.
        </p>
      </Container>
    </footer>
  );
};

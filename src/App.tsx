import "./styles/global.css";

import { Logo } from "./Logo";
import { Heading } from "./components/Heading";
import { Text } from "./components/Text";
import { TextInput } from "./components/TextInput";
import { EnvelopeSimple, LockSimple } from "phosphor-react";
import { Checkbox } from "./components/Checkbox";
import { Button } from "./components/Button";

export function App() {
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center bg-gray-900 text-gray-100">
      <header className="flex flex-col items-center">
        <Logo />
        <Heading size="lg" className="mt-4">
          Ignite Lab
        </Heading>
        <Text size="lg" className="text-gray-400 mt-1">
          Faça login e começe a usar!
        </Text>
      </header>
      <form className="flex flex-col items-stretch w-full max-w-sm gap-4 mt-3">
        <label htmlFor="email" className="flex flex-col gap-3">
          <Text className="font-semibold">Endereço de e-mail</Text>

          <TextInput.Root>
            <TextInput.Icon>
              <EnvelopeSimple />
            </TextInput.Icon>
            <TextInput.Input placeholder="Insira o seu E-mail" id="email" />
          </TextInput.Root>
        </label>

        <label htmlFor="senha" className="flex flex-col gap-3">
          <Text className="font-semibold">Sua Senha</Text>

          <TextInput.Root>
            <TextInput.Icon>
              <LockSimple />
            </TextInput.Icon>
            <TextInput.Input placeholder="******" id="senha" type="password" />
          </TextInput.Root>
        </label>

        <label htmlFor="remember" className="flex gap-2 items-center">
          <Checkbox id="remember" />
          <Text size="sm" className="text-gray-200">
            Lembrar de mim por 30 dias
          </Text>
        </label>

        <Button type="submit" className="mt-4">
          Entrar na plataforma
        </Button>
      </form>

      <footer className="flex flex-col items-center gap-4 mt-8">
        <Text
          asChild
          size="sm"
          className="text-gray-400 underline hover:text-gray-200"
        >
          <a href="#">Esqueceu a sua senha?</a>
        </Text>

        <Text
          asChild
          size="sm"
          className="text-gray-400 underline hover:text-gray-200"
        >
          <a href="#">Não possui conta? Crie uma agora!</a>
        </Text>
      </footer>
    </div>
  );
}

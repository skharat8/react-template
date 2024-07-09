import LogoutButton from "@/features/authentication/LogoutButton";
import Avatar from "@/components/Avatar";
import Logo from "@/components/Logo";
import styled from "styled-components";
import type { PropsWithChildren } from "react";

const LinearGradient = styled.div`
  background-image: linear-gradient(
    55deg,
    hsl(276deg 26% 45%) 0%,
    hsl(310deg 34% 46%) 10%,
    hsl(329deg 51% 51%) 20%,
    hsl(342deg 71% 55%) 30%,
    hsl(356deg 86% 59%) 40%,
    hsl(16deg 91% 53%) 50%,
    hsl(7deg 82% 56%) 60%,
    hsl(359deg 72% 56%) 70%,
    hsl(352deg 62% 52%) 80%,
    hsl(346deg 55% 48%) 90%,
    hsl(341deg 51% 45%) 100%
  );
`;

const LinearGradient2 = styled.div`
  background-image: linear-gradient(
    50deg,
    hsl(276deg 26% 45%) 1%,
    hsl(269deg 34% 42%) 45%,
    hsl(260deg 43% 38%) 51%,
    hsl(250deg 52% 36%) 53%,
    hsl(228deg 90% 28%) 52%,
    hsl(279deg 67% 30%) 51%,
    hsl(308deg 70% 30%) 52%,
    hsl(326deg 63% 37%) 57%,
    hsl(341deg 51% 45%) 94%
  );
`;

const LinearGradient3 = styled.div`
  background-image: linear-gradient(
    50deg,
    hsl(30deg 94% 49%) 0%,
    hsl(4deg 89% 63%) 22%,
    hsl(342deg 67% 58%) 33%,
    hsl(321deg 37% 50%) 42%,
    hsl(276deg 26% 45%) 50%,
    hsl(301deg 28% 42%) 58%,
    hsl(320deg 37% 44%) 67%,
    hsl(332deg 45% 44%) 78%,
    hsl(341deg 51% 45%) 100%
  );
`;

function Title({ children }: PropsWithChildren) {
  return (
    <h1 className="font-noticia text-4xl font-bold tracking-wide text-neutral-300">
      {children}
    </h1>
  );
}

function Header() {
  return (
    <LinearGradient2>
      <header className="flex items-center justify-between px-8 py-4 shadow-md">
        <Avatar />

        <div className="flex items-center gap-2">
          <Title>Twitter</Title>
          <Logo width="4rem" />
          <Title>Reborn</Title>
        </div>

        <LogoutButton />
      </header>
    </LinearGradient2>
  );
}

export default Header;

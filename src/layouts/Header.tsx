import LogoutButton from "@/features/authentication/LogoutButton";
import Avatar from "@/components/Avatar";
import Logo from "@/components/Logo";
import styled from "styled-components";
import type { PropsWithChildren } from "react";

const LinearGradient = styled.div`
  background-image: linear-gradient(
    45deg,
    hsl(284deg 79% 24%) 0%,
    hsl(295deg 83% 24%) 11%,
    hsl(305deg 87% 26%) 22%,
    hsl(313deg 88% 30%) 33%,
    hsl(319deg 85% 34%) 44%,
    hsl(325deg 80% 39%) 56%,
    hsl(330deg 74% 44%) 67%,
    hsl(336deg 67% 49%) 78%,
    hsl(342deg 74% 54%) 89%,
    hsl(347deg 83% 60%) 100%
  );
`;

function Title({ children }: PropsWithChildren) {
  return (
    <h1 className="font-noticia text-2xl font-bold tracking-wide text-zinc-300">
      {children}
    </h1>
  );
}

function Header() {
  return (
    <LinearGradient>
      <header className="flex items-center justify-between px-16px py-8px shadow-md">
        <Avatar size="small" />

        <div className="flex items-center gap-2">
          <Title>Twitter</Title>
          <Logo width="2.5rem" />
          <Title>Reborn</Title>
        </div>

        <LogoutButton />
      </header>
    </LinearGradient>
  );
}

export default Header;

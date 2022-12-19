import { css } from "@emotion/react";
import Link from "next/link";
import { useRouter } from "next/router";

const links: string[] = ["about", "home", "contact"];

const Nav = () => {
  const router = useRouter();
  console.log(router.pathname);
  return (
    <nav css={nav}>
      <ul css={ul}>
        {links.map((_link) => (
          <li key={_link}>
            <Link
              href={_link === "home" ? "/" : `${_link}`}
              css={
                router.pathname === `/${_link}`
                  ? active
                  : _link === "home"
                  ? active
                  : link
              }
            >
              {_link.toUpperCase()}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;

const nav = css`
  display: none;
  background: #333;
  @media screen and (min-width: 768px) {
    display: block;
  }
`;

const ul = css`
  color: #fff;
  font-weight: 500;
  display: flex;
  justify-content: center;
  gap: 1rem;
`;

const active = css`
  color: red;
`;

const link = css`
  transition: 0.3s;
  &:hover {
    color: red;
  }
`;

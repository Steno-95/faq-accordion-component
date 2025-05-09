function Header() {
  return (
    <header className="header">
      <picture>
        <source
          srcSet="/images/background-pattern-desktop.svg"
          media="(min-width: 48rem)"
        />
        <img
          src="/images/background-pattern-mobile.svg"
          className="w-full h-fit"
          alt="background-pattern of the website"
        />
      </picture>
    </header>
  );
}

export default Header;

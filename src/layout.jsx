import Keyboard from "./components/keyboard";

export default function Layout({ children,keydown }) {
  return (
    <div className="main-layout">
      <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
          <a class="navbar-item" href="/">
            <h1 className="wordle">Wordle</h1>
          </a>

          <a
            role="button"
            class="navbar-burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" class="navbar-menu">
          <div class="navbar-end">
            <div class="navbar-item">
              <div class="buttons">
                <a class="button is-primary">
                  <strong>Help</strong>
                </a>
                <a class="button">
                  Statistics
                </a>
                <a class="button">Settings</a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {children}
      <Keyboard keydown={keydown} />
    </div>
  );
}

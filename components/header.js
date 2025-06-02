export default function Header() {
    console.log("hello rey")
  const header = document.getElementById("header");

  header.innerHTML = `
        <nav>
        <div class="nav__left">
          <div class="burger-menu">
            <div class="bar bar-1"></div>
            <div class="bar bar-2"></div>
            <div class="bar bar-3"></div>
          </div>
          <p>%SALE</p>
        </div>
        <div class="nav__middle">
          <img
            src="https://assets.website-files.com/6387802e3461137e709a8475/63878515d11dba6eaecdbab3_logo.svg"
            alt="logo"
          />
        </div>
        <div class="nav__right">
          <p data-category-name="SEARCH">
            <span>SEARCH </span>
          </p>
          <p data-category-name="BAG(0)">
            <span> BAG(0) </span>
          </p>
        </div>
      </nav>
    `;
}
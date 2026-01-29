import data from '/public/_nav_2025.json';
const headerData = data[0].parts;

export const Header = () => {
    return (
        <header className="header">
        <div className="container header_container">
          <div className="header-left">
            <nav className="header-menu" id="desktopMenuTabs">
              <button className="btn-icon d-none" id="tabsPrev">
                <i className="bi-chevron-left"></i>
              </button>
              {headerData.map((element, index) => {
                return (
                    <button className={`btn-header ${index === 0 ? "active" : ""}`} id={`desktopMenuTab-${index}`} key={index}>{element.title}</button>
                )
              })}
              <button className="btn-icon d-none" id="tabsNext">
                <i className="bi-chevron-right"></i>
              </button>
            </nav>
            <button className="btn-icon d-none" id="backBtn">
              <i className="bi bi-chevron-left"></i>
            </button>
            <a href="https://guap.ru/" className="header-logo" id="headerLogo">
              <img src="https://src.guap.ru/logos/guap/guap.svg" alt="SUAI" />
            </a>
          </div>
          <h5 className="header_mobile-text"></h5>
          <div className="header-right">
            <a href="https://guap.ru/sitemap" className="btn-icon" id="siteMapLink">
              <i className="bi-diagram-3"></i>
            </a>
            <a href="https://guap.ru/search" className="btn-icon" id="siteSearchLink">
              <i className="bi bi-search"></i>
            </a>
            <button className="btn-icon burger" id="menuBtnDesktop">
              <div className="burger-icon" id="menuDesktopIcon">
                <span className="burger_bar"></span>
                <span className="burger_bar"></span>
                <span className="burger_bar"></span>
              </div>
            </button>
            <button className="btn-icon burger" id="menuBtnMobile">
              <div className="burger-icon" id="menuMobileIcon">
                <span className="burger_bar"></span>
                <span className="burger_bar"></span>
                <span className="burger_bar"></span>
              </div>
            </button>
          </div>
        </div>
        </header>
    )
}

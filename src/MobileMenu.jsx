import data from '/public/_nav_2025.json';
const headerData = data[0].parts;

export const MobileMenu = () => {
    return (
        <div className="mobile-menu_wrapper">
            <nav className="mobile-menu" id="mobileMenu">
                <ul className="mobile-menu_list">
                    {headerData.map((part, partIndex) => (
                        <li key={partIndex}>
                            {part.title}
                            <ul className="mobile-menu_list_inner">
                                {part.sections.map((section, sectionIndex) => (
                                    <li key={sectionIndex} className="mobile-menu_list_inner-next">
                                        {section.title}
                                        <ul className="mobile-menu_list_inner">
                                            {section.links.map((link, linkIndex) => {
                                                const [url, text] = link.split('|');
                                                const isExternal = url.startsWith('http');
                                                return (
                                                    <li key={linkIndex}>
                                                        <a 
                                                            href={url} 
                                                            target={isExternal ? "_blank" : "_self"}
                                                            rel={isExternal ? "noopener noreferrer" : ""}
                                                        >
                                                            {text}
                                                        </a>
                                                    </li>
                                                );
                                            })}
                                        </ul>
                                    </li>
                                ))}
                            </ul>
                        </li>
                    ))}
                </ul>
                
                <ul className="mobile-menu_sublist">
                    <li><a href="https://guap.ru/rasp">Расписание</a></li>
                    <li><a href="https://pro.guap.ru/">Личный кабинет</a></li>
                    <li><a href="https://guap.ru/accessible">Версия для людей с ограниченными возможностями</a></li>
                    <li><a href="https://guap.ru/search">Поиск по сайту</a></li>
                </ul>
                
                <div className="mobile-menu_links">
                    <a href="https://vk.com/guap_ru" className="link-social menu" target="_blank" rel="noopener noreferrer">
                        <i className="gi-logo-vk"></i>
                    </a>
                    <a href="https://t.me/new_guap" className="link-social menu" target="_blank" rel="noopener noreferrer">
                        <i className="gi-logo-telegram"></i>
                    </a>
                    <a href="https://rutube.ru/channel/23832078/" className="link-social menu" target="_blank" rel="noopener noreferrer">
                        <i className="gi-logo-rutube"></i>
                    </a>
                    <a href="https://guap.ru/faq" className="link-social menu" target="_blank" rel="noopener noreferrer">
                        <i className="bi bi-question-circle"></i>
                    </a>
                </div>
            </nav>
        </div>
    );
}
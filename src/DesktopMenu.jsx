import data from '/public/_nav_2025.json';
const headerData = data[0].parts;

export const DesktopMenu = () => {
    return (
        <div className="desktop-menu_wrapper">
        <nav className="header-menu_lists" id="desktopMenu" style={{'top': '-10000px'}}>
          {headerData.map((part, partIndex) => (
            <ul 
                key={partIndex}
                className={`header-menu_list wrapper container ${partIndex === 0 ? 'active' : ''}`}
                id={`desktopMenuNode-${partIndex}`}
            >
                {part.sections.map((section, sectionIndex) => (
                    <li key={sectionIndex} className="header-menu_title">
                        {section.title}
                        <ul className="header-menu_list inner">
                            {section.links.map((link, linkIndex) => {
                                const [url, text] = link.split('|');
                                return (
                                    <li key={linkIndex}>
                                        <a href={url}>{text}</a>
                                    </li>
                                );
                            })}
                        </ul>
                    </li>
                ))}
            </ul>
          ))}
        </nav>
      </div>
    )
}

import { useEffect, useRef } from 'react';

export const Script = ({
  src,
  strategy = 'afterInteractive',
  onLoad,
  onError,
  id,
  children,
  defer,
  async = true,
  crossOrigin,
  type = 'text/javascript',
  module = false,
  integrity,
  nonce,
  noModule,
  publicPath = '/', // Базовый путь к public папке
}) => {
  const scriptRef = useRef(null);

  useEffect(() => {
    if (!src && !children) return;

    const executeScript = () => {
      // Проверяем, не загружен ли уже скрипт
      if (id && document.getElementById(id)) {
        if (onLoad) onLoad();
        return;
      }

      const script = document.createElement('script');
      
      if (id) script.id = id;
      
      // Обработка пути к скрипту
      if (src) {
        // Проверяем, является ли путь абсолютным URL
        if (src.startsWith('http://') || src.startsWith('https://') || src.startsWith('//')) {
          script.src = src;
        } else {
          // Для относительных путей добавляем publicPath
          // Убираем начальный слеш если он уже есть в publicPath
          const cleanSrc = src.startsWith('/') ? src.slice(1) : src;
          const cleanPublicPath = publicPath.endsWith('/') ? publicPath : `${publicPath}/`;
          script.src = `${cleanPublicPath}${cleanSrc}`;
        }
      }
      
      if (defer) script.defer = defer;
      if (async && !module) script.async = async;
      if (crossOrigin) script.crossOrigin = crossOrigin;
      if (integrity) script.integrity = integrity;
      if (nonce) script.nonce = nonce;
      if (noModule) script.noModule = noModule;
      
      // Устанавливаем type для module скриптов
      if (module) {
        script.type = 'module';
      } else if (type) {
        script.type = type;
      }
      
      if (children) {
        script.textContent = children;
      }

      script.onload = () => {
        console.log(`Script loaded: ${script.src}`);
        if (onLoad) onLoad();
      };

      script.onerror = (error) => {
        console.error(`Error loading script ${script.src || 'inline'}:`, error);
        if (onError) onError(error);
      };

      document.body.appendChild(script);
      scriptRef.current = script;
    };

    switch (strategy) {
      case 'afterInteractive':
        executeScript();
        break;
      
      case 'lazyOnload':
        if (document.readyState === 'complete') {
          executeScript();
        } else {
          window.addEventListener('load', executeScript, { once: true });
        }
        break;
      
      case 'beforeInteractive':
        // Для критически важных скриптов, которые нужны до гидратации
        if (document.head) {
          executeScript();
        } else {
          // Если head еще не готов, ждем
          const observer = new MutationObserver((mutations, obs) => {
            if (document.head) {
              obs.disconnect();
              executeScript();
            }
          });
          observer.observe(document.documentElement, { childList: true, subtree: true });
        }
        break;
    }

    return () => {
      if (scriptRef.current && scriptRef.current.parentNode) {
        scriptRef.current.parentNode.removeChild(scriptRef.current);
      }
    };
  }, [src, strategy, id, children, onLoad, onError, defer, async, crossOrigin, type, module, integrity, nonce, noModule, publicPath]);

  return null;
};
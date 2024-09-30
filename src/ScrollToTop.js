import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';


//Effekt um beim Wechsel zwischen Seiten immmer den Seitenanfang angezeigt zu bekommen, unabhängig von der bisherigen Scrollposition
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Scrollt zum Seitenanfang
  }, [pathname]); // Der Effekt wird ausgeführt, wenn sich der Pfad ändert

  return null; // Komponente rendert nichts
}

export default ScrollToTop;
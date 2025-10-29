import { useEffect } from 'react';

const HERO_ID = 'page-hero';

export function useScrollToHero(dependencies = []) {
  useEffect(() => {
    const hero = document.getElementById(HERO_ID);
    if (hero) {
      hero.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, dependencies);
}

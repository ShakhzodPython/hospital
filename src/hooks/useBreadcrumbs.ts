import { useLocation } from 'react-router';
import { breadcrumbKeys } from '../utils/breadcrumbs';
import { useTranslation } from 'react-i18next';

export function useBreadcrumbs() {
  const { pathname } = useLocation();
  const { t } = useTranslation();

  const segments = pathname.split('/').filter(Boolean);

  const breadcrumbs = segments.map((segment, id) => {
    const url = '/' + segments.slice(0, id + 1).join('/');
    const key =
      breadcrumbKeys[segment.replace('-', '_')] || segment.replace('-', '_');
    
    
    const translated = t(`breadcrumbs.${key}`, key);

    return {
      name: translated.charAt(0).toUpperCase() + translated.slice(1),
      url,
    };
  });
  return [{ name: t('breadcrumbs.home'), url: '/' }, ...breadcrumbs];
}

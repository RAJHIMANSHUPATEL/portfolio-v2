import { useEffect } from 'react';
import { site } from '../data/site';

const DEFAULT_TITLE = `${site.name} | ${site.role} for Hire`;

function setMeta(selector, attr, value) {
  const el = document.querySelector(selector);
  if (el && value) el.setAttribute(attr, value);
}

// Sets the document title and meta description per route.
export default function usePageMeta(title, description) {
  useEffect(() => {
    const fullTitle = title ? `${title} | ${site.name}` : DEFAULT_TITLE;
    document.title = fullTitle;
    setMeta('meta[name="description"]', 'content', description);
    setMeta('meta[property="og:title"]', 'content', fullTitle);
    setMeta('meta[property="og:description"]', 'content', description);
  }, [title, description]);
}

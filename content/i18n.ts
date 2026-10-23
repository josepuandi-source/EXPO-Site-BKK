/**
 * ============================================================================
 *  LANGUAGE
 *  This build is single-language: the whole site is served in SITE_LANG at "/".
 *  English copy lives in content/site.ts; the Thai text comes from
 *  content/translations/th.ts, which maps each exact English string to its translation.
 *  Any string missing from that file shows in English.
 * ============================================================================
 */
import * as site from "./site";
import dict from "./translations/th";

export const SITE_LANG = "th" as const;
export const locales = [{ code: "th", label: "ไทย", short: "TH" }] as const;
export type Lang = (typeof locales)[number]["code"];
/** Single-language site: every language link points home. */
export const langHref = (_lang: Lang) => "/";

/** Registration form for the main "Register" buttons. */
const registerForm = site.forms.thai;

/** Recursively swap every string that has a translation; everything else is kept. */
function localize<T>(value: T, d: Record<string, string>): T {
  if (typeof value === "string") return (d[value] ?? value) as T;
  if (Array.isArray(value)) return value.map((v) => localize(v, d)) as T;
  if (value && typeof value === "object") {
    return Object.fromEntries(Object.entries(value).map(([k, v]) => [k, localize(v, d)])) as T;
  }
  return value;
}

const { tel, ...english } = site;
export type Content = typeof english;

export function getContent(_lang: Lang = SITE_LANG): Content {
  const c = localize(english, dict);
  return { ...c, hero: { ...c.hero, primaryCta: { ...c.hero.primaryCta, href: registerForm } } };
}

export { tel };

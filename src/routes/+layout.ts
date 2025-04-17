// import type { LayoutLoad } from '$types'; // Reverted type import for now

export const prerender = true;
export const ssr = false;
export const csr = true;

// Using any temporarily due to type resolution issues
export const load = ({ url }: { url: URL }) => {
  return {
    url: url.pathname
  };
}; 
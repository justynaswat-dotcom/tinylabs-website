// page-flip ne publie pas ses types : déclaration minimale de ce que
// Feuilleteur.tsx utilise.
declare module "page-flip" {
  export class PageFlip {
    constructor(el: HTMLElement, settings: Record<string, unknown>);
    loadFromHTML(items: HTMLElement[]): void;
    on(event: string, cb: (e: { data: unknown }) => void): PageFlip;
    flipNext(): void;
    flipPrev(): void;
    getOrientation(): "portrait" | "landscape";
    destroy(): void;
  }
}

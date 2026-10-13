<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Portfolio architecture
- Keep editable personal facts in `src/data/portfolio.ts`; presentation reads from this module to keep future updates consistent.
- Keep the portfolio on the index route with section anchors, as the requested navigation scrolls within a single page.
- Use reusable portfolio navigation and section headings alongside the existing Button component for consistent interactions.
- Contact uses a real mailto link, with no form or storage, because no submission service is required.

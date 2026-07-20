## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)


## Strict Constraints (Taste-Skill Enforcement)
- **No Heavy Borders**: NEVER use thick, dark borders (e.g., rgba(0,0,0,0.8)) to create 3D 
?i/chìm effects.
- **Liquid Glass Only**: Use subtle inner borders (border-top-color: rgba(255,255,255,0.15)), drop-shadows with inner refraction, and backdrop-blur to create Glassmorphism depth.
- **Context Verification**: Before deleting components ? du?i or ? trên, verify if the user means Header/Footer versus an adjacent card.
- **Mandatory Build**: Always run 
pm run build after modifying CSS or Astro files so the user sees live updates.

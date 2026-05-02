# Sales artifacts · Uvicuo

Repo público que hostea los documentos comerciales generados por el agente diagnostic-agent (`~/Projects/SALES/diagnostic-agent/`).

## Estructura

```
sales-artifacts/
├── teasers/          · Trofeo del champion · post-demo, pre-diagnóstico
│   └── uvi-NNN-empresa/
├── decks/            · Deck comercial 10 slides · post-primer-contacto
│   └── uvi-NNN-empresa/
├── propuestas/       · Propuesta cerrada · post-diagnóstico (futuro)
└── diagnosticos/     · Documento consultivo completo (futuro)
```

## URLs públicas (GitHub Pages)

- Teaser: `https://ikerharo.github.io/sales-artifacts/teasers/uvi-NNN-empresa/`
- Deck:   `https://ikerharo.github.io/sales-artifacts/decks/uvi-NNN-empresa/`

## Convenciones

- Nombre de carpeta: `uvi-NNN-empresa` con folio incremental + slug del cliente.
- Cada carpeta es self-contained (HTML + CSS + JS + assets/).
- URLs son obscuras (folio numérico) — no indexadas en SEO.

## Lifecycle

Documentos se actualizan en sitio (mismo path) cuando hay iteración. Versiones históricas viven en commits del repo, no en paths separados.

## Generación

Generados automáticamente por `build-artifact` skill del diagnostic-agent. Ver `~/Projects/SALES/diagnostic-agent/.claude/skills/build-artifact/SKILL.md` Paso 6 para el flow de hosting.

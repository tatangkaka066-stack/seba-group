# AGENTS.md — SEBA GROUP

<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

**Project:** SEBA GROUP Landing Page  
**Repo:** https://github.com/tatangkaka066-stack/seba-group  
**Stack:** Next.js, React, TypeScript, Tailwind CSS  
**Language:** TypeScript  
**Deploy Target:** Vercel (recommended)  

## Purpose
Landing page modern untuk "SEBA GROUP" — perusahaan/agensi AI & digital solutions. Halaman ini menjadi showcase utama dan entry point brand.

## Tech Stack Detail

- **Framework:** Next.js App Router
- **Styling:** Tailwind CSS
- **Language:** TypeScript (strict)
- **Font:** Default Next.js font (Geist)
- **Build:** `next build`
- **Dev server:** `npm run dev` (port 3000)

## Project Structure

```
app/
  layout.tsx      # Root layout + metadata
  page.tsx        # Landing page utama
  globals.css     # Global styles + Tailwind imports
components/
  # Reusable UI components
public/
  # Static assets: images, icons, fonts
```

## Coding Rules

- Gunakan **functional components** dengan tipe eksplisit
- Gunakan **Tailwind** untuk styling; hindari CSS manual kecuali perlu
- Semua komponen baru taruh di `components/`
- Metadata SEO selalu di `layout.tsx`
- Images wajib pakai `<Image>` dari `next/image`
- Avoid `any`; pakai `unknown` atau tipe yang tepat

## Constraints (Dilarang Agent Lakukan Tanpa Approval)

- Jangan mengubah nama brand dari "SEBA GROUP" tanpa izin
- Jangan menghapus file `AGENTS.md`
- Jangan deploy ke production tanpa preview check
- Jangan merge breaking changes ke `main`

## Agent Workflow

1. Baca `AGENTS.md` ini sebelum mulai coding
2. Jalankan `npm run dev` untuk cek perubahan
3. Build: `npm run build` harus sukses sebelum commit
4. Commit dengan pesan yang jelas
5. Push ke GitHub; buat PR untuk perubahan besar

## Contact / Owner

- GitHub: @tatangkaka066-stack
- Project owner: syah hida

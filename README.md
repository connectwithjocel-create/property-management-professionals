# Property Management Professionals: Website Redesign (Vercel preview build)

Next.js 15 + React 19 + TypeScript + Tailwind CSS 4. Static export, no server needed.
Separate project. It does not touch the live GoHighLevel site or the investment Vercel project.

## Deploy the preview to Vercel

From this folder on a machine logged in to Vercel:

```bash
npm install
npx vercel deploy          # first run: create a NEW project named property-management-professionals
```

Answer the prompts with: new project, name `property-management-professionals`, framework Next.js, default build settings.
Do not link it to `property-investment-professionals`, and do not add the production domain yet.

Preview safety is on by default:
- `robots.txt` blocks all crawlers and every page carries `noindex, nofollow`.
- Forms are demo forms. They send nothing and go straight to the thank-you page.

## Launch switches (environment variables)

| Variable | Default | Set to | Effect |
|---|---|---|---|
| `NEXT_PUBLIC_SITE_PREVIEW` | (unset = preview) | `false` | Allows indexing, publishes sitemap in robots.txt, hides "footage pending" labels |
| `NEXT_PUBLIC_FORMS_MODE` | `preview` | `ghl` | Replaces demo forms with the live GHL surveys (Rental Inquiry, Management Quote, Direct Booking) |

Only switch `NEXT_PUBLIC_FORMS_MODE=ghl` after approval: it connects to production workflows.

## Where things live

- `src/lib/site.ts`: business details, navigation, family-of-companies links, GHL survey IDs
- `src/data/properties.ts`: 18 rental properties (units/beds/baths) and 4 vacation properties (6 booking options)
- `src/data/media.ts`: logo, team photos, and the 5 video slots
- `src/data/services.ts`: services, owner steps, FAQs
- `src/data/legal.ts`: approved Privacy Policy and Terms of Service (verbatim from live site, Oct 8, 2026)
- `src/lib/img.ts`: all photos are GHL Media Storage files (management sub-account) served through GHL's image optimizer as resized WebP

## Adding videos

Put an MP4 (H.264, 1920x1080) in `public/videos/` and set `src: "/videos/name.mp4"` on the slot in `src/data/media.ts`.
Placements: VIDEO 01 home, 02 About, 03 Vacation Rentals, 04 Rental Properties, 05 For Owners.

## URL map (kept from the live site)

`/` · `/property-listed` · `/vacation-rentals` · `/property-owners` · `/about` · `/rental-inquiry` · `/direct-booking` · `/privacy-policy` · `/terms-of-service`
New: `/management-quote` · `/contact` · `/vacation-rentals/[stay]` · `/thank-you/[form]`

## GoHighLevel migration notes

Next.js components cannot be pasted into GHL Custom HTML. Rebuild each page as GHL sections or one Custom HTML block per page,
reusing the same copy, colors (#191C20, #24272B, #D2A437, #856215, #EED28C, #FAF7F0, #ECE9E2), fonts and photo IDs.
Keep the existing surveys, tags, pipelines, email-only workflows and thank-you pages. No SMS. Do not change guests.propertymanagementprofessionals.net.

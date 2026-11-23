// Images live in the Property Management Professionals GoHighLevel sub-account
// (Media Storage). GHL stores them as large SVG wrappers (2 to 30 MB), so we serve
// them through GHL's own image optimizer, which returns resized WebP.
const LOCATION = "swY61qxZ1CfPz1q1mNN3";

export function ghl(id: string, width = 1200, quality = 78) {
  return `https://images.leadconnectorhq.com/image/f_webp/q_${quality}/r_${width}/u_https://assets.cdn.filesafe.space/${LOCATION}/media/${id}.svg`;
}

export function ghlSrcSet(id: string, widths = [480, 800, 1200, 1600]) {
  return widths.map((w) => `${ghl(id, w)} ${w}w`).join(", ");
}

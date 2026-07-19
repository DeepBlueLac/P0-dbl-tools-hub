# DBL AdSense module

This module is intentionally inert by default.

- `hypothesis` and `application-ready` never load the Google script.
- `application-ready` may expose the Google site-verification meta tag without serving ads.
- `approved` and `active` still require matching `ca-pub-*` and `pub-*` IDs.
- A CMP must return `granted` or `non-personalized` before the script or slot renders.
- Slots return `null` for loading, empty, error, denied, or unknown states.

Use `AdSenseScript` once in the web layout and place `AdSenseSlot` only after
the primary result/content is visible. Never place it inside a download,
borrow, search, copy, or navigation control.

For site verification in Next Metadata, use `getAdSenseVerificationMeta()`;
it returns an empty object until the project leaves `hypothesis`.

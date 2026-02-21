# Specification

## Summary
**Goal:** Fix broken portfolio image paths so all 120 images load correctly across all 4 categories.

**Planned changes:**
- Update PortfolioGallery component to use correct public asset paths (/assets/generated/) instead of relative imports
- Verify and correct image filenames to match exactly with generated assets in frontend/public/assets/generated
- Ensure all 120 images (30 per category: Home, Commercial, Office, Hotels) reference valid files

**User-visible outcome:** All portfolio images display properly without broken image icons across Home, Commercial, Office, and Hotels categories. Images open in lightbox when clicked.

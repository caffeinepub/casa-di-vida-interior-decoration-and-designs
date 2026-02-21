# Specification

## Summary
**Goal:** Fix broken portfolio images by generating 120 new portfolio images and updating the PortfolioGallery component to correctly reference them.

**Planned changes:**
- Generate 120 new portfolio images (30 Home, 30 Commercial, 30 Office, 30 Hotels) in frontend/public/assets/generated directory
- Update PortfolioGallery component to use correct public asset paths (/assets/generated/filename.png)
- Add unique titles and descriptions for each portfolio image appropriate to its category
- Ensure all image references match exact generated filenames

**User-visible outcome:** All 120 portfolio images display properly across all four categories (Home, Commercial, Office, Hotels) without any broken image icons.

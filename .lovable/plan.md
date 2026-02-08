

## Plan: Three Changes to Blog and Home Page

### 1. Flipbook PDF Files Needed

The flipbook viewer currently only shows the cover image because no actual PDF files have been provided. **I cannot automatically download the PDFs from the reference website** due to access restrictions.

**Action required from you:** Please upload the PDF files for each newsletter. Once uploaded, I will integrate them into the flipbook viewer so each newsletter opens with full page-by-page reading.

For now, I will update the flipbook to clearly indicate that the full newsletter will be available soon, rather than showing just a static cover image.

### 2. Remove Stats Bar from Blog Page

Remove the entire stats section that shows:
- "32 Editions"  
- "June 2023 - December 2025"  
- "Sorted latest to oldest"

This is the `<section>` block between the hero and the newsletter grid in `src/pages/Blog.tsx` (lines ~53-67).

### 3. Update Home Page "Latest Posts" to Use Newsletter Data

Replace the hardcoded `blogPosts` array in `src/pages/Index.tsx` (which uses external hotlinked images) with the first 3 newsletters from the `newslettersData.ts` file. This will:
- Use local cover images instead of external URLs
- Keep data in sync automatically when new newsletters are added
- Link each card to the Blog page

---

### Technical Details

**Files to modify:**

1. **`src/pages/Blog.tsx`** -- Delete the stats `<section>` (lines 53-67) that contains "32 Editions", date range, and sort indicator.

2. **`src/pages/Index.tsx`** -- 
   - Import `newsletters` from `@/data/newslettersData`
   - Remove the hardcoded `blogPosts` array (lines 61-77)
   - Replace usage with `newsletters.slice(0, 3)` to show the 3 latest editions
   - Update the card rendering to use `newsletter.coverImage`, `newsletter.title`, and `newsletter.date`

3. **`src/components/FlipbookViewer.tsx`** -- No structural changes needed now; it already supports `pdfUrl` when available. Will be updated once PDF files are provided.


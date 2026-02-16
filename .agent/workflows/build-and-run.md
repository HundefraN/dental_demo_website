---
description: how to build and run the martha-dental-clinic project
---

### Development Mode (Recommended for Updates)
To see your changes immediately after an update, use the development server. It supports Hot Module Replacement (HMR), meaning saving a file locally will automatically update the browser.

1.  Open your terminal in the project directory: `/Users/hundefranassir/.gemini/antigravity/scratch/martha-dental-clinic`
2.  Run the following command:
    ```bash
    npm run dev
    ```
3.  Open the local URL provided in the terminal (usually `http://localhost:5173`).

### Production Build
If you want to create a production-ready build of the site:

1.  Run the build command:
    ```bash
    npm run build
    ```
    This will generate a `dist` folder with the optimized files.

2.  To preview the production build locally:
    ```bash
    npm run preview
    ```

### automation Tip
If you want to automatically build and see the preview after every update (though `npm run dev` is usually better), you can chain commands:
```bash
npm run build && npm run preview
```

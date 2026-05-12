import type { NextConfig } from "next";
import path from "path";
import { fileURLToPath } from "url";

/** App root (this folder) — silences Turbopack “multiple lockfiles” when parent has package-lock.json */
const appRoot = path.dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  turbopack: {
    root: appRoot,
  },
};

export default nextConfig;

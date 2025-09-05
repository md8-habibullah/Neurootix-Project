# Neurootix Project

## Overview

Neurootix is a cutting-edge AI solutions provider, specializing in **AI development**, **data science**, and **business process automation**.  
This repository contains the source code for the company website, built with modern frontend technologies for performance, accessibility, and scalability.

## Tech Stack

- **React** – UI library for building interactive interfaces
- **TypeScript** – Strictly typed superset of JavaScript
- **Vite** – Fast build tool and dev server
- **Tailwind CSS** – Utility-first styling
- **Shadcn UI** – Prebuilt, accessible UI components (built on **Radix UI**)
- **Lucide React** – Icon set
- **React Router** – Routing and navigation
- **Zod** – Schema validation
- **Class Variance Authority (cva)** – Consistent styling utilities
- **TanStack React Query** – Data fetching and caching
- **Radix UI** – Accessible UI primitives

---

## Project Structure

```

src/
├─ components/          # Main React components
│   ├─ HeroSection
│   ├─ ServicesSection
│   ├─ AISolutionsSection
│   ├─ AboutSection
│   ├─ PricingSection
│   ├─ ContactSection
│   ├─ Navigation
│   └─ Footer
│
├─ components/ui/       # Shadcn reusable UI components
├─ hooks/               # Custom React hooks
├─ pages/               # Main pages (Index.tsx, NotFound.tsx)
└─ lib/utils.ts         # Shared utility functions

````

---

## Getting Started

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd <project-directory>```

2. **Install dependencies**

   ⚠️ If you face dependency conflicts, use `--force` only as a fallback:

   ```bash
   npm install
   # If errors:
   npm install --legacy-peer-deps
   # or as a last resort:
   npm install --force```

> **Best practice:** Avoid `--force` unless necessary, as it may break dependencies.
  > Prefer fixing peer-dependency versions in `package.json`.

3. **Start the development server**

   ```bash
   npm run dev
   ```

   Open: [http://localhost:8080](http://localhost:8080)

---

## Building for Production

1. **Build the project**

   ```bash
   npm run build
   ```

2. **Serve the build output**

   Any static server can serve the `dist/` folder. Example using `serve`:

   ```bash
   npm install -g serve
   serve dist
   ```

---

## Contact Form Integration (IMPORTANT ⚠️)

The contact form is securely wired to **Web3Forms** (or any service you configure).
Never hardcode API keys in the frontend — use environment variables.

### Example Secure Contact Form Component

```tsx
// src/components/ContactSection.tsx
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

export default function ContactSection() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<null | string>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    const formData = new FormData(e.currentTarget);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_KEY, // from .env file
          name: formData.get("name"),
          email: formData.get("email"),
          message: formData.get("message"),
        }),
      });

      if (response.ok) {
        setStatus("Message sent successfully!");
        e.currentTarget.reset();
      } else {
        setStatus("Error sending message. Please try again.");
      }
    } catch (err) {
      setStatus("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl">
        <h2 className="text-3xl font-bold mb-6 text-center">Contact Us</h2>
        <form
          onSubmit={handleSubmit}
          className="space-y-4 bg-white dark:bg-gray-800 p-6 rounded-2xl shadow"
        >
          <div>
            <Label htmlFor="name">Name</Label>
            <Input id="name" name="name" type="text" required />
          </div>

          <div>
            <Label htmlFor="email">Email</Label>
            <Input id="email" name="email" type="email" required />
          </div>

          <div>
            <Label htmlFor="message">Message</Label>
            <Textarea id="message" name="message" rows={4} required />
          </div>

          <Button type="submit" disabled={loading} className="w-full">
            {loading ? "Sending..." : "Send Message"}
          </Button>

          {status && (
            <p className="text-center text-sm mt-4 text-green-600 dark:text-green-400">
              {status}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
```

---

## Environment Setup

Create a `.env` file in the root of your project:

```env
VITE_WEB3FORMS_KEY=your_api_key_here
```

> Get your API key from [https://web3forms.com/](https://web3forms.com/).

---

## Best Practices

* Use `npm install` (not `--force`) unless absolutely required.
* Always validate and sanitize form inputs.
* Store secrets in `.env` files.
* Use HTTPS APIs for form submissions.
* Keep dependencies updated with `npm audit fix`.

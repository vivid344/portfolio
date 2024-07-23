# Portfolio

![vivid344 vercel app_](https://github.com/user-attachments/assets/8177e6bc-08f5-4141-a82a-e69d2d65b2d3)

## Overview

vivid344's portfolio repository.

You can view the deployed site at https://vivid344.vercel.app .

## Table of Contents

- [Requirements](#requirements)
- [Technology](#technology)
- [Quick Start](#quick-start)
- [Directory Structure](#directory-structure)
- [Design](#design)

## Requirements

- node [^20.0.0]

## Technology

- [Next.js]([https://vercel.com/](https://nextjs.org/))
- [TailwindCSS](https://tailwindcss.com/)
- [shadcn-ui](https://ui.shadcn.com/)
- [Vercel](https://vercel.com/)
- [microCMS](https://microcms.io/)

## Quick Start

### setup
```shell
$ corepack enable
$ pnpm install
```

### start
```shell
$ pnpm run dev
```

Access to http://localhost:3000 .

## Directory Structure

```
portfolio
├── app  # Directory used for routing in Next.js
├── components  # Directory for reusable components
│   └── ui  # Directory for components using shadcn/ui
├── lib
│   ├── types  # Directory for type definitions
│   └── utils  # Directory for general utility functions
├── public  # Directory for placing static files
└── styles  # Directory for placing CSS
```

## Design

Each component basically follows the [shadcn/ui](https://ui.shadcn.com/) guidelines.

When adding a new component, please use the following command:

```shell
$ pnpm dlx shadcn-ui@latest add <component-name>
```

For icons, we are using [lucide](https://lucide.dev/) .
Please import and use lucide-react.

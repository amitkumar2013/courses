$ mkdir courses && cd courses && npm init -y
$ pnpm add next react react-dom

$ pnpm add -D prisma
    $ pnpm prisma init
    $ pnpm prisma db push
$ pnpm add @prisma/client
    $ pnpm prisma generate
$ pnpm add axios 
$ pnpm add -D tailwindcss@latest postcss@latest autoprefixer@latest
    $ pnpm tailwindcss init -p

$ pnpm build

$ pnpm setup && pnpm add -g vercel
$ vercel login
$ vercel --prod 
    -- Make sure github is connected and .env is copied to Environment_Variables in Vercel

$ pnpm add @auth0/nextjs-auth0

With every schema changes run 
$ pnpx prisma migrate [ dev --name create-user-schema | reset ]

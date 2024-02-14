# NEXT.js APP

* Next js - sigue regulaciones que enemos que complir - 
* Es utilizar React acompañado de un framework -
* 2 Fases - Next.js + Mongodb-
* La autenticacion viene junto con NExt.js -
* APLICACION - Conceptos principales de arquitectura para poder crear una aplicacion con Next.js -
* DOCUMENTACION - 
* Prerequisitos - 
* TECH STACK - TypeScript - Tailwind - React.js - Next.js - mongoDB - mailtrap - excalidraw






This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.


## NOTAS - REPASOS - TIPS

1. * BASICO
   * Respetar los nombres que pone la convencion, para acceder  alos componentes desde las ruta, se accede an raves de l nombre de las rutas
   * EJ: app/login/page.tsx   -   para que la URL de con este compnente seria -> localhost/3000/login    [nombre de la carpeta]   
   * Hay un archivo por defecto 404 - el cual se puede editar 
   * Con Next siempre hay que crear una carpeta para cda componente, y llamar a ese componente por el nombre de la carpeta. Y TODOS los comopenetes se deben llamar "page"
   * En el caso de las rutas, es el mismo procedimiento, crear carpetas para cada ruta y que los archivos que son rutas, sean llamados como "route"
   * En base de datso no hace falta seguir esta regla como las "page" y "route".
   * Para poder utilizar "params" como en express.js , y poder aceder a estos datos, crear carpeta dentro de la carpeta del componente con el nombre de "[]"
   * y dentro de esta colocar el nombre del parametro : EJ . [id] - luego acceder a este parametro atraves de "params" dentro de "page.js" o "page.jsx"
   * EJ: con el params podemos permitir que distintos usuarios puedan ingresar, a sus respectivas paginas.

2. * INTERMEDIO
   * API - 
   * Los console.log() se imprimen de acuerdo se el el documento tiene o no "use client"
   * Usuario crear usuario en base
   * Usuario se logea
   * Hasta aqui SignUp y Login (Front and Back)
   * Logout button

3. * MIDDELWERES - En NEXT.js funcionan diferente
   * Protecciones 
   * Configuracion de Rutas 
   * 

  
import Image from "next/legacy/image";

export default function Techno() {
  const images = [
    {
      name: "React",
      imageSrc: "/react.svg",
      description:
        "React est une bibliothèque JavaScript libre développée par Facebook depuis 2013. Le but principal de cette bibliothèque est de faciliter la création d'application web monopage, via la création de composants dépendant d'un état et générant une page HTML à chaque changement d'état.",
        href: "https://react.dev/",
   
    },
    {
      name: "Next",
      imageSrc: "/nextjs.svg",
      description:
        "Next.js est un framework web open source de React. Il permet de construire des applications web avec React de manière efficace en regroupant les meilleures pratiques de React telles que le rendu côté serveur et le routage basé sur les fichiers.",
        href: "https://nextjs.org/",
    },
    {
      name: "Tailwind",
      imageSrc: "/tailwindcss.svg",
      description:
        "Tailwind CSS est un framework CSS open source qui permet de créer des sites web en HTML et CSS. Il se distingue des frameworks CSS comme Bootstrap ou Foundation par sa volonté de ne pas imposer un style visuel prédéfini.",
        href: "https://tailwindcss.com/",
    },
    {
      name: "Prisma",
      imageSrc: "/prisma.svg",
      description:
        "Prisma est un ORM pour Node.js et TypeScript. Il permet de manipuler des bases de données SQL et NoSQL en utilisant des types et des promesses. Il est compatible avec PostgreSQL, MySQL, SQLite et MongoDB.",
        href: "https://www.prisma.io/",
    },
    {
      name: "PostgreSQL",
      imageSrc: "/postgresql.svg",
      description:
        "PostgreSQL est un système de gestion de base de données relationnelle et objet. Il est publié sous licence libre et gratuite PostgreSQL est issu du projet POSTGRES mené par l'université de Californie à Berkeley, dont les principaux auteurs sont Michael Stonebraker, Joseph M. Hellerstein et Eugene Wong.",
        href: "https://www.postgresql.org/",
    },
  ];

  return (
    <>
      <main className="mt-16 mx-auto max-w-7xl px-4 sm:mt-24">
        <div className="text-center">
          <h5 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block ">Nous utilisons les dernieres </span>{" "}
            <span className="block text-white xl:inline">
             les dernieres technologies, pour vous offrir le meilleur.
            </span>
          </h5>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
           Surement que les technologies que nous utilisons ne vous disent rien, mais nous sommes sur que vous allez adorer le resultat.
          </p>
          <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
          <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5">
            
            {images.map((image) => (
              <a
                href={image.href}
                key={image.name}
                className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1"
              >
                <Image className="h-12" src={image.imageSrc} alt={image.name} width={48} height={48} />
              </a>
            ))}
          </div>
        </div>
            </div>
        </div>
      </main>
     
    </>
  );
}

import Image from "next/legacy/image"
import MyModal from "./Modal"

const incentives = [
    {
      name: 'Création de site internet vitrine',
      imageSrc: 'https://tailwindui.com/img/ecommerce/icons/icon-shipping-simple.svg',
      description: "Nous apportons une attention particulière à la création de votre site internet vitrine. Car c'est la première impression que vous donnerez à vos clients."
    },
    {
      name: 'Création de site internet e-commerce',
      imageSrc: 'https://tailwindui.com/img/ecommerce/icons/icon-warranty-simple.svg',
      description: "Nous utilisons les dernières technologies pour vous permettre de vendre vos produits en ligne, afin de vous permettre de développer votre chiffre d'affaire."
    },
    {
      name: 'Référencement naturel',
      imageSrc: 'https://tailwindui.com/img/ecommerce/icons/icon-exchange-simple.svg',
      description:
       "Nous vous accompagnons dans la mise en place de votre stratégie de référencement naturel. Nous vous aidons à améliorer votre positionnement sur les moteurs de recherche, et a écraser vos concurrents."
    },
    {
        name: 'Campagne publicitaire',
        imageSrc: 'https://tailwindui.com/img/ecommerce/icons/icon-exchange-simple.svg',
        description:
          "Mettons en place une campagne de publicité sur google ads, facebook ads, instagram ads, tiktok ads Nous vous accompagnons dans la mise en place de votre stratégie de communication digitale."
      },
      {
        name: 'Vidéo promotionnelle avec drone',
        imageSrc: 'https://tailwindui.com/img/ecommerce/icons/icon-exchange-simple.svg',
        description:
        "Nous réalisons des vidéos promotionnelles de vos produits ou de votre entreprise avec un drone et une caméra professionnelle pour vous permettre de vous démarquer de vos concurrents."
      },
      {
        name: 'Photographie professionnelle de vos produits',
        imageSrc: 'https://tailwindui.com/img/ecommerce/icons/icon-exchange-simple.svg',
        description:
         "Nous réalisons des photographies professionnelles de vos produits afin de vous permettre de les mettre en valeur sur votre site internet ou sur vos réseaux sociaux."
      },
  ]
  
  export default function Service() {
    return (
      <div className="bg-gray-50 reveal">
        <div className="max-w-7xl mx-auto py-24 sm:px-2 sm:py-32 lg:px-4">
          <div className="max-w-2xl mx-auto px-4 lg:max-w-none">
            <div className="grid grid-cols-1 items-center gap-y-10 gap-x-16 lg:grid-cols-2">
              <div>
                {/* <h2 className="text-4xl font-extrabold tracking-tight text-gray-900">
                Une gamme de services complète pour répondre à vos besoins
                </h2> */}
                   <h1 id="scale3" className="text-4xl tracking-tight  font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            <div className=" overflow-hidden">
            <span className="block xl:inline text overflow-hidden  ">Une gamme de services complète pour répondre</span>{" "}
            
            <span className="block text-indigo-600 xl:inline text ">
           à vos besoins
            </span>
            </div>
          </h1>
                <p className="mt-4 text-gray-500">
                Nous vous proposons une gamme de services complète pour répondre à vos besoins. Nous vous accompagnons dans la création de votre site internet, de votre application mobile, de votre boutique en ligne ou encore dans la mise en place de votre stratégie digitale. Nous vous proposons également des formations pour vous permettre de gagner en autonomie.

                </p>
                <p className="mt-4 text-gray-500">

                </p>
              <MyModal />
              </div>
              <div className="aspect-w-3 aspect-h-2 bg-gray-100 rounded-lg overflow-hidden">
                <Image
                height={500}
                width={500}
             layout="responsive"
                  src="/fpv-min.webp"
                  alt=""
                  className="object-center object-cover"
                />
              </div>
            </div>
            <div className="mt-16 grid grid-cols-1 gap-y-10 gap-x-8 lg:grid-cols-3">
              {incentives.map((incentive) => (
                <div key={incentive.name} className="sm:flex lg:block">
                  {/* <div className="sm:flex-shrink-0">
                    <img className="w-16 h-16" src={incentive.imageSrc} alt="" />
                  </div> */}
                  <div className="mt-4 sm:mt-0 sm:ml-6 lg:mt-6 lg:ml-0">
                    <h3 className="text-sm font-medium text-gray-900">{incentive.name}</h3>
                    <p className="mt-2 text-sm text-gray-500">{incentive.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }
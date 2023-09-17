"use client"
import React, { useRef,useState } from 'react';
import emailjs from '@emailjs/browser';
export default function FormModal() {
  const [toggleRes , setToggleRes] = useState(false)
  const form = useRef();
  const[message, setMessage] = useState(false)
  const sendEmail = (e) => {
    e.preventDefault();
  

    emailjs.sendForm('service_rbymofs', 'template_9h4m9t1', form.current, 'mfgTE9qT16rjS6y-3')
      .then((result) => {
          console.log(result.text);
          setToggleRes("Message envoyé !")
      }, (error) => {
          setToggleRes("Une erreur s'est produite, veuillez réessayer.")

      });
  };
  return (
    <div className=" bg-white">
     
      <div className="relative max-w-7xl mx-auto lg:grid lg:grid-cols-5">
      
        <div className="bg-white py-16 px-4 sm:px-6 lg:col-span-3 lg:py-24 lg:px-8 xl:pl-12">
          <div className="max-w-lg mx-auto lg:max-w-none">
            <form ref={form} onSubmit={sendEmail} className="grid grid-cols-1 gap-y-6">
              <div>
                <label htmlFor="full-name" className="sr-only">
                  Votre Nom
                </label>
                <input
                  type="text"
                  name="full-name"
                  id="full-name"
                  autoComplete="name"
                  className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                  placeholder="Votre Nom"
                />
              </div>
              <div>
                <label htmlFor="email" className="sr-only">
                  Votre Mail
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                  placeholder="Votre Mail"
                />
              </div>
              <div>
                <label htmlFor="phone" className="sr-only">
                  Numéro de téléphone
                </label>
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  autoComplete="tel"
                  className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                  placeholder="Numéro de téléphone"
                />
              </div>
              <div>
                <label htmlFor="message" className="sr-only">
                 Indiquez la date et l'heure de votre pour être rappelé !
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border border-gray-300 rounded-md"
                  placeholder="Indiquez la date et l'heure de votre pour être rappelé !
                  "
                  defaultValue={''}
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Être rappelé
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
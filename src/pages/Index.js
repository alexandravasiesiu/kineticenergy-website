import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import logo1 from '../assets/images/KineticEnergylogo1.png';
import logo2 from '../assets/images/KineticEnergylogo2.png';
import { useState } from 'react';
import { Carousel } from 'flowbite-react';
import ItemOne from '../assets/images/1004_DEEP-OSCILLATION-Evident-1.png';
import ItemTwo from '../assets/images/DEEP-OSCILLATION-EVIDENT-1 (1).png';
import ItemThree from '../assets/images/DEEP-OSCILLATION-Evident_acc-1.png';


const meta = {
  title: '',
  meta: [],
  link: [],
  style: [],
  script: [],
};

export default function Index() {

  const [menuOpen, setMenuOpen] = useState(false);

  const customTheme = {
    "root": {
      "base": "relative h-full w-full",
      "leftControl": "absolute top-0 left-0 flex h-full items-center justify-center px-4 focus:outline-none",
      "rightControl": "absolute top-0 right-0 flex h-full items-center justify-center px-4 focus:outline-none"
    },
    "indicators": {
      "active": {
        "off": "bg-green-200 hover:bg-green-300 dark:bg-gray-800/50 dark:hover:bg-gray-800",
        "on": "bg-green-300 dark:bg-gray-800"
      },
      "base": "h-3 w-3 rounded-full",
      "wrapper": "absolute bottom-5 left-1/2 flex -translate-x-1/2 space-x-3"
    },
    "item": {
      "base": "relative top-1/2 left-1/2 block w-full -translate-x-1/2 -translate-y-1/2",
      "wrapper": {
        "off": "w-full flex-shrink-0 transform cursor-default snap-center",
        "on": "w-full flex-shrink-0 transform cursor-grab snap-center"
      }
    },
    "control": {
      "base": "inline-flex h-8 w-8 items-center justify-center rounded-full bg-green-100 group-hover:bg-white/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-green-100 dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70 sm:h-10 sm:w-10",
      "icon": "h-5 w-5 text-green-300 dark:text-gray-800 sm:h-6 sm:w-6"
    },
    "scrollContainer": {
      "base": "flex h-full snap-mandatory overflow-y-hidden overflow-x-scroll scroll-smooth rounded-lg",
      "snap": "snap-x"
    }
  };

  return (
    <React.Fragment>
      <HelmetProvider>
        <Helmet {...meta}></Helmet>
      </HelmetProvider>
      <>
        <section className='pt-6 pb-20 bg-white overflow-hidden'>
          <div className='container mx-auto px-4'>
            <div className='mb-6'>
              <div className='flex px-6 bg-gray-100 border border-gray-100 rounded-full justify-between py-3 items-center'>
                <div className='w-auto'>
                  <div className='flex flex-wrap items-center'>
                    <div className='w-auto'>
                      <Link to='/'>
                        <img
                          src={logo2}
                          alt='Logo Kinetic Energy'
                          className='h-14'
                        />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className='w-auto'>
                  <div className='flex flex-wrap items-center'>
                    <div className='w-auto hidden lg:block'>
                      <ul className='flex justify-center items-center'>
                        <li className='mr-9'>
                          <Link
                            className='inline-block font-bold text-gray-900 hover:text-gray-700'
                            to='#DespreKineticEnergy'
                          >
                            Despre Kinetic Energy
                          </Link>
                        </li>
                        <li className='mr-9'>
                          <Link
                            className='inline-block font-bold text-gray-900 hover:text-gray-700'
                            to='#Servicii'
                          >
                            Servicii
                          </Link>
                        </li>
                        <li className='mr-9'>
                          <Link
                            className='inline-block font-bold text-gray-900 hover:text-gray-700'
                            to='#TehnologiiInovatoare'
                          >
                            Tehnologii Inovatoare
                          </Link>
                        </li>
                        <li>
                          <Link
                            className='inline-block font-bold text-gray-900 hover:text-gray-700'
                            to='#Contact'
                          >
                            Contact
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className='w-auto'>
                  <div className='flex flex-wrap items-center'>
                    <div className='w-auto lg:hidden'>
                      <button className='inline-block' onClick={() => setMenuOpen(true)}>
                        <svg
                          className='navbar-burger text-blue-500'
                          width={45}
                          height={45}
                          viewBox='0 0 56 56'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <rect
                            width={56}
                            height={56}
                            rx={28}
                            fill='currentColor'
                          />
                          <path
                            d='M37 32H19M37 24H19'
                            stroke='white'
                            strokeWidth='1.5'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className={`${menuOpen ? "" : "hidden"} navbar-menu fixed top-0 left-0 bottom-0 w-4/6 sm:max-w-xs z-50`}>
                <div className='navbar-backdrop fixed inset-0 bg-gray-800 opacity-80' />
                <nav className='relative z-10 px-9 pt-8 bg-white h-full overflow-y-auto'>
                  <div className='flex flex-wrap justify-between h-full'>
                    <div className='w-full'>
                      <div className='flex items-center justify-between -m-2'>
                        <div className='w-auto p-2'>
                          <Link className='inline-block' to='/'>
                            <img
                              src={logo2}
                              alt='Kinetic Energy Logo'
                              className='h-14'
                            />
                          </Link>
                        </div>
                        <div className='w-auto p-2'>
                          <button className='inline-block navbar-burger' onClick={() => setMenuOpen(false)}>
                            <svg
                              width={24}
                              height={24}
                              viewBox='0 0 24 24'
                              fill='none'
                              xmlns='http://www.w3.org/2000/svg'
                            >
                              <path
                                d='M6 18L18 6M6 6L18 18'
                                stroke='#111827'
                                strokeWidth={2}
                                strokeLinecap='round'
                                strokeLinejoin='round'
                              />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className='flex flex-col justify-center py-8 w-full'>
                      <ul>
                        <li className='mb-9'>
                          <Link
                            className='inline-block font-bold text-gray-900 hover:text-gray-700'
                            to='#DespreKineticEnergy'
                          >
                            Despre Kinetic Energy
                          </Link>
                        </li>
                        <li className='mb-9'>
                          <Link
                            className='inline-block font-bold text-gray-900 hover:text-gray-700'
                            to='#Servicii'
                          >
                            Servicii
                          </Link>
                        </li>
                        <li className='mb-9'>
                          <Link
                            className='inline-block font-bold text-gray-900 hover:text-gray-700'
                            to='#TehnologiiInovatoare'
                          >
                            Tehnologii Inovatoare
                          </Link>
                        </li>
                        <li>
                          <Link
                            className='inline-block font-bold text-gray-900 hover:text-gray-700'
                            to='#Contact'
                          >
                            Contact
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div className='flex flex-col justify-end w-full pb-8'>
                      <div className='flex flex-wrap -m-2'>
                        <div className='w-full p-2'>
                          <p className='text-center font-semibold'>
                            <span>Ⓒ Copyright. Toate drepturile rezervate de</span>
                            <Link className='text-green-200 hover:text-green-300' to='/'>
                              &nbsp; Kinetic Energy
                            </Link>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </nav>
              </div>
            </div>
            <div className='flex flex-wrap justify-center -m-4'>
              <div className='p-4 md:w-1/3 w-full flex items-center'>
                <img
                  className='mx-auto rounded rounded-3xl'
                  src='images/human-skeleton-163715-1920-jpg-1701425075797.webp'
                  alt='Human Skeleton Image'
                />
              </div>
              <div className='w-full md:flex-1 p-4'>
                <div
                  className='flex flex-col justify-center items-center p-8 h-full text-center bg-gray-100 rounded-3xl'
                >
                  <div className='max-w-lg'>
                    <span className='inline-block mb-3 text-sm font-bold uppercase tracking-widest text-green-300'>
                      Avem grijă să te simți bine
                    </span>
                    <h1 className='font-heading mb-6 text-5xl text-gray-900 font-black tracking-tight'>
                      <span>Bucură-te de o recuperare mai</span>
                      <span className='text-green-300 px-3'>rapidă</span>
                      <span>la tine acasă.</span>
                    </h1>
                    <p
                      className='mb-8 text-xl font-bold'
                    >
                      Scapă de grijile cauzate de blocajele din trafic, de
                      timpul petrecut pe drum și de stresul de a ieși din zona
                      de confort, apelând la serviciile noastre la domiciliu.{' '}
                    </p>
                    <div className='flex flex-wrap justify-center -m-2'>
                      <div className='w-full md:w-auto p-2'>
                        <Link
                          className='block w-full px-4 py-2.5 text-sm text-center text-white font-bold bg-green-200 hover:bg-green-300 focus:ring-4 focus:ring-green-400 rounded-full'
                          to='#Contact'
                        >
                          Programează-te ACUM
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className='container mx-auto'>
          <section id="DespreKineticEnergy" className='py-20'>
            <div className='container px-4 mx-auto'>
              <div className='max-w-2xl mx-auto'>
                <h2 className='mb-10 text-center text-5xl font-semibold text-blue-900'>
                  Despre Kinetic Energy
                </h2>
                <p className='mb-6 text-xl text-gray-500'>
                  Bine ați venit la Kinetic Energy, compania dedicată îngrijirii
                  tale și promovării sănătății în Alba Iulia! Înțelegem
                  importanța majoră de a avea grijă de noi ca oameni și de a ne
                  menține corpul și sănătatea în stare optimă. La Kinetic
                  Energy, credem că investirea în sănătatea personală este cheia
                  pentru a trăi o viață plină de energie și vitalitate.
                </p>
                <p className='mb-6 text-xl text-gray-500'>
                  Într-o lume agitată, în care suntem adesea preocupați de
                  multiple responsabilități, Kinetic Energy vine în sprijinul
                  tău, aducând servicii de kinetoterapie la ușa ta. Înțelegem că
                  sănătatea este o prioritate și că, având grijă de corpul tău,
                  poți atinge o stare de bine și echilibru în viața de zi cu zi.
                </p>
                <p className='mb-6 text-xl text-gray-500'>
                  La Kinetic Energy, suntem aici pentru a crea un parteneriat cu
                  tine în călătoria către o sănătate optimă. Alege să investești
                  în tine și să descoperi beneficiile pe care le aduce atenția
                  acordată corpului tău. Contactează-ne astăzi pentru a începe
                  această călătorie spre o viață mai sănătoasă și mai fericită!
                </p>
              </div>
            </div>
          </section>
        </div>
        <section id="Servicii" className='py-10 bg-white overflow-hidden'>
          <div className='container mx-auto px-4'>
            <div
              className='relative py-20 rounded-3xl md:px-8 px-3'
              style={{
                backgroundImage:
                  'url("images/medicine-7104394-1920.jpg")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
              }}
              alt='Medicine Related Background Image'
            >
              <div className='max-w-7xl mx-auto'>
                <div className='bg-white rounded-3xl md:p-10 p-3'>
                  <h2 className='mb-6 md:text-5xl text-gray-900 text-3xl text-green-300'>
                    Servicii Personalizate de Kinetoterapie la Domiciliu: O
                    Abordare Unică pentru Starea Ta de Bine
                  </h2>
                  <p className='text-gray-500 text-xl mb-6'>
                    Suntem specializați în furnizarea de servicii de
                    kinetoterapie la domiciliu, aducând beneficiile terapiei
                    direct la tine acasă. În arsenalul nostru terapeutic se află
                    două tehnologii inovatoare: Deep Oscilation și Lymphastim.
                  </p>
                  <p className='text-gray-500 text-xl mb-6'>
                    Beneficiind de serviciile noastre, vei experimenta nu doar
                    tratamente inovatoare precum Deep Oscilation și Lymphastim,
                    ci și o atenție personalizată și dedicată din partea
                    kinetoterapeuților noștri calificați. Ne străduim să creăm o
                    experiență terapeutică unică și eficientă, adaptată nevoilor
                    tale individuale.
                  </p>
                  <p className='mb-2 text-gray-500 text-xl'>
                    Avantajele aduse de aceste tehnologii moderne și de
                    îngrijirea personalizată oferită de Kinetic Energy includ
                    reducerea durerii, stimularea vindecării rănilor,
                    îmbunătățirea circulației sanguine și limfatice, precum și
                    relaxarea musculară. Prin acordarea atenției cuvenite
                    sănătății tale, vei experimenta o creștere a calității
                    vieții și o vitalitate sporită.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="TehnologiiInovatoare" className='bg-gray-50 overflow-hidden'>
          <div className='container mx-auto px-4 pt-10'>
            <div className='px-8 rounded-3xl pt-10'>
              <h1 className='mt-2 mb-6 text-center md:text-5xl text-3xl font-semibold text-blue-900'>
                Tehnologii Inovatoare în Kinetoterapie: Deep Oscilation și
                Lymphastim - Pentru o Viață Mai Sănătoasă
              </h1>
            </div>
          </div>
        </section>
        <section className='bg-gray-50 overflow-hidden py-10'>
          <div className='container mx-auto px-4'>
            <div className='py-16 px-8 bg-white border border-gray-100 rounded-3xl'>
              <div className='max-w-7xl mx-auto'>
                <div className='flex flex-wrap lg:items-center -m-8'>
                  <div className='w-full md:w-1/2 p-8'>
                    <img
                      className='mx-auto md:ml-0 rounded-3xl'
                      src='images/lymphastim-block-background3-1649943320-original-copy-1665046465-original.webp'
                      alt='BTL Lymphastim Device Image'
                    />
                  </div>
                  <div className='w-full md:w-1/2 md:p-8 p-3'>
                    <h1
                      className='mt-2 mb-6 md:text-5xl text-3xl text-green-300'
                    >
                      BTL Lymphastim
                    </h1>
                    <p className='text-xl text-gray-500 mb-6'>
                      Sistemul limfatic contribuie la eliminarea toxinelor din
                      corp. Dispozitivul BTL Lymphastim oferă un tip de masaj
                      delicat, care stimulează circulația fluidelor limfatice în
                      jurul corpului, folosind principiul presoterapiei
                      pneumatice.
                    </p>
                    <p className='text-gray-500 text-xl mb-6'>
                      Această procedură este adesea recomandată în situații
                      precum limfedem, umflături post-traumatice și
                      post-chirurgicale, precum și sindromul picioarelor grele.
                    </p>
                    <p className='text-gray-500 text-xl'>
                      Lymphastim poate fi eficient în tratarea edemului cronic,
                      obstrucției post-chirurgicale a vaselor limfatice,
                      insuficienței venoase, bolii ischemice, prevenirii
                      trombozei venoase profunde și a multor alte afecțiuni.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='py-10 bg-gray-50 overflow-hidden'>
          <div className='container mx-auto px-4'>
            <div className='p-10 bg-white rounded-3xl'>
              <div className='flex flex-wrap -m-8'>
                <div className='w-full lg:w-1/2 md:p-8 p-3'>
                  <div className='py-12 md:max-w-md mx-auto'>
                    <h1 className='mt-2 mb-6 md:text-5xl text-3xl text-green-300'>
                      DEEP OSCILLATION EVIDENT
                    </h1>
                    <p className='text-gray-500 text-xl mb-6'>
                      DEEP OSCILLATION® reprezintă o metodă inovatoare și
                      patentată de tratament, bazată pe generarea oscilațiilor
                      biologice în țesutul tratat, utilizând atracția
                      electrostatică și frecarea. Aceste oscilații plăcute au un
                      impact delicat și profund asupra tuturor componentelor
                      tisulare, inclusiv piele, țesut conjunctiv, mușchi, vase
                      sanguine și limfatice. Efectele dovedite clinic ale DEEP
                      OSCILLATION® includ reducerea durerii, proprietăți
                      anti-inflamatorii, eficacitate în reabsorbția edemelor,
                      promovarea vindecării rănilor, acțiune anti-fibrotică,
                      îmbunătățirea troficității, reducerea contracturilor
                      musculare, detoxifierea și îmbunătățirea calității
                      țesutului.
                    </p>
                    <p className='text-gray-500 text-xl mb-6'>
                      Procedura implică ca pacientul să țină un element neutru
                      din titan între degete, iar efectul terapeutic al DEEP
                      OSCILLATION® este creat sub mâinile terapeutului sau
                      aplicatorului de mână, mișcat într-un mod circular
                      deasupra țesutului.
                    </p>
                    <p className='mb-2 text-gray-500 text-xl'>
                      Datorită naturii sale neinvazive și eficiente, DEEP
                      OSCILLATION® este potrivit pentru diverse aplicații,
                      inclusiv tratament anti-îmbătrânire pentru gât/decolteu,
                      recuperare post-chirurgie plastică, liposucție și
                      reabilitare cu laser, terapie preoperatorie, combaterea
                      celulitei, terapie pre- și postoperatorie, gestionarea
                      limfedemului, tratarea traumelor mecanice și afecțiunilor
                      cauzate de suprasolicitare, vindecarea rănilor secundare,
                      arsuri, sindroame dureroase cronice, neuroreabilitare,
                      recuperare după antrenament și stabilizarea performanței.
                    </p>
                  </div>
                </div>
                <div className='w-full lg:w-1/2 p-8'>
                  <div
                    className='flex flex-col justify-end py-16 px-8 text-center h-full rounded-3xl shadow-lg'
                    leftControl="left" rightControl="right"
                  >
                   
                    <Carousel theme={customTheme}>
                      <img src={ItemOne} />
                      <img src={ItemTwo} />
                      <img src={ItemThree} />
                    </Carousel>
                    

                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="Contact" className='py-10 bg-gray-50 overflow-hidden'>
          <div className='container mx-auto px-4'>
            <div className='py-16 px-8 bg-white overflow-hidden border border-gray-100 rounded-3xl'>
              <div className='max-w-7xl mx-auto'>
                <div className='mb-10 md:max-w-md mx-auto text-center'>
                  <span className='inline-block mb-4 text-sm font-bold uppercase tracking-widest text-green-300'>
                    Suntem aici pentru tine
                  </span>
                  <h2 className='font-heading mb-6 text-4xl md:text-5xl lg:text-6xl font-black tracking-tight'>
                    Contactează-ne
                  </h2>
                  <p className='font-bold text-green-200'>
                    Si Află Cum Putem Îmbunătăți Starea Ta de Sănătate
                  </p>
                </div>
                <div className='flex flex-wrap -m-4'>
                  <div className='w-full lg:w-1/3 p-4'>
                    <div className='p-10 text-center h-full bg-gray-100 rounded-3xl'>
                      <div className='flex items-center justify-center mb-6 w-12 h-12 mx-auto bg-white rounded-xl'>
                        <svg
                          width={24}
                          height={24}
                          viewBox='0 0 24 24'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            d='M14 16C14 17.77 13.23 19.37 12 20.46C10.94 21.42 9.54 22 8 22C4.69 22 2 19.31 2 16C2 13.9753 3.01397 12.1814 4.5554 11.0973C4.80358 10.9228 5.1393 11.0422 5.27324 11.3144C6.21715 13.2332 7.95419 14.6699 10.02 15.23C10.65 15.41 11.31 15.5 12 15.5C12.4872 15.5 12.9539 15.4538 13.4074 15.3687C13.6958 15.3146 13.9828 15.4995 13.9955 15.7925C13.9985 15.862 14 15.9314 14 16Z'
                            fill='#2D9596'
                          />
                          <path
                            d='M18 8C18 8.78 17.85 9.53 17.58 10.21C16.89 11.95 15.41 13.29 13.58 13.79C13.08 13.93 12.55 14 12 14C11.45 14 10.92 13.93 10.42 13.79C8.59 13.29 7.11 11.95 6.42 10.21C6.15 9.53 6 8.78 6 8C6 4.69 8.69 2 12 2C15.31 2 18 4.69 18 8Z'
                            fill='#2D9596'
                          />
                          <path
                            d='M22 16C22 19.31 19.31 22 16 22C15.2555 22 14.5393 21.8643 13.8811 21.6141C13.5624 21.4929 13.503 21.0851 13.7248 20.8262C14.8668 19.4938 15.5 17.786 15.5 16C15.5 15.66 15.47 15.32 15.42 15V15C15.3902 14.8155 15.4844 14.6342 15.6478 14.5437C16.9719 13.8107 18.0532 12.6875 18.727 11.3153C18.8609 11.0427 19.1968 10.923 19.4452 11.0977C20.9863 12.1818 22 13.9755 22 16Z'
                            fill='#2D9596'
                          />
                        </svg>
                      </div>
                      <h3 className='font-heading mb-2 text-xl text-gray-900 font-black'>
                        Email
                      </h3>
                      <p className='text-gray-500 font-bold'>office.kinetic.energy@gmail.com</p>
                    </div>
                  </div>
                  <div className='w-full lg:w-1/3 p-4'>
                    <div className='p-10 text-center h-full bg-gray-100 rounded-3xl'>
                      <div className='flex items-center justify-center mb-6 w-12 h-12 mx-auto bg-white rounded-xl'>
                        <svg
                          width={24}
                          height={24}
                          viewBox='0 0 24 24'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            d='M14 16C14 17.77 13.23 19.37 12 20.46C10.94 21.42 9.54 22 8 22C4.69 22 2 19.31 2 16C2 13.9753 3.01397 12.1814 4.5554 11.0973C4.80358 10.9228 5.1393 11.0422 5.27324 11.3144C6.21715 13.2332 7.95419 14.6699 10.02 15.23C10.65 15.41 11.31 15.5 12 15.5C12.4872 15.5 12.9539 15.4538 13.4074 15.3687C13.6958 15.3146 13.9828 15.4995 13.9955 15.7925C13.9985 15.862 14 15.9314 14 16Z'
                            fill='#2D9596'
                          />
                          <path
                            d='M18 8C18 8.78 17.85 9.53 17.58 10.21C16.89 11.95 15.41 13.29 13.58 13.79C13.08 13.93 12.55 14 12 14C11.45 14 10.92 13.93 10.42 13.79C8.59 13.29 7.11 11.95 6.42 10.21C6.15 9.53 6 8.78 6 8C6 4.69 8.69 2 12 2C15.31 2 18 4.69 18 8Z'
                            fill='#2D9596'
                          />
                          <path
                            d='M22 16C22 19.31 19.31 22 16 22C15.2555 22 14.5393 21.8643 13.8811 21.6141C13.5624 21.4929 13.503 21.0851 13.7248 20.8262C14.8668 19.4938 15.5 17.786 15.5 16C15.5 15.66 15.47 15.32 15.42 15V15C15.3902 14.8155 15.4844 14.6342 15.6478 14.5437C16.9719 13.8107 18.0532 12.6875 18.727 11.3153C18.8609 11.0427 19.1968 10.923 19.4452 11.0977C20.9863 12.1818 22 13.9755 22 16Z'
                            fill='#2D9596'
                          />
                        </svg>
                      </div>
                      <h3 className='font-heading mb-2 text-xl text-gray-900 font-black'>
                        Telefon
                      </h3>
                      <p className='text-gray-500 font-bold'>0723 365 216</p>
                    </div>
                  </div>
                  <div className='w-full lg:w-1/3 p-4'>
                    <div className='p-10 text-center h-full bg-gray-100 rounded-3xl'>
                      <div className='flex items-center justify-center mb-6 w-12 h-12 mx-auto bg-white rounded-xl'>
                        <svg
                          width={24}
                          height={24}
                          viewBox='0 0 24 24'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            d='M14 16C14 17.77 13.23 19.37 12 20.46C10.94 21.42 9.54 22 8 22C4.69 22 2 19.31 2 16C2 13.9753 3.01397 12.1814 4.5554 11.0973C4.80358 10.9228 5.1393 11.0422 5.27324 11.3144C6.21715 13.2332 7.95419 14.6699 10.02 15.23C10.65 15.41 11.31 15.5 12 15.5C12.4872 15.5 12.9539 15.4538 13.4074 15.3687C13.6958 15.3146 13.9828 15.4995 13.9955 15.7925C13.9985 15.862 14 15.9314 14 16Z'
                            fill='#2D9596'
                          />
                          <path
                            d='M18 8C18 8.78 17.85 9.53 17.58 10.21C16.89 11.95 15.41 13.29 13.58 13.79C13.08 13.93 12.55 14 12 14C11.45 14 10.92 13.93 10.42 13.79C8.59 13.29 7.11 11.95 6.42 10.21C6.15 9.53 6 8.78 6 8C6 4.69 8.69 2 12 2C15.31 2 18 4.69 18 8Z'
                            fill='#2D9596'
                          />
                          <path
                            d='M22 16C22 19.31 19.31 22 16 22C15.2555 22 14.5393 21.8643 13.8811 21.6141C13.5624 21.4929 13.503 21.0851 13.7248 20.8262C14.8668 19.4938 15.5 17.786 15.5 16C15.5 15.66 15.47 15.32 15.42 15V15C15.3902 14.8155 15.4844 14.6342 15.6478 14.5437C16.9719 13.8107 18.0532 12.6875 18.727 11.3153C18.8609 11.0427 19.1968 10.923 19.4452 11.0977C20.9863 12.1818 22 13.9755 22 16Z'
                            fill='#2D9596'
                          />
                        </svg>
                      </div>
                      <h3 className='font-heading mb-2 text-xl text-gray-900 font-black'>
                        Adresa
                      </h3>
                      <p className='text-gray-500 font-bold'>
                        Str. Tudor Vladimirescu, Nr. 22C,
                      </p>
                      <p className='text-gray-500 font-bold'>
                        Alba Iulia, Județul Alba
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='py-10 bg-gray-50 overflow-hidden'>
          <div className='container mx-auto px-4'>
            <div className='py-16 px-8 bg-white rounded-3xl'>
              <div className='flex flex-col justify-center'>
                <a className='inline-block max-w-max mx-auto mb-10' href='#'>
                  <img
                    src={logo1}
                    alt='Logo Kinetic Energy'
                    className='h-24'
                  />
                </a>
                <ul className='-m-6 mb-7 text-center'>
                  <li className='inline-flex p-6'>
                    <Link
                      className='inline-block text-gray-500 hover:text-gray-600 font-bold'
                      to='#DespeKineticEnergy'
                    >
                      Despre Kinetic Energy
                    </Link>
                  </li>
                  <li className='inline-flex p-6'>
                    <Link
                      className='inline-block text-gray-500 hover:text-gray-600 font-bold'
                      to='#Servicii'
                    >
                      Servicii
                    </Link>
                  </li>
                  <li className='inline-flex p-6'>
                    <Link
                      className='inline-block text-gray-500 hover:text-gray-600 font-bold'
                      to='#TehnologiiInovatoare'
                    >
                      Tehnologii Inovatoare
                    </Link>
                  </li>
                  <li className='inline-flex p-6'>
                    <Link
                      className='inline-block text-gray-500 hover:text-gray-600 font-bold'
                      to='#Contact'
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
                <div className='flex flex-wrap justify-center -m-4 mb-12'>
                  <div className='w-auto p-4'>
                    <Link className='block' to='https://www.instagram.com/'>
                      <img src='zanrly-assets/images/insta.svg' alt='Instagram Logo' />
                    </Link>
                  </div>
                  <div className='w-auto p-4'>
                    <Link className='block' href='https://twitter.com/'>
                      <img src='zanrly-assets/images/twitter.svg' alt='Twitter Logo' />
                    </Link>
                  </div>
                  <div className='w-auto p-4'>
                    <Link className='block' href='https://www.facebook.com/'>
                      <img src='zanrly-assets/images/footers/fb.svg' alt='Facebook Logo' />
                    </Link>
                  </div>
                </div>
                <p className='text-center font-bold'>
                  <span>Ⓒ Copyright. Toate drepturile rezervate de</span>
                  <Link className='text-green-200 hover:text-green-300' to='/'>
                    &nbsp; Kinetic Energy
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </section>
      </>
    </React.Fragment >
  );
}


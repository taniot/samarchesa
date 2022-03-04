// no-underline leading-tight block fixed right-5 bottom-5 w-10 h-auto  z-20

import Image from 'next/image';

/*
export const WhatsAppLink = styled.a`
${tw`no-underline leading-tight block fixed right-5 bottom-5 w-10 h-auto  z-20`};
`
export const WhatsApp = styled(WhatsAppImg)`
  ${tw`antialiased opacity-100 h-auto w-10  fill-current text-whatsapp`};
`
*/

const WhatsApp = () => {
  return (
    <a
      href={`https://api.whatsapp.com/send?phone=+39 328 60 27 607`}
      title='Scrivi a Giuseppe via WhatsApp'
      target='_blank'
      rel='noopener noreferrer'
      className='no-underline leading-tight block fixed right-5 bottom-5 w-10 h-auto z-40'
    >
      <Image
        src='/images/whatsapp.svg'
        width={40}
        height={40}
        alt='Scrivi a Giuseppe via WhatsApp'
        className='antialiased opacity-100 h-auto w-10 fill-current'
      />
    </a>
  );
};

export default WhatsApp;

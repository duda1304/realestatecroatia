
import { useEffect, useRef, useState } from 'react';

export default function Alphabet() {
  const sliderRef = useRef(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 950); // Initial screen check


  const alphabet = [
    { name: "A", link: "/listcity.asp?slovo=a" },
    { name: "B", link: "/listcity.asp?slovo=b" },
    { name: "C", link: "/listcity.asp?slovo=c" },
    { name: "Č", link: "/listcity.asp?slovo=č" },
    { name: "Ć", link: "/listcity.asp?slovo=ć" },
    { name: "D", link: "/listcity.asp?slovo=d" },
    { name: "Dž", link: "/listcity.asp?slovo=dž" },
    { name: "Đ", link: "/listcity.asp?slovo=đ" },
    { name: "E", link: "/listcity.asp?slovo=e" },
    { name: "F", link: "/listcity.asp?slovo=f" },
    { name: "G", link: "/listcity.asp?slovo=g" },
    { name: "H", link: "/listcity.asp?slovo=h" },
    { name: "I", link: "/listcity.asp?slovo=i" },
    { name: "J", link: "/listcity.asp?slovo=j" },
    { name: "K", link: "/listcity.asp?slovo=k" },
    { name: "L", link: "/listcity.asp?slovo=l" },
    { name: "LJ", link: "/listcity.asp?slovo=lj" },
    { name: "M", link: "/listcity.asp?slovo=m" },
    { name: "N", link: "/listcity.asp?slovo=n" },
    { name: "NJ", link: "/listcity.asp?slovo=nj" },
    { name: "O", link: "/listcity.asp?slovo=o" },
    { name: "P", link: "/listcity.asp?slovo=p" },
    { name: "R", link: "/listcity.asp?slovo=r" },
    { name: "S", link: "/listcity.asp?slovo=s" },
    { name: "Š", link: "/listcity.asp?slovo=š" },
    { name: "T", link: "/listcity.asp?slovo=t" },
    { name: "U", link: "/listcity.asp?slovo=u" },
    { name: "V", link: "/listcity.asp?slovo=v" },
    { name: "Z", link: "/listcity.asp?slovo=z" },
    { name: "Ž", link: "/listcity.asp?slovo=ž" },
    { name: "A-Ž", link: "/listcity.asp" },
  ];

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 950;
      if (mobile !== isMobile) {
        setIsMobile(mobile);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isMobile]);

  useEffect(() => {
    if (isMobile && sliderRef.current && !$(sliderRef.current).hasClass('slick-initialized')) {
      $(sliderRef.current).slick({
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: true,
        responsive: [
          {
            breakpoint: 950,
            settings: {
              slidesToShow: 10,
              slidesToScroll: 1,
              arrows: true,
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 8,
              slidesToScroll: 1,
              arrows: true,
            }
          }
        ]
      });
    }

    if (!isMobile && sliderRef.current && $(sliderRef.current).hasClass('slick-initialized')) {
      $(sliderRef.current).slick('unslick');
    }

    return () => {
      if (sliderRef.current && $(sliderRef.current).hasClass('slick-initialized')) {
        $(sliderRef.current).slick('unslick');
      }
    };
  }, [isMobile]);

  const handleLinkClick = () => {
  };

  return (
    <div className="abcd_holder_mobile">
      <ul className="abeceda-mobile slick-mobile" ref={sliderRef}>
        {alphabet.map((letter, index) => (
          <li key={index} className="abeceda-item">
            <a href={letter.link} className="link abcd-mobile" onClick={handleLinkClick}>{letter.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

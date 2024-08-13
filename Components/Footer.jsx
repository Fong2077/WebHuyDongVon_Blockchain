import React from "react";

const Footer = () => {
  const productList = ["Market", "Explore", "Donation"];
  const contactList = ["example@gmail.com","info@example.com", "Contact us"];

  const usefullink = ["Home", "About us", "Thanh Phong Bio"];

  return(
    <footer className="text-center text-white backgroundMain lg:text-left">
      <div className="mx-6 py-10 text-center md:text-left">
        <div className="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className ="">
              <h6 className="mb-4 flex items-center justify-center font-semibold uppercase md:justify-start">Thanh Phong</h6>
              <p className ="uppercase">Khó chệu vô cùng tận</p>
          </div>

          <div className = "">
            <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start"> Sản phẩm</h6>

            {productList.map((el,i) =>(
              <p key={i + 1} className="mb-4">
                <a href="#!">{el}</a>
              </p>
            ))}
          </div>

          <div className ="">
            <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">Liên kết khác</h6>

            {usefullink.map((el, i) =>(
              <p key={i + 1} className="mb-4">
                <a href="#!">{el}</a>
              </p>
            ))}  
          </div>

          <div className= "">
            <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">Liên hệ</h6>

            {contactList.map((el, i) =>(
              <p key={i + 1} className="mb-4">
              <a href="#!">{el}</a>
              </p>
            ))}
          </div>

        </div>
      </div>


      <div className= "backgroundMain p-6 text-center">
        <span>© 2024 Copyright :</span>
        <a href="https://tailwindcss.com/" className = " font-semibold"> Thanh Phong</a>
      </div>

    </footer>
  );


};

export default Footer;

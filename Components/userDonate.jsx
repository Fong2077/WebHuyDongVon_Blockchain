import React, { useState, useEffect, useContext } from "react";
import { CrowdFundingContext } from "../Context/CroudFunding";

const UserDonations = () => {
  const { getUserDonations, currentAccount } = useContext(CrowdFundingContext);
  const [userDonations, setUserDonations] = useState([]);

  useEffect(() => {
    const fetchUserDonations = async () => {
      if (currentAccount) {
        const donations = await getUserDonations(currentAccount);
        setUserDonations(donations);
      }
    };

    fetchUserDonations();
  }, [currentAccount]);

  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 ">
      <p className="py-16 text-2xl font-bold leading-5">Các chiến dịch mà bạn đã donate</p>
      <div className="grid gap-5 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
        {userDonations.length === 0 ? (
          <div className="mess">
            <img width ="150" height = "150" src="https://static-00.iconduck.com/assets.00/woman-shrugging-light-skin-tone-emoji-512x444-jhmc8tsx.png" alt="" />
            <p className ="tex mt-5">Bạn chưa donate vào chiến dịch nào</p>
          
          </div>
        ) : (
          userDonations.map((donation, index) => (
            <div key={index} className="cursor-pointer border overflow-hidden transition-shadow duration-300 bg-white rounded-3xl shadow-2xl">
              <img
                src="https://www.vyopta.com/wp-content/uploads/2019/01/iStock-952039816.jpg"
                className="object-cover w-full h-64 rounded"
                alt=""
              />
              <div className="py-5 pl-2">
                <a
                  href="/"
                  aria-label="Article"
                  className="inline-block mb-3 text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
                >
                  <p className="text-2xl font-bold leading-5">{donation.title}</p>
                </a>
                <p className="mb-4 text-gray-700">{donation.description}</p>
                
                <div className="">
                  <p className="font-semibold">Số lần donate: {donation.donationCount}</p>
                  
                    <p className="font-semibold">Tổng số tiền donate: <p className ="totalMoney"> {donation.totalDonation} ETH</p></p>
                </div>


              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default UserDonations;

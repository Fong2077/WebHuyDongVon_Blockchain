

import React, { useEffect, useContext, useState } from "react";
import { CrowdFundingContext } from "../Context/CroudFunding";
import { Hero, Card, PupUp, UserDonations } from "../Components";


const CampaignPage = () => {
  const {
    titleData,
    getCampaigns,
    createCampaign,
    donate,
    getUserCampaigns,
    getDonations,
    currentAccount,
    connectWallet,
    getUserDonations,
  } = useContext(CrowdFundingContext);

  const [allCampaigns, setAllCampaigns] = useState([]);
  const [userCampaigns, setUserCampaigns] = useState([]);
  const [openModel, setOpenModel] = useState(false);
  const [donateCampaign, setDonateCampaign] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const allData = await getCampaigns();
      setAllCampaigns(allData);

      if (currentAccount) {
        const userData = await getUserCampaigns();
        setUserCampaigns(userData);
      }
    };

    fetchData();
  }, [currentAccount]);

  return (
    <>
     
      <Hero titleData={titleData} createCampaign={createCampaign} connectWallet={connectWallet} />
      
      <Card 
        title="Tất cả chiến dịch huy động"
        allcampaign={allCampaigns}
        setOpenModel={setOpenModel}
        setDonateCampaign={setDonateCampaign}
      />

      {currentAccount && (
        <>
        
          <Card
            title="Các chiến dịch đã tạo"
            allcampaign={userCampaigns}
            setOpenModel={setOpenModel}
            setDonateCampaign={setDonateCampaign}
          />

          <UserDonations
            getUserDonations={getUserDonations}
            setOpenModel={setOpenModel}
            
          />
        </>
      )}

      {openModel && (
        <PupUp
          setOpenModel={setOpenModel}
          getDonations={getDonations}
          donateCampaign={donateCampaign}
          donateFunction={donate}
        />
      )}

      

    </>
  );
};

export default CampaignPage;


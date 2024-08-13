// import { LogDescription } from "ethers/lib/utils";
// import React, { useState } from "react";

// // const Hero = ({titleData, createCampaign}) => {

// //   const [campaign, setCampaign] = useState({
// //     title: "",
// //     Description: "",
// //     amount:"",
// //     deadline:"",
// //   });

// //   const createNewCampaign  = async (e) => {
// //     e.preventDefault();
// //     try {
// //       const data = await createCampaign(campaign);
// //     } catch (error) {
// //       console.log(error);
// //     }
// //   };

// const Hero = ({ titleData, createCampaign }) => {
//   const [campaign, setCampaign] = useState({
//     title: "",
//     description: "",
//     amount: "",
//     deadline: "",
//   });

//   const [error, setError] = useState(null);

//   const createNewCampaign = async (e) => {
//     e.preventDefault();
//     try {
//       if (
//         !campaign.title ||
//         !campaign.description ||
//         !campaign.amount ||
//         !campaign.deadline
//       ) {
//         setError("Please fill in all fields");
//         return;
//       }

//       const data = await createCampaign(campaign);
//       if (data.error) {
//         setError(data.error.message);
//       } else {
//         // Campaign created successfully, redirect to campaign page or display success message
//       }
//     } catch (error) {
//       setError(error.message);
//     }
//   };

//   return (
//     <div className="relative">
//       <span className="coverLine"></span>
//       <img
//         src="https://images.pixels.com/photos/3228766/pexels-photo-3228766.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
//         className="absolute inset-0 object-cover w-full h-full"
//         alt=""
//       />

//       <div className="relative bg-opacity-75 backgroundMain">
//         <svg
//           className="absolute inset-x-0 bottom-0 text-white"
//           viewBox="0 0 1160 163"
//         >
//           <path
//             fill="currentColor"
//             d="M-164 13L-104 39.7C-44 66 76 120 196 141C316 162 436 152 556 119.7C676 88 796 34 916 13C1036 -8 1156 2 1216 7.7L1276 13V162.5H1216C1156 162.5 1036 162.5 916 162.5C796 162.5 676 162.5 556 162.5C436 162.5 316 162.5 196 162.5C76 162.5 -44 162.5 -104 162.5H-164V13Z"
//           ></path>
//         </svg>

//         <div className="relative px-4 py-16 mx-auto overflow-hidden sm:max-w-xl md:max -- full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
//           <div className="flex flex-col items-center justify-between xl:flex-row">
//             <div className="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
//               <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-5xl sm: leading-none">
//                 Chào mừng <br className="hidden md:block"></br> đến với sàn huy
//                 động vốn Tiên Phong 2
//               </h2>

//               <p className="max-w-xl mb-4 text-base text-gray-200 md:text-lg">
//                 Sed ut perspiciatis unde omnis iste natus error sit voluptatem
//                 accusantium doloremque laudan, totam rem aperiam, eaque ipsa
//                 quae.
//               </p>

//               <a
//                 href="/"
//                 arial-label=""
//                 className="inline-flex items-center font-semibold tracking-wider transition-colors duration-200 text-teal-accent-400 hover: text-teal-accent-700 text-gray-200"
//               >
//                 {" "}
//                 Tìm hiểu thêm
//                 <svg
//                   className="inline-block w-3 ml-2"
//                   fill="currentColor"
//                   viewBox="0 0 12 12"
//                 >
//                   <path d="M9.707,5.293l-4-4A1,1,0,0,0,3.293,2.707L7.586,7,3.293,11.293a1,1,0,0,0,1.414,1.414l4-4A1,1,0,0,0,9.707,5.293Z" />
//                 </svg>
//               </a>
//             </div>

//             <div className="w-full max-w-xl xl:px-8 xl:w-5/12">
//               <div className="bg-white rounded shadow-2xl p-7 sm:p-10">
//                 <h3 className="mb-4 text-xl font-semibold sm:text-center sm:mb-6 sm:text-2xl">
//                   Chiến dịch
//                 </h3>

//                 <form action="">
//                   <div className=" mb-1 sm:mb-2">
//                     <label
//                       htmlFor="firstName"
//                       className="inline-block mb-1 font-medium"
//                     >
//                       Tên chiến dịch
//                     </label>

//                     <input
//                       onChange={(e) =>
//                         setCampaign({
//                           ...campaign,
//                           title: e.target.value,
//                         })
//                       }
//                       placeholder="title"
//                       required
//                       type="text"
//                       className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
//                       id="firstName"
//                       name="firstName"
//                     />
//                   </div>

//                   <div className="mb-1 sm:mb-2">
//                     <label
//                       htmlFor="lastName"
//                       className="inline-block mb-1 font-medium"
//                     >
//                       Thông tin mô tả
//                     </label>

//                     <input
//                       onChange={(e) =>
//                         setCampaign({
//                           ...campaign,
//                           description: e.target.value,
//                         })
//                       }
//                       placeholder="description"
//                       required
//                       type="text"
//                       className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
//                       id="lastName"
//                       name="lastName"
//                     />
//                   </div>

//                   <div className="mb-1 sm:mb-2">
//                     <label
//                       htmlFor="email"
//                       className="inline-block mb-1 font-medium"
//                     >
//                       Số tiền mục tiêu
//                     </label>

//                     <input
//                       onChange={(e) =>
//                         setCampaign({
//                           ...campaign,
//                           amount: e.target.value,
//                         })
//                       }
//                       placeholder="amount"
//                       required
//                       type="text"
//                       className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
//                       id="email"
//                       name="email"
//                     />
//                   </div>

//                   <div className=" mb-1 sm:mb-2">
//                     <label
//                       htmlFor="deadline"
//                       className="inline-block mb-1 font-medium"
//                     >
//                       Thời hạn
//                     </label>

//                     <input
//                       onChange={(e) =>
//                         setCampaign({
//                           ...campaign,
//                           deadline: e.target.value,
//                         })
//                       }
//                       placeholder="Date"
//                       required
//                       type="date"
//                       className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
//                       id="deadline"
//                       name="deadline"
//                     />
//                   </div>

//                   <div className="mt-4 mb-2 sm:mb-4">
//                     <button
//                       onClick={(e) => createNewCampaign(e)}
//                       type="submit"
//                       className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:outline-none newColor"
//                     >
//                       Tạo chiến dịch huy động vốn
//                     </button>
//                   </div>

//                   <p className="text-xs text-gray-600 sm:text-sm">
//                     {" "}
//                     Create you Campaign for raise funds
//                   </p>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default Hero;



import React, { useState } from "react";
import Head from 'next/head';

const Hero = ({ titleData, createCampaign, connectWallet }) => {
  const [campaign, setCampaign] = useState({
    title: "",
    description: "",
    amount: "",
    deadline: "",
  });

  const [error, setError] = useState(null);

  const createNewCampaign = async (e) => {
    e.preventDefault();
    try {
      if (!campaign.title || !campaign.description || !campaign.amount || !campaign.deadline) {
        setError("Please fill in all fields");
        return;
      }

      await createCampaign(campaign);
      setCampaign({ title: "", description: "", amount: "", deadline: "" });
      setError(null);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="relative">

     

      <span className="coverLine"></span>
      {/* <img
        src="https://images.pixels.com/photos/3228766/pexels-photo-3228766.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
        className="absolute inset-0 object-cover w-full h-full"
        alt=""
      /> */}
      <div className="relative bg-opacity-75 backgroundMain">
        <svg
          className="absolute inset-x-0 bottom-0 text-white"
          viewBox="0 0 1160 163"
        >
          <path
            fill="currentColor"
            d="M-164 13L-104 39.7C-44 66 76 120 196 141C316 162 436 152 556 119.7C676 88 796 34 916 13C1036 -8 1156 2 1216 7.7L1276 13V162.5H1216C1156 162.5 1036 162.5 916 162.5C796 162.5 676 162.5 556 162.5C436 162.5 316 162.5 196 162.5C76 162.5 -44 162.5 -104 162.5H-164V13Z"
          ></path>
        </svg>
        <div className="relative px-4 py-16 mx-auto overflow-hidden sm:max-w-xl md:max -- full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="flex flex-col items-center justify-between xl:flex-row">
            <div className="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
            <img width="70" height="70" className="pb-3" src="https://cdn-icons-png.freepik.com/512/3734/3734456.png" alt=""></img>
              <h2 className="tex max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-5xl sm: leading-none">
                Chào mừng <br className="hidden md:block"></br> đến với quỷ đầu tư PNK
              </h2>
              <p className="max-w-xl mb-4 text-base text-gray-200 md:text-lg">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudan, totam rem aperiam, eaque ipsa quae.
              </p>
              <button
                onClick={connectWallet}
                className="inline-flex items-center font-semibold tracking-wider transition-colors duration-200 text-teal-accent-400 hover:text-teal-accent-700 text-gray-200"
              >
                Xem thêm
                <svg
                  className="inline-block w-3 ml-2"
                  fill="currentColor"
                  viewBox="0 0 12 12"
                >
                  <path d="M9.707,5.293l-4-4A1,1,0,0,0,3.293,2.707L7.586,7,3.293,11.293a1,1,0,0,0,1.414,1.414l4-4A1,1,0,0,0,9.707,5.293Z" />
                </svg>
              </button>
            </div>
            <div className="w-full max-w-xl xl:px-8 xl:w-5/12 ">
              <div className=" rounded shadow-2xl p-7 sm:p-10 bghero">
                <h3 className=" texhero mb-4 text-xl font-semibold sm:text-center sm:mb-6 sm:text-2xl">
                  Tạo chiến dịch
                </h3>
                <form onSubmit={createNewCampaign}>
                  <div className="mb-1 sm:mb-2">
                    <label
                      htmlFor="title"
                      className="inline-block mb-1 font-medium"
                    >
                      Tiêu đề chiến dịch
                    </label>
                    <input
                      value={campaign.title}
                      onChange={(e) => setCampaign({ ...campaign, title: e.target.value })}
                      placeholder="Title"
                      required
                      type="text"
                      className="texthero flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border-none shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                      id="title"
                      name="title"
                    />
                  </div>
                  <div className="mb-1 sm:mb-2">
                    <label
                      htmlFor="description"
                      className="inline-block mb-1 font-medium"
                    >
                      Mô tả chiến dịch
                    </label>
                    <input
                      value={campaign.description}
                      onChange={(e) => setCampaign({ ...campaign, description: e.target.value })}
                      placeholder="Description"
                      required
                      type="text"
                      className="texthero flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border-none shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                      id="description"
                      name="description"
                    />
                  </div>
                  <div className="mb-1 sm:mb-2">
                    <label
                      htmlFor="amount"
                      className="inline-block mb-1 font-medium"
                    >
                      Số tiền cần huy động (ETH)
                    </label>
                    <input
                      value={campaign.amount}
                      onChange={(e) => setCampaign({ ...campaign, amount: e.target.value })}
                      placeholder="Amount"
                      required
                      type="number"
                      className="texthero flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border-none  appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                      id="amount"
                      name="amount"
                    />
                  </div>
                  <div className="mb-1 sm:mb-2">
                    <label
                      htmlFor="deadline"
                      className="inline-block mb-1 font-medium"
                    >
                      Ngày kết thúc
                    </label>
                    <input
                      value={campaign.deadline}
                      onChange={(e) => setCampaign({ ...campaign, deadline: e.target.value })}
                      placeholder="Deadline"
                      required
                      type="date"
                      className="texthero flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white  border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                      id="deadline"
                      name="deadline"
                    />
                  </div>
                  <div className="mt-4 mb-2 sm:mb-4 btnhero rounded-3xl">
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded  hover:outline-none newColor"
                    >
                      Tạo chiến dịch huy động vốn
                    </button>
                  </div>
                  {error && <p className="text-red-500 text-xs mt-2">{error}</p>}
                  <p className="text-xs text-gray-600 sm:text-sm">
                    {" "}
                    Hãy tạo chiến dịch của bạn
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

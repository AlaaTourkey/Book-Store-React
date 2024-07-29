// import React from 'react'
// import Style from './Card.module.css'
// import { useParams } from 'react-router-dom'
// import axios from 'axios';
// import { useQuery } from 'react-query';

// function Card() {

//   let { id } = useParams()
//   console.log(id);

//   function getCardDetails(id) {
//     return axios.get(`https://www.googleapis.com/books/v1/volumes/${id}`)
//   }
//   let { data } = useQuery('getCardDetails', () => getCardDetails(id));
//   console.log(data?.data);
//   return (
//     <>
//       <div className="container w-4/5 m-auto ">
//         <div class="grid grid-cols-3 gap-3">
//           <div className='bg-red-800'>01</div>
//           <div className='col-span-2 p-5 bg-amber-800'>
//             <h1>{data?.data.volumeInfo.title}</h1>
//             <h5>{data?.data.volumeInfo.authors} </h5>
//             <p className='text-gray-400'>{data?.data.volumeInfo.description.split(" ").slice(0, 60).join(" ")}</p>
//             <br />
//             <table className="table-fixed  mt-6">
//               <tbody>
//                 <tr className="">
//                   <td className=" px-1 py-2">Publisher</td>
//                   <td className=" px-1 py-2">{data?.data?.volumeInfo.publisher}</td>
//                 </tr>
//                 <tr>
//                   <td className=" px-1 py-2">First Publish</td>
//                   <td className=" px-1 py-2">{data?.data?.volumeInfo.publishedDate}</td>
//                 </tr>
//                 <tr className="">
//                   <td className=" px-1 py-2">ISBN</td>
//                   <td className=" px-1 py-2">
//                     {data?.data?.volumeInfo.industryIdentifiers?.map((identifier) => (
//                       <span key={identifier.identifier} className="text-md">
//                         {identifier.identifier} &nbsp;
//                       </span>
//                     ))}
//                   </td>
//                 </tr>
//                 <tr>
//                   <td className=" px-1 py-2">Language</td>
//                   <td className=" px-1 py-2">{data?.data?.volumeInfo.language}</td>
//                 </tr>
//                 <tr className="">
//                   <td className=" px-1 py-2">Pages</td>
//                   <td className=" px-1 py-2">{data?.data?.volumeInfo.pageCount}</td>
//                 </tr>
//                 <tr>
//                   <td className=" px-1 py-2">Printed Pages</td>
//                   <td className=" px-1 py-2">{data?.data?.volumeInfo.printedPageCount}</td>
//                 </tr>
//                 <tr className="">
//                   <td className=" px-1 py-2">Categories</td>
//                   <td className=" px-1 py-2">{data?.data?.volumeInfo.categories}</td>
//                 </tr>
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>
//     </>
//   )
// }

// export default Card

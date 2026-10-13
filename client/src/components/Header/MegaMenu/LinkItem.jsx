// const LinkItem = ({ url, label }) => {
//   return (
//     <li className="list-none">
//       <a
//         href={url}
//         className="group inline-flex items-center py-1 text-sm font-normal text-slate-600 transition-all duration-200 hover:translate-x-1 hover:text-slate-950 focus-visible:outline-none focus-visible:text-slate-950 focus-visible:underline"
//       >
//         <span className="relative">
//           {label}
//           <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-slate-900 transition-all duration-200 group-hover:w-full" />
//         </span>
//       </a>
//     </li>
//   );
// };

// export default LinkItem;




const LinkItem = ({ url, label }) => {
  return (
    <a
      href={url}
      className="block rounded-md py-1 text-sm text-slate-600 transition-all duration-200 hover:translate-x-1 hover:text-slate-950"
    >
      {label}
    </a>
  );
};

export default LinkItem;

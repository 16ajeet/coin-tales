import React from "react";

const App = () => {
  return (
    <div className= " h-[120vh] w-full text-white flex justify-center items-center">

      <div className="h-5/6 w-5/6 ">

      <input
        className="p-2 w-[68%] bg-black text-slate-100 border border-slate-100 focus:outline-none focus-within:placeholder:text-transparent"
        placeholder=" Search By Name or Symbol "
      ></input>

      <button type="button" className="mx-3 px-3 py-2 border border-slate-100">
        Sort By Mkt Cap
      </button>

      <button type="button" className="mx-2 px-3 py-2 border border-slate-100">
        Sort by Percentage
      </button>

      <table className="w-full text-end mt-5 mb-10">
        <tr className=" border-b-2">
          <td className="py-5">Bitcoin</td>
          <td >BTC</td>
          <td>$20023</td>
          <td>$28,534,462,145</td>
          <td>3.79%</td>
          <td>MKt Cap : $382,801,405,357</td>
        </tr>

        <tr className="border-b-2">
          <td className="py-5">Bitcoin</td>
          <td>BTC</td>
          <td>$20023</td>
          <td>$28,534,462,145</td>
          <td>3.79%</td>
          <td>MKt Cap : $382,801,405,357</td>
        </tr>


      </table>
    </div>

      </div>

  );
};

export default App;

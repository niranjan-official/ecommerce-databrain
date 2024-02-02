import React, { useEffect, useState } from "react";
import Body from "./Body";
import { products } from "../../data";
import {
    Sheet,
    SheetContent,
    SheetTrigger,
  } from "../../components/ui/sheet";
  

const Layout = () => {
  const [search, setSearch] = useState("");
  const [productList, setProductList] = useState(products);

  useEffect(() => {
    handleSearch();
  }, [search]);

  const handleSearch = () => {
    console.log(search);
    if (search != "") {
      const filtered = products.filter((product) =>
        product.name.toLowerCase().includes(search.toLowerCase())
      );
      console.log(filtered);
      setProductList(filtered);
    } else {
      setProductList(products);
    }
  };

  return (
    <div className="w-full sm:max-w-2xl h-screen flex flex-col">
      <div className="flex flex-col">
        <div className="w-full h-max p-4 py-5 border-b-2 flex justify-between items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12"
            />
          </svg>

          <h1 className="text-3xl font-semibold">ProducList</h1>
          <Sheet>
            <SheetTrigger>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-right"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 0 1-.659 1.591l-5.432 5.432a2.25 2.25 0 0 0-.659 1.591v2.927a2.25 2.25 0 0 1-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 0 0-.659-1.591L3.659 7.409A2.25 2.25 0 0 1 3 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0 1 12 3Z"
                />
              </svg>
            </SheetTrigger>
            <SheetContent className={'bg-white'}></SheetContent>
          </Sheet>
        </div>
        <div className="w-full flex flex-col p-4">
          <div className="flex items-center h-12 bg-white p-2 text-gray-500 shadow-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-full w-auto"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
            <span className="text-xl pb-1 px-2">|</span>
            <input
              type="text"
              placeholder="Search Your Product"
              className="w-full h-full text-xl focus:outline-none focus:ring-0"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>
      </div>
      <div className="w-full h-screen flex flex-col items-center px-4 gap-4 overflow-scroll">
        <Body productList={productList} />
      </div>
    </div>
  );
};

export default Layout;

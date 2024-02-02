import { Button } from "../../components/ui/button";
import React from "react";
import { SheetClose } from "../../components/ui/sheet";
import { Separator } from "../../components/ui/separator";

const FilterBar = ({ handleSort }) => {
  return (
    <>
      <h1 className="text-3xl mb-4 font-semibold">Filter</h1>
      <Separator />
      <div className="flex flex-col p-4 pl-0 gap-4">
        <span className="">Sort by:</span>

        <SheetClose asChild>
          <Button
            className={"text-sm w-32 "}
            variant={"outline"}
            onClick={() => handleSort(1)}
          >
            Price: Low to High
          </Button>
        </SheetClose>
        <SheetClose asChild>
          <Button
            className={"text-sm w-32 "}
            variant={"outline"}
            onClick={() => handleSort(2)}
          >
            Price: High to Low
          </Button>
        </SheetClose>
        <SheetClose asChild>
          <Button
            className={"text-sm w-32 "}
            variant={"outline"}
            onClick={() => handleSort(3)}
          >
            Alphabetic Order
          </Button>
        </SheetClose>
      </div>
    </>
  );
};

export default FilterBar;

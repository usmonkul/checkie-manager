import Head from "next/head";
import { ButtonPrimary, PrimaryHeader } from "@/utils/utils";
import { BiSearchAlt } from "react-icons/bi";
import { Filter } from "@/components";
import { MdDeleteOutline, MdOutlineModeEdit } from "react-icons/md";
import { useState } from "react";
import { RegisterTarget } from "@/components";
import { TargetDataProps } from "../../types/types";
import { v4 as uuid_v4 } from "uuid";
const Target = () => {
  const [close, setClose] = useState(false);
  const toggleHandler = () => {
    setClose((prev) => !prev);
  };
  const [targetData, setTargetData] = useState(TargetData);
  const handleDelete = (dataId: string) => {
    setTargetData((current: TargetDataProps[]) =>
      current.filter((card: TargetDataProps) => card.id != dataId)
    );
  };
  return (
    <div className="text-black">
      <Head>
        <title>Inspection target</title>
      </Head>
      <div className="flex flex-col py-5 px-5 space-y-4">
        <RegisterTarget close={close} toggleHandler={toggleHandler} />
        <div className="flex items-center justify-between ">
          <PrimaryHeader title="Inspection Target" />
          <div onClick={toggleHandler}>
            <ButtonPrimary title="Register Target" />
          </div>
        </div>
        <Filter />
        <div className="flex flex-col border-l-8 border-dark_blue shadow-lg rounded-md">
          <div className="bg-primary_white  px-4 py-2  flex items-center justify-between ">
            <h4 className="font-medium text-lg">Target List</h4>
            <div className="flex items-center space-x-3">
              <input
                type="search"
                name="search"
                id="search"
                placeholder="Search inspection target.."
                className="flex items-center lg:w-[350px] rounded-md px-4 border outline-none text-black text-sm h-[33px] focus:outline focus:outline-green-300"
              />
              <div className="border border-transparent hover:border-light_blue hover:bg-gray-200/80 p-[3px] rounded-md">
                <BiSearchAlt className="text-2xl cursor-pointer" />
              </div>
            </div>
          </div>
          <div className=" bg-gray-100/40 px-4 py-1 flex items-center justify-between">
            <span className="text-lg font-medium min-w-[30px]">ID</span>
            <span className="text-lg font-medium min-w-[150px]">Facility</span>
            <span className="text-lg font-medium min-w-[150px]">
              Registered Date
            </span>
            <span className="text-lg font-medium min-w-[150px]">
              Modified Date
            </span>
            <div className="flex items-center space-x-4 justify-center min-w-[100px]">
              <span className="text-lg font-medium">Edit</span>
              <span className="text-lg font-medium">Delete</span>
            </div>
          </div>
        </div>
        {/* Target Items */}
        <div className="flex flex-col space-y-1">
          {targetData.map((item, index) => {
            return (
              <div
                key={item.id}
                className="bg-primary_white  px-4 py-3  flex items-center justify-between border-l-8 border-transparent  shadow-lg rounded-md"
              >
                <span className="text-lg font-medium min-w-[30px]">
                  {index + 1}
                </span>
                <span className="text-lg min-w-[150px]">{item.facility}</span>
                <span className="text-lg min-w-[150px]">{item.create_dt}</span>
                <span className="text-lg min-w-[150px]">{item.update_dt}</span>
                <div className="flex items-center space-x-7 text-2xl min-w-[100px]">
                  <MdOutlineModeEdit className="text-dark_blue hover:text-lightest_blue" />
                  <MdDeleteOutline
                    onClick={() => handleDelete(item.id)}
                    className="text-dark_blue hover:text-red-500"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Target;

export const TargetData = [
  {
    id: uuid_v4(),
    facility: "Fite Station",
    create_dt: "2011.03.09",
    update_dt: "2011.03.10",
  },
  {
    id: uuid_v4(),
    facility: "Office",
    create_dt: "2011.03.09",
    update_dt: "2011.03.10",
  },
  {
    id: uuid_v4(),
    facility: "Plane Pruduction",
    create_dt: "2011.03.09",
    update_dt: "2011.03.10",
  },
  {
    id: uuid_v4(),
    facility: "Fite Station",
    create_dt: "2011.03.09",
    update_dt: "2011.03.10",
  },
];

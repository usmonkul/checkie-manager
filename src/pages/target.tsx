import Head from "next/head";
import { ButtonPrimary, PrimaryHeader } from "@/utils/utils";
import { BiSearchAlt } from "react-icons/bi";
import { MdDeleteOutline, MdOutlineModeEdit } from "react-icons/md";
import { useState } from "react";
import { RegisterTarget, Filter } from "@/components";
// import { TargetDataProps } from "../../types/types";
// import { v4 as uuid_v4 } from "uuid";
import { API_REQUEST } from "@/services/api.service";
import { TargetProps } from "../../types/types";
import { GetServerSideProps } from "next";
const Target = ({ target }: { target: TargetProps[] }) => {
  const [close, setClose] = useState(false);
  const toggleHandler = () => {
    setClose((prev) => !prev);
  };
  const [targetData, setTargetData] = useState(target);
  const handleDelete = (dataId: number) => {
    setTargetData((current: TargetProps[]) =>
      current.filter((card: TargetProps) => card.idx !== dataId)
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
            <h4 className="font-medium text-lg">
              Target List:{" "}
              <span className="ml-3 text-light_blue">{target.length}</span>
            </h4>
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
            <span className="text-lg font-medium min-w-[150px]">Target</span>
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
                key={item.idx}
                className="bg-primary_white  px-4 py-3  flex items-center justify-between border-l-8 border-transparent  shadow-lg rounded-md hover:scale-100"
              >
                <span className="text-lg font-medium min-w-[30px]">
                  {index + 1}
                </span>
                <span className="text-lg min-w-[150px]">
                  {item.check_group}
                </span>
                <span className="text-lg min-w-[150px]">{item.create_dt}</span>
                <span className="text-lg min-w-[150px]">{item.update_dt}</span>
                <div className="flex items-center space-x-7 text-2xl min-w-[100px]">
                  <MdOutlineModeEdit className="text-dark_blue hover:text-lightest_blue" />
                  <MdDeleteOutline
                    onClick={() => handleDelete(item.idx)}
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

interface TargetPageProps {
  target: TargetProps[];
}
export const getServerSideProps: GetServerSideProps<
  TargetPageProps
> = async () => {
  try {
    const response = await fetch(API_REQUEST.target);
    if (!response.ok) {
      throw new Error("Failed to fetch target data");
    }
    const target = await response.json();
    return {
      props: {
        target,
      },
    };
  } catch (error) {
    console.error("Failed to fecht target data:", error);
    return {
      props: {
        target: [],
      },
    };
  }
};

// Data for exerperiment
// export const TargetData = [
//   {
//     id: uuid_v4(),
//     facility: "Fite Station",
//     create_dt: "2011.03.09",
//     update_dt: "2011.03.10",
//   },
//   {
//     id: uuid_v4(),
//     facility: "Office",
//     create_dt: "2011.03.09",
//     update_dt: "2011.03.10",
//   },
//   {
//     id: uuid_v4(),
//     facility: "Plane Pruduction",
//     create_dt: "2011.03.09",
//     update_dt: "2011.03.10",
//   },
//   {
//     id: uuid_v4(),
//     facility: "Fite Station",
//     create_dt: "2011.03.09",
//     update_dt: "2011.03.10",
//   },
// ];

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";

function Four() {
  const nav = useNavigate();
  const [pageIndex, setPageIndex] = useState(0);

  useEffect(() => {
    if (pageIndex === 0) {
      nav("/four");
    } else if (pageIndex === 1) {
      nav("/four/eight");
    }
  }, [pageIndex]);
  return (
    <>
      <div className=" bg-fuchsia-700 w-full h-full">
        <div className=" flex flex-row w-full">
          <span
            onClick={() => {
              setPageIndex(0);
            }}
            className="  bg-green-500"
          >
            跳转 seven
          </span>
          <span
            onClick={() => {
              setPageIndex(1);
            }}
            className="  bg-green-500 ms-32"
          >
            跳转 eight
          </span>
        </div>

        <div className=" w-full h-full">
          <Outlet />
        </div>
      </div>
    </>
  );
}
export default Four;

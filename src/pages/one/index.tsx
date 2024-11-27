import { useEffect, useState } from "react";
import { useNavigate, useOutlet } from "react-router-dom";

function One() {
  const leth = useOutlet();
  const nav = useNavigate();
  const [pageIndex, setPageIndex] = useState(0);

  useEffect(() => {
    if (pageIndex === 0) {
      nav("/");
    } else if (pageIndex === 1) {
      nav("/two");
    } else if (pageIndex === 2) {
      nav("/three");
    } else if (pageIndex === 3) {
      nav("/four");
    }
  }, [pageIndex]);
  return (
    <>
      <div className=" flex flex-col bg-red-500 w-900 h-823">
        <div className=" flex flex-row w-full">
          <span
            onClick={() => {
              setPageIndex(0);
            }}
            className="  bg-green-500"
          >
            跳转 One
          </span>
          <span
            onClick={() => {
              setPageIndex(1);
            }}
            className="  bg-green-500 ms-32"
          >
            跳转 Two
          </span>
          <span
            onClick={() => {
              setPageIndex(2);
            }}
            className="bg-green-500 ms-32"
          >
            跳转 Three
          </span>
          <span
            onClick={() => {
              setPageIndex(3);
            }}
            className="bg-green-500 ms-32"
          >
            跳转 Four
          </span>
        </div>
        <div className=" w-full h-full">{leth}</div>
      </div>
    </>
  );
}
export default One;

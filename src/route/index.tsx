/**********desktop************/
import Two from "@/pages/two";
import Three from "@/pages/three";
import Four from "@/pages/four";
import Five from "@/pages/five";
import Six from "@/pages/six";
import Home from "@/pages/home";
import Seven from "@/pages/seven";
import Eight from "@/pages/eight";
import One from "@/pages/one";
/**********desktop************/

export const desktopRoutes = [
  {
    path: "/",
    element: <One />,
    children: [
      {
        index: true, // 索引路由
        element: <Home />,
      },
      {
        path: "two",
        element: <Two />,
      },
      {
        path: "three",
        element: <Three />,
      },
      {
        path: "four",
        element: <Four />,
        children: [
          {
            index: true, // 索引路由
            element: <Seven />,
          },
          {
            path: "eight",
            element: <Eight />,
          },
        ],
      },
    ],
  },
  {
    path: "/five",
    element: <Five />,
  },
  {
    path: "/six",
    element: <Six />,
  },
];

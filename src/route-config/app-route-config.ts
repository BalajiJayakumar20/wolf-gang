import ChatPage from "../components/Chat/ChatPage";
import HomePage from "../components/Home/HomePage";
import ReelsPage from "../components/Reels/ReelsPage";
import SavedPage from "../components/Saved/SavedPage";

type RouteType = {
  path: String;
  component: any;
  index: boolean;
};

export const routes: RouteType[] = [
  {
    path: "/",
    component: HomePage,
    index: true,
  },
  {
    path: "/reels",
    component: ReelsPage,
    index: false,
  },
  {
    path: "/saved",
    component: SavedPage,
    index: false,
  },
  {
    path: "/chat",
    component: ChatPage,
    index: false,
  },
];

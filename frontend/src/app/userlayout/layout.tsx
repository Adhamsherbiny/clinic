import Footers from "../footer";
import Header from "../header";
import Navigation from "./navigation/page";
import "./userlayout.css"

export default function Userlayout({children,}: {children: React.ReactNode;}) {
  return (
    <div className="user-layout">
        <Navigation/>
        <Header/>
        {children}
        <Footers/>
    </div>
  );
}

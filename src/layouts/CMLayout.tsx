import { Outlet } from "react-router-dom";
import CMSidebar from "../../src/components/layout/CMSidebar";
import CMHeader from "../../src/components/layout/CMHeader";
import CMFooter from "../../src/components/layout/CMFooter";
import "./CMLayout.css";

export default function CMLayout() {
    return (
        <div className="cm-layout">
            <CMSidebar />

            <div className="cm-workspace">
                <CMHeader />

                <main className="cm-main-content">
                    <Outlet />
                </main>

                <CMFooter />
            </div>
        </div>
    );
}
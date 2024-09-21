import { Sidebar } from "../../admin/Sidebar";
import { Container } from "../Design";

export const DashboardLayout = ({ children }) => {
  const role = "admin";

  return (
    <>
      <div className="mt-32">
        <Container className="flex">
          <div className={`${role === "admin" ? "h-[110vh]" : role === "seller" ? "h-[80vh]" : "h-[80vh]"} w-[25%] shadow-s1 py-8 p-5 rounded-lg`}>
            <Sidebar role={role} />
          </div>
          <div className="w-[75%] px-5 ml-10 rounded-lg">{children}</div>
        </Container>
      </div>
    </>
  );
};

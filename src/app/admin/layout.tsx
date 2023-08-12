

import { NextPage } from "next";
import dynamic from "next/dynamic";
const AdminApp = dynamic(() => import("../../components/AdminApp/AdminApp"), { ssr: false });

const AdminPage: NextPage = () => <AdminApp />;

export default AdminPage;

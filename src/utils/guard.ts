import { redirect } from 'next/navigation';
import { getSession } from "./session";

export const protect = async () => {
    const token = await getSession();
    if (!token) {
        redirect("/login");
    }
}


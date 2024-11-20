import { getSession } from "next-auth/react";
import { AuthOptions } from "next-auth";

export const useAuthAPI = () => {
    async function getGetServerSession(authOptions: AuthOptions) {
        await new Promise((resolve) => {
            setTimeout(resolve, 1000);
        });

        const session = await getSession(); // Use getSession instead of getServerSession
        return session;
    }

    return {
        getGetServerSession,
    };
};

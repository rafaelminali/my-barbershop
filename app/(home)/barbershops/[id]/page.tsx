
import Footer from "@/app/_components/footer";
import { Button } from "@/app/_components/ui/button";
import { db } from "@/app/_lib/prisma";
import { ChevronLeftIcon, MapPinIcon, MenuIcon, StarIcon } from "lucide-react";
import Image from "next/image";
import BarbershoopInfo from "../_components/barbershop-info";

interface BarbershopDetailsPageProps {
    params: {
        id?: string;
    }
}

const barbershopDetailsPage = async ({ params }: BarbershopDetailsPageProps) => {
    if (!params.id) {
        return null
    }

    const barbershop = await db.barbershop.findUnique({
        where: {
            id: params.id,
        },
    });
    if (!barbershop) {
        return null;
    }
    return (
        <div>
            <BarbershoopInfo barbershop={barbershop} />
            <Footer />
        </div>

    );
}

export default barbershopDetailsPage;
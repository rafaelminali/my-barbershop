
import Footer from "@/app/_components/footer";
import { db } from "@/app/_lib/prisma";
import BarbershoopInfo from "./_components/barbershop-info";
import ServiceItem from "./_components/service-item";

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
        include: {
            services: true,
        }
    });
    if (!barbershop) {
        return null;
    }
    return (
        <div>
            <BarbershoopInfo barbershop={barbershop} />

            <div className="flex flex-col px-4 py-6 gap-4">
                {barbershop.services.map((service) => (
                    <ServiceItem key={service.id} service={service} />
                ))}
            </div>

            <Footer />
        </div>

    );
}

export default barbershopDetailsPage;
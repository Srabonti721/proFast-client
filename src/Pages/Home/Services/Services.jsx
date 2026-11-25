import {
    FaArrowRotateLeft,
    FaBoxesStacked,
    FaBuilding,
    FaMapLocationDot,
    FaMoneyBillWave,
    FaTruckFast,
} from "react-icons/fa6";

const services = [
    {
        id: 1,
        title: "Express & Standard Delivery",
        description:
            "We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off.",
        icon: FaTruckFast,
    },
    {
        id: 2,
        title: "Nationwide Delivery",
        description:
            "We deliver parcels nationwide with home delivery in every district, ensuring your products reach customers within 48–72 hours.",
        icon: FaMapLocationDot,
    },
    {
        id: 3,
        title: "Fulfillment Solution",
        description:
            "We also offer customized service with inventory management support, online order processing, packaging, and after sales support.",
        icon: FaBoxesStacked,
    },
    {
        id: 4,
        title: "Cash on Home Delivery",
        description:
            "100% cash on delivery anywhere in Bangladesh with guaranteed safety of your product.",
        icon: FaMoneyBillWave,
    },
    {
        id: 5,
        title: "Corporate Service / Contract In Logistics",
        description:
            "Customized corporate services which includes warehouse and inventory management support.",
        icon: FaBuilding,
    },
    {
        id: 6,
        title: "Parcel Return",
        description:
            "Through our reverse logistics facility we allow end customers to return or exchange their products with online business merchants.",
        icon: FaArrowRotateLeft,
    },
];

const Services = () => {
    return (
        <section className="py-16 md:py-24 bg-[#03373D] rounded-3xl">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Heading */}
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <p className=" text-white font-extrabold text-2xl mb-3">
                        Our Services
                    </p>

                    <p className="text-white">
                        Enjoy fast, reliable parcel delivery with real-time
                        tracking and zero hassle. From personal packages to
                        business shipments — we deliver on time, every time.
                    </p>
                </div>

                {/* Services Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service) => {
                        const Icon = service.icon;

                        return (
                            <div
                                key={service.id}
                                className="card bg-base-100 border border-base-200 shadow-sm
  hover:bg-[#CAEB66] hover:text-primary-content
  hover:shadow-xl hover:-translate-y-2
  transition-all duration-300 group "
                            >
                                <div className="card-body p-6 md:p-8 items-center text-center  hover:text-black">
                                    {/* Service Icon */}
                                    <div
                                        className="w-16 h-16 rounded-full bg-primary/10 text-primary
    flex items-center justify-center mb-3
    group-hover:bg-base-100 group-hover:text-primary
    transition-all duration-300"
                                    >
                                        <Icon className="text-3xl" />
                                    </div>

                                    {/* Service Title */}
                                    <h3 className="card-title text-xl font-bold justify-center">
                                        {service.title}
                                    </h3>

                                    {/* Service Description */}
                                    <p
                                        className="text-base-content/70 leading-relaxed text-sm
    group-hover:text-primary-content"
                                    >
                                        {service.description}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Services;

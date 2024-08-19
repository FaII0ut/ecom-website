import React from "react";

interface ServicesProps {

}

const Services: React.FC<ServicesProps> = ({ }) => {
    return (
        <div className="h-[25vh] mx-auto container my-16 bg-gray-100 flex">
            <div className="flex-1 border border-gray-300 flex flex-col justify-center items-center p-4">
                <img src="https://chawkbazar.redq.io/assets/images/feature/saving.svg" alt="Image 1" className="mb-2" />
                <strong className="mb-2">Guaranteed Savings</strong>
                <p className="text-center text-sm">If you don’t make your membership fee in savings, we’ll refund the difference</p>
            </div>

            <div className="flex-1 border border-gray-300 flex flex-col justify-center items-center p-4">
                <img src="https://chawkbazar.redq.io/assets/images/feature/risk-free.svg" alt="Image 1" className="mb-2" />
                <strong className="mb-2">Try it risk-free</strong>
                <p className="text-center text-sm">If you don’t make your membership fee in savings, we’ll refund the difference</p>
            </div>

            <div className="flex-1 border border-gray-300 flex flex-col justify-center items-center p-4">
                <img src="https://chawkbazar.redq.io/assets/images/feature/delivery.svg" alt="Image 1" className="mb-2" />
                <strong className="mb-2">Super Fast Delivery</strong>
                <p className="text-center text-sm">If you don’t make your membership fee in savings, we’ll refund the difference</p>
            </div>

            <div className="flex-1 border border-gray-300 flex flex-col justify-center items-center p-4">
                <img src="https://chawkbazar.redq.io/assets/images/feature/product.svg" alt="Image 1" className="mb-2" />
                <strong className="mb-2">1000+ products priced at cost</strong>
                <p className="text-center text-sm">If you don’t make your membership fee in savings, we’ll refund the difference</p>
            </div>
        </div>

    );
};
export default Services;

import Image from "next/image";
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoStorefrontOutline } from "react-icons/io5";
import { CiDeliveryTruck } from "react-icons/ci";

type CardProps = {
  title: string;
  inventory: string;
  assets: string;
  type: "stock" | "shop" | "vehicle";
};

export default function Card({ title, inventory, assets, type }: CardProps) {
  // Define gradients and shadows for different card types
  const typeSettings = {
    stock: {
      icon: <IoStorefrontOutline size={40} />,
      gradient: "from-blue-600 to-blue-400 shadow-blue-500/40",
    },
    shop: {
      icon: <MdOutlineShoppingCart size={40} />,
      gradient: "from-pink-600 to-pink-400 shadow-pink-500/40",
    },
    vehicle: {
      icon: <CiDeliveryTruck size={40} />,
      gradient: "from-green-600 to-green-400 shadow-green-500/40",
    },
  };

  // Get the correct gradient and shadow based on the type prop
  const { icon, gradient } = typeSettings[type];

  return (
    <div className="relative flex flex-col rounded-xl bg-white text-gray-700 shadow-md">
      <div className={`flex items-center pt-4 px-4`}>
        <div
          className={`rounded-xl overflow-hidden bg-gradient-to-tr ${gradient} text-white shadow-lg grid place-items-center h-16 w-16`}
        >
          {icon}
        </div>
        <div className="ml-4">
          <p className="text-lg leading-normal text-blue-gray-600">{title}</p>
        </div>
      </div>
      <div className="p-4">
        <h4 className="text-2xl font-semibold leading-snug text-blue-gray-900">
          {inventory}
        </h4>
        <p className="text-sm leading-normal text-blue-gray-600">Inventory</p>
      </div>
      <div className="border-t border-blue-gray-50 p-4">
        <h4 className="text-2xl font-semibold leading-snug text-blue-gray-900">
          {assets}
        </h4>
        <p className="text-sm leading-normal text-blue-gray-600">Assets</p>
      </div>
    </div>
  );
}

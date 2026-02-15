// import { services } from "@/data/services";
import { services } from "@/components/data/services";
import Link from "next/link";

export default function ServiceDetails({ params }) {
  const service = services.find(s => s.id === params.id);

  if (!service) return <h1>Service Not Found</h1>;

  return (
    <div style={{padding:20}}>
      <h1>{service.name}</h1>
      <p>{service.description}</p>
      <p>Price: {service.price} BDT/hour</p>

      <Link href={`/booking/${service.id}`}>
        <button>Book Service</button>
      </Link>
    </div>
  );
}


// import { services } from "@/utils/services";
// import Head from "next/head";
// import Link from "next/link";

// export default function ServiceDetails({ params }) {
//   const service = services.find((s) => s._id === params.id);

//   if (!service) {
//     return <p className="text-center mt-10">Service Not Found</p>;
//   }

//   return (
//     <>
//       <Head>
//         <title>{service.title} | Care.xyz</title>
//         <meta name="description" content={service.description} />
//       </Head>

//       <div className="max-w-4xl mx-auto px-4 py-10">
//         <img
//           src={service.image}
//           alt={service.title}
//           className="w-full h-64 object-cover rounded"
//         />
//         <h1 className="text-3xl font-bold mt-6">{service.title}</h1>
//         <p className="text-gray-600 mt-2">{service.description}</p>
//         <p className="font-bold mt-4 text-xl">৳ {service.price} / day</p>

//         <Link
//           href={`/booking/${service._id}`}
//           className="inline-block mt-6 bg-black text-white px-6 py-3 rounded"
//         >
//           Book This Service
//         </Link>
//       </div>
//     </>
//   );
// }

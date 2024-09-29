import Layout from "@/app/components/ui/layout";
import Image from "next/image";
import Link from "next/link";

const Contact = () => {
  return (
    <Layout>
      <div className="text-neutral-400 container max-w-screen-xl mx-auto">
        <h1 className="text-xl md:text-2xl lg:text-3xl font-bold">
          Contuct US
        </h1>
        <p className="md:text-lg lg:text-xl pt-5">
          We’d love to hear from you! Whether you have a question about our
          services, need assistance, or just want to give feedback, we’re here
          to help.
        </p>

        <h2 className="text-lg md:xl lg:text-2xl font-semibold py-5">
          Get in Touch
        </h2>
        <p className="md:text-lg lg:text-xl">
          Email: <span>gideonsowah9@gmail.com</span>
        </p>
        <p className="md:text-lg lg:text-xl">
          For general enquiry: <span>gideonsowah9@gmail.com</span>
        </p>
        <p className="md:text-lg lg:text-xl">
          For support: <span>gideonsowah9@gmail.com</span>
        </p>

        <h3 className="text-lg md:xl lg:text-2xl font-semibold py-5">Phone</h3>
        <p>
          Call us at: <span>(+233) 203-907-623</span>
        </p>
        <p>
          Whatsapp: <span>(+233) 203-907-623</span>
        </p>
        <p>
          Our phone lines are open from 12PM to 5 PM UTC, Monday to Friday and
          8Am to 6PM on Saturday.
        </p>

        <h3 className="text-lg md:xl lg:text-2xl font-semibold py-5">
          Address
        </h3>
        <p>Country: Ghana</p>
        <p>City: Accra</p>

        <h4 className="text-xl font-semibold py-5">Social Media</h4>
        <p>Follow us on social media for the latest updates and news:</p>
        <p className="text-lg "> Twitter | Instagram | LinkedIn</p>

        <div className="">
          <Image
            src={"/IMG-20231214-WA0002.jpg"}
            alt="photo"
            width={200}
            height={200}
            className=" h-fit pt-5"
          />
          <p className="font-semibold pt-5">
            Gideon Sowah ( Founder/CEO ) of Mobile
          </p>
          <p>
            For more info, visit {""}
            <span>
              <Link
                href={"/blog/about"}
                className="text-blue-600 hover:underline"
              >
                Link
              </Link>
            </span>{" "}
            {""}
            to learn more about Mobile.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;

const WhoWeAre = () => {
  return (
    <div className="flex flex-wrap justify-center items-center py-10 container">
      <div className="left-section px-20 md:w-1/2">
        <h1 className="mb-3 font-semibold text-3xl md:text-4xl">Who We Are</h1>
        <div className="bg-darkBlue rounded-sm w-20 h-3" />
        <p className="py-5">
          At Outsource Global, we believe in building partnerships with
          companies worldwide to positively impact the global business services
          and foster exponential growth. This growth can include higher-value,
          multi-processing, specialized services and business functions such as
          Customer service, IT support, software development-as-a-service, legal
          services, Artificial Intelligence, medical support services,
          accounting-as-a-service and data management.
        </p>
        <p className="py-5">
          By first understanding your business and the functions within the
          organization, we find ways to reduce operational costs and increase
          performance with consistent, quality and reliable service delivery.
        </p>
        <p className="py-5">
          Our services are tailored to perfectly suit your business needs and
          preferences, with a focus on service quality, low-cost and scalable
          solutions. We help our clients become operationally efficient and
          competitive.
        </p>
      </div>
      <div className="right-section gap-x-10 grid grid-cols-2 md:w-1/2">
        <div className="flex flex-col gap-5 py-10">
          <p className="font-semibold text-3xl text-darkBlue">50%</p>
          <small className="">Female Employees</small>
        </div>
        <div className="flex flex-col gap-5 py-10">
          <p className="font-semibold text-3xl text-darkBlue">90%</p>
          <small className="">University Graduates</small>
        </div>
        <div className="flex flex-col gap-5 py-10">
          <p className="font-semibold text-3xl text-darkBlue">100%</p>
          <small className="">Technical Professionals</small>
        </div>
        <div className="flex flex-col gap-5 py-10">
          <p className="font-semibold text-3xl text-darkBlue">1000+</p>
          <small className="">Employees</small>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
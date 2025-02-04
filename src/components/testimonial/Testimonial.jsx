/* eslint-disable react/no-unescaped-entities */

const Testimonial = () => {
  return (
    <div>
      <section className="text-gray-600 body-font mb-10">
        {/* main  */}
        <div className="container px-5 py-10 mx-auto">
          {/* Heading  */}
          <h1 className=" text-center text-3xl font-bold text-black">
            Top Reviews
          </h1>
          {/* para  */}
          <h2 className=" text-center text-2xl font-semibold mb-10">
            What our <span className=" text-pink-500">customers</span> are
            saying
          </h2>

          <div className="flex flex-wrap -m-4">
            {/* Testimonial 1 */}
            <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
              <div className="h-full text-center">
                <img
                  alt="testimonial"
                  className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                  src="/src/components/pics/user1.png"
                />
                <p className="leading-relaxed">
                  "I recently purchased black Jacket, and I couldn't be happier
                  with my purchase! The quality is top-notch, and it exceeded my
                  expectations. Plus, the shipping was super fast. I highly
                  recommend it!"
                </p>
                <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4" />
                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">
                  Aaisha Sharma
                </h2>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
              <div className="h-full text-center">
                <img
                  alt="testimonial"
                  className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                  src="https://www.devknus.com/img/gawri.png"
                />
                <p className="leading-relaxed">
                  "I've been shopping on this website for quite some time now,
                  and it's become my go-to destination for all my online
                  purchases. The user interface is intuitive, making it easy to
                  find what I'm looking for. The checkout process is smooth, and
                  the shipping is always quick. I've never had any issues with
                  my orders, and the customer service team is responsive and
                  helpful. I highly recommend this website to anyone looking for
                  a hassle-free shopping experience."
                </p>
                <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4" />
                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">
                  Amisha Singh
                </h2>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="lg:w-1/3 lg:mb-0 p-4">
              <div className="h-full text-center">
                <img
                  alt="testimonial"
                  className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                  src="/src/components/pics/user2.png"
                />
                <p className="leading-relaxed">
                  "I bought a white shirt from this site, and I couldn't be
                  happier with my purchase. The fabric is of high quality, and
                  the fit is perfect. The color is exactly as shown in the
                  pictures, and I've received numerous compliments whenever I
                  wear it. I'll definitely be shopping here again!"
                </p>
                <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4" />
                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">
                  Ajay Dwivedi{" "}
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonial;

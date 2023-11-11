import React from 'react'

function ShopAll() {
  return (
    <div>
        <>
  {/* source: https://github.com/mfg888/Responsive-Tailwind-CSS-Grid/blob/main/index.html */}
  <div className="text-center p-10">
    <h1 className="font-bold text-4xl mb-4">Responsive Product card grid</h1>
    <h1 className="text-3xl">Tailwind CSS</h1>
  </div>
  {/* ✅ Grid Section - Starts Here 👇 */}
  <section
    id="Projects"
    className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5"
  >
    {/*   ✅ Product card 1 - Starts Here 👇 */}
    <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
      <a href="#">
        <img
          src="data:image/jpeg;base64,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"
          alt="Product"
          className="h-80 w-72 object-cover rounded-t-xl"
        />
        <div className="px-4 py-3 w-72">
          <span className="text-gray-400 mr-3 uppercase text-xs">Brand</span>
          <p className="text-lg font-bold text-black truncate block capitalize">
            Product Name
          </p>
          <div className="flex items-center">
            <p className="text-lg font-semibold text-black cursor-auto my-3">
              $149
            </p>
            <del>
              <p className="text-sm text-gray-600 cursor-auto ml-2">$199</p>
            </del>
            <div className="ml-auto">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={20}
                height={20}
                fill="currentColor"
                className="bi bi-bag-plus"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z"
                />
                <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
              </svg>
            </div>
          </div>
        </div>
      </a>
    </div>
    {/*   🛑 Product card 1 - Ends Here  */}
    {/*   ✅ Product card 2 - Starts Here 👇 */}
    <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
      <a href="#">
        <img
          src="https://rukminim2.flixcart.com/image/850/1000/kjvrdzk0/automotive-combo/f/f/q/ic-00001-niklace-original-imafzctdmhnspah8.jpeg?q=90"
          alt="Product"
          className="h-80 w-72 object-cover rounded-t-xl"
        />
        <div className="px-4 py-3 w-72">
          <span className="text-gray-400 mr-3 uppercase text-xs">Brand</span>
          <p className="text-lg font-bold text-black truncate block capitalize">
            Product Name
          </p>
          <div className="flex items-center">
            <p className="text-lg font-semibold text-black cursor-auto my-3">
              $149
            </p>
            <del>
              <p className="text-sm text-gray-600 cursor-auto ml-2">$199</p>
            </del>
            <div className="ml-auto">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={20}
                height={20}
                fill="currentColor"
                className="bi bi-bag-plus"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z"
                />
                <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
              </svg>
            </div>
          </div>
        </div>
      </a>
    </div>
    {/*   🛑 Product card 2- Ends Here  */}
    {/*   ✅ Product card 3 - Starts Here 👇 */}
    <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
      <a href="#">
        <img
          src="https://images.unsplash.com/photo-1651950537598-373e4358d320?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MjV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
          alt="Product"
          className="h-80 w-72 object-cover rounded-t-xl"
        />
        <div className="px-4 py-3 w-72">
          <span className="text-gray-400 mr-3 uppercase text-xs">Brand</span>
          <p className="text-lg font-bold text-black truncate block capitalize">
            Product Name
          </p>
          <div className="flex items-center">
            <p className="text-lg font-semibold text-black cursor-auto my-3">
              $149
            </p>
            <del>
              <p className="text-sm text-gray-600 cursor-auto ml-2">$199</p>
            </del>
            <div className="ml-auto">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={20}
                height={20}
                fill="currentColor"
                className="bi bi-bag-plus"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z"
                />
                <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
              </svg>
            </div>
          </div>
        </div>
      </a>
    </div>
    {/*   🛑 Product card 3 - Ends Here  */}
    {/*   ✅ Product card 4 - Starts Here 👇 */}
    <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
      <a href="#">
        <img
          src="https://images.unsplash.com/photo-1651950540805-b7c71869e689?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8Mjl8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
          alt="Product"
          className="h-80 w-72 object-cover rounded-t-xl"
        />
        <div className="px-4 py-3 w-72">
          <span className="text-gray-400 mr-3 uppercase text-xs">Brand</span>
          <p className="text-lg font-bold text-black truncate block capitalize">
            Product Name
          </p>
          <div className="flex items-center">
            <p className="text-lg font-semibold text-black cursor-auto my-3">
              $149
            </p>
            <del>
              <p className="text-sm text-gray-600 cursor-auto ml-2">$199</p>
            </del>
            <div className="ml-auto">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={20}
                height={20}
                fill="currentColor"
                className="bi bi-bag-plus"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z"
                />
                <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
              </svg>
            </div>
          </div>
        </div>
      </a>
    </div>
    {/*   🛑 Product card 4 - Ends Here  */}
    {/*   ✅ Product card 5 - Starts Here 👇 */}
    <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
      <a href="#">
        <img
          src="https://images.unsplash.com/photo-1649261191624-ca9f79ca3fc6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NDd8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
          alt="Product"
          className="h-80 w-72 object-cover rounded-t-xl"
        />
        <div className="px-4 py-3 w-72">
          <span className="text-gray-400 mr-3 uppercase text-xs">Brand</span>
          <p className="text-lg font-bold text-black truncate block capitalize">
            Product Name
          </p>
          <div className="flex items-center">
            <p className="text-lg font-semibold text-black cursor-auto my-3">
              $149
            </p>
            <del>
              <p className="text-sm text-gray-600 cursor-auto ml-2">$199</p>
            </del>
            <div className="ml-auto">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={20}
                height={20}
                fill="currentColor"
                className="bi bi-bag-plus"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z"
                />
                <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
              </svg>
            </div>
          </div>
        </div>
      </a>
    </div>
    {/*   🛑 Product card 5 - Ends Here  */}
    {/*   ✅ Product card 6 - Starts Here 👇 */}
    <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
      <a href="#">
        <img
          src="https://images.unsplash.com/photo-1649261191606-cb2496e97eee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
          alt="Product"
          className="h-80 w-72 object-cover rounded-t-xl"
        />
        <div className="px-4 py-3 w-72">
          <span className="text-gray-400 mr-3 uppercase text-xs">Brand</span>
          <p className="text-lg font-bold text-black truncate block capitalize">
            Product Name
          </p>
          <div className="flex items-center">
            <p className="text-lg font-semibold text-black cursor-auto my-3">
              $149
            </p>
            <del>
              <p className="text-sm text-gray-600 cursor-auto ml-2">$199</p>
            </del>
            <div className="ml-auto">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={20}
                height={20}
                fill="currentColor"
                className="bi bi-bag-plus"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z"
                />
                <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
              </svg>
            </div>
          </div>
        </div>
      </a>
    </div>
    {/*   🛑 Product card 6 - Ends Here  */}
  </section>
  {/* 🛑 Grid Section - Ends Here */}
  {/* credit */}
  <div className="text-center py-10 px-10">
    <h2 className="font-bold text-2xl md:text-4xl mb-4">
      Thanks to{" "}
      <a
        href="https://unsplash.com/@nixcreative"
        className="underline font-black"
      >
        Tyler Nix
      </a>{" "}
      for those AMAZING product images!
    </h2>
  </div>
  {/* Support Me 🙏🥰 */}
</>

    </div>
  )
}

export default ShopAll
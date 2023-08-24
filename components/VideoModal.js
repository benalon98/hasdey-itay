import React, { useEffect, useState } from 'react';

const VideoModal = ({ videoId }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
    document.body.classNameList.add('overflow-hidden'); // Add className to disable scrolling
  };

  const closeModal = () => {
    setModalOpen(false);
    document.body.classNameList.remove('overflow-hidden'); // Remove className to enable scrolling
  };

  useEffect(() => {
    
    return () => {
      document.body.classNameList.remove('overflow-hidden'); // Clean up on unmount
    };
  }, []);

  return (
    <div className="flex justify-center">

      <button          onClick={openModal}
 className="relative -z-1 inline-block text-lg group">
<span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
<span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
<span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
<span className="relative">        צפה בסרטון
</span>
</span>
<span className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
</button>
      {modalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-20 flex justify-center items-center">
          <div className="bg-transparent relative p-6 rounded shadow-lg">
            <button
              className="my-4 p-4 bg-gray-500 absolute -top-12 right-0  hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded"
              onClick={closeModal}
            >
              סגור
            </button>

  <iframe
    className="w-full h-full lg:h-[600px] lg:w-[1000px]"
    src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
    allowFullScreen
  ></iframe>

          </div>
        </div>
      )}
    </div>
  );
};

export default VideoModal;

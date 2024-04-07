import React from "react";

const Modal: React.FC<{
  children: React.ReactElement;
  open: boolean;
  onClose: () => void;
}> = ({ children, open, onClose }) => {
  return (
    <div
      onClick={onClose}
      className={`fixed inset-0 flex justify-center items-center transition-colors z-30 ${
        open ? "visible bg-black/70" : "invisible"
      }`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`bg-white rounded-xl shadow p-5 transition-all w-[83%] md:w-[35%] ${
          open ? "scale-100 opacity-100" : "opacity-0 scale-125"
        }`}
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;

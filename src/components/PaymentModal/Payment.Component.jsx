import React, { useState } from "react";
import { Button, Dialog, DialogPanel, DialogTitle } from "@headlessui/react";

const PaymentModal = ({ setIsOpen, isOpen, price }) => {
  const close = () => {
    setIsOpen(false);
  };

  const launchRazorPay = () => {};

  return (
    <>
      <Dialog
        open={isOpen}
        as="div"
        className="relative z-10 focus:outline-none"
        onClose={close}
      >
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel
              transition
              className="w-full max-w-md rounded-xl bg-white/5 p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
            >
              <DialogTitle
                as="h3"
                className="text-base/7 font-medium text-white"
              >
                Please make a Pament
              </DialogTitle>
              <p className="mt-2 text-sm/6 text-white/80">
                Hello please make the payment with the following steps
              </p>
              <div className="mt-4">
                <Button
                  className="inline-flex items-center gap-2 rounded-md bg-red-500 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-red-800 data-[focus]:outline-1 data-[focus]:outline-white data-[open]:bg-red-500"
                  onClick={launchRazorPay}
                >
                  Pay ${price}
                </Button>
                <Button
                  className=" ml-2 inline-flex items-center gap-2 rounded-md bg-red-500 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-red-800 data-[focus]:outline-1 data-[focus]:outline-white data-[open]:bg-red-500"
                  onClick={close}
                >
                  Cancel Payment
                </Button>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
};

export default PaymentModal;

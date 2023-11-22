"use client";

import { Button, Checkbox, Label, Modal, TextInput } from "flowbite-react";
import { useState } from "react";
import { BiChevronRight } from "react-icons/bi";
import { FaFacebookF } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { IoIosArrowBack } from "react-icons/io";

export default function FormLogin() {
  const [openModal, setOpenModal] = useState(true);
  const [step, setStep] = useState(0);

  const [email, setEmail] = useState("");

  function onCloseModal() {
    setOpenModal(false);
    setEmail("");
  }

  return (
    <>
      <Button
        className="flex items-center bg-white px-4 rounded-full py-1 text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium  text-center"
        onClick={() => setOpenModal(true)}
      >
        <span className="mr-1">Sing in</span>
        <BiChevronRight />
      </Button>
      <Modal show={openModal} size="3xl" onClose={onCloseModal} popup>
        <div className="">
          <Modal.Header />
          <Modal.Body className="flex justify-between">
            {step === 0 && (
              <div className="space-y-6 w-3/5 mr-10">
                <div>
                  <h3 className="text-2xl font-medium text-gray-900 dark:text-white">
                    Xin chào,
                  </h3>
                  <p className="m-0">Đăng nhập hoặc Tạo tài khoản</p>
                </div>

                <div>
                  <div className="relative z-0 w-full mb-6 group">
                    <input
                      id="email"
                      value={email}
                      type="email"
                      name="floating_email"
                      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
                      required
                      onChange={(event) => setEmail(event.target.value)}
                    />
                    <label
                      htmlFor="floating_email"
                      className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Số điện thoại
                    </label>
                  </div>
                </div>
                <Button className="w-full">Tiếp tục</Button>
                <div className="text-center text-blue-400">
                  <button onClick={() => setStep(1)}>
                    Đăng nhập bằng email
                  </button>
                </div>

                <div className="text-center text-sm">Hoặc tiếp tục bằng</div>
                <div className="flex justify-center">
                  <button className="w-14 h-14 flex justify-center items-center bg-[#25479b] rounded-full text-white mr-4">
                    <FaFacebookF size={24} />
                  </button>
                  <button className="w-14 h-14 flex justify-center items-center bg-white shadow-md rounded-full ">
                    <FcGoogle size={29} />
                  </button>
                </div>
                <p className="text-xs">
                  Bằng việc tiếp tục, bạn đã đọc và đồng ý với điều khoản sử
                  dụng và Chính sách bảo mật thông tin cá nhân của Tiki
                </p>
              </div>
            )}
            {step === 1 && (
              <div>
                <button onClick={() => setStep(0)} className="mb-10">
                  <IoIosArrowBack size={30} />
                </button>
                <div>
                  Đăng nhập bằng email Nhập email và mật khẩu tài khoản Tiki
                </div>
              </div>
            )}

            <div className="w-2/5 flex items-center justify-center">
              <img
                src="https://salt.tikicdn.com/ts/upload/eb/f3/a3/25b2ccba8f33a5157f161b6a50f64a60.png"
                width="203"
              />
            </div>
          </Modal.Body>
        </div>
      </Modal>
    </>
  );
}

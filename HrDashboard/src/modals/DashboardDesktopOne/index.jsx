import React from "react";
import { Button, Text, Img, Heading } from "../../components";
import { default as ModalProvider } from "react-modal";

export default function DashboardDesktopOne({ isOpen, ...props }) {
  return (
    <ModalProvider {...props} appElement={document.getElementById("root")} isOpen={isOpen} className="min-w-[573px]">
      <div className="flex flex-row justify-center w-full bg-white-A700 rounded-[16px]">
        <div className="flex flex-row md:flex-col justify-start items-start w-full gap-[37px] md:gap-5">
          <div className="flex flex-col items-start justify-end w-[22%] md:w-full mt-[51px] gap-[31px] p-[22px] md:mt-0 sm:p-5 bg-gray-50 rounded-[12px]">
            <div className="flex flex-col items-start justify-start w-[72%] md:w-full mt-[118px] ml-[13px] gap-[59px] py-[3px] md:ml-0">
              <div className="flex flex-row justify-start">
                <Text as="p" className="!text-red-A200 !font-medium">
                  Time
                </Text>
              </div>
              <Text as="p" className="mb-3.5 ml-[3px] md:ml-0 !font-medium">
                Date
              </Text>
            </div>
            <div className="flex flex-row justify-end mb-[113px] p-2">
              <Text as="p" className="my-px !font-medium">
                Add team member
              </Text>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start w-full">
            <div className="flex flex-row justify-start w-full">
              <div className="flex flex-row md:flex-col justify-start items-center w-full md:gap-5">
                <div className="flex flex-col items-start justify-center w-[48%] md:w-full gap-[5px] z-[1]">
                  <Heading size="md" as="h1" className="mt-px !text-gray-900">
                    Select a time for meeting
                  </Heading>
                  <Text as="p" className="!text-blue_gray-700 !font-roboto">
                    The following time will be set for the meeting:
                  </Text>
                </div>
                <div className="flex flex-row justify-end w-[62%] md:w-full ml-[-64px] md:ml-0">
                  <div className="flex flex-row justify-start w-full py-[74px] md:py-5">
                    <Img
                      src="images/img_arrow_right.svg"
                      alt="arrowright_one"
                      className="h-[12px] w-[12px] mb-[98px]"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row justify-start items-start w-[34%] md:w-full mt-[-2px] gap-2.5">
              <div className="flex flex-row justify-start w-[49%]">
                <div className="flex flex-col items-center justify-start w-full gap-2.5">
                  <div className="flex flex-row justify-start w-[99%] md:w-full gap-3">
                    <Button className="flex items-center justify-center h-[46px] px-5 text-black-900 font-inter text-center text-sm bg-gray-300_01 min-w-[49px] rounded-lg">
                      0
                    </Button>
                    <Button className="flex items-center justify-center h-[46px] px-5 text-black-900 font-inter text-center text-sm bg-gray-300_01 min-w-[49px] rounded-lg">
                      0
                    </Button>
                  </div>
                  <div className="flex flex-row justify-center w-full">
                    <Text size="s" as="p" className="!text-blue_gray-700_7e opacity-0.4">
                      time in 24 hr format
                    </Text>
                  </div>
                </div>
              </div>
              <Button className="flex items-center justify-center h-[46px] px-5 text-black-900 font-inter text-center text-sm bg-gray-300_01 min-w-[49px] rounded-lg">
                0
              </Button>
              <Button className="flex items-center justify-center h-[46px] px-5 text-black-900 font-inter text-center text-sm bg-gray-300_01 min-w-[49px] rounded-lg">
                0
              </Button>
            </div>
            <Button className="flex items-center justify-center h-[38px] mt-[34px] px-[35px] sm:px-5 text-white-A700 text-center text-sm font-medium bg-red-A200 min-w-[139px] rounded sm:min-w-full">
              Next
            </Button>
          </div>
        </div>
      </div>
    </ModalProvider>
  );
}

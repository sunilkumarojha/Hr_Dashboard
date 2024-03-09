import React from "react";
import { Button, SelectBox, Img, Text, Heading } from "../../components";
import { default as ModalProvider } from "react-modal";

const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

export default function DashboardDesktoppopupSharewithpeopleOne({ isOpen, ...props }) {
  return (
    <ModalProvider {...props} appElement={document.getElementById("root")} isOpen={isOpen} className="min-w-[662px]">
      <div className="flex flex-row sm:flex-col justify-between items-start w-full pr-[30px] sm:gap-10 sm:pr-5 bg-white-A700 rounded-[16px]">
        <div className="flex flex-col items-center justify-end w-[33%] sm:w-full p-[22px] sm:p-5 bg-gray-50 rounded-[12px]">
          <div className="flex flex-col items-start justify-start w-full mt-[147px] mb-[137px] gap-[49px]">
            <div className="flex flex-col items-start justify-start ml-3 gap-[59px] md:ml-0">
              <Text as="p" className="!text-blue_gray-800_01 !font-medium">
                Time
              </Text>
              <Text as="p" className="ml-[3px] md:ml-0 !text-blue_gray-800_01 !font-medium">
                Date
              </Text>
            </div>
            <div className="flex flex-row justify-end p-2">
              <Text as="p" className="my-px !text-red-A200 !font-medium">
                Add team member
              </Text>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start w-[62%] sm:w-full mt-[17px] gap-[22px] sm:mt-0">
          <div className="flex flex-col items-center justify-start h-[24px] w-[24px] ml-[366px] md:ml-5">
            <Img src="images/img_arrow_right_blue_gray_500_01.svg" alt="arrowright_one" className="h-[24px] w-[24px]" />
          </div>
          <div className="flex flex-col items-start justify-start w-[91%] md:w-full gap-[31px]">
            <div className="flex flex-col items-start justify-start gap-[9px]">
              <Heading size="md" as="h1" className="!text-gray-900 !font-inter">
                Add team member
              </Heading>
              <Text as="p" className="!text-blue_gray-700">
                The following users have access to this meeting:
              </Text>
            </div>
            <div className="flex flex-col w-full gap-[11px]">
              <div className="flex flex-row justify-between items-center w-full">
                <div className="flex flex-row justify-start w-[58%] gap-3">
                  <Img
                    src="images/img_avatar.png"
                    alt="candice_wu_one"
                    className="h-[40px] w-[40px] md:h-auto rounded-[50%]"
                  />
                  <div className="flex flex-col items-start justify-start w-[75%] gap-0.5">
                    <Heading as="h2">Candice Wu</Heading>
                    <Text as="p" className="!text-blue_gray-700 !font-roboto">
                      candice@untitledui.com
                    </Text>
                  </div>
                </div>
                <div className="flex flex-row justify-center">
                  <Heading as="h3" className="!text-red-900">
                    Remove
                  </Heading>
                </div>
              </div>
              <div className="flex flex-row justify-between items-center w-full">
                <div className="flex flex-row justify-start w-[53%] gap-3">
                  <Text
                    size="lg"
                    as="p"
                    className="flex justify-center items-center h-[40px] w-[40px] !text-blue_gray-700 text-center !font-medium bg-gray-100 rounded-[50%]"
                  >
                    DW
                  </Text>
                  <div className="flex flex-col items-start justify-start w-[72%] gap-0.5">
                    <Heading as="h4">Demi Wilkinson</Heading>
                    <Text as="p" className="!text-blue_gray-700 !font-roboto">
                      demi@untitledui.com
                    </Text>
                  </div>
                </div>
                <div className="flex flex-row justify-center">
                  <Heading as="h5" className="!text-red-900">
                    Remove
                  </Heading>
                </div>
              </div>
              <div className="flex flex-row justify-between items-center w-full">
                <div className="flex flex-row justify-start w-[53%] gap-3">
                  <Img
                    src="images/img_avatar_40x40.png"
                    alt="avatar_one"
                    className="h-[40px] w-[40px] md:h-auto rounded-[50%]"
                  />
                  <div className="flex flex-col items-start justify-start w-[72%] gap-0.5">
                    <Heading as="h6">Drew Cano</Heading>
                    <Text as="p" className="!text-blue_gray-700 !font-roboto">
                      drew@untitledui.com
                    </Text>
                  </div>
                </div>
                <div className="flex flex-row justify-center">
                  <Heading as="p" className="!text-red-900">
                    Remove
                  </Heading>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start w-full gap-8">
              <div className="flex flex-col items-start justify-start w-full gap-[5px]">
                <Text as="p" className="!font-medium">
                  Team member
                </Text>
                <SelectBox
                  indicator={<Img src="images/img_arrowdown_blue_gray_500_01.svg" alt="arrow_down" />}
                  getOptionLabel={(e) => (
                    <>
                      <div className="flex items-center">
                        <Img src="images/img_search.svg" alt="search" />
                        <span>{e.label}</span>
                      </div>
                    </>
                  )}
                  name="search"
                  placeholder="Select team member"
                  options={dropDownOptions}
                  className="w-full px-[35px] py-3 text-blue_gray-500_01 font-roboto text-base border-blue_gray-100 border border-solid bg-white-A700 shadow-sm rounded-lg"
                />
              </div>
              <Button className="flex items-center justify-center h-[38px] px-[35px] sm:px-5 text-white-A700 text-center text-sm font-medium bg-red-A200 min-w-[139px] rounded sm:min-w-full">
                Confirm
              </Button>
            </div>
          </div>
        </div>
      </div>
    </ModalProvider>
  );
}

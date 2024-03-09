import React from "react";
import { Text, Button, Img, Heading } from "../../components";
import { default as ModalProvider } from "react-modal";

export default function DashboardDesktoppopupSharewithpeople({ isOpen, ...props }) {
  return (
    <ModalProvider {...props} appElement={document.getElementById("root")} isOpen={isOpen} className="min-w-[573px]">
      <div className="flex flex-row md:flex-col justify-between items-start w-full md:gap-10 bg-white-A700 rounded-[16px]">
        <div className="flex flex-col items-center justify-end w-[36%] md:w-full p-[22px] sm:p-5 bg-gray-50 rounded-[12px]">
          <div className="flex flex-col items-start justify-start w-full mt-[177px] mb-[172px] gap-8">
            <div className="flex flex-col items-start justify-start w-[72%] md:w-full ml-3 gap-[59px] py-1 md:ml-0">
              <div className="flex flex-row justify-start">
                <Text as="p" className="!text-blue_gray-800_01 !font-medium">
                  Time
                </Text>
              </div>
              <Text as="p" className="mb-3 ml-[3px] md:ml-0 !text-red-A200 !font-medium">
                Date
              </Text>
            </div>
            <div className="flex flex-row justify-end p-2">
              <Text as="p" className="my-px !font-medium">
                Add team member
              </Text>
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-center w-full mt-[7px] md:mt-0">
          <div className="flex flex-col items-start justify-start w-full gap-1">
            <div className="h-[304px] w-full relative">
              <div className="flex flex-col items-start justify-center w-full h-full left-0 bottom-0 right-0 top-0 m-auto absolute">
                <div className="flex flex-col items-start justify-start w-full">
                  <div className="flex flex-col items-start justify-start w-full z-[1]">
                    <div className="flex flex-row md:flex-col justify-start items-start w-full md:gap-5">
                      <div className="flex flex-col items-start justify-center w-[48%] md:w-full mt-11 gap-[7px] md:mt-0 z-[1]">
                        <Heading size="md" as="h1" className="mt-1 !text-gray-900 !font-inter">
                          Select a date for meeting
                        </Heading>
                        <Text as="p" className="!text-blue_gray-700">
                          The following date will be set for the meeting:
                        </Text>
                      </div>
                      <div className="flex flex-row justify-end w-[62%] md:w-full ml-[-64px] md:ml-0">
                        <div className="flex flex-row justify-start w-full py-[15px]">
                          <Img
                            src="images/img_arrow_right.svg"
                            alt="arrowright_one"
                            className="h-[12px] w-[12px] mb-[216px]"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start h-[40px] w-[40px] mt-[-38px] ml-60 p-[11px] md:ml-5">
                      <Text as="p" className="ml-[5px] md:ml-0 text-center">
                        1
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-row justify-start w-[35%] md:w-full mt-[-84px] gap-[9px]">
                    <div className="flex flex-col items-center justify-start w-[46%]">
                      <div className="flex flex-col items-center justify-start w-full">
                        <div className="flex flex-col w-full gap-1">
                          <div className="flex flex-row justify-center items-center w-full">
                            <div className="flex flex-col items-center justify-center h-[40px] w-[40px] p-[9px]">
                              <Text as="p" className="my-0.5 text-center !font-medium">
                                Mo
                              </Text>
                            </div>
                            <div className="flex flex-col items-center justify-start h-[40px] w-[40px] p-[11px]">
                              <Text as="p" className="h-[17px] text-center !font-medium">
                                Tu
                              </Text>
                            </div>
                            <Text as="p" className="ml-2 text-center !font-medium">
                              We
                            </Text>
                          </div>
                          <div className="flex flex-row justify-center items-center w-[99%] md:w-full mr-0.5">
                            <div className="flex flex-col items-center justify-start h-[40px] w-[40px] p-[11px]">
                              <Text as="p" className="h-[17px] !text-blue_gray-500_01 text-center">
                                26
                              </Text>
                            </div>
                            <div className="flex flex-col items-center justify-start h-[40px] w-[40px] p-[11px]">
                              <Text as="p" className="h-[17px] !text-blue_gray-500_01 text-center">
                                27
                              </Text>
                            </div>
                            <Text as="p" className="h-[17px] ml-[11px] !text-blue_gray-500_01 text-center">
                              28
                            </Text>
                          </div>
                          <div className="flex flex-row justify-start items-center w-[95%] md:w-full mr-1.5">
                            <div className="flex flex-col items-center justify-start h-[40px] w-[40px] p-[11px]">
                              <Text as="p" className="text-center">
                                2
                              </Text>
                            </div>
                            <div className="flex flex-col items-center justify-start h-[40px] w-[40px] p-[11px]">
                              <Text as="p" className="text-center">
                                3
                              </Text>
                            </div>
                            <Text as="p" className="ml-[15px] text-center">
                              4
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-start w-[50%] gap-1">
                      <div className="flex flex-row justify-center w-full">
                        <div className="flex flex-col items-center justify-start h-[40px] w-[40px] p-2.5">
                          <Text as="p" className="h-[17px] text-center !font-medium">
                            Th
                          </Text>
                        </div>
                        <div className="flex flex-col items-center justify-start h-[40px] w-[40px] p-[11px]">
                          <Text as="p" className="text-center !font-medium">
                            Fr
                          </Text>
                        </div>
                        <div className="flex flex-col items-center justify-center h-[40px] w-[40px] p-2">
                          <Text as="p" className="my-[3px] text-center !font-medium">
                            Sat
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-row justify-center w-full">
                        <div className="flex flex-col items-center justify-start w-full gap-1">
                          <div className="flex flex-row justify-center w-full">
                            <div className="flex flex-col items-center justify-start h-[40px] w-[40px] p-[11px]">
                              <Text as="p" className="h-[17px] !text-blue_gray-500_01 text-center">
                                29
                              </Text>
                            </div>
                            <div className="flex flex-col items-center justify-start h-[40px] w-[40px] p-[11px]">
                              <Text as="p" className="h-[17px] !text-blue_gray-500_01 text-center">
                                30
                              </Text>
                            </div>
                            <div className="flex flex-col items-center justify-start h-[40px] w-[40px] p-[11px]">
                              <Text as="p" className="h-[17px] !text-blue_gray-500_01 text-center">
                                32
                              </Text>
                            </div>
                          </div>
                          <div className="flex flex-row justify-center w-full">
                            <div className="flex flex-col items-center justify-start h-[40px] w-[40px] p-[11px]">
                              <Text as="p" className="text-center">
                                5
                              </Text>
                            </div>
                            <Text
                              as="p"
                              className="flex justify-center items-center h-[40px] w-[40px] !text-white-A700 text-center !font-medium bg-red-A200 rounded-[50%]"
                            >
                              6
                            </Text>
                            <div className="flex flex-col items-center justify-start h-[40px] w-[40px] p-[11px]">
                              <Text as="p" className="text-center !font-medium">
                                7
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start h-[40px] w-[40px] mt-[-40px] ml-60 p-[11px] md:ml-5">
                  <Text as="p" className="text-center !font-medium">
                    8
                  </Text>
                </div>
              </div>
              <div className="flex flex-row justify-between items-center w-[41%] left-0 top-[42%] m-auto absolute">
                <Img src="images/img_arrow_left.svg" alt="arrowleft_one" className="h-[36px] w-[36px] rounded-lg" />
                <Heading size="s" as="h2" className="!font-inter text-center">
                  January 2022
                </Heading>
                <Img src="images/img_arrow_left.svg" alt="arrowright" className="h-[36px] w-[36px] rounded-lg" />
              </div>
              <div className="flex flex-col items-center justify-start h-[40px] w-[40px] bottom-[29%] left-[35%] p-[11px] m-auto absolute">
                <Text as="p" className="h-[17px] text-center !font-medium">
                  Su
                </Text>
              </div>
            </div>
            <div className="flex flex-col w-[41%] gap-1">
              <div className="justify-center w-full grid-cols-7 grid">
                <div className="flex flex-col items-center justify-start h-[40px] w-full p-[11px]">
                  <Text as="p" className="text-center !font-medium">
                    9
                  </Text>
                </div>
                <div className="flex flex-col items-center justify-start h-[40px] w-full p-[11px]">
                  <Text as="p" className="text-center !font-medium">
                    10
                  </Text>
                </div>
                <div className="flex flex-col items-start justify-start h-[40px] w-full p-[11px]">
                  <Text as="p" className="ml-px md:ml-0 text-center !font-medium">
                    11
                  </Text>
                </div>
                <div className="flex flex-col items-center justify-start h-[40px] w-full p-[11px]">
                  <Text as="p" className="text-center !font-medium">
                    12
                  </Text>
                </div>
                <div className="flex flex-col items-center justify-start h-[40px] w-full p-[11px]">
                  <Text as="p" className="!text-blue_gray-800_01 text-center !font-medium">
                    13
                  </Text>
                </div>
                <div className="flex flex-col items-center justify-start h-[40px] w-full p-[11px]">
                  <Text as="p" className="text-center">
                    14
                  </Text>
                </div>
                <div className="flex flex-col items-center justify-start h-[40px] w-full p-[11px]">
                  <Text as="p" className="text-center">
                    15
                  </Text>
                </div>
                <div className="flex flex-col items-center justify-start h-[40px] w-full p-[11px]">
                  <Text as="p" className="text-center">
                    16
                  </Text>
                </div>
                <div className="flex flex-col items-center justify-start h-[40px] w-full p-[11px]">
                  <Text as="p" className="text-center">
                    17
                  </Text>
                </div>
                <div className="flex flex-col items-center justify-start h-[40px] w-full p-[11px]">
                  <Text as="p" className="text-center">
                    18
                  </Text>
                </div>
                <div className="flex flex-col items-center justify-start h-[40px] w-full p-[11px]">
                  <Text as="p" className="text-center">
                    19
                  </Text>
                </div>
                <div className="flex flex-col items-center justify-start h-[40px] w-full p-[11px]">
                  <Text as="p" className="h-[17px] text-center">
                    20
                  </Text>
                </div>
                <div className="flex flex-col items-center justify-start h-[40px] w-full p-[11px]">
                  <Text as="p" className="text-center">
                    21
                  </Text>
                </div>
                <div className="flex flex-col items-center justify-start h-[40px] w-full p-[11px]">
                  <Text as="p" className="h-[17px] text-center">
                    22
                  </Text>
                </div>
              </div>
              <div className="flex flex-row justify-start items-start w-[96%] md:w-full mr-[11px] gap-[11px]">
                <div className="flex flex-row justify-start w-[90%]">
                  <div className="flex flex-col items-start justify-start w-full">
                    <div className="flex flex-row justify-start w-full">
                      <div className="flex flex-col items-center justify-start h-[40px] w-[40px] p-[11px]">
                        <Text as="p" className="h-[17px] text-center">
                          23
                        </Text>
                      </div>
                      <div className="flex flex-col items-center justify-start h-[40px] w-[40px] p-[11px]">
                        <Text as="p" className="h-[17px] text-center !font-medium">
                          24
                        </Text>
                      </div>
                      <div className="flex flex-col items-center justify-start h-[40px] w-[40px] p-[11px]">
                        <Text as="p" className="h-[17px] text-center">
                          25
                        </Text>
                      </div>
                      <div className="flex flex-col items-center justify-start h-[40px] w-[40px] p-[11px]">
                        <Text as="p" className="h-[17px] text-center">
                          26
                        </Text>
                      </div>
                      <div className="flex flex-col items-center justify-start h-[40px] w-[40px] p-[11px]">
                        <Text as="p" className="h-[17px] text-center">
                          27
                        </Text>
                      </div>
                      <div className="flex flex-col items-center justify-start h-[40px] w-[40px] p-[11px]">
                        <Text as="p" className="h-[17px] text-center">
                          28
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-row justify-start items-center w-[94%] md:w-full mt-1">
                      <div className="flex flex-col items-center justify-start h-[40px] w-[40px]">
                        <div className="flex flex-col items-center justify-start h-[40px] w-[40px] p-[11px]">
                          <Text as="p" className="h-[17px] text-center">
                            30
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-col items-center justify-start h-[40px] w-[40px] p-[11px]">
                        <Text as="p" className="text-center">
                          31
                        </Text>
                      </div>
                      <div className="flex flex-col items-start justify-start h-[40px] w-[40px] p-[11px]">
                        <Text as="p" className="ml-[5px] md:ml-0 !text-blue_gray-500_01 text-center">
                          1
                        </Text>
                      </div>
                      <div className="flex flex-col items-center justify-start h-[40px] w-[40px] p-[11px]">
                        <Text as="p" className="!text-blue_gray-500_01 text-center">
                          2
                        </Text>
                      </div>
                      <Text as="p" className="ml-[15px] !text-blue_gray-500_01 text-center">
                        3
                      </Text>
                      <Text as="p" className="ml-[31px] sm:ml-5 !text-blue_gray-500_01 text-center">
                        4
                      </Text>
                    </div>
                    <Button className="flex items-center justify-center h-[38px] mt-8 ml-2 px-[35px] md:ml-0 sm:px-5 text-white-A700 text-center text-sm font-medium bg-red-A200 min-w-[139px] rounded sm:min-w-full">
                      Next
                    </Button>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start w-[7%] mt-[11px] gap-[27px]">
                  <Text as="p" className="h-[17px] text-center">
                    29
                  </Text>
                  <Text as="p" className="!text-blue_gray-500_01 text-center">
                    5
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ModalProvider>
  );
}

import React from "react";
import { Helmet } from "react-helmet";
import { CloseSVG } from "../../assets/images";
import { SelectBox, Img, Input, Text, Button, Heading } from "../../components";
import { MenuItem, Menu, Sidebar } from "react-pro-sidebar";

const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

export default function DashboardDesktopPage() {
  const [searchBarValue, setSearchBarValue] = React.useState("");
  const [collapsed, setCollapsed] = React.useState(false);

  return (
    <>
      <Helmet>
        <title>Hr Dashboard</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex flex-row justify-center w-full bg-gray-50">
        <div className="flex flex-row md:flex-col justify-center w-full md:gap-5 overflow-auto">
          <Sidebar
            width="245px !important"
            collapsedWidth="80px !important"
            collapsed={collapsed}
            onClick={() => {
              setCollapsed(!collapsed);
            }}
            className="h-screen top-0 bg-blue_gray-50 !sticky overflow-auto"
          >
            <div className="flex flex-row justify-center w-[53%] mt-[59px] p-[3px] mx-auto">
              <Heading size="lg" as="h1" className="mt-px !text-black-900">
                WeHR
              </Heading>
            </div>
            <div className="flex flex-col items-center justify-start w-full gap-14">
              <div className="flex flex-row justify-start w-full p-[11px]">
                <Text size="s" as="p" className="ml-[18px] !text-gray-700_87 !font-roboto !font-medium opacity-0.5">
                  MAIN MENU
                </Text>
              </div>
              <Menu
                menuItemStyles={{
                  button: {
                    padding: "16px 16px 16px 30px",
                    gap: "24px",
                    color: "#686868",
                    fontWeight: 400,
                    fontSize: "16px",
                    [`&:hover, &.ps-active`]: { color: "#ff5151", fontWeight: "500 !important" },
                  },
                }}
                className="flex flex-col items-start justify-start w-full"
              >
                <div className="flex flex-col items-center justify-start w-full gap-14 md:gap-[56.00px]">
                  <MenuItem
                    icon={<Img src="images/img_ic_dashboard.svg" alt="icdashboard_one" className="h-[24px] w-[24px]" />}
                  >
                    Dashboard
                  </MenuItem>
                  <MenuItem
                    icon={<Img src="images/img_ic_recruitment.svg" alt="icrecruitment" className="h-[24px] w-[24px]" />}
                  >
                    Recruitment
                  </MenuItem>
                  <MenuItem
                    icon={<Img src="images/img_ic_calendar.svg" alt="iccalendar_one" className="h-[24px] w-[24px]" />}
                  >
                    Schedule
                  </MenuItem>
                  <MenuItem
                    icon={<Img src="images/img_ic_employee.svg" alt="icemployee_one" className="h-[20px] w-[20px]" />}
                  >
                    Employee
                  </MenuItem>
                  <MenuItem
                    icon={<Img src="images/img_ic_department.svg" alt="icdepartment" className="h-[24px] w-[24px]" />}
                  >
                    Department
                  </MenuItem>
                </div>
                <div className="flex flex-row justify-start mt-[11px] ml-[30px] md:ml-0 sm:ml-5">
                  <Text size="s" as="p" className="!text-gray-700_87 !font-roboto !font-medium opacity-0.5">
                    OTHER
                  </Text>
                </div>
                <div className="flex flex-col items-center justify-start w-full mt-[67px] gap-14 md:gap-[56.00px]">
                  <MenuItem
                    icon={<Img src="images/img_ic_support.svg" alt="icsupport_one" className="h-[24px] w-[24px]" />}
                  >
                    Support
                  </MenuItem>
                  <MenuItem
                    icon={<Img src="images/img_ic_settings.svg" alt="icsettings_one" className="h-[24px] w-[24px]" />}
                  >
                    Settings
                  </MenuItem>
                </div>
              </Menu>
            </div>
          </Sidebar>
          <div className="h-[900px] w-[84%] md:w-full relative">
            <div className="flex flex-row justify-center w-full h-full left-0 bottom-0 right-0 top-0 p-[34px] m-auto sm:p-5 bg-white-A700 absolute">
              <div className="flex flex-row md:flex-col justify-start items-center w-[98%] mt-[68px] gap-[30px] md:gap-5">
                <div className="flex flex-col items-center justify-start w-[59%] md:w-full">
                  <div className="flex flex-row justify-start w-full py-3">
                    <Text size="2xl" as="p" className="!text-black-900_33">
                      Dashboard
                    </Text>
                  </div>
                  <div className="flex flex-row md:flex-col w-full gap-3.5">
                    <div className="flex flex-col items-start justify-center md:w-full md:h-auto gap-[5px] p-[11px] bg-deep_orange-50 rounded-[10px]">
                      <Text size="2xl" as="p" className="ml-2 md:ml-0 !text-black-900_33 !text-lg">
                        Available Position
                      </Text>
                      <Text size="4xl" as="p" className="ml-2 md:ml-0 !text-black-900_33 !text-4xl">
                        24
                      </Text>
                      <Text
                        size="xl"
                        as="p"
                        className="mb-0.5 ml-2 md:ml-0 !text-red-A200 !font-roboto !text-base !font-normal"
                      >
                        4 Urgently needed
                      </Text>
                    </div>
                    <div className="flex flex-col items-start justify-start md:w-full md:h-auto p-[13px] bg-blue-50 rounded-[10px]">
                      <Text size="2xl" as="p" className="ml-1.5 md:ml-0 !text-black-900_33 !text-lg">
                        Job Open
                      </Text>
                      <Text size="4xl" as="p" className="mt-px ml-1.5 md:ml-0 !text-black-900_33 !text-4xl">
                        10
                      </Text>
                      <Text
                        size="xl"
                        as="p"
                        className="mt-1.5 ml-1.5 md:ml-0 !text-blue-A200 !font-roboto !text-base !font-normal"
                      >
                        4 Active hiring
                      </Text>
                    </div>
                    <div className="flex flex-col items-start justify-start md:w-full md:h-auto p-[13px] bg-red-50 rounded-[10px]">
                      <Text size="2xl" as="p" className="ml-1.5 md:ml-0 !text-black-900_33 !text-lg">
                        New Employees
                      </Text>
                      <Text size="4xl" as="p" className="mt-px ml-1.5 md:ml-0 !text-black-900_33 !text-4xl">
                        24
                      </Text>
                      <Text
                        size="xl"
                        as="p"
                        className="mt-1.5 ml-1.5 md:ml-0 !text-pink-A100 !font-roboto !text-base !font-normal"
                      >
                        4 Department
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-row md:flex-col w-full mt-5 gap-4">
                    <div className="flex flex-row justify-start items-center w-[49%] md:w-full gap-[7px] p-5 border-gray-300 border border-solid bg-white-A700 rounded-[10px]">
                      <div className="flex flex-col items-center justify-start h-[150px] w-[149px] gap-[13px]">
                        <div className="flex flex-col items-start justify-start w-full pt-0.5 gap-px">
                          <Text size="2xl" as="p" className="!text-black-900_33 !text-lg">
                            Total Employees
                          </Text>
                          <Text size="5xl" as="p" className="!text-black-900_33 text-5xl font-medium">
                            216
                          </Text>
                        </div>
                        <div className="flex flex-col items-start justify-start w-[99%] md:w-full gap-[7px]">
                          <Text size="s" as="p" className="!text-gray-700 !font-roboto">
                            120 Men
                          </Text>
                          <Text size="s" as="p" className="!text-gray-700 !font-roboto">
                            96 Women
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-col items-end justify-start w-[43%] gap-5">
                        <div className="flex flex-row justify-end w-full">
                          <div className="flex flex-col items-start justify-start w-full">
                            <Text size="xs" as="p" className="ml-[42px] md:ml-5 !text-red-A200 !font-rubik z-[1]">
                              +2%
                            </Text>
                            <div className="h-[69px] w-full mt-[-2px] relative">
                              <Img
                                src="images/img_vector_2.svg"
                                alt="total_employees"
                                className="h-[41px] top-0 right-0 left-0 m-auto absolute"
                              />
                              <Img
                                src="images/img_vector_3.png"
                                alt="total_employees"
                                className="justify-center h-[69px] w-full sm:w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute"
                              />
                              <Img
                                src="images/img_frame_20.svg"
                                alt="total_employees"
                                className="h-[16px] w-[16px] left-[40%] top-[1%] m-auto absolute"
                              />
                            </div>
                          </div>
                        </div>
                        <Button className="flex items-center justify-center h-[24px] px-2.5 text-blue_gray-900_01 font-roboto text-center text-xs bg-deep_orange-50 min-w-[107px] rounded sm:min-w-full">
                          +2% Past month
                        </Button>
                      </div>
                    </div>
                    <div className="flex flex-row justify-start items-center w-[49%] md:w-full gap-2.5 p-5 border-gray-300 border border-solid bg-white-A700 rounded-[10px]">
                      <div className="flex flex-col items-center justify-start w-[55%] gap-[13px]">
                        <div className="flex flex-col items-start justify-start w-full pt-0.5 gap-px">
                          <Text size="2xl" as="p" className="!text-black-900_33 !text-lg">
                            Talent Request
                          </Text>
                          <Text size="5xl" as="p" className="!text-black-900_33 text-5xl font-medium">
                            16
                          </Text>
                        </div>
                        <div className="flex flex-col items-start justify-start w-full gap-1.5">
                          <Text size="s" as="p" className="!text-gray-700 !font-roboto">
                            6 Men
                          </Text>
                          <Text size="s" as="p" className="!text-gray-700 !font-roboto">
                            10 Women
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-col items-end justify-start w-[43%] gap-5">
                        <div className="flex flex-row justify-end w-full">
                          <div className="flex flex-col items-start justify-start w-full">
                            <Text size="xs" as="p" className="ml-[42px] md:ml-5 !text-red-A200 !font-rubik z-[1]">
                              +5%
                            </Text>
                            <div className="h-[69px] w-full mt-[-2px] relative">
                              <Img
                                src="images/img_vector_2.svg"
                                alt="vectortwo_one"
                                className="h-[41px] top-0 right-0 left-0 m-auto absolute"
                              />
                              <Img
                                src="images/img_vector_3.png"
                                alt="vectorthree_one"
                                className="justify-center h-[69px] w-full sm:w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute"
                              />
                              <Img
                                src="images/img_frame_20.svg"
                                alt="image"
                                className="h-[16px] w-[16px] left-[40%] top-[1%] m-auto absolute"
                              />
                            </div>
                          </div>
                        </div>
                        <Button className="flex items-center justify-center h-[24px] px-2.5 text-blue_gray-900_01 font-roboto text-center text-xs bg-deep_orange-50 min-w-[107px] rounded sm:min-w-full">
                          +5% Past month
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row justify-center w-full mt-5 pt-4 border-gray-300 border border-solid bg-white-A700 rounded-[12px]">
                    <div className="flex flex-col items-center justify-start w-full gap-3">
                      <div className="flex flex-row justify-between w-[94%] md:w-full">
                        <Text size="xl" as="p" className="mt-px !text-black-900_33">
                          Announcement
                        </Text>
                        <SelectBox
                          indicator={<Img src="images/img_arrowdown.svg" alt="arrow_down" />}
                          name="duration"
                          placeholder="Today, 13 Sep 2021"
                          options={dropDownOptions}
                          className="flex w-[25%] pt-[9px] pb-0.5 pl-2 pr-[35px] gap-px text-gray-700 font-roboto text-xs border-gray-200 border border-solid bg-white-A700 rounded"
                        />
                      </div>
                      <div className="flex flex-row justify-center w-full">
                        <div className="flex flex-col items-center justify-start w-full">
                          <div className="flex flex-col w-[95%] gap-3">
                            <div className="flex flex-row sm:flex-col justify-between items-center w-full p-3 sm:gap-10 border-gray-300 border border-solid bg-gray-50 rounded-md">
                              <div className="flex flex-col items-start justify-center ml-1 gap-[5px]">
                                <Text size="xl" as="p" className="mt-px !text-blue_gray-900_01 !text-base !font-normal">
                                  Outing schedule for every departement
                                </Text>
                                <Text size="xs" as="p" className="!text-gray-700 !font-roboto !font-normal">
                                  5 Minutes ago
                                </Text>
                              </div>
                              <div className="flex flex-row justify-start mr-1 gap-5">
                                <Img src="images/img_bi_pin_angle_fill.svg" alt="image" className="h-[24px] w-[24px]" />
                                <Img
                                  src="images/img_carbon_overflow.svg"
                                  alt="image_one"
                                  className="h-[24px] w-[24px]"
                                />
                              </div>
                            </div>
                            <div className="flex flex-row sm:flex-col justify-between items-center w-full p-3 sm:gap-10 border-gray-300 border border-solid bg-gray-50 rounded-md">
                              <div className="flex flex-col items-start justify-center ml-1 gap-[5px]">
                                <Text size="xl" as="p" className="mt-px !text-blue_gray-900_01 !text-base !font-normal">
                                  Meeting HR Department
                                </Text>
                                <Text size="xs" as="p" className="!text-gray-700 !font-roboto !font-normal">
                                  Yesterday, 12:30 PM
                                </Text>
                              </div>
                              <div className="flex flex-row justify-start mr-1 gap-5">
                                <Img
                                  src="images/img_bi_pin_angle_fill_gray_400_01.svg"
                                  alt="bipinangle_one"
                                  className="h-[24px] w-[24px]"
                                />
                                <Img
                                  src="images/img_carbon_overflow.svg"
                                  alt="carbonoverflow"
                                  className="h-[24px] w-[24px]"
                                />
                              </div>
                            </div>
                            <div className="flex flex-row sm:flex-col justify-between items-center w-full p-3 sm:gap-10 border-gray-300 border border-solid bg-gray-50 rounded-md">
                              <div className="flex flex-col items-start justify-start w-[71%] sm:w-full ml-1 gap-[7px]">
                                <Text size="xl" as="p" className="!text-blue_gray-900_01 !text-base !font-normal">
                                  IT Department need two more talents for UX/UI Designer position
                                </Text>
                                <Text size="xs" as="p" className="!text-gray-700 !font-roboto !font-normal">
                                  Yesterday, 09:15 AM
                                </Text>
                              </div>
                              <div className="flex flex-row justify-start mr-1 gap-5">
                                <Img
                                  src="images/img_bi_pin_angle_fill_gray_400_01.svg"
                                  alt="bipinangle_one"
                                  className="h-[24px] w-[24px]"
                                />
                                <Img
                                  src="images/img_carbon_overflow.svg"
                                  alt="carbonoverflow"
                                  className="h-[24px] w-[24px]"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-row justify-center w-full md:h-auto mt-[-9px] p-2 rounded-bl-[10px] rounded-br-[10px] border-gray-300 border border-solid bg-white-A700">
                            <Text as="p" className="!text-red-A200 text-center !font-medium">
                              See All Announcement
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start w-[39%] md:w-full gap-[9px]">
                  <div className="flex flex-col items-center justify-start w-full pb-[26px] gap-[35px] sm:pb-5 bg-black-900_33 rounded-[10px]">
                    <div className="flex flex-row justify-start w-full p-[9px] rounded-tl-[10px] rounded-tr-[10px] bg-blue_gray-900">
                      <Text size="xl" as="p" className="mt-0.5 ml-3.5 !text-white-A700">
                        Recently Activity
                      </Text>
                    </div>
                    <div className="flex flex-col items-start justify-start w-[87%] md:w-full gap-[19px]">
                      <div className="flex flex-col items-start justify-start gap-1.5">
                        <Text size="xs" as="p" className="!text-white-A700_90 !font-roboto opacity-0.6">
                          10.40 AM, Fri 10 Sept 2021
                        </Text>
                        <Text size="xl" as="p" className="!text-white-A700">
                          You Posted a New Job
                        </Text>
                        <Text as="p" className="!text-white-A700_a2 !font-roboto opacity-0.8 !leading-5">
                          Kindly check the requirements and terms of work and make sure everything is right.
                        </Text>
                      </div>
                      <div className="flex flex-row justify-between items-start w-full">
                        <Text as="p" className="mt-[7px] !text-white-A700">
                          Schedule a call{" "}
                        </Text>
                        <Button className="flex items-center justify-center h-[38px] px-[35px] sm:px-5 text-white-A700 text-center text-sm font-medium bg-red-A200 min-w-[139px] rounded">
                          Schedule
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row justify-center w-full pt-[21px] sm:pt-5 border-gray-300 border border-solid bg-white-A700 rounded-[12px]">
                    <div className="flex flex-col items-center justify-start w-full gap-2">
                      <div className="flex flex-col items-start justify-start w-[91%] md:w-full">
                        <div className="flex flex-row justify-between w-full">
                          <Text size="xl" as="p" className="mt-px !text-black-900_33">
                            Upcoming Schedule
                          </Text>
                          <SelectBox
                            indicator={<Img src="images/img_arrowdown.svg" alt="arrow_down" />}
                            name="duration"
                            placeholder="Today, 13 Sep 2021"
                            options={dropDownOptions}
                            className="flex w-[38%] pl-2 pr-[35px] gap-px py-1.5 text-gray-700 font-roboto text-xs border-gray-200 border border-solid bg-white-A700 rounded"
                          />
                        </div>
                        <Text size="s" as="p" className="mt-[19px] !text-gray-700">
                          Priority
                        </Text>
                        <div className="flex flex-col w-full mt-[9px] gap-[11px]">
                          <div className="flex flex-row justify-start items-center w-full gap-[29px] p-2.5 border-gray-300 border border-solid bg-gray-50 rounded-md">
                            <div className="flex flex-col items-start justify-center w-[71%] ml-1.5 gap-[5px]">
                              <Text size="xl" as="p" className="mt-px !text-blue_gray-900_01 !text-base !font-normal">
                                Review candidate applications
                              </Text>
                              <Text size="xs" as="p" className="!text-gray-700 !font-roboto !font-normal">
                                Today - 11.30 AM
                              </Text>
                            </div>
                            <div className="flex flex-row justify-start w-[19%] mr-1.5 gap-5">
                              <Img src="images/img_ic_notifications.svg" alt="image" className="h-[24px] w-[24px]" />
                              <Img src="images/img_carbon_overflow.svg" alt="image_one" className="h-[24px] w-[24px]" />
                            </div>
                          </div>
                          <Text size="s" as="p" className="mr-[354px] md:mr-5 !text-gray-700">
                            Other
                          </Text>
                          <div className="flex flex-row justify-start items-center w-full gap-[29px] p-[9px] border-gray-300 border border-solid bg-gray-50 rounded-md">
                            <div className="flex flex-col items-start justify-start w-[70%] ml-1.5 gap-[7px]">
                              <Text size="xl" as="p" className="!text-blue_gray-900_01 !text-base !font-normal">
                                Interview with candidates
                              </Text>
                              <Text size="xs" as="p" className="!text-gray-700 !font-roboto !font-normal">
                                Today - 10.30 AM
                              </Text>
                            </div>
                            <div className="flex flex-row justify-start w-[19%] mr-1.5 gap-5">
                              <Img src="images/img_ic_notifications.svg" alt="ic_one" className="h-[24px] w-[24px]" />
                              <Img
                                src="images/img_carbon_overflow.svg"
                                alt="ichorizontal"
                                className="h-[24px] w-[24px]"
                              />
                            </div>
                          </div>
                          <div className="flex flex-row justify-center items-center w-full p-2.5 border-gray-300 border border-solid bg-gray-50 rounded-md">
                            <div className="flex flex-col items-start justify-start w-[78%] gap-[7px]">
                              <Text size="lg" as="p" className="!text-blue_gray-900_01 !text-[15px]">
                                Short meeting with product designer from IT Departement
                              </Text>
                              <Text size="xs" as="p" className="!text-gray-700 !font-roboto !font-normal">
                                Today - 09.15 AM
                              </Text>
                            </div>
                            <div className="flex flex-row justify-start w-[19%] ml-1 gap-5">
                              <Img src="images/img_ic_notifications.svg" alt="ic_one" className="h-[24px] w-[24px]" />
                              <Img
                                src="images/img_carbon_overflow.svg"
                                alt="ichorizontal"
                                className="h-[24px] w-[24px]"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-row justify-center w-full">
                        <div className="flex flex-col items-center justify-start w-full">
                          <div className="flex flex-row justify-center w-[91%] md:w-full pt-2.5 px-2.5 border-gray-300 border border-solid bg-gray-50 rounded-md">
                            <div className="flex flex-col items-start justify-start w-[97%] gap-2">
                              <div className="flex flex-row justify-start items-end">
                                <Text size="xl" as="p" className="w-[80%] !text-blue_gray-900_01 !text-base">
                                  Sort Front-end developer candidates
                                </Text>
                                <Img
                                  src="images/img_ic_notifications.svg"
                                  alt="ic_one"
                                  className="h-[24px] w-[24px] ml-1"
                                />
                                <Img
                                  src="images/img_carbon_overflow.svg"
                                  alt="ichorizontal"
                                  className="h-[24px] w-[24px] ml-5"
                                />
                              </div>
                              <Text size="xs" as="p" className="!text-gray-700 !font-roboto !font-normal">
                                Today - 11.30 AM
                              </Text>
                            </div>
                          </div>
                          <div className="flex flex-row justify-center w-full md:h-auto mt-[-39px] p-2 rounded-bl-[10px] rounded-br-[10px] border-gray-300 border border-solid bg-white-A700">
                            <Text as="p" className="!text-red-A200 text-center !font-medium">
                              Creat a New Schedule
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <header className="flex justify-center items-center w-full top-[1%] right-0 left-0 px-2 m-auto shadow-xs absolute">
              <div className="flex flex-row justify-center w-[98%] md:w-full pt-[23px] sm:pt-5">
                <div className="flex flex-col items-center justify-center w-full gap-[23px]">
                  <div className="flex flex-row md:flex-col justify-between items-center w-[96%] md:w-full md:gap-10">
                    <Input
                      name="search"
                      placeholder="Search"
                      value={searchBarValue}
                      onChange={(e) => setSearchBarValue(e)}
                      suffix={
                        searchBarValue?.length > 0 ? (
                          <CloseSVG
                            onClick={() => setSearchBarValue("")}
                            height={24}
                            width={24}
                            fillColor="#b2b2b2ff"
                          />
                        ) : (
                          <Img src="images/img_frame_9.svg" alt="Frame 9" className="cursor-pointer" />
                        )
                      }
                      className="flex items-center justify-center w-[32%] h-[44px] md:w-full gap-[35px] px-4 text-gray-400 text-base border-gray-300 border border-solid bg-gray-50 rounded"
                    />
                    <div className="flex flex-row justify-between items-center w-[28%] md:w-full">
                      <Img
                        src="images/img_ic_round_notifications.svg"
                        alt="icround_one"
                        className="h-[24px] w-[24px]"
                      />
                      <Img
                        src="images/img_bi_chat_left_dots_fill.svg"
                        alt="bichatleft_one"
                        className="h-[24px] w-[24px]"
                      />
                      <div className="flex flex-row justify-start items-center w-[65%] gap-3">
                        <Img
                          src="images/img_unsplash_oh2s9xaclhc.png"
                          alt="unsplash_one"
                          className="h-[42px] w-[42px] md:h-auto rounded-[50%]"
                        />
                        <SelectBox
                          indicator={<Img src="images/img_arrowdown_blue_gray_500.svg" alt="arrow_down" />}
                          name="admirrajohn"
                          placeholder="Admirra John"
                          options={dropDownOptions}
                          className="flex w-[73%] pr-7 gap-px py-px text-black-900_33 text-base font-medium"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="h-px w-full rotate-[90deg] bg-blue_gray-50" />
                </div>
              </div>
            </header>
          </div>
        </div>
      </div>
    </>
  );
}

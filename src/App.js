import React, { useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Button } from "@mui/material";
import dayjs from "dayjs";
import TextField from "./InputFields/TextField";
import DatePicker from "./InputFields/DatePicker";
import PasswordField from "./InputFields/PasswordField";
import Select from "./InputFields/Select";
import TimePicker from "./InputFields/TimePicker";
import PhoneInput from "./InputFields/PhoneInput";
import SearchSelect from "./InputFields/SearchSelect";

const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  password: Yup.string().required("Password is required"),
  date: Yup.date().required("Date is required"),
  time: Yup.date().required("Time is required"),
  age: Yup.string().required("Age is required"),
  MobileNumber: Yup.string().required("Mobile Number is required"),
  AutoComplete: Yup.object().required("AutoComplete Number is required"),
});
const data = {
  name: "Shaheer",
  workDay: "2024-01-28T19:00:00.000Z",
  time: "05:21:02",
  password: "12345",
  value: "1",
  AutoComplete: { label: "morning", value: 1 },
};
export const convertTime = (timeString) => {
  if (!timeString) {
    const currentDate = dayjs().format("YYYY-MM-DD");
    return dayjs(`${currentDate}T00:00`);
  }
  const [hours, minutes, seconds] = timeString.split(":").map(Number);
  return dayjs().hour(hours).minute(minutes).second(seconds);
};
const options = [
  {
    label: "Software Enginer",
    value: "1",
  },
];

const AutoCompleteoptions = [
  { label: "morning", value: 1 },
  { label: "evening", value: 2 },
];
function App() {
  const formik = useFormik({
    initialValues: {
      name: "",
      password: "",
      date: dayjs(),
      time: dayjs(),
      age: "",
      MobileNumber: "+92",
      AutoComplete: null,
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log("formik values", values);
      const payload = {
        date: dayjs(values?.date).toISOString(),
        //--> instead of toISOstring() u can use this when on paylod the date send minus one day it is done because of the utc .format('YYYY-MM-DDTHH:mm:ss.SSS[Z]')
        time: dayjs(values?.time).format("HH:mm:ss"),
        age: values?.age,
      };
      console.log("paylode", payload);
    },
  });
  //if i wan to set the defalt values that come from server
  // useEffect(() => {
  //   if (data) {
  //     formik.setFieldValue("name", data?.name);
  //     formik.setFieldValue("date", dayjs(data?.workDay));
  //     formik.setFieldValue("password", data?.password);
  //     formik.setFieldValue("age", data?.value);
  //     formik.setFieldValue("time", convertTime(data?.time));
  //     formik.setFieldValue("AutoComplete", data?.AutoComplete);
  //   }
  // }, []);
  return (
    <form
      onSubmit={formik.handleSubmit}
      className="px-[40px] py-[40px] grid grid-cols-12 gap-10"
    >
      <div className=" col-span-6">
        <TextField
          label="Name"
          name="name"
          onBlur={formik.handleBlur}
          value={formik.values.name}
          onChange={formik.handleChange}
          error={formik.touched.name && Boolean(formik.errors.name)}
          errorMessage={
            formik.touched.name && formik.errors.name ? formik.errors.name : ""
          }
        />
      </div>
      <div className=" col-span-6 ">
        <DatePicker
          label="Date"
          name="date"
          value={formik?.values?.date}
          onChange={(newValue) => {
            formik.setFieldValue("date", newValue);
          }}
          error={formik.touched.date && Boolean(formik.errors.date)}
          errorMessage={
            formik.touched.date && formik.errors.date
              ? formik.errors.date
              : null
          }
        />
      </div>
      <div className=" col-span-6">
        <PasswordField
          label="Password"
          name="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.password && Boolean(formik.errors.password)}
          errorMessage={
            formik.touched.password && formik.errors.password
              ? formik.errors.password
              : null
          }
        />
      </div>
      <div className=" col-span-6 ">
        <TimePicker
          label="Time"
          name="time"
          value={formik.values.time}
          onChange={(time) => {
            formik.setFieldValue("time", time);
          }}
          onBlur={formik.handleBlur}
          error={formik.touched.time && Boolean(formik.errors.time)}
          errorMessage={
            formik.touched.time && formik.errors.time
              ? formik.errors.time
              : null
          }
        />
      </div>
      <div className=" col-span-6">
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          label="Select"
          name="age"
          value={formik.values.age}
          onChange={(selecedValue) => {
            formik.setFieldValue("age", selecedValue.target.value);
          }}
          onBlur={formik.handleBlur}
          error={formik.touched.age && Boolean(formik.errors.age)}
          errorMessage={
            formik.touched.age && formik.errors.age ? formik.errors.age : ""
          }
          options={options}
        />
      </div>
      <div className=" col-span-6">
        <PhoneInput
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          label="MobileNumber"
          name="MobileNumber"
          value={formik.values.MobileNumber}
          onChange={(selecedValue) => {
            formik.setFieldValue("MobileNumber", selecedValue.target.value);
          }}
          onBlur={formik.handleBlur}
          error={
            formik.touched.MobileNumber && Boolean(formik.errors.MobileNumber)
          }
          errorMessMobileNumber={
            formik.touched.MobileNumber && formik.errors.MobileNumber
              ? formik.errors.MobileNumber
              : ""
          }
          options={options}
        />
      </div>
      <div className=" col-span-6 ">
        <SearchSelect
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          label="AutoComplete"
          name="AutoComplete"
          value={formik.values.AutoComplete}
          onChange={(_, selecedValue) => {
            formik.setFieldValue("AutoComplete", selecedValue);
          }}
          onBlur={formik.handleBlur}
          error={
            formik.touched.AutoComplete && Boolean(formik.errors.AutoComplete)
          }
          errorMessage={
            formik.touched.AutoComplete && formik.errors.AutoComplete
              ? formik.errors.AutoComplete
              : ""
          }
          options={AutoCompleteoptions}
        />
      </div>
      <Button
        className=" col-span-6"
        variant="contained"
        type="submit"
        size="small"
        sx={{
          color: "white",
          fontWeight: "400",
          background: "#113D4E",
          "&:hover": {
            background: "#2E8295",
          },
        }}
        fullWidth
      >
        Submit
      </Button>
    </form>
  );
}

export default App;

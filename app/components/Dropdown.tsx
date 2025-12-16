import { useEffect, useMemo, useState } from "react";
import { DropdownProps, Option } from "../types";
import DropdownArrow from "../assets/icons/DropdownArrow";
import useOutsideClick from "../hooks/useOutsideClick";
import InputField from "./InputField";
import SearchIcon from "../assets/icons/SearchIcon";
import { Formik } from "formik";
import { dropdownSearchSchema } from "../utils/schema";

const Dropdown = <T,>({
  label,
  options,
  isGrey,
  errors,
  touched,
  required,
  name,
  placeholder = "",
  selectedOption: selected,
  onClickOption,
}: DropdownProps<T>) => {
  const updatedOptions: Array<Option> = [
    {
      label: "Select an option",
      value: "",
    },
    ...options,
  ];

  const { ref, isComponentVisible, setIsComponentVisible } =
    useOutsideClick(false);
  const [selectedOption, setSelectedOption] = useState<
    DropdownProps["options"][0]
  >({ label: placeholder, value: "" });
  const [searchValue, setSearchValue] = useState<string>("");
  const SelectedIcon = selectedOption.icon!;
  const errorMessage = errors?.[name as keyof T] as string;
  const isTouched = touched?.[name as keyof T];

  const filteredOptions = useMemo(() => {
    if (!searchValue) return updatedOptions;
    const filtered = [...updatedOptions].filter(
      (item, index) =>
        (!item.value && index === 0) ||
        item.value
          .toLowerCase()
          .trim()
          .includes(searchValue.toLowerCase().trim())
    );
    const noMatches = searchValue.length > 0 && filtered.length < 2;

    if (noMatches) {
      return [
        ...filtered,
        { label: "No matching results found", value: "", disabled: true },
      ];
    }
    return filtered;
  }, [searchValue]);

  const handleSelectOption = (option: Option) => {
    setSelectedOption(option);
    onClickOption(option);
  };

  const handleSearch = (
    event: React.ChangeEvent<HTMLInputElement>,
    handleChange: {
      (e: React.ChangeEvent<any>): void;
      <T = string | React.ChangeEvent<any>>(
        field: T
      ): T extends React.ChangeEvent<any>
        ? void
        : (e: string | React.ChangeEvent<any>) => void;
    }
  ) => {
    const { value } = event.target;
    setSearchValue(value);
    handleChange(event);
  };

  useEffect(() => {
    setSelectedOption(
      updatedOptions.find((item) => item.value === selected) ||
        updatedOptions[0]
    );
  }, [options, selected]);

  useEffect(() => {
    setSearchValue("");
  }, [isComponentVisible]);

  return (
    <div className="flex flex-col gap-2">
      {label && <span className="font-medium text-[#013941]">{label}</span>}
      <div
        ref={ref}
        className={`flex items-center gap-1 justify-between border border-[#E0E0E0] rounded-4xl py-4 px-6 cursor-pointer relative ${
          isGrey ? "bg-[#F7F7F7]" : ""
        }`}
        onClick={() => setIsComponentVisible((prev) => !prev)}
      >
        <p className="flex items-center gap-1 whitespace-nowrap">
          {selectedOption.icon && <SelectedIcon className="text-[#013941]" />}
          <span className="text-[#013941]">{selectedOption.label}</span>
        </p>
        <DropdownArrow
          className={`transform ${isComponentVisible ? "rotate-180" : ""}`}
        />
        {isComponentVisible && (
          <ul className="absolute top-full right-0 border border-[#E0E0E0] min-w-full rounded-[20px] py-4 px-3 bg-white z-10 max-h-62 overflow-auto">
            {updatedOptions.length > 10 && (
              <Formik
                initialValues={{ search: "" }}
                validateOnChange
                onSubmit={() => {}}
                validationSchema={dropdownSearchSchema}
              >
                {({
                  handleChange,
                  errors,
                  touched,
                  values,
                  setFieldTouched,
                }) => (
                  <div>
                    <InputField
                      onClick={(e) => e.stopPropagation()}
                      type="search"
                      leftIcon={<SearchIcon />}
                      errors={errors}
                      touched={touched}
                      name="search"
                      onChange={(e) => handleSearch(e, handleChange)}
                      onFocus={() => setFieldTouched("search", true)}
                      value={values.search}
                      placeholder="Search"
                    />
                  </div>
                )}
              </Formik>
            )}
            {filteredOptions.map(({ label, value, icon: Icon, disabled }) => (
              <li
                key={label}
                className="flex items-center rounded-xl p-3 gap-2 hover:bg-[#F5F5F5] text-[#013941] max-w-xs md:max-w-md text-sm font-medium whitespace-nowrap"
                onClick={(e) => {
                  disabled
                    ? e.stopPropagation()
                    : handleSelectOption({ label, value, icon: Icon });
                }}
              >
                {Icon && <Icon className="w-6 aspect-square" />}
                {label}
              </li>
            ))}
          </ul>
        )}
      </div>
      {isTouched && !!errorMessage && (
        <span className="text-sm text-red-500">{errorMessage}</span>
      )}
    </div>
  );
};

export default Dropdown;

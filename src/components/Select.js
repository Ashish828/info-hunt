import React, { useState, useEffect } from "react";
import { StyleSheet, View } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";

const Select = ({ categories, setData, data }) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("general");
  const [items, setItems] = useState(categories);

  return (
    <DropDownPicker
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
      defaultIndex={1}
      containerStyle={{ width: "50%" }}
      style={{
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
      }}
      dropDownStyle={{
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
      }}
      onChangeValue={(value) => {
        setData((prevState) => ({
          ...prevState,
          category: value,
        }));
      }}
    />

    // <Picker
    //   style={styles.picker}
    //   selectedValue={selected}
    //   itemStyle={{ height: 50 }}
    //   mode="dropdown"
    //   dropDownStyle={{ height: 2 }}
    //   dropdownIconColor="black"
    //   onValueChange={(itemValue, itemIndex) => setSelected(itemValue)}
    // >
    //   {categories.map((category) => (
    //     <Picker.Item
    //       key={category.type}
    //       label={category.type}
    //       value={category.type}
    //     />
    //   ))}
    // </Picker>
  );
};

const styles = StyleSheet.create({
  picker: {
    color: "black",
    width: "50%",
    marginBottom: "5%",
    // fontFamily: "ConcertOne_400Regular",
  },
});

export default Select;

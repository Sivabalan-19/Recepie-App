import Autocomplete from "@mui/joy/Autocomplete";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import React from "react";
import useMealStore from "../../Store/random";

function AutocompleteInput({
  header,
  value,
  funtionCall,
  dotvalue,
  dropdownvalue,
}) {
  const { changevalue } = useMealStore();
  return (
    <FormControl>
      <FormLabel sx={{ color: "#f97316" }}>{header}</FormLabel>
      <Autocomplete
        placeholder={`Select ${header}`}
        options={dropdownvalue}
        value={value}
        getOptionLabel={(option) => option[dotvalue]}
        onChange={(event, newValue) => {
          {
            changevalue(value, newValue, header);
            funtionCall(newValue);
          }
        }}
        sx={{
          width: 400,
          border: "2px solid #fbbf24", // Light orange border
          borderRadius: "12px",
          backgroundColor: "#fff7ed", // Soft pastel orange
          boxShadow: "0 4px 6px rgba(251, 146, 60, 0.15)", // Subtle shadow
          transition: "all 0.3s ease-in-out",
          "& .MuiOutlinedInput-root": {
            "&:focus-within": {
              border: "none", // Remove default focus border
              outline: "none", // Remove outline
              boxShadow: "0 0 8px rgba(251, 146, 60, 0.25)", // Custom soft glow
            },
          },
          "& .MuiAutocomplete-input": {
            color: "#4d5160", // Orange text
            fontWeight: "500",
          },
          "& .MuiAutocomplete-popupIndicator": {
            color: "#fb923c",
          },
          "& .MuiAutocomplete-listbox": {
            backgroundColor: "#fffaf3",
            color: "#ea580c",
            borderRadius: "8px",
            border: "1px solid #fbbf24",
          },
          "& .MuiAutocomplete-option:hover": {
            backgroundColor: "#ffedd5",
            color: "#f97316",
          },
        }}
      />
    </FormControl>
  );
}

export default AutocompleteInput;

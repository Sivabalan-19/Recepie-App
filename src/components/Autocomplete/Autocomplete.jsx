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
    <FormControl
      sx={{
        width: { xs: "100%", sm: "300px", md: "350px", lg: "400px" },
        my: 1,
      }}
    >
      <FormLabel
        sx={{
          color: "#f97316",
          fontSize: "0.9rem",
          mb: 0.3,
          lineHeight: 1.3,
        }}
      >
        {header}
      </FormLabel>
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
          width: "100%",
          border: "2px solid #fbbf24",
          borderRadius: "10px",
          backgroundColor: "#fff7ed",
          boxShadow: "0 4px 6px rgba(251, 146, 60, 0.15)",
          transition: "all 0.3s ease-in-out",
          fontSize: "0.95rem",
          // Reduced height styling
          "& .MuiAutocomplete-inputRoot": {
            minHeight: "38px",
            padding: "2px 8px",
          },
          "& .MuiOutlinedInput-root": {
            "&:focus-within": {
              border: "none",
              outline: "none",
              boxShadow: "0 0 8px rgba(251, 146, 60, 0.25)",
            },
          },
          "& .MuiAutocomplete-input": {
            color: "#4d5160",
            fontWeight: "500",
            padding: "4px 8px",
            height: "22px", // Reduced height
          },
          "& .MuiAutocomplete-popupIndicator": {
            color: "#fb923c",
            padding: "4px",
            height: "32px", // Reduced height
          },
          "& .MuiAutocomplete-clearIndicator": {
            padding: "4px",
            height: "32px", // Reduced height
          },
          "& .MuiAutocomplete-endAdornment": {
            top: "calc(50% - 14px)", // Better vertical alignment
          },
          "& .MuiAutocomplete-listbox": {
            backgroundColor: "#fffaf3",
            color: "#ea580c",
            borderRadius: "8px",
            border: "1px solid #fbbf24",
            fontSize: "0.95rem",
          },
          "& .MuiAutocomplete-option": {
            padding: "6px 12px", // Reduced padding
            minHeight: "32px", // Reduced option height
          },
          "& .MuiAutocomplete-option:hover": {
            backgroundColor: "#ffedd5",
            color: "#f97316",
          },
        }}
        slotProps={{
          popper: {
            sx: {
              width: "auto",
              "& .MuiAutocomplete-listbox": {
                maxWidth: { xs: "calc(100vw - 32px)", sm: "none" },
              },
            },
          },
        }}
      />
    </FormControl>
  );
}

export default AutocompleteInput;

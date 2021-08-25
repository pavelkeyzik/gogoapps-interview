import { KeyboardEvent, useState } from "react";
import { ChangeEvent } from "react";

import { useVideosSearchDispatch } from "../core";
import { Input } from "../design-system";

function SearchVideoInput() {
  const [search, setSearch] = useState("");
  const dispatch = useVideosSearchDispatch();

  function changeInputValue(event: ChangeEvent<HTMLInputElement>) {
    const value = event.currentTarget.value;

    setSearch(value);
  }

  function hadleKeyDown(event: KeyboardEvent<HTMLInputElement>) {
    if (event.key === "Enter") {
      dispatch({
        type: "UPDATE_SEARCH_VALUE",
        payload: {
          search: search || null,
        },
      });
    }
  }

  return (
    <Input
      placeholder="Search..."
      value={search}
      onChange={changeInputValue}
      onKeyDown={hadleKeyDown}
    />
  );
}

export { SearchVideoInput };

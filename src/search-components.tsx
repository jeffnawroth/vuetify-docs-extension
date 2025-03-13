import { ActionPanel, Action, List } from "@raycast/api";
import components from "./components";
import { Filter } from "./types";
import { useState } from "react";

type State = {
  filter: Filter;
  searchText: string;
};

export default function Command() {
  const [state, setState] = useState<State>({
    filter: Filter.ALL,
    searchText: "",
  });

  const filteredSections = (() => {
    if (state.filter === Filter.ALL) {
      return components ?? [];
    }

    return components?.filter((section) => section.section === state.filter) ?? [];
  })();

  return (
    <List
      searchText={state.searchText}
      searchBarAccessory={
        <List.Dropdown
          tooltip="Select Section"
          value={state.filter}
          onChange={(newValue) => setState((previous) => ({ ...previous, filter: newValue as Filter }))}
        >
          <List.Dropdown.Item title="All" value={Filter.ALL} />
          <List.Dropdown.Item title="Containment" value={Filter.CONTAINMENT} />
          <List.Dropdown.Item title="Navigation" value={Filter.NAVIGATION} />
          <List.Dropdown.Item title="Form inputs and controls" value={Filter.FORM_INPUTS_CONTROLS} />
          <List.Dropdown.Item title="Layouts" value={Filter.LAYOUTS} />
          <List.Dropdown.Item title="Selection" value={Filter.SELECTION} />
          <List.Dropdown.Item title="Data and display" value={Filter.DATA_DISPLAY} />
          <List.Dropdown.Item title="Feedback" value={Filter.FEEDBACK} />
          <List.Dropdown.Item title="Images and icons" value={Filter.IMAGES_ICONS} />
          <List.Dropdown.Item title="Pickers" value={Filter.PICKERS} />
          <List.Dropdown.Item title="Providers" value={Filter.PROVIDERS} />
          <List.Dropdown.Item title="Miscellaneous" value={Filter.MISCELLANEOUS} />
        </List.Dropdown>
      }
      filtering
      onSearchTextChange={(newValue) => {
        setState((previous) => ({ ...previous, searchText: newValue }));
      }}
    >
      {filteredSections.map((section, index) => (
        <List.Section key={index} title={section.section}>
          {section.items.map((item) => (
            <List.Item
              key={item.title}
              title={item.title}
              actions={
                <ActionPanel>
                  <Action.OpenInBrowser url={item.url} />
                  <Action.CopyToClipboard content={item.url} title="Copy URL" />
                </ActionPanel>
              }
            />
          ))}
        </List.Section>
      ))}
    </List>
  );
}

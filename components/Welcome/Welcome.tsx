import { Combobox, TextInput, useCombobox } from '@mantine/core';

export function Welcome() {
  const store = useCombobox({
    defaultOpened: true,
  });
  return (
    <>
      <Combobox store={store} withinPortal={false}>
        <Combobox.Target>
          <TextInput
            label="Test input"
            onFocus={() => store.openDropdown()}
            onBlur={() => store.closeDropdown()}
          />
        </Combobox.Target>
        <Combobox.Dropdown></Combobox.Dropdown>
      </Combobox>
    </>
  );
}

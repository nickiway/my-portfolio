import { useAppDispatch, useAppSelector } from 'lib/hooks';
import { toggleTheme } from 'lib/slices/themeSlice';

import { styled } from '@mui/material/styles';
import { DarkMode, LightMode } from '@mui/icons-material';
import { Checkbox, CheckboxProps } from '@mui/material';

const StyledCheckbox = styled(Checkbox)<CheckboxProps>(({ theme }) => ({
  '&.MuiCheckbox-root': {
    color: 'white',
  },
}));

const ThemeSwitch = () => {
  const dispatch = useAppDispatch();
  const { theme } = useAppSelector((state) => state.themeReducer);

  const isDarkMode = theme === 'dark';

  const onChange = () => {
    dispatch(toggleTheme());
  };

  return (
    <StyledCheckbox
      checked={isDarkMode}
      onChange={onChange}
      checkedIcon={<DarkMode />}
      icon={<LightMode />}
    />
  );
};

const switchBase = {
  '&.MuiSvgIcon-root': {},
};
export default ThemeSwitch;

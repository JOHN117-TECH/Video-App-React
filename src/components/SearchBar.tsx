import { ChangeEvent, useState } from 'react';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
const SearchBar: React.FC<{ onSubmit: (searchItem:string) => Promise<void> }> = ({ onSubmit }) => {
  const [search, setSearch] = useState<string>('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target?.value);
  };

  const onKeyPress: React.KeyboardEventHandler<HTMLDivElement> = (e) => {
    if (e.key === 'Enter') {
      onSubmit(search);
    }
  };

  return (
    <Paper elevation={7} style={{ padding: '25px' }}>
      <TextField
        fullWidth
        label="Search..."
        value={search}
        onChange={handleChange}
        onKeyPress={onKeyPress}
      />
    </Paper>
  );
};

export default SearchBar;

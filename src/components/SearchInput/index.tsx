import { Input } from "./styles";

interface SearchInpusProps {
  type?: string
  placeholder: string
  value: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void; // Tipo corrigido
}

export const SearchInput: React.FC<SearchInpusProps> = ({
  type,
  placeholder,
  value,
  onChange
}) => {
  return (
    <Input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  )
}
import React from "react";
import { useQueryParameter, useReplaceQueryParameter } from "../../../../common/utils/queryParamaters";
import Input from "../Input";
import searchQueryParamName from "../searchQueryParamName";
import { Wrapper } from "./styled";

interface OnInputChangeProps {
	target: {
		value : string,
	},
}

const Search = () => {
	const query = useQueryParameter(searchQueryParamName);
	const replaceQueryParameter = useReplaceQueryParameter();
	
	const onInputChange = ({target}: OnInputChangeProps) => {
		replaceQueryParameter({
			key: searchQueryParamName,
			value: target.value.trim() !== "" ? target.value : undefined,
		});
	};
	
	return (
		<Wrapper>
			<Input
				placeholder="Filtruj zadania"
				value={query || ""}
				onChange={onInputChange}
			/>
		</Wrapper>
	);
};

export default Search;
import { useHistory, useLocation } from "react-router-dom";

interface QueryString {
	key: string,
	value: string | undefined,
}

const useQueryParameter = (key: string) => {
	const location = useLocation();
	return new URLSearchParams(location.search).get(key);
};

const useReplaceQueryParameter = () => {
	const location = useLocation();
	const history = useHistory();
	const searchParams = new URLSearchParams(location.search);
	
	return ({key, value}: QueryString) => {
		if (!value) {
			searchParams.delete(key);
		} else {
			searchParams.set(key, value);
		}
		
		
		history.push(`${location.pathname}?${searchParams.toString()}`);
	};
};

export { useReplaceQueryParameter, useQueryParameter };
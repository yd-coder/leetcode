import { useEffect, useState } from "react";

/* 检测组件是否已经挂载 */
function useHasMounted() {
	const [hasMounted, setHasMounted] = useState(false);

	useEffect(() => {
		setHasMounted(true);
	}, []);

	return hasMounted;
}

export default useHasMounted;

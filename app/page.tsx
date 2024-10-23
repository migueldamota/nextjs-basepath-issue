"use client";

import { anyAction } from "./actions";

export default function Page() {
	return (
		<div>
			<h1>Page</h1>

			<form action={anyAction}>
				<button>Any action</button>
			</form>
		</div>
	);
}

import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectPosts } from "../selectors/posts.selectors";
import { selectIsLoading } from "../selectors/ui.selectors";
import { loadPosts } from "../actions/posts.actions";

const Main = () => {
	const allPosts = useSelector(selectPosts);
	const isLoading = useSelector(selectIsLoading);
	const dispatch = useDispatch();

	useEffect(() => {
		if (!allPosts) {
			dispatch(loadPosts);
		}
	}, [dispatch, allPosts]);

	return (
		<>
			{isLoading ? (
				"Loading posts..."
			) : (
				<div>
					<h1>Sample of a React clean separation of concerns</h1>
					<ul>
						{allPosts?.map((post) => (
							<li key={post.id}>{post.title}</li>
						))}
					</ul>
				</div>
			)}
		</>
	);
};

export default Main;

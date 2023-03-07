import React from "react";
import { useState, useEffect } from "react";

const GithubCards = () => {
	const url = "https://api.github.com/users";
	const [users, setUsers] = useState([]);
	const gitHubUsers = async () => {
		const response = await fetch(url);
		const usersData = await response.json();
		console.log(usersData);
		setUsers(usersData);
	};
	useEffect(() => {
		gitHubUsers();
	}, []);

	return (
		<div>
			<h1>Github Users</h1>
			<ul className="user-container">
				{users.map((user) => {
                    const { login, avatar_url, node_id, html_url } = user;
					return (
						<li className="user-list" key={node_id}>
							<a href={html_url} target="_blank" rel="noreferrer">
								<img src={avatar_url} alt={login} />
								<ul className="user-container--info-container">
									<li className="user-info--name">{login}</li>
									<li className="user-info--profile">
										Profile
									</li>
								</ul>
							</a>
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default GithubCards;

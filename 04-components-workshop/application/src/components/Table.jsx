import UserRow from "./UserRow";
import UserInfo from "./UserInfo";
import UserDelete from "./UserDelete";
import usersServices from "../services/usersServices";
import { useState, useEffect } from "react";
import UserCreate from "./UserCreate";
import Paginator from "./Paginator";
import Search from "./Search";


export default function Table(props) {

	const [users, setUsers] = useState([]);
	const [infoUser, setInfoUser] = useState(null);
	const [deleteUser, setDeleteUser] = useState(null);
	const [showCreateUser, setShowCreateUser] = useState(false);
	const [editUser, setEditUser] = useState(null);

	useEffect(() => {
		usersServices.getAll()
			.then(result => setUsers(result))
	}, [])

	const onInfoClickHandler = async (userId) => {
		const userData = await usersServices.getUser(userId);
		setInfoUser(userData);
	}

	const onInfoCloseHandler = () => {
		setInfoUser(null);
	}

	const onDeleteClickHandler = async (userId) => {
		usersServices.getUser(userId)
			.then(user => setDeleteUser(user))
	}

	const onDeleteCancelHandler = () => {
		setDeleteUser(null);
	}

	const onDeleteConfirmHandler = async () => {
		usersServices.deleteUser(deleteUser._id)
			.then(response => {
				if (response.status === 200) {

					setUsers(users => users.filter(user => user._id !== deleteUser._id));
					setDeleteUser(null);

				}
			});
	}

	const onCreateUserClickHandler = () => {
		setShowCreateUser(true);
	}

	const onCloseCreateEditUserHandler = (_id) => {
		setEditUser(null);
		setShowCreateUser(false);
		console.log('ON CLOSE ID...', _id);
	}

	const onCreateUserHandler = (e) => {
		e.preventDefault();
		const formData = new FormData(e.target.parentElement.parentElement);
		const userData = Object.fromEntries(formData);

		usersServices.userCreate(userData)
			.then(response => {
				if (response.status === 200) {
					return response.json()
				}
			})
			.then(user => {
				setUsers(users => [...users, user]);
				setShowCreateUser(false);
			});

	}

	const onEditUserClickHandler = (userId) => {
		usersServices.getUser(userId)
			.then(user => {
				setEditUser(user);
			})
	}

	const onEditHandler = (e, userId) => {
		e.preventDefault();
		const formData = new FormData(e.target.parentElement.parentElement);
		const userData = Object.fromEntries(formData);

		usersServices.userEdit(userData, userId)
			.then(response => {
				if (response.status === 200) {
					return response.json()
				}
			})
			.then(updatedUser => {
				setUsers(state => state.map(user => user._id === userId ? updatedUser : user));
				setEditUser(null);
			})
	}

	return (
		<>
			<section className="card users-container">
				{
					infoUser
					&&
					<UserInfo
						onClose={onInfoCloseHandler}
						{...infoUser}
					/>
				}

				{
					deleteUser
					&&
					<UserDelete
						_id={deleteUser}
						firstName={deleteUser.firstName}
						lastName={deleteUser.lastName}
						onDelete={onDeleteConfirmHandler}
						onCancel={onDeleteCancelHandler}
					/>
				}

				{
					showCreateUser
					&&
					<UserCreate
						onClose={onCloseCreateEditUserHandler}
						onCreate={onCreateUserHandler}
					/>
				}

				{
					editUser
					&&
					<UserCreate
						onClose={onCloseCreateEditUserHandler}
						onEdit={onEditHandler}
						{...editUser}
					/>
				}





				{/* <!-- Table component --> */}
				<div className="table-wrapper">

					{users.length === 0 ? <div className="loading-shade">
						<div className="spinner"></div>
					</div> : <></>}


					{/* 
			<!-- Overlap components  -->

			<!-- <div className="loading-shade"> -->
			<!-- Loading spinner  -->
			<!-- <div className="spinner"></div> -->
			<!-- 
			No users added yet  -->

			<!-- <div className="table-overlap">
			<svg
			aria-hidden="true"
			focusable="false"
			data-prefix="fas"
			data-icon="triangle-exclamation"
			className="svg-inline--fa fa-triangle-exclamation Table_icon__+HHgn"
			role="img"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 512 512"
			>
			<path
			fill="currentColor"
			d="M506.3 417l-213.3-364c-16.33-28-57.54-28-73.98 0l-213.2 364C-10.59 444.9 9.849 480 42.74 480h426.6C502.1 480 522.6 445 506.3 417zM232 168c0-13.25 10.75-24 24-24S280 154.8 280 168v128c0 13.25-10.75 24-23.1 24S232 309.3 232 296V168zM256 416c-17.36 0-31.44-14.08-31.44-31.44c0-17.36 14.07-31.44 31.44-31.44s31.44 14.08 31.44 31.44C287.4 401.9 273.4 416 256 416z"
			></path>
			</svg>
			<h2>There is no users yet.</h2>
			</div> -->

			<!-- No content overlap component  -->

			<!-- <div className="table-overlap">
			<svg
			aria-hidden="true"
			focusable="false"
			data-prefix="fas"
			data-icon="triangle-exclamation"
			className="svg-inline--fa fa-triangle-exclamation Table_icon__+HHgn"
			role="img"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 512 512"
			>
			<path
			fill="currentColor"
			d="M506.3 417l-213.3-364c-16.33-28-57.54-28-73.98 0l-213.2 364C-10.59 444.9 9.849 480 42.74 480h426.6C502.1 480 522.6 445 506.3 417zM232 168c0-13.25 10.75-24 24-24S280 154.8 280 168v128c0 13.25-10.75 24-23.1 24S232 309.3 232 296V168zM256 416c-17.36 0-31.44-14.08-31.44-31.44c0-17.36 14.07-31.44 31.44-31.44s31.44 14.08 31.44 31.44C287.4 401.9 273.4 416 256 416z"
			></path>
			</svg>
			<h2>Sorry, we couldn't find what you're looking for.</h2>
			</div> -->

			<!-- On error overlap component  -->

			<!-- <div className="table-overlap">
			<svg
			aria-hidden="true"
			focusable="false"
			data-prefix="fas"
			data-icon="triangle-exclamation"
			className="svg-inline--fa fa-triangle-exclamation Table_icon__+HHgn"
			role="img"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 512 512"
			>
			<path
			fill="currentColor"
			d="M506.3 417l-213.3-364c-16.33-28-57.54-28-73.98 0l-213.2 364C-10.59 444.9 9.849 480 42.74 480h426.6C502.1 480 522.6 445 506.3 417zM232 168c0-13.25 10.75-24 24-24S280 154.8 280 168v128c0 13.25-10.75 24-23.1 24S232 309.3 232 296V168zM256 416c-17.36 0-31.44-14.08-31.44-31.44c0-17.36 14.07-31.44 31.44-31.44s31.44 14.08 31.44 31.44C287.4 401.9 273.4 416 256 416z"
			></path>
			</svg>
			<h2>Failed to fetch</h2>
			</div> -->
			<!-- </div> --> */}


					<Search />

					<table className="table">
						<thead>
							<tr>
								<th>
									Image
								</th>
								<th>
									First name<svg aria-hidden="true" focusable="false" data-prefix="fas"
										data-icon="arrow-down" className="icon svg-inline--fa fa-arrow-down Table_icon__+HHgn" role="img"
										xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
										<path fill="currentColor"
											d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z">
										</path>
									</svg>
								</th>
								<th>
									Last name<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-down"
										className="icon svg-inline--fa fa-arrow-down Table_icon__+HHgn" role="img" xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 384 512">
										<path fill="currentColor"
											d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z">
										</path>
									</svg>
								</th>
								<th>
									Email<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-down"
										className="icon svg-inline--fa fa-arrow-down Table_icon__+HHgn" role="img" xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 384 512">
										<path fill="currentColor"
											d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z">
										</path>
									</svg>
								</th>
								<th>
									Phone<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-down"
										className="icon svg-inline--fa fa-arrow-down Table_icon__+HHgn" role="img" xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 384 512">
										<path fill="currentColor"
											d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z">
										</path>
									</svg>
								</th>
								<th>
									Created
									<svg aria-hidden="true" focusable="false" data-prefix="fas"
										data-icon="arrow-down" className="icon active-icon svg-inline--fa fa-arrow-down Table_icon__+HHgn" role="img"
										xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
										<path fill="currentColor"
											d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z">
										</path>
									</svg>
								</th>
								<th>Actions</th>
							</tr>
						</thead>
						<tbody>

							{users.map(user =>
								<UserRow
									key={user._id}
									onInfo={onInfoClickHandler}
									onDelete={onDeleteClickHandler}
									onCreate={onCreateUserClickHandler}
									onEdit={onEditUserClickHandler}
									{...user}
								/>
							)}
						</tbody>

					</table>

				</div>

				<button className="btn-add btn" onClick={onCreateUserClickHandler}>Add new user</button>
				<Paginator />
			</section>
		</>
	)
}
import React from "react";
import Pagination from "../common/Pagination/Pagination";
import User from "./User";

const Users = (props) => {
    return (
        <div>
            <Pagination totalItemsCount={props.totalUsersCount}
                        pageSize={props.pageSize}
                        currentPage={props.currentPage}
                        onPageChanged={props.onPageChanged}/>

            <User users={props.users}
                  followingProgress={props.followingProgress}
                  unfollow={props.unfollow}
                  follow={props.follow}/>
        </div>
    )
}

export default Users
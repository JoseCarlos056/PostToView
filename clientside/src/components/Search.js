import React, { useEffect, useState } from 'react';
import { SearchContent, Person } from './Styles/Search'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { getAllUsers } from './functions/UserFunctions';
import jwt from 'jwt-decode';
export const Search = (input) => {
    const [users, setUsers] = useState([]);
    const [usersFilters, setUsersFilters] = useState([]);
    const userId = jwt(localStorage.token).id
    const searchingFor = (term) => {
        return (x) => {
            return x.name.toLowerCase().includes(term.toLowerCase()) || !term;
        }
    }
    const filterData = (data) => {
        let dataFilter = users.filter(searchingFor(data)).map((x) => {
            return x;
        })
        setUsersFilters(dataFilter)
    }
    useEffect(() => {
        filterData(input.input);
    }, [input.input]);
    useEffect(() => {
        filterData(input.input);
    }, [users]);
    const getUsers = async () => {
        getAllUsers(localStorage.token).then(response => {
            if (response) {
                response.splice(response.findIndex((values) => {
                    return values._id === userId
                }), 1)
               
                return setUsers(response);
            }
        })
    }
    useEffect(() => {
        getUsers();
    }, []);
    return (
        <SearchContent>
            {usersFilters.map((values) => {
                return (
                    <Person image={values.profileImage}>
                        <div className='img'>
                        </div>
                        <div className='name'>
                            {values.name}
                        </div>
                        <div className='add'>
                            <FontAwesomeIcon icon={faUserPlus} />
                        </div>
                    </Person>
                )
            })}



        </SearchContent>
    )
}
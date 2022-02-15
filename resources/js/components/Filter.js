import React from "react";
import { GlobalContext } from "../context/GlobalState";

export default function Filter() {
    const [keyword, setKeyword] = React.useState("");
    const [type, setType] = React.useState("");
    const [startDate, setStartDate] = React.useState("");
    const [endDate, setEndDate] = React.useState("");

    const { filterTasks } = React.useContext(GlobalContext);

    const handleSearch = (e) => {
        e.preventDefault();
        console.log("Searching");
        filterTasks({ keyword: keyword, type: type, startDate: startDate, endDate: endDate });
    }

    return (
        <div className="filter">
            <div className="form-group">
                <span className="form-group-icon">
                    <i className="fa fa-search fa-fw"></i>
                </span>
                <input
                    className="form-control"
                    type="text"
                    value={keyword}
                    onChange={(e) => setKeyword(e.target.value)}
                    placeholder="Search phrase or keyword"
                />
            </div>
            <div className="form-group">
                <select className="form-control" value={type} onChange={(e) => setType(e.target.value)} name="" id="">
                    <option value="Call">Call</option>
                    <option value="Deadline">Deadline</option>
                    <option value="Email">Email</option>
                    <option value="Meeting">Meeting</option>
                </select>
            </div>
            <div className="form-group" style={{ maxWidth: "495px" }}>
                <input
                    type="datetime-local"
                    className="form-control"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                    name=""
                    id=""
                />
                <span className="form-group-text">-</span>
                <input
                    type="datetime-local"
                    className="form-control"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                    name=""
                    id=""
                />
            </div>
            <div className="form-group">
                <button
                    className="btn btn-default"
                    onClick={handleSearch}
                    name="filter"
                >
                    Search
                </button>
            </div>
        </div>
    );
}

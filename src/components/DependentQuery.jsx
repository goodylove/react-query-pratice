import React from "react";
import axios from "axios";
import { useQuery } from "react-query";

const fetchUsers = (email) => {
  return axios.get(`http://localhost:3000/users/${email}`);
};
// using te channelId to fetch channel courses

const fetchCourse = (channelId) => {
  return axios.get(`http://localhost:3000/channels/${channelId}`);
};

function DependentQuery({ email }) {
  const { data: user } = useQuery(["user", email], () => fetchUsers(email));
  const channelId = user?.data.channelId;

  const { data: course } = useQuery(
    ["course", channelId],
    () => fetchCourse(channelId),
    {
      enabled: !!channelId,
    }
  );
  //   const { data } = course;
  console.log(course?.data);
  return (
    <div>
      {course?.data.courses.map((item, index) => (
        <div key={index}>{item}</div>
      ))}
    </div>
  );
}

export default DependentQuery;

import React, { useEffect, useState } from 'react';

export default function Functional({ getData }) {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    console.log('Child component-useEffect- getData');

    getData('comments')
      .then((res) => res.json()) //return json
      .then((res) => {
        const comments = res.data;
        setComments(comments);
      });
  }, [getData]);

  return (
    <div>
      <div>Functional</div>
      <p>{JSON.stringify(comments)}</p>
    </div>
  );
}

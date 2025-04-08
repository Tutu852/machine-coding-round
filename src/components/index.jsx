import useGetQuery from "../hooks/useGetQuery";

// const Index = () => {
//   const { data, loading } = useGetQuery({ url: 'https://jsonplaceholder.org/users' });

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="h-full">
//        <ul>
//         {
//           data.map((user)=>(
//             <li key={user.id}>{user.firstname}</li>
//           ))
//         }
//       </ul>
//     </div>
//   );
// };

// export default Index;




const Index = () => {
  const {data,loading} = useGetQuery({ url: 'https://jsonplaceholder.org/users' })
  if (loading){
    return <div>Loading...</div>
  }
  return (
    <div className="h-full">
      <ul>
        {
          data?.map((user)=>(
            <li key={user.id} >{user.firstname}</li>
          ))
        }
      </ul>
    </div>
  )
}

export default Index
// const App = () => {
//   const { currentUser } = useContext(AuthContext);
//   console.log("right here ", currentUser);
//   return (
//     <Router>
//       <div>
//         <nav>
//           <ul>
//             {!!currentUser ? (
//               <>
//                 <li>
//                   <Link to="/">DashBoard</Link>
//                 </li>
//                 <li>
//                   <Link to="/quiz">Quiz</Link>
//                 </li>
//               </>
//             ) : (
//               <>
//                 <li>
//                   <Link to="/signup">Sign Up</Link>
//                 </li>
//                 <li>
//                   <Link to="/login">Members Login</Link>
//                 </li>
//               </>
//             )}
//           </ul>
//           <li>
//             <Link to="/stylist">Stylist</Link>
//           </li>
//         </nav>
//         <PrivateRoute exact path="/" component={Home} />
//         <Route exact path="/login" component={Login} />
//         <Route exact path="/quiz" component={List} />
//       </div>
//     </Router>
//   );
// };

import React from "react";
const UserContext=React.createContext();
export default UserContext;

/**NOTE:
 * When you make any context ,you have make also ContextProvider 
 * to provide data as "Global variable" so that inner components
 * can have the access of it.
 * 
 * EXAMPLE:-
 * <UserContext>
 * <Login/>
 *      <Card>
 *          <Data/>
 *      </Card>
 * </UserContext>
 */
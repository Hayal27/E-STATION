// import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useAuth } from "./components/Auths/AuthContex";
import Login from "./components/login/Login";
import 'bootstrap/dist/css/bootstrap.min.css';
import ProfilePictureUpload from "./components/header/profile/ProfilePictureUpload.jsx";


//admin
import  Header from "./components/header/Header";
import Dashboard from "./components/admin/Dashboard";
import UserRegistration from "./components/admin/UserRegistration";
import UserTable from "./components/admin/UserTable";
import Footer from "./components/footer/Footer";
// import EmployeeRegistration 
import EmployeeRegistration from './components/admin/employeeRegistration';





// team leader
import TeamleaderDashboard from "./components/teamleader/TeamleaderDashboard";

//                        // Teamleader plan 



import TeamleaderSubmittedViewPlan from "./components/teamleader/addplan/TeamleaderSubmittedViewPlan";
import TeamleaderViewOrgPlan from "./components/teamleader/addplan/TeamleaderViewOrgPlan";
import TeamleaderUpdatePlan from "./components/teamleader/addplan/view/TeamleaderUpdatePlan";
import TeamleaderViewDeclinedPlan from "./components/teamleader/addplan/TeamleaderViewDeclinedPlan";


                     // report

import TeamleaderViewReport from "./components/teamleader/report/TeamleaderViewReport";
import TeamleaderViewOrgReport from "./components/teamleader/report/TeamleaderViewOrgReport";
import TeamleaderSubmittedViewReport from "./components/teamleader/report/TeamleaderSubmittedViewReport";
import TeamleaderAddReport from "./components/teamleader/addplan/view/TeamleaderAddReport";
// import TeamleaderUpdateReport from "./components/teamleader/report/view/TeamleaderUpdateReport";
import TeamleaderViewDeclinedReport from "./components/teamleader/report/TeamleaderViewDeclinedReport";








function App() {
  const { state, dispatch } = useAuth();

  return (
    <>
      <BrowserRouter>
        {state.isAuthenticated ? 
        
           
          <>
          <Header />

          {state.role_id==1?
          <Header/>         
           :
          
          state.role_id==2?
          <Header/>

          :
          state.role_id==9?
          <Header/>
          :

          state.role_id==3?
          <Header/>
          :

          state.role_id==5?
          <Header/>
          :
          state.role_id==6?
          <Header/>
          :
          state.role_id==7?
          <Header/>

          :

          state.role_id==8?
          <Header/>
          :


       <></>


          }



                <Routes>
              {/* admin */}

            {state.role_id==1?<>
            <Route path="/ProfilePictureUpload" element={<ProfilePictureUpload />} />
            <Route path="/" element ={<Dashboard/>}/>
            <Route path="/UserForm" element ={<UserRegistration/>}/>
            <Route path="/UserTable" element ={<UserTable/>}/>
            <Route path="/EmployeeForm" element={<EmployeeRegistration/>} />
            

            {/* CEO */}

            </>:state.role_id==2?
            <>


  


            {/* Plan And report manager */}

            </>:state.role_id==9?
            <>



            {/* General manager */}

            </>:state.role_id==3?
            <>


            {/* deputy manager */}

            </>:state.role_id==5?
            <>

            {/* service head */}


            </>:state.role_id==6?
            <>


             {/* team leader */}
            </>:state.role_id==7?
            <>
<Route path="/ProfilePictureUpload" element={<ProfilePictureUpload />} />

            <Route path="/" element={<TeamleaderDashboard />} />
    <Route path="/plan/View" element={<TeamleaderSubmittedViewPlan />} />
    <Route path="/report/Viewapprovedreport" element={<TeamleaderSubmittedViewReport />} />
    <Route path="/plan/PlanSteps/Add" element={<PlanSteps/>} />
    <Route path="/plan/View_myplan" element={<StaffViewPlan />} />
    <Route path="/report/View_myreport" element={<TeamleaderViewReport />} />
    <Route path="/report/view/update/:reportId" element={<UpdateReport />} />
    <Route path="/plan/view/add-report/:planId" element={<AddReport />} />
    <Route path="/plan/ViewOrgPlan" element={<TeamleaderViewOrgPlan />} />
    <Route path="/report/ViewOrgReport" element={<TeamleaderViewOrgReport />} />
    <Route path="/report/TeamleaderViewDeclinedReport" element={<TeamleaderViewDeclinedReport />} />
    <Route path="/plan/TeamleaderViewDeclinedPlan" element={<TeamleaderViewDeclinedPlan/>} />
    <Route path="/plan/TeamleaderViewDeclinedPlan/view/update/:planId" element={<TeamleaderUpdatePlan />} />
    <Route path="/plan/View_myplan/add-report/:planId" element={<TeamleaderAddReport />} />

          {/* update the plan */}
    <Route path="/plan/View_myplan/update/:planId" element={<TeamleaderUpdatePlan />} />

          {/* 


           
               {/* staff */}

            </>:state.role_id==8?<>


            
  
            </>:
            <>
            
          
           
            
            </>
            }
           
          </Routes>
          <Footer/>

          
          </>
              
              
             
          : 
          <Login />
        }
      </BrowserRouter>
    </>
  );
}

export default App;


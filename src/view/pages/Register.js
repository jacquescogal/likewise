import TextField from '@mui/material/TextField';
import Button from "../components/common/Button";
import Stack from '@mui/material/Stack';
import { useEffect ,useState} from "react";

//datetime picker
import * as React from 'react';
import dayjs from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';

//course ,gender and study year picker
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


const Register = ({email,setEmail, setPassword, handleAction,
setUsername,setImageUrl,gender,setGender,DOB,setDOB,course,setCourse,studyYear,setStudyYear}) => {

  //Runs once after render
  useEffect(()=>{
    setEmail('');
    setPassword('');
  },[])

  return (
    <div style={{
      margin: 'auto',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }} >
      <Stack spacing={1.5}>
      <b style={{alignSelf:'center', fontSize:40}}>Register</b>
      <TextField label="Username" onChange={e=>setUsername(e.target.value)}/>
      <TextField label="E-mail" onChange={e=>{setEmail(e.target.value);console.log(email)}}/>
      <TextField label="Password" onChange={e=>setPassword(e.target.value)} type='password'/>

      
      {/* Gender Picker */}
      <FormControl sx={{ m: 1, minWidth: 120 ,maxWidth:300}}>
        <InputLabel id="gender">Gender</InputLabel>
        <Select
          labelId="gender"
          id="genderSelect"
          value={gender}
          label="gender"
          onChange={event=>{setGender(event.target.value);}}
        >
          <MenuItem value="">
            Please pick your gender
          </MenuItem>
          <MenuItem value={'Male'}>Male</MenuItem>
          <MenuItem value={'Female'}>Female</MenuItem>
          <MenuItem value={'Prefer not to say'}>Prefer not to say</MenuItem>
        </Select>
      </FormControl>

      {/* DOB Picker */}
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DesktopDatePicker
          label="Date of Birth"
          inputFormat="DD/MM/YYYY"
          value={(DOB!=='')?DOB:'01/01/2022'}
          onChange={e=>{setDOB(dayjs(e.$d.toString()).format('MM/DD/YYYY'));console.log(dayjs(e.$d.toString()).format('MM/DD/YYYY'));}}
          renderInput={(params) => <TextField {...params} />}
        />
        </LocalizationProvider>

      {/* Course Picker */}
      <FormControl sx={{ m: 1, minWidth: 120 ,maxWidth:300}}>
        <InputLabel id="coursePicker">Course</InputLabel>
        <Select
          labelId="coursePicker"
          id="coursePickerSelect"
          value={course}
          label="Course"
          onChange={event=>{setCourse(event.target.value);}}
        >
          <MenuItem value="">
            Please pick your course
          </MenuItem>
          <MenuItem value={'ACBS'}>ACBS - Accountancy And Business</MenuItem>
<MenuItem value={'ACC'}>ACC - Accountancy</MenuItem>
<MenuItem value={'ADM'}>ADM - Art, Design & Media</MenuItem>
<MenuItem value={'AERO'}>AERO - Aerospace Engineering</MenuItem>
<MenuItem value={'ASEC'}>ASEC - Aerospace Engineering And Economics</MenuItem>
<MenuItem value={'BCE'}>BCE - Business And Computer Engineering</MenuItem>
<MenuItem value={'BCG'}>BCG - Business And Computing</MenuItem>
<MenuItem value={'BEEC'}>BEEC - Bioengineering And Economics</MenuItem>
<MenuItem value={'BIE'}>BIE - Bioengineering</MenuItem>
<MenuItem value={'BMS'}>BMS - Biomedical Sciences & Chinese Medicine</MenuItem>
<MenuItem value={'BS'}>BS - Biological Sciences</MenuItem>
<MenuItem value={'BUS'}>BUS - Business</MenuItem>
<MenuItem value={'CBE'}>CBE - Chemical & Biomolecular Engineering</MenuItem>
<MenuItem value={'CBEC'}>CBEC - Chemical & Biomolecular Engineering And Economics</MenuItem>
<MenuItem value={'CE'}>CE - Computer Engineering</MenuItem>
<MenuItem value={'CEE'}>CEE - Civil Engineering</MenuItem>
<MenuItem value={'CEEC'}>CEEC - Computer Engineering And Economics</MenuItem>
<MenuItem value={'CHEM'}>CHEM - Chemistry & Biological Chemistry</MenuItem>
<MenuItem value={'CHIN'}>CHIN - Chinese</MenuItem>
<MenuItem value={'CS'}>CS - Communication Studies</MenuItem>
<MenuItem value={'CSC'}>CSC - Computer Science</MenuItem>
<MenuItem value={'CSEC'}>CSEC - Computer Science And Economics</MenuItem>
<MenuItem value={'CVEC'}>CVEC - Civil Engineering And Economics</MenuItem>
<MenuItem value={'ECON'}>ECON - Economics</MenuItem>
<MenuItem value={'EEE'}>EEE - Electrical & Electronic Engineering</MenuItem>
<MenuItem value={'EEEC'}>EEEC - Electrical & Electronic Engineering And Economics</MenuItem>
<MenuItem value={'EESS'}>EESS - Environmental Earth Systems Science</MenuItem>
<MenuItem value={'ELH'}>ELH - English</MenuItem>
<MenuItem value={'ENE'}>ENE - Environmental Engineering</MenuItem>
<MenuItem value={'ENEC'}>ENEC - Environmental Engineering And Economics</MenuItem>
<MenuItem value={'ENG'}>ENG - Engineering</MenuItem>
<MenuItem value={'HIST'}>HIST - History</MenuItem>
<MenuItem value={'IEEC'}>IEEC - Information Engineering & Media And Economics</MenuItem>
<MenuItem value={'IEM'}>IEM - Information Engineering & Media</MenuItem>
<MenuItem value={'LMS'}>LMS - Linguistics & Multilingual Studies</MenuItem>
<MenuItem value={'MAT'}>MAT - Materials Engineering</MenuItem>
<MenuItem value={'MATH'}>MATH - Mathematical Sciences</MenuItem>
<MenuItem value={'ME'}>ME - Mechanical Engineering</MenuItem>
<MenuItem value={'MEEC'}>MEEC - Mechanical Engineering And Economics</MenuItem>
<MenuItem value={'MS'}>MS - Maritime Studies</MenuItem>
<MenuItem value={'MTEC'}>MTEC - Materials Engineering And Economics</MenuItem>
<MenuItem value={'PHIL'}>PHIL - Philosophy</MenuItem>
<MenuItem value={'PHY'}>PHY - Physics & Applied Physics</MenuItem>
<MenuItem value={'PPGA'}>PPGA - Public Policy And Global Affairs</MenuItem>
<MenuItem value={'PSY'}>PSY - Psychology</MenuItem>
<MenuItem value={'REP'}>REP - Renaissance Engineering</MenuItem>
<MenuItem value={'SOC'}>SOC - Sociology</MenuItem>
<MenuItem value={'SSM'}>SSM - Sport Science And Management</MenuItem>
        </Select>
      </FormControl>

      {/* Year of study Picker */}
      <FormControl sx={{ m: 1, minWidth: 120 ,maxWidth:300}}>
        <InputLabel id="studyYear">Year of Study</InputLabel>
        <Select
          labelId="studyYear"
          id="studyYearSelect"
          value={studyYear}
          label="studyYear"
          onChange={event=>{setStudyYear(event.target.value);}}
        >
          <MenuItem value="">
            Please pick your year of study
          </MenuItem>
          <MenuItem value={'Year 1'}>Year 1</MenuItem>
          <MenuItem value={'Year 2'}>Year 2</MenuItem>
          <MenuItem value={'Year 3'}>Year 3</MenuItem>
          <MenuItem value={'Year 4'}>Year 4</MenuItem>
          <MenuItem value={'Year 5'}>Year 5</MenuItem>
          <MenuItem value={'Year 6'}>Year 6</MenuItem>
        </Select>
      </FormControl>

      <img src={"https://www.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png"} width={200} height={200}></img>

      <Button label="Confirm Register" style={{alignSelf:'center'}} handleAction={e=>{e.preventDefault();handleAction()}} />
      
      </Stack>
    </div>
  )
}

export default Register

import React, {Component, useState, useEffect} from 'react';
import Calendar from 'react-calendar';
import firebase from 'firebase';
import firedatabase from '../auth/base';
import ProfilePage from "../example";
import DbButton from './dbButton';


const List = () => {
// grabbing user reference
  useEffect(() => {
    fetchUserId();
  }, []);
  
  const fetchUserId = async () =>{
    let user = await firedatabase.auth().currentUser;
    console.log(user.uid);
  }

  //setting state hooks
  const [user, setUser] = useState("");
  const [hairType, setHairType] = useState("");
  const [length, setLength] = useState("");
  const [porosity, setPorosity] = useState("");
  const [colored, setColored] = useState("");
  const [pro, setPro] = useState("");
  const [date, setDate] = useState("");
  const [notes, setNotes] = useState("");
  const [image, setImage] = useState([]);

  const handleUploadedSuccess = filename => {
    setImage({...image, avatar: filename, progress: 100, isUploading: false})
		firebase
			.storage()
			.ref("Quiz_Images")
			.child(filename)
			.getDownloadURL()
			.then(url => this.setState({ avatarURL: url }));
	};

  const SubmitData = e => {
    e.preventDefault();
    const user = firedatabase.auth().currentUser;
    const db = firebase.firestore();

    //defining parameters for collection from form
    const userRef = db.collection("Quiz_list").add({
      user,
      hairType,
      length,
      porosity,
      dye: colored,
      pro,
      date,
      notes,
    });
  }
    
  //start of form
    return ( 
        <div className="container">
        <div className="row mt-5">
          <div className="col-sm-12">
            <form onSubmit={SubmitData}>

              {/* hair types section */}
            <p>Hair type</p>
            <div className="form-group">
              <p>Type 1: Straight</p>
                <div className="form-check">
                <label>
                  <input
                    type="radio"
                    name="type"
                    value={'1a'}
                    onChange ={e =>  setHairType(e.target.value)}
                    checked = {hairType === '1a'}
                    className="form-check-input"
                  />
                  1a	Straight (Fine/Thin) 	Hair tends to be very soft, thin, shiny, oily, poor at holding curls, difficult to damage.
                </label>
                </div>
                <div className="form-check">
                <label>
                  <input
                    type="radio"
                    name="type"
                    value={'1b'}
                    onChange ={e =>  setHairType(e.target.value)}
                    checked = {hairType === '1b'}
                    className="form-check-input"
                  />
                  1b	Straight (Medium)	Hair characterized by volume and body.
                </label>
                </div>
                <div className="form-check">
                <label>
                  <input
                    type="radio"
                    name="type"
                    value={'1c'}
                    onChange ={e =>  setHairType(e.target.value)}
                    checked = {hairType === '1c'}
                    className="form-check-input"
                  />
                  1c	Straight (Coarse)	Hair tends to be bone-straight, coarse, difficult to curl.
                </label>
                </div>
                <p>Type 2: Wavy</p>
                <div className="form-check">
                <label>
                  <input
                    type="radio"
                    name="type"
                    value={'2a'}
                    onChange ={e =>  setHairType(e.target.value)}
                    checked = {hairType === '2a'}
                    className="form-check-input"
                  />
                  2a	Wavy (Fine/Thin)	Hair has definite "S" pattern, can easily be straightened or curled, usually receptive to a variety of styles.
                </label>
                </div>
                <div className="form-check">
                <label>
                  <input
                    type="radio"
                    name="type"
                    value={'2b'}
                    onChange ={e =>  setHairType(e.target.value)}
                    checked = {hairType === '2b'}
                    className="form-check-input"
                  />
                  2b	Wavy (Medium)	Can tend to be frizzy and a little resistant to styling.
                </label>
                </div>
                <div className="form-check">
                <label>
                  <input
                    type="radio"
                    name="type"
                    value={'2c'}
                    onChange ={e =>  setHairType(e.target.value)}
                    checked = {hairType === '2c'}
                    className="form-check-input"
                  />
                  2c	Wavy (Coarse)	Fairly coarse, frizzy or very frizzy with thicker waves, often more resistant to styling.
                </label>
                </div>
                <p>Type 3: Curly</p>
                <div className="form-check">
                <label>
                  <input
                    type="radio"
                    name="type"
                    value={'3a'}
                    onChange ={e =>  setHairType(e.target.value)}
                    checked = {hairType === '3a'}
                    className="form-check-input"
                  />
                  3a	Curly (Loose)	Presents a definite "S" pattern, tends to combine thickness, volume, and/or frizziness.
                </label>
                </div>
                <div className="form-check">
                <label>
                  <input
                    type="radio"
                    name="type"
                    value={'3b'}
                    onChange ={e =>  setHairType(e.target.value)}
                    checked = {hairType === '3b'}
                    className="form-check-input"
                  />
                  3b	Curly (Tight)	Presents a definite "S" pattern, curls ranging from spirals to spiral-shaped corkscrew
                </label>
                </div>
                <p>Type 4: Kinky</p>
                <div className="form-check">
                <label>
                  <input
                    type="radio"
                    name="type"
                    value={'4a'}
                    onChange ={e =>  setHairType(e.target.value)}
                    checked = {hairType === '4a'}
                    className="form-check-input"
                  />
                  4a	Kinky (Soft)	Hair tends to be very wiry and fragile, tightly coiled and can feature curly patterning.
                </label>
                </div>
                <div className="form-check">
                <label>
                  <input
                    type="radio"
                    name="type"
                    value={'4b'}
                    onChange ={e =>  setHairType(e.target.value)}
                    checked = {hairType === '4b'}
                    className="form-check-input"
                  />
                  4b	Kinky (Wiry)	As 4a but with less defined pattern of curls, looks more like a "Z" with sharp angles
                </label>
                </div>
              </div>

{/* hair length section */}
                <p>Length of hair</p>
              <div className="form-check">
                <label>
                  <input
                    type="radio"
                    name="hairL"
                    value={'pixie'}
                    onChange ={e =>  setLength(e.target.value)}
                    checked = {length === 'pixie'}
                    className="form-check-input"
                  />
                  Pixie
                </label>
              </div>
              <div className="form-check">
                <label>
                  <input
                    type="radio"
                    name="hairL"
                    value={'short'}
                    onChange ={e =>  setLength(e.target.value)}
                    checked = {length === 'short'}
                    className="form-check-input"
                  />
                  Short
                </label>
              </div>
              <div className="form-check">
                <label>
                  <input
                    type="radio"
                    name="hairL"
                    value={'medium'}
                    onChange ={e =>  setLength(e.target.value)}
                    checked = {length === 'medium'}
                    className="form-check-input"
                  />
                  Medium
                </label>
                <div className="form-check">
                    <label>
                        <input type="radio"
                        name="hairL"
                        value={'long'}
                        onChange ={e => setLength(e.target.value)}
                        checked = {length === 'long'}
                        className="form-check-input"
                        />
                        Long
                    </label>
                </div>
              </div>


{/* hair porocity section */}
            <p>Hair porosity</p>
              <div className="form-group">
                <div className="form-check">
                <label>
                  <input
                    type="radio"
                    name="porosity"
                    value={'low'}
                    onChange ={e =>  setPorosity(e.target.value)}
                    checked = {porosity === 'low'}
                    className="form-check-input"
                  />
                  low
                  </label>
                </div>
                <div className="form-check">
                <label>
                  <input
                    type="radio"
                    name="porosity"
                    value={'medium'}
                    onChange ={e =>  setPorosity(e.target.value)}
                    checked = {porosity === 'medium'}
                    className="form-check-input"
                  />
                  medium
                  </label>
                </div>
                <div className="form-check">
                <label>
                  <input
                    type="radio"
                    name="porosity"
                    value={'high'}
                    onChange ={e =>  setPorosity(e.target.value)}
                    checked = {porosity === 'high'}
                    className="form-check-input"
                  />
                  high
                  </label>
                </div>
              </div>

{/* hair dye section which leads into a turnary */}
              <div className="form-group">
                          <p>Has your hair been colored in the last two years?</p>
                      <div className="form-check">
                  <label>
                      <input type="radio"
                      name="colored?"
                      value={'colored'}
                      onChange ={e => setColored(e.target.value)}
                      checked = {colored === 'colored'}
                      className="form-check-input"
                      />
                      Yes
                  </label>
                      </div>
                      <div className="form-check">
                          <label>
                              <input type="radio"
                              name="colored?"
                              value={'virgin'}
                              onChange ={e => setColored(e.target.value)}
                              checked = {colored === 'virgin'}
                              className="form-check-input"
                              />
                              No
                          </label>
                      </div>
              </div>
{colored==="colored" ? <>

{/* turnary and dye process */}
                <div className="form-group">
                  <div className="form-check">
                  <p>If so, how was it done?</p>
                    <label>
                      <input type="radio"
                      name="process"
                      value={'box'}
                      onChange= {e => setPro(e.target.value)}
                      checked= {pro === 'box'}
                      className="form-check-input"
                      />Box dyed
                    </label>
                  </div>
                  <div className="form-check">
                    <label>
                      <input type="radio"
                      name="process"
                      value={'solon'}
                      onChange= {e => setPro(e.target.value)}
                      checked= {pro === 'solon'}
                      className="form-check-input"
                      />Professionally
                    </label>
                  </div>
                </div>

{/* color date section */}
                <div className="form-group">
                  <div className="form-calendar">
                    <p>When was your last color date?</p>
                    <Calendar 
                    value={date}
                    onChange={date => setDate(date)}/>
                  </div>
                </div> </>:""}
                
                {/* photo upload section and notes section */}
                <div className="form-group">
                  <p>What is your ideal hair?</p>
                  <label>
                    <ProfilePage handleUploadedSuccess={handleUploadedSuccess}/>
                  </label>
                  <label>
                    <input
                    type="text"
                    name="notes"
                    placeholder="Any more notes?"
                    value={notes}
                    onChange={e => setNotes(e.target.value)}
                    className="form-text-input"
                    />
                  </label>
                </div>
              
              {/* end of questionaire and submit */}
              <div className="form-group">
                <button className="btn btn-primary mt-2" 
                type="submit">
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
}

export default List;


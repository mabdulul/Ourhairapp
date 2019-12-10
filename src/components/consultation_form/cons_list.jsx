import React, {Component, useState, useEffect} from 'react';
import Calendar from 'react-calendar';


const List = () => {

    const [length, setLength] = useState("");
    const [colored, setColored] = useState("");
    const [pro, setPro] = useState("");
    
    return ( 

        <div className="container">
        <div className="row mt-5">
          <div className="col-sm-12">
            <form>
                <p>Length of hair</p>
              <div className="form-check">
                <label>
                  <input
                    type="radio"
                    name="hairL"
                    value={'option1'}
                    onChange ={e =>  setLength(e.target.value)}
                    checked = {length === 'option1'}
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
                    value={'option2'}
                    onChange ={e =>  setLength(e.target.value)}
                    checked = {length === 'option2'}
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
                    value={'option3'}
                    onChange ={e =>  setLength(e.target.value)}
                    checked = {length === 'option3'}
                    className="form-check-input"
                  />
                  Medium
                </label>
                <div className="form-check">
                    <label>
                        <input type="radio"
                        name="hairL"
                        value={'option4'}
                        onChange ={e => setLength(e.target.value)}
                        checked = {length === 'option4'}
                        className="form-check-input"
                        />
                        Long
                    </label>
                </div>
              </div>
              <div className="form-group">
                      <div className="form-check">
                          <p>Has your hair been colored in me last two years?</p>
                  <label>
                      <input type type="radio"
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
                              value={'pure'}
                              onChange ={e => setColored(e.target.value)}
                              checked = {colored === 'pure'}
                              className="form-check-input"
                              />
                              No
                          </label>
                      </div>
              </div>
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
                <div className="form-group">
                  <div className="form-calendar">
                    <p>When was your last color date?</p>
                    <Calendar />
                  </div>
                </div>
                <div className="form-group">
                  <p>What is your ideal hair?</p>
                  <label>
                    <input
                    type="file"
                    name="hair pics"
                    />
                  </label>
                  <label>
                    <input
                    type="text"
                    name="notes"
                    placeholder="Any more notes?"
                    className="form-text-input"
                    />
                  </label>
                </div>
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

export default List
import React from 'react';
import ReactDOM from 'react-dom';
import { GlobalStyle, STContainer, STRow, STColumn, STBadge, STButton, STButtonGroup, STCardList, STCard,
  STCardImage, STCardBody, STCardFooter, STInput, STInputGroup, STInputGroupText, STForm, STLabel,
  STTextarea, STSelect, STItem, STOptionsWrapper, STCheckbox, STRadio, STTable, STDropdown,
  STDropdownMenu, STDropdownItem, STDropdownButton, STThemeProvider } from './index';

import {
  LiveProvider,
  LiveEditor,
  LiveError,
  LivePreview
} from 'react-live';

const docStyle = {
  whiteSpace: 'pre-wrap',
  border: '1px solid lightgray',
  padding: '8px',
  background: '#f3f3f3'
};

const spaceUtilClassesDocs = `Sample:
      <Label className="marb-0"> // Sets margin-bottom to 0px;
      <Label className="marb-sm-0"> // Sets margin-bottom to 0px only on specific breakpoint;

Usage:
      - <property><sides>-<breakpoint>-<amount>

Property:
      mar - margin
      pad - padding

Breakpoint:
      Refer to layout docs for breakpoint

Sides:
      t - top
      b - bottom
      l - left
      r - right
      y - top and bottom
      x - left and right
      leave as blank - all

Amount:
      0 - 5 
      Which values are multiples of 8
`;

const testAlignUtilClassesDocs = `Sample:
      <td className="text-right"> // Sets text-align to right;

Usage:
      - text-<position>

Position:
      - right, left, center or justify`;

const scope = { STContainer, STRow, STColumn, STBadge, STButton, STButtonGroup, STCardList, STCard,
  STCardImage, STCardBody, STCardFooter, STInput, STInputGroup, STInputGroupText, STForm, STLabel,
  STTextarea, STSelect, STItem, STOptionsWrapper, STCheckbox, STRadio, STTable, STDropdown,
  STDropdownMenu, STDropdownItem, STDropdownButton, STThemeProvider };

function Styled() {
  return (
    <>
      <STContainer>
        <STRow><h2>STLayout</h2></STRow>
        <STRow>
          <STColumn>
            <div className="editor-wrapper">
              <LiveProvider scope={scope} code={`<STContainer>
  <STRow>
    <STColumn xl={3} lg={4}>
      Lorem ipsum dolor sit amet...
    </STColumn>
    <STColumn xl={3} lg={4}>
      Lorem ipsum dolor sit amet... 
    </STColumn>
    <STColumn xl={3} lg={4}>
      Lorem ipsum dolor sit amet...
    </STColumn>
    <STColumn xl={3} lg={4}>
      Lorem ipsum dolor sit amet...
    </STColumn>
    <STColumn xl={3} lg={4}>
      Lorem ipsum dolor sit amet...
    </STColumn>
  </STRow>
</STContainer>`}>
                <div className="editor-textarea">
                  <LiveEditor />
                </div>
                <div className="editor-preview">
                  <LiveError />
                  <LivePreview />
                </div>
              </LiveProvider>
            </div>
          </STColumn>

          <STColumn>
            <details>
              <summary>View Docs</summary>
              <div style={docStyle}>
                {`STRow Props:
  - spacing - spacing/margin per item/column(defaults to 16px)

STColumn Props:
  - xl, lg, md, sm, xs - number of grids to take(max of 12). A total of 12 per row
  Format: 
    - xl={9} - Passing a number sets the number of grids to take
    - xl={[9, 3]} - Passing an array sets [numberOfGrids, offset]

  - align - align content left, right or center
  
  
Breakpoint/Screen Width:
  - xs - (max-width: 575px)
  - sm - (min-width: 576px) and (max-width: 767px)
  - md - min-width: 768px) and (max-width: 991px)
  - lg - (min-width: 992px) and (max-width: 1199px)
  - xl - (min-width: 1200px)


Notes:
  - <STColumn> should always be wrapped with <STRow>`}
              </div>
            </details>
          </STColumn>
        </STRow>

        <hr />

        <STRow><h2>STBadges</h2></STRow>
        <STRow>
          <STColumn>
            <div className="editor-wrapper">
              <LiveProvider scope={scope} code={`<STRow>
  <STColumn>
    <p>Notification <STBadge  tone={'danger'}>0</STBadge></p>
    <p>Emails <STBadge tone={'primary'}>10</STBadge></p>
    <p>Connections <STBadge tone={'secondary'}>1</STBadge></p>
  </STColumn>
</STRow>`}>
                <div className="editor-textarea">
                  <LiveEditor />
                </div>
                <div className="editor-preview">
                  <LiveError />
                  <LivePreview />
                </div>
              </LiveProvider>
            </div>
          </STColumn>

          <STColumn>
            <details>
              <summary>View Docs</summary>
              <div style={docStyle}>
                {`STBadge Props:
  - tone - color type either primary(default), secondary, success, danger, or warning`}
              </div>
            </details>
          </STColumn>
        </STRow>

        <hr />

        <STRow><h2>STButtons</h2></STRow>
        <STRow>
          <STColumn>
            <div className="editor-wrapper">
              <LiveProvider scope={scope} code={`<STRow>
  <STColumn>
    <STButton>Primary</STButton>
    <STButton tone={'secondary'}>Secondary</STButton>
    <STButton tone={'success'}>Success</STButton>
    <STButton tone={'danger'}>Danger</STButton>
    <STButton tone={'warning'}>Warning</STButton>
  </STColumn>
  <STColumn>
    <STButton size={'xs'}>Extra Small</STButton>
    <STButton size={'sm'}>Small</STButton>
    <STButton>Medium</STButton>
    <STButton size={'lg'}>Large</STButton>
  </STColumn>
</STRow>`}>
                <div className="editor-textarea">
                  <LiveEditor />
                </div>
                <div className="editor-preview">
                  <LiveError />
                  <LivePreview />
                </div>
              </LiveProvider>
            </div>
          </STColumn>

          <STColumn>
            <details>
              <summary>View Docs</summary>
              <div style={docStyle}>
                {`STButton Props:
  You can use the default props/attributes for <button> tag like (type, diabled etc.). Below are custom props:
  - tone - color type either primary(default), secondary, success, danger, warning
  - size - size of the button either xs(for extra small), sm(for small), md(this is the default when not set), or lg(for large)
  - outline - to remove background color with border only left`}
              </div>
            </details>
          </STColumn>
        </STRow>

        <hr />

        <STRow><h2>STButton Groups</h2></STRow>
        <STRow>
          <STColumn>
            <div className="editor-wrapper">
              <LiveProvider scope={scope} code={`<STRow>
  <STColumn>
    <STButtonGroup>
      <STButton size={'sm'}>Option 1</STButton>
      <STButton size={'sm'}>Option 2</STButton>
    </STButtonGroup>
    </STColumn>
    <STColumn>
    <STButtonGroup>
      <STButton tone={'danger'} size={'sm'}>Ready</STButton>
      <STButton tone={'warning'} size={'sm'}>Set</STButton>
      <STButton tone={'success'} size={'sm'}>Go</STButton>
    </STButtonGroup>
    </STColumn>
    <STColumn>
    <STButtonGroup>
      <STButton outline tone={'danger'} size={'sm'}>Ready</STButton>
      <STButton outline tone={'warning'} size={'sm'}>Set</STButton>
      <STButton outline tone={'success'} size={'sm'}>Go</STButton>
    </STButtonGroup>
  </STColumn>
</STRow>`}>
                <div className="editor-textarea">
                  <LiveEditor />
                </div>
                <div className="editor-preview">
                  <LiveError />
                  <LivePreview />
                </div>
              </LiveProvider>
            </div>
          </STColumn>
        </STRow>

        <hr />

        <STRow><h2>STCards</h2></STRow>
        <STRow>
          <STColumn>
            <div className="editor-wrapper">
              <LiveProvider scope={scope} code={`<STRow>
  <STColumn>
    <STCardList>
      <STCard lg={4}>
        <STCardImage height={200}>
          <img src='http://cycle.travel/images/600/amsterdam_ccby_conor_luddy.jpg' />
        </STCardImage>
        <STCardBody>
          Im in a body
        </STCardBody>
      </STCard>
      <STCard lg={4}>
        <STCardImage height={200}>
          <img src='http://cycle.travel/images/600/amsterdam_ccby_conor_luddy.jpg' />
        </STCardImage>
        <STCardBody>
          Im in a body. Im in a body Im in a body Im in a body 
        </STCardBody>
        <STCardFooter>
          <STButton size={'sm'}>Click me</STButton>
        </STCardFooter>
      </STCard>
    </STCardList>
  </STColumn>
</STRow>`}>
                <div className="editor-textarea">
                  <LiveEditor />
                </div>
                <div className="editor-preview">
                  <LiveError />
                  <LivePreview />
                </div>
              </LiveProvider>
            </div>
          </STColumn>

          <STColumn>
            <details>
              <summary>View Docs</summary>
              <div style={docStyle}>
                {`STCardList Props:
  - spacing - spacing/margin per item/column(defaults to 16px)

STCard Props:
  - xl, lg, md, sm, xs - number of grids to take(max of 12). A total of 12 per row
  Format: 
    - xl={9} - Passing a number sets the number of grids to take
    - xl={[9, 3]} - Passing an array sets [numberOfGrids, offset]

  - align - align content left, right or center

STCardImage Props:
  - height - height of the image wrapper(defaults to auto)`}
              </div>
            </details>
          </STColumn>
        </STRow>

        <hr />

        <STRow><h2>STInputs</h2></STRow>
        <STRow>
          <STColumn>
            <div className="editor-wrapper">
              <LiveProvider scope={scope} code={`<STRow>
  <STColumn lg={6}>
    <h4>Sizes</h4>
    <STInput size={'sm'} placeholder={'Im a small size input'}/>
    <br/>
    <br/>
    <STInput size={'md'} placeholder={'Im a medium size input'}/>
    <br/>
    <br/>
    <STInput size={'lg'} placeholder={'Im a large size input'}/>
  </STColumn>
  <STColumn lg={6}>
    <h4>Errors</h4>
    <STInput size={'sm'} error={'error'} placeholder={'Im an errored input'}/>
    <br/>
    <br/>
    <STInput size={'md'} placeholder={'Im disabled'} disabled/><br/>
  </STColumn>
</STRow>`}>
                <div className="editor-textarea">
                  <LiveEditor />
                </div>
                <div className="editor-preview">
                  <LiveError />
                  <LivePreview />
                </div>
              </LiveProvider>
            </div>
          </STColumn>

          <STColumn>
            <details>
              <summary>View Docs</summary>
              <div style={docStyle}>
                {`STInput Props:
  You can use the default props/attributes for <input> tag like (type, placeholder, value, etc.). Below are custom props:
  - size - size of the button either sm(for small), md(this is the default when not set), or lg(for large)
  - error - adds class for error`}
              </div>
            </details>
          </STColumn>
        </STRow>
        
        <hr />

        <STRow><h2>STTextarea</h2></STRow>
        <STRow>
          <STColumn>
            <div className="editor-wrapper">
              <LiveProvider scope={scope} code={`<STRow>
  <STColumn lg={6}>
    <h4>Sizes</h4>
    <STTextarea size={'sm'} placeholder={'Im a small size textarea'}></STTextarea>
    <br/>
    <STTextarea size={'md'} placeholder={'Im a medium size textarea'}></STTextarea>
    <br/>
    <STTextarea size={'lg'} placeholder={'Im a large size textarea'}></STTextarea>
  </STColumn>
  <STColumn lg={6}>
    <h4>Errors</h4>
    <STTextarea size={'sm'} error={'error'} placeholder={'Im an errored textarea'}></STTextarea>
    <br/>
    <STTextarea size={'md'} placeholder={'Im an disabled textarea'} disabled></STTextarea>
  </STColumn>
</STRow>`}>
                <div className="editor-textarea">
                  <LiveEditor />
                </div>
                <div className="editor-preview">
                  <LiveError />
                  <LivePreview />
                </div>
              </LiveProvider>
            </div>
          </STColumn>

          <STColumn>
            <details>
              <summary>View Docs</summary>
              <div style={docStyle}>
                {`STTextarea Props:
- size - size of the button either sm(for small), md(this is the default when not set), or lg(for large)
- error - adds class for error`}
              </div>
            </details>
          </STColumn>
        </STRow>
        
        <hr />

        <STRow><h2>STSelect</h2></STRow>
        <STRow>
          <STColumn>
            <div className="editor-wrapper">
              <LiveProvider scope={scope} code={`<STRow>
  <STColumn lg={6}>
    <h4>Sizes</h4>
    <STSelect size={'sm'}>
      <STItem>React</STItem>
      <STItem>Vue</STItem>
      <STItem>Angular</STItem>
    </STSelect>
    <br/>
    <br/>
    <STSelect>
      <STItem>React</STItem>
      <STItem>Vue</STItem>
      <STItem>Angular</STItem>
    </STSelect>
    <br/>
    <br/>
    <STSelect size={'lg'}>
      <STItem>React</STItem>
      <STItem>Vue</STItem>
      <STItem>Angular</STItem>
    </STSelect>
  </STColumn>
  <STColumn lg={6}>
    <h4>Errors</h4>
    <STSelect size={'sm'} error={'error'}>
      <STItem>React</STItem>
      <STItem>Vue</STItem>
      <STItem>Angular</STItem>
    </STSelect>
    <br/>
    <br/>
    <STSelect disabled>
      <STItem>React</STItem>
      <STItem>Vue</STItem>
      <STItem>Angular</STItem>
    </STSelect>
  </STColumn>
</STRow>`}>
                <div className="editor-textarea">
                  <LiveEditor />
                </div>
                <div className="editor-preview">
                  <LiveError />
                  <LivePreview />
                </div>
              </LiveProvider>
            </div>
          </STColumn>

          <STColumn>
            <details>
              <summary>View Docs</summary>
              <div style={docStyle}>
                {`STSelect Props:
  You can use the default props/attributes for <select> tag like (value, multiple, etc.). Below are custom props:
  - size - size of the button either sm(for small), md(this is the default when not set), or lg(for large)
  - error - adds class for error`}
              </div>
            </details>
          </STColumn>
        </STRow>
        
        <hr />

        <STRow><h2>STCheckbox / Radio</h2></STRow>
        <STRow>
          <STColumn>
            <div className="editor-wrapper">
              <LiveProvider scope={scope} code={`<STRow>
  <STColumn lg={6}>
    <h4>Checkbox</h4>
    <STOptionsWrapper>
      Breakfast
      <STCheckbox name="meal"/>
    </STOptionsWrapper>
    <STOptionsWrapper>
      Lunch
      <STCheckbox name="meal"/>
    </STOptionsWrapper>
    <STOptionsWrapper>
      Dinner
      <STCheckbox name="meal"/>
    </STOptionsWrapper>
  </STColumn>
  <STColumn lg={6}>
    <h4>Radio</h4>
    <STOptionsWrapper>
      Yes
      <STRadio name="answer"/>
    </STOptionsWrapper>
    <STOptionsWrapper>
      No
      <STRadio name="answer"/>
    </STOptionsWrapper>
  </STColumn>
</STRow>`}>
                <div className="editor-textarea">
                  <LiveEditor />
                </div>
                <div className="editor-preview">
                  <LiveError />
                  <LivePreview />
                </div>
              </LiveProvider>
            </div>
          </STColumn>

          <STColumn>
            <details>
              <summary>View Docs</summary>
              <div style={docStyle}>
                {`STOptionsWrapper Props:
  You can use the default props/attributes for <input type="checkbox/radio"> tag like (checked, etc.). Below are custom props:
  - inline - display type(defaults to false)
  - size - font size either sm(small), md(medium/default) or lg(large)`}
              </div>
            </details>
          </STColumn>
        </STRow>
        
        <hr />

        <STRow><h2>STInput Group</h2></STRow>
        <STRow>
          <STColumn>
            <div className="editor-wrapper">
              <LiveProvider scope={scope} code={`<STRow>
  <STColumn lg={6}>
    <STInputGroup>
      <STInputGroupText>Name</STInputGroupText>
      <STInput placeholder={'First Name'}/>
      <STInput placeholder={'Last Name'}/>
    </STInputGroup>
  </STColumn>
  <STColumn lg={6}>
    <STInputGroup>
      <STInputGroupText>Price</STInputGroupText>
      <STInput placeholder={'0.00'}/>
    </STInputGroup>
  </STColumn>
  <STColumn lg={6}>
    <STInputGroup>
      <STInput placeholder={'~_~'}/>
      <STButton>Click</STButton>
    </STInputGroup>
  </STColumn>
  <STColumn lg={6}>
    <STInputGroup>
      <STInput placeholder={'UwU'}/>
      <STButton outline>Click</STButton>
    </STInputGroup>
  </STColumn>
  <STColumn lg={6}>
    <STInputGroup>
      <STTextarea placeholder={'Type message'}></STTextarea>
      <STButton outline>Send</STButton>
    </STInputGroup>
  </STColumn>
  <STColumn lg={6}>
    <STInputGroup>
      <STSelect size={''}>
        <STItem>React</STItem>
        <STItem>Vue</STItem>
        <STItem>Angular</STItem>
      </STSelect>
      <STButton outline>Send</STButton>
    </STInputGroup>
  </STColumn>
</STRow>`}>
                <div className="editor-textarea">
                  <LiveEditor />
                </div>
                <div className="editor-preview">
                  <LiveError />
                  <LivePreview />
                </div>
              </LiveProvider>
            </div>
          </STColumn>
        </STRow>
        
        <hr />

        <STRow><h2>STForms</h2></STRow>
        <STRow>
          <STColumn>
            <div className="editor-wrapper">
              <LiveProvider scope={scope} code={`<STRow>
  <STColumn lg={12}>
    <STForm>
      <STLabel md={12} xl={3}>Username</STLabel>
      <STColumn md={12} xl={9}>
        <STInput/>
      </STColumn>
      <STLabel md={12} xl={3}>Password</STLabel>
      <STColumn md={12} xl={9}>
        <STInput type="password"/>
      </STColumn>
      <STLabel md={12} xl={3} top>Gender</STLabel>
      <STColumn md={12} xl={9}>
        <STOptionsWrapper>
          Male
          <STRadio name="gender"/>
        </STOptionsWrapper>
        <STOptionsWrapper>
          Female
          <STRadio name="gender"/>
        </STOptionsWrapper>
        <STOptionsWrapper>
          Robot
          <STRadio name="gender"/>
        </STOptionsWrapper>
      </STColumn>
      <STColumn md={12} xl={[9, 3]} align={'right'}>
        <STButton>Submit</STButton>
      </STColumn>
    </STForm>
  </STColumn>
</STRow>`}>
                <div className="editor-textarea">
                  <LiveEditor />
                </div>
                <div className="editor-preview">
                  <LiveError />
                  <LivePreview />
                </div>
              </LiveProvider>
            </div>
          </STColumn>

          <STColumn>
            <details>
              <summary>View Docs</summary>
              <div style={docStyle}>
                {`STForm Props:
  You can this as a <form> tag. Below are custom props:
  - spacing - spacing/margin per item/column(defaults to 16px)
  
STLabel Props:
  - xl, lg, md, sm, xs - number of grids to take(max of 12). A total of 12 per row
  Format: 
    - xl={9} - Passing a number sets the number of grids to take
    - xl={[9, 3]} - Passing an array sets [numberOfGrids, offset]

  - top - if set or set to true, vertically align label to top instead center
            - used usually for label beside checkbox/radio`}
              </div>
            </details>
          </STColumn>
        </STRow>

        <hr />

        <STRow><h2>Dropdown</h2></STRow>
        <STRow>
          <STColumn>
            <div className="editor-wrapper">
              <LiveProvider scope={scope} code={`<STRow>
  <STColumn lg={6}>
    <STDropdown>
      <STDropdownButton>Dropdown</STDropdownButton>
      <STDropdownMenu>
        <STDropdownItem>Option 1</STDropdownItem>
        <STDropdownItem>Option 2</STDropdownItem>
        <STDropdownItem>Option 3 is long</STDropdownItem>
      </STDropdownMenu>
    </STDropdown>
  </STColumn>
</STRow>`}>
                <div className="editor-textarea">
                  <LiveEditor />
                </div>
                <div className="editor-preview" style={{overflowY: 'initial'}}>
                  <LiveError />
                  <LivePreview />
                </div>
              </LiveProvider>
            </div>
          </STColumn>

          <STColumn>
            <details>
              <summary>View Docs</summary>
              <div style={docStyle}>
                {`STDropdown Props:
  Refer to <STButton> for props`}
              </div>
            </details>
          </STColumn>
        </STRow>
        
        <hr />

        <STRow><h2>Tables</h2></STRow>
        <STRow>
          <STColumn>
            <div className="editor-wrapper">
              <LiveProvider scope={scope} code={`<STRow>
  <STColumn lg={12}>
    <div className="table-responsive">
      <STTable hover>
        <thead>
          <tr>
            <th>Firstname</th>
            <th>Lastname</th> 
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Jill</td>
            <td>Smith</td> 
            <td><STButton size={'xs'}>Delete</STButton></td>
          </tr>
          <tr>
            <td>Eve</td>
            <td>Jackson</td> 
            <td><STButton size={'xs'}>Delete</STButton></td>
          </tr>
        </tbody>
      </STTable>
    </div>
  </STColumn>
</STRow>`}>
                <div className="editor-textarea">
                  <LiveEditor />
                </div>
                <div className="editor-preview">
                  <LiveError />
                  <LivePreview />
                </div>
              </LiveProvider>
            </div>
          </STColumn>

          <STColumn>
            <details>
              <summary>View Docs</summary>
              <div style={docStyle}>
                {`STTable Props:
  You can this as a <table> tag. Below are custom props:
  - hover - to enable hover styles`}
              </div>
            </details>
          </STColumn>
        </STRow>

        <hr />

        <STRow><h2>Utility Classes</h2></STRow>
        <STRow>
          <STColumn>
            Add this classes for space control
          </STColumn>
          <STColumn>
            <div style={docStyle}>
              {spaceUtilClassesDocs}
            </div>
          </STColumn>

          <STColumn>
            Add this classes for text-align control
          </STColumn>
          <STColumn>
            <div style={docStyle}>
              {testAlignUtilClassesDocs}
            </div>
          </STColumn>
        </STRow>
      </STContainer>
    </>
  )
}

ReactDOM.render(<><GlobalStyle /><Styled /></>, document.getElementById('index'))
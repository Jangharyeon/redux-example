import $ from 'jquery';
import hbs from 'handlebars';
import { createStore } from 'redux';

const initData = {
  "result":1,
  "result_msg":"success",
  "result_set":{
    "option_info":{
      "depth":3,
      "kind":[
        "상품명",
        "색상",
        "사이즈",
        "마지막!!"
      ],
      "list":[
        {
          "value":{
            "option_value":"01_922 플라이 라쿤힙선 오리털 다운점퍼",
            "sub_options":[
              {
                "option_value":"다크오렌지",
                "sub_options":[
                  {
                    "option_value":"L(남성)",
                    "sub_options":[
                      {
                        "option_value":"마지막 1"
                      },
                      {
                        "option_value":"마지막 2"
                      },
                    ]
                  },
                  {
                    "option_value":"M(남성)",
                    "sub_options":[
                      {
                        "option_value":"마지막 1"
                      },
                      {
                        "option_value":"마지막 2"
                      },
                    ]
                  },
                  {
                    "option_value":"M(여성)",
                    "sub_options":[
                      {
                        "option_value":"마지막 1"
                      },
                      {
                        "option_value":"마지막 2"
                      },
                    ]
                  },
                  {
                    "option_value":"S(여성)",
                    "sub_options":[
                      {
                        "option_value":"마지막 1"
                      },
                      {
                        "option_value":"마지막 2"
                      },
                    ]
                  },
                  {
                    "option_value":"XL(남성)",
                    "sub_options":[
                      {
                        "option_value":"마지막 1"
                      },
                      {
                        "option_value":"마지막 2"
                      },
                    ]
                  }
                ],
                "depth":1
              },
              {
                "option_value":"레드",
                "sub_options":[
                  {
                    "option_value":"L(남성)",
                    "sub_options":[
                      {
                        "option_value":"마지막 1"
                      },
                      {
                        "option_value":"마지막 2"
                      },
                    ]
                  },
                  {
                    "option_value":"M(남성)",
                    "sub_options":[
                      {
                        "option_value":"마지막 1"
                      },
                      {
                        "option_value":"마지막 2"
                      },
                    ]
                  },
                  {
                    "option_value":"M(여성)",
                    "sub_options":[
                      {
                        "option_value":"마지막 1"
                      },
                      {
                        "option_value":"마지막 2"
                      },
                    ]
                  },
                  {
                    "option_value":"S(여성)",
                    "sub_options":[
                      {
                        "option_value":"마지막 1"
                      },
                      {
                        "option_value":"마지막 2"
                      },
                    ]
                  },
                  {
                    "option_value":"XL(남성)",
                    "sub_options":[
                      {
                        "option_value":"마지막 1"
                      },
                      {
                        "option_value":"마지막 2"
                      },
                    ]
                  }
                ],
                "depth":1
              }
            ]
          }
        },
        {
          "value":{
            "option_value":"02_925 플라이 N-3B 항공 다운점퍼",
            "sub_options":[
              {
                "option_value":"다크오렌지_02",
                "sub_options":[
                  {
                    "option_value":"L(남성)_02",
                    "sub_options":[
                      {
                        "option_value":"마지막 1"
                      },
                      {
                        "option_value":"마지막 2"
                      },
                    ]
                  },
                  {
                    "option_value":"M(남성)_02",
                    "sub_options":[
                      {
                        "option_value":"마지막 1"
                      },
                      {
                        "option_value":"마지막 2"
                      },
                    ]
                  },
                  {
                    "option_value":"M(여성)_02",
                    "sub_options":[
                      {
                        "option_value":"마지막 1"
                      },
                      {
                        "option_value":"마지막 2"
                      },
                    ]
                  },
                  {
                    "option_value":"S(여성)_02",
                    "sub_options":[
                      {
                        "option_value":"마지막 1"
                      },
                      {
                        "option_value":"마지막 2"
                      },
                    ]
                  },
                  {
                    "option_value":"XL(남성)_02",
                    "sub_options":[
                      {
                        "option_value":"마지막 1"
                      },
                      {
                        "option_value":"마지막 2"
                      },
                    ]
                  }
                ],
                "depth":1
              },
              {
                "option_value":"레드_02",
                "sub_options":[
                  {
                    "option_value":"L(남성)_02",
                    "sub_options":[
                      {
                        "option_value":"마지막 1"
                      },
                      {
                        "option_value":"마지막 2"
                      },
                    ]
                  },
                  {
                    "option_value":"M(남성)_02",
                    "sub_options":[
                      {
                        "option_value":"마지막 1"
                      },
                      {
                        "option_value":"마지막 2"
                      },
                    ]
                  },
                  {
                    "option_value":"M(여성)_02",
                    "sub_options":[
                      {
                        "option_value":"마지막 1"
                      },
                      {
                        "option_value":"마지막 2"
                      },
                    ]
                  },
                  {
                    "option_value":"S(여성)_02",
                    "sub_options":[
                      {
                        "option_value":"마지막 1"
                      },
                      {
                        "option_value":"마지막 2"
                      },
                    ]
                  },
                  {
                    "option_value":"XL(남성)_02",
                    "sub_options":[
                      {
                        "option_value":"마지막 1"
                      },
                      {
                        "option_value":"마지막 2"
                      },
                    ]
                  }
                ],
                "depth":1
              }
            ]
          }
        },
        {
          "value":{
            "option_value":"03_924 플라이 테디 다운점퍼",
            "sub_options":[
              {
                "option_value":"다크오렌지_03",
                "sub_options":[
                  {
                    "option_value":"L(남성)_03",
                    "sub_options":[
                      {
                        "option_value":"마지막 1"
                      },
                      {
                        "option_value":"마지막 2"
                      },
                    ]
                  },
                  {
                    "option_value":"M(남성)_03",
                    "sub_options":[
                      {
                        "option_value":"마지막 1"
                      },
                      {
                        "option_value":"마지막 2"
                      },
                    ]
                  },
                  {
                    "option_value":"M(여성)_03",
                    "sub_options":[
                      {
                        "option_value":"마지막 1"
                      },
                      {
                        "option_value":"마지막 2"
                      },
                    ]
                  },
                  {
                    "option_value":"S(여성)_03",
                    "sub_options":[
                      {
                        "option_value":"마지막 1"
                      },
                      {
                        "option_value":"마지막 2"
                      },
                    ]
                  },
                  {
                    "option_value":"XL(남성)_03",
                    "sub_options":[
                      {
                        "option_value":"마지막 1"
                      },
                      {
                        "option_value":"마지막 2"
                      },
                    ]
                  }
                ],
                "depth":1
              },
              {
                "option_value":"레드_03",
                "sub_options":[
                  {
                    "option_value":"L(남성)_03",
                    "sub_options":[
                      {
                        "option_value":"마지막 1"
                      },
                      {
                        "option_value":"마지막 2"
                      },
                    ]
                  },
                  {
                    "option_value":"M(남성)_03",
                    "sub_options":[
                      {
                        "option_value":"마지막 1"
                      },
                      {
                        "option_value":"마지막 2"
                      },
                    ]
                  },
                  {
                    "option_value":"M(여성)_03",
                    "sub_options":[
                      {
                        "option_value":"마지막 1"
                      },
                      {
                        "option_value":"마지막 2"
                      },
                    ]
                  },
                  {
                    "option_value":"S(여성)_03",
                    "sub_options":[
                      {
                        "option_value":"마지막 1"
                      },
                      {
                        "option_value":"마지막 2"
                      },
                    ]
                  },
                  {
                    "option_value":"XL(남성)_03",
                    "sub_options":[
                      {
                        "option_value":"마지막 1"
                      },
                      {
                        "option_value":"마지막 2"
                      },
                    ]
                  }
                ],
                "depth":1
              }
            ]
          }
        }
      ]
    }
  }
};

const $optionContainer = $('#options');
const hbsTmpl = '<h1>Option select</h1>\
{{#each option_list}}\
<select>\
  <option value="0">{{value}}</option>\
  {{#if depth.length}}\
    {{#each depth}}\
      <option value="{{inc @index}}">{{this}}</option>\
    {{/each}}\
  {{/if}}\
</select>\
{{/each}}\
<div id="result"></div>\
';
const optionTmpl = hbs.compile(hbsTmpl);

hbs.registerHelper('inc', function (value) {
  return parseInt(value) + 1;
});

let initialState = {
  is_init: true,
  current_depth: 0,
  option_list: [],
  result_data: ''
};


// Reducer
function reducer(state = initialState, action) {
  let newState = Object.assign({}, state);
  const option_info = initData.result_set.option_info;

  switch (action.type) {
    case 'INIT':
      option_info.kind.map(function (item, idx) {
        newState.option_list.push({
          value: option_info.kind[idx],
        });
      });

      newState.option_list[0].depth = option_info.list.map(function (item, idx) {
        return item.value.option_value;
      });
      return newState;
    case 'CHANGE':
      console.log('action.index', action.index);
      console.log('action.selectIndex', action.selectIndex);

      function getOptionListByDepth(root) {
        for (var i = 0; i < action.selectIndex; i++) {
          if (i === 0) {
            console.log('111');
            root = root.value.sub_options;
          } else {
            console.log('222');
            root = root[action.index].sub_options;
          //  console.log('asdfsdafds root', root);
          }
        }
        return root;
      }

      // newState.is_init = false;
      // let sub_data = option_info.list[action.index - 1].sub_option || {};
      // console.log('1', sub_data);
      // sub_data = sub_data.value ? sub_data.value.option_value : sub_data.option_value;
      // console.log('2', sub_data);

      // console.log(action.index);
      // console.log(action.selectIndex);
      // let sub_data = option_info.list[action.index - 1].value.sub_options;
    //  if (newState.option_list[action.selectIndex]) {
        // console.log(getOptionListByDepth(option_info.list[action.index - 1]));
        let getOptionByDepth = getOptionListByDepth(option_info.list[action.index - 1]);
        console.log('getOptionByDepth', getOptionByDepth);
        newState.option_list[action.selectIndex].depth = getOptionByDepth.map(function (item, idx) {
          return item.option_value;
        });
    //  } else {
        //console.log('result', newState.option_list[action.index].depth[action.index - 1]);
        // newState.result_data =
    //  }

      //console.log(newState);
      return newState;
    default:
      return state;
  }
  // console.log('changeState', changeState);
  // return changeState;
  // switch (action.type) {


    // case 'INIT':
    //   console.log('INIT');
    //   return state;
    // case 'CHANGE':
    //   const idx = action.current_depth;
    //   let optionList = changeState.result_set.option_info.list;
    //
    //   changeState.is_init = false;
    //   // optionList = [];
    //   optionList = {
    //     value: {
    //       sub_options: []
    //     }
    //   };
    //   optionList.value.sub_options.map(function(val) {
    //     optionList.push(val)
    //   });
    //   // changeState.result_set.option_info.list.push(state.result_set.option_info.list[idx].value.sub_options);
    //
    //   console.log(changeState);
    //   return changeState;
    // default:
    //   console.log('default');
    //   return state;
    return state;
  // }
}
const store = createStore(reducer);
console.log('store.getState()', store.getState());

// Action


// Render
const render = () => {
  $optionContainer.html(optionTmpl(store.getState()));

  $optionContainer.off().on('change', (e) => {
    store.dispatch({
      'type': 'CHANGE',
      'index': e.target.value,
      'selectIndex': parseInt($(e.target).index()),
    });
  });
}

store.subscribe(render);
store.dispatch({ type: 'INIT' });

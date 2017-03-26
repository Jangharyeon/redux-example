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
                "option_value":"다크오렌지1-1",
                "sub_options":[
                  {
                    "option_value":"L(남성)1-1-1",
                    "sub_options":[
                      {
                        "option_value":"마지막 1-1-1-1"
                      },
                      {
                        "option_value":"마지막 1-1-1-2"
                      },
                    ]
                  },
                  {
                    "option_value":"M(남성)1-1-2",
                    "sub_options":[
                      {
                        "option_value":"마지막 1-1-2-1"
                      },
                      {
                        "option_value":"마지막 1-1-2-2"
                      },
                    ]
                  },
                  {
                    "option_value":"M(여성)1-1-3",
                    "sub_options":[
                      {
                        "option_value":"마지막 1-1-3-1"
                      },
                      {
                        "option_value":"마지막 1-1-3-2"
                      },
                    ]
                  }
                ],
                "depth":1
              },
              {
                "option_value":"레드1-2",
                "sub_options":[
                  {
                    "option_value":"L(남성)1-2-1",
                    "sub_options":[
                      {
                        "option_value":"마지막 1-2-1-1"
                      },
                      {
                        "option_value":"마지막 1-2-1-2"
                      },
                    ]
                  },
                  {
                    "option_value":"M(남성)1-2-2",
                    "sub_options":[
                      {
                        "option_value":"마지막 1-2-2-1"
                      },
                      {
                        "option_value":"마지막 1-2-2-2"
                      },
                    ]
                  },
                  {
                    "option_value":"M(여성)1-2-3",
                    "sub_options":[
                      {
                        "option_value":"마지막 1-2-3-1"
                      },
                      {
                        "option_value":"마지막 1-2-3-2"
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
                "option_value":"다크오렌지2-1",
                "sub_options":[
                  {
                    "option_value":"L(남성)2-1-1",
                    "sub_options":[
                      {
                        "option_value":"마지막 2-1-1-1"
                      },
                      {
                        "option_value":"마지막 2-1-1-2"
                      },
                    ]
                  },
                  {
                    "option_value":"M(남성)2-1-2",
                    "sub_options":[
                      {
                        "option_value":"마지막 2-1-2-1"
                      },
                      {
                        "option_value":"마지막 2-1-2-2"
                      },
                    ]
                  },
                  {
                    "option_value":"M(여성)2-1-3",
                    "sub_options":[
                      {
                        "option_value":"마지막 2-1-3-1"
                      },
                      {
                        "option_value":"마지막 2-1-3-2"
                      },
                    ]
                  }
                ],
                "depth":1
              },
              {
                "option_value":"레드2-2",
                "sub_options":[
                  {
                    "option_value":"L(남성)2-2-1",
                    "sub_options":[
                      {
                        "option_value":"마지막 2-2-1-1"
                      },
                      {
                        "option_value":"마지막 2-2-1-2"
                      },
                    ]
                  },
                  {
                    "option_value":"M(남성)2-2-2",
                    "sub_options":[
                      {
                        "option_value":"마지막 2-2-2-1"
                      },
                      {
                        "option_value":"마지막 2-2-2-2"
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
                "option_value":"다크오렌지3-1",
                "sub_options":[
                  {
                    "option_value":"L(남성)3-1-1",
                    "sub_options":[
                      {
                        "option_value":"마지막 3-1-1-1"
                      },
                      {
                        "option_value":"마지막 3-1-1-2"
                      },
                    ]
                  },
                  {
                    "option_value":"M(남성)3-1-2",
                    "sub_options":[
                      {
                        "option_value":"마지막 3-1-2-1"
                      },
                      {
                        "option_value":"마지막 3-1-2-2"
                      },
                    ]
                  },
                  {
                    "option_value":"M(여성)3-1-3",
                    "sub_options":[
                      {
                        "option_value":"마지막 3-1-3-1"
                      },
                      {
                        "option_value":"마지막 3-1-3-2"
                      },
                    ]
                  }
                ],
                "depth":1
              },
              {
                "option_value":"레드3-2",
                "sub_options":[
                  {
                    "option_value":"L(남성)3-2-1",
                    "sub_options":[
                      {
                        "option_value":"마지막 3-2-1-1"
                      },
                      {
                        "option_value":"마지막 3-2-1-2"
                      },
                    ]
                  },
                  {
                    "option_value":"M(남성)3-2-2",
                    "sub_options":[
                      {
                        "option_value":"마지막 3-2-2-1"
                      },
                      {
                        "option_value":"마지막 3-2-2-2"
                      },
                    ]
                  },
                  {
                    "option_value":"M(여성)3-2-3",
                    "sub_options":[
                      {
                        "option_value":"마지막 3-2-3-1"
                      },
                      {
                        "option_value":"마지막 3-2-3-2"
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
  result_data: '',
  selected: [],
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
      if (newState.selected[action.selectIndex - 1] === undefined) {
        newState.selected.push(action.index - 1);
      } else {
        newState.selected[action.selectIndex - 1] = action.index - 1;
      }
      console.log(newState.selected);

      function getOptionListByDepth(root) {
        for (var i = 0; i < action.selectIndex; i++) {
          if (i === 0) {
            root = root.value.sub_options;
          } else {
            console.log('root', root);
            console.log('i', i);
            console.log('newState.selected', newState.selected);
            root = root[parseInt(newState.selected[i])].sub_options;
          }
        }
        return root;
      }

      let getOptionByDepth = getOptionListByDepth(option_info.list[parseInt(newState.selected[0])]);
      // console.log('getOptionByDepth', getOptionByDepth);
      newState.option_list[action.selectIndex].depth = getOptionByDepth.map(function (item, idx) {
        return item.option_value;
      });

      return newState;
    default:
      return state;
  }
}
const store = createStore(reducer);
// console.log('store.getState()', store.getState());

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

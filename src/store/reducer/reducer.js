const INITIAL_STATE = {
  form_data: {},
  skip_step_arr: {
    1: 2,
    2: 3,
    3: 4,
    4: 5,
    5: 6,
    6: 7,
    7: { anotherSourceOfFunding: { yes: 8, no: 9 } },
    8: 9,
    9: 10,
    10: 11,
    11: { clientCommNeed: { yes: 12, no: 13 } },
    12: 13,
    13: { clientBehaviours: { yes: 14, no: 16 } },
    14: 15,
    15: 16,
    16: { supportTeam: { yes: 18, no: 17 } },
    17: 18,
    18: { supportWorkersAlready: { yes: 19, no: 21 } },
    19: 20,
    20: 21,
    21: 22,
    22: 23,
    23: 24,
    24: 25,
    25: { mainEnglishLanguage: { yes: 27, no: 26, 'Prefer not to say': 27 } },
    26: 27,
    27: 28,
    28: { completeFormYourself: { 'Myself (Client)': 30, 'Someone Else (Client Representative)': 29 } },
    29: 30,
    30: { whoToCall: { 'Client': 32, 'Client Representative': 31 } },
    31: 32,
    32: 33,
    33: 34,
    34: 35
  },
  skip_step_pre: {},
  support_worker_data: {},
  skip_step_arr_sw: {
    1: 2,
    2: 3,
    3: 5,
    5: 6,
    6: 7,
    7: 8,
    8: 9,
    9: 10,
    10: 11,
    11: 12,
    12: 13,
    13: 14,
    14: 15,
    15: 16,
    16: 17,
    17: 18,
    18: 19
  },
  skip_step_pre_sw: {},


}

export default (states = INITIAL_STATE, action) => {
  var res = { ...states };
  res[action.type] = action.payload;
  return (res ? res : states);
  // switch(action.type){
  //   case 'name' : return({...states,name : action.payload}); break
  //   case 'broName' : return({...states,broName : action.payload}); break
  //   default: return states;
  // }
}

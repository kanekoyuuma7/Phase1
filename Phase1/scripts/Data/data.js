//抽出用
var bordeList ={
    'Pattern_up':['borde1-1','borde1-2','borde1-3'],
    'Pattern_right':['borde1-3','borde2-3','borde3-3'],
    'Pattern_left':['borde1-1','borde2-1','borde3-1'],
    'Pattern_under':['borde3-1','borde3-2','borde3-3'],
    'Pattern_middle_vertical':['borde1-2','borde2-2','borde3-2'],
    'Pattern_middle_side':['borde2-1','borde2-2','borde2-3'],
    'Pattern_right_down':['borde1-1','borde2-2','borde3-3'],
    'Pattern_left_down':['borde1-3','borde2-2','borde3-1']
}
//勝敗テンプレート
function　victoryData(pattern_result_value){
    return {      
        'Pattern_up':{ 
            'borde1-1': `${pattern_result_value}`, 'borde1-2': `${pattern_result_value}`, 'borde1-3': `${pattern_result_value}`
        },'Pattern_right':{ 
            'borde1-3': `${pattern_result_value}`, 'borde2-3': `${pattern_result_value}`, 'borde3-3': `${pattern_result_value}`
        },'Pattern_left':{ 
            'borde1-1': `${pattern_result_value}`, 'borde2-1': `${pattern_result_value}`, 'borde3-1': `${pattern_result_value}`
        },'Pattern_under':{ 
            'borde3-1': `${pattern_result_value}`, 'borde3-2': `${pattern_result_value}`, 'borde3-3': `${pattern_result_value}`
        },'Pattern_middle_vertical':{ 
            'borde1-2': `${pattern_result_value}`, 'borde2-2': `${pattern_result_value}`, 'borde3-2': `${pattern_result_value}`
        },'Pattern_middle_side':{ 
            'borde2-1': `${pattern_result_value}`, 'borde2-2': `${pattern_result_value}`, 'borde2-3': `${pattern_result_value}`
        },'Pattern_right_down':{ 
            'borde1-1': `${pattern_result_value}`, 'borde2-2': `${pattern_result_value}`, 'borde3-3': `${pattern_result_value}`
        },'Pattern_left_down':{ 
            'borde1-3': `${pattern_result_value}`, 'borde2-2': `${pattern_result_value}`, 'borde3-1': `${pattern_result_value}`
        }          
    }
}

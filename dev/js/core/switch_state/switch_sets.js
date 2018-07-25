//These correspond to folders
var set_list = Array();

 // /*A*/ set_list[65] = sets.pacifica;
 // /*B*/ set_list[66] = sets.bakery_fresh;
 // /*C*/ set_list[67] = null;
 // /*D*/ set_list[68] = sets.double_dragon_neon_virt;
 // /*E*/ set_list[69] = sets.eight_bit_sf;
 // /*F*/ set_list[70] = sets.flashbulb;
 // /*G*/ set_list[71] = sets.deff_coast;
 // /*H*/ set_list[72] = sets.gif_happy_hour;
 // /*I*/ set_list[73] = sets.the_time_it_takes_a_tree_to_blink;
 // /*J*/ set_list[74] = null;
 // /*K*/ set_list[75] = sets.knights_in_cairo;
 // /*L*/ set_list[76] = sets.redline;
 // /*M*/ set_list[77] = sets.midnight_glide;
 // /*N*/ set_list[78] = sets.new_quest_city;
 // /*O*/ set_list[79] = sets.momentous;
 // /*P*/ set_list[80] = sets.petra;
 // /*Q*/ set_list[81] = null;
 // /*R*/ set_list[82] = sets.rich_ddt;
 // /*S*/ set_list[83] = sets.slosh_drop;
 // /*T*/ set_list[84] = null;
 // /*U*/ set_list[85] = null;
 // /*V*/ set_list[86] = null;
 // /*W*/ set_list[87] = sets.welcome_ohm;
 // /*X*/ set_list[88] = sets.extent_of_the_jam;
 // /*Y*/ set_list[89] = sets.not_too_shabby;
 // /*Z*/ set_list[90] = sets.starpause;

 /*A*/ set_list[65] = [sets.all_gifs, scenes.all_gifs];
 /*B*/ set_list[66] = [sets.MJP_blues_toy,null];
 /*C*/ set_list[67] = [sets.MJP_cosmic_sans,null];
 /*D*/ set_list[68] = [sets.MJP_dead_hand,null];
 /*E*/ set_list[69] = [sets.MJP_detour_of_duty,null];
 /*F*/ set_list[70] = null;
 /*G*/ set_list[71] = null;
 /*H*/ set_list[72] = null;
 /*I*/ set_list[73] = [sets.MJP_civil_disobedience,null];
 /*J*/ set_list[74] = null;
 /*K*/ set_list[75] = null;
 /*L*/ set_list[76] = null;
 /*M*/ set_list[77] = null;
 /*N*/ set_list[78] = [sets.MJP_polish_cold_war_neon,null];
 /*O*/ set_list[79] = null;
 /*P*/ set_list[80] = [sets.MJP_pewter_handles,null];
 /*Q*/ set_list[81] = null;
 /*R*/ set_list[82] = null;
 /*S*/ set_list[83] = null;
 /*T*/ set_list[84] = null;
 /*U*/ set_list[85] = null;
 /*V*/ set_list[86] = null;
 /*W*/ set_list[87] = null;
 /*X*/ set_list[88] = null;
 /*Y*/ set_list[89] = null;
 /*Z*/ set_list[90] = null;

var sets_helper = {
  get_name: function(set){
    if(set == null || set == undefined || set.main == null || set.main == undefined){
      set = images.active_set;
    }
    first_item = set.main[1];
    var set_title_regex = /\/(.*)\//g;
    var set_title = set_title_regex.exec(first_item);
    return set_title[1];
  },
  current_set_name:'all_gifs'
};

var switch_sets = function(key){
  new_set = set_list[key][0];

  if(new_set == null){ return; }

  // Activate available scenes
  scenes_helper.activate_scenes_for_set( set_list[key][1] );

  // output the set title on the screen maybe
  sets_helper.current_set_name = sets_helper.get_name(new_set);

  images.active_set = new_set;

  if(images.randomize_order){ 
    images.active_set = shuffle_array(new_set.main);
  }else{
    images.active_set = new_set.main;
  }

  if( new_set.punches ){
    puncher.set_array = new_set.punches;
    corner_box.set_array = new_set.punches;
  }else{
    puncher.set_array = new_set.main;
    corner_box.set_array = new_set.main;
  }
  corner_box.cursor = Math.floor((Math.random()*corner_box.set_array.length)+1);
  big_shrinker.cursor = Math.floor((Math.random()*images.active_set.length)+1);

  // we need this:
  // modules.reset()
  // to do the following:

  bg_mod.reset();
  midground.reset();
  images.clear();


}


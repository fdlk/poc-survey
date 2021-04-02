<template>
  <div id="app">
    <survey :survey="survey"></survey>
  </div>
</template>

<script>
import * as SurveyVue from 'survey-vue'
import 'bootstrap/dist/css/bootstrap.css'

var Survey = SurveyVue.Survey
Survey.cssType = "bootstrap";

//If you want to add custom widgets package
//Add these imports
import * as widgets from "surveyjs-widgets";

//And initialize widgets you are want ti use
widgets.select2(SurveyVue);
// widgets.inputmask(SurveyVue);
// widgets.jquerybarrating(SurveyVue);
// widgets.jqueryuidatepicker(SurveyVue);
// widgets.nouislider(SurveyVue);
widgets.select2tagbox(SurveyVue);
// widgets.sortablejs(SurveyVue);
// widgets.ckeditor(SurveyVue);
// widgets.autocomplete(SurveyVue);
// widgets.bootstrapslider(SurveyVue);

export default {
  name: 'app',
  components: {
    Survey
  },
  data () {
    var json = {
 "pages": [
  {
   "name": "Intro",
   "elements": [
    {
     "type": "radiogroup",
     "name": "forwho",
     "title": "This questionnaire concerns:",
     "description": "If you are filling in the questionnaire for yourself, as the person with the chromosome 6 alteration, please understand that any reference to \"your child\" applies to you.",
     "choices": [
      {
       "value": "child",
       "text": "my child"
      },
      {
       "value": "me",
       "text": "myself"
      }
     ]
    },
    {
     "type": "radiogroup",
     "name": "gender",
     "title": "What is the gender of your child?",
     "choices": [
      {
       "value": "f",
       "text": "Female"
      },
      {
       "value": "m",
       "text": "Male"
      }
     ]
    },
    {
     "type": "text",
     "name": "birthdate",
     "title": "What is your child's date of birth (YYYY-MM-DD)",
     "inputType": "date"
    },
    {
     "type": "boolean",
     "name": "consent",
     "visibleIf": "{forwho}='me'",
     "title": "I have read and understood the privacy statement and agree with it’s content"
    },
    {
     "type": "radiogroup",
     "name": "mental_competent",
     "visibleIf": "{forwho}='child' && age({birthdate})>=12",
     "title": "The person with the chromosome 6 aberration is mentally competent",
     "choices": [
      {
       "value": "y",
       "text": "Yes"
      },
      {
       "value": "n",
       "text": "No"
      },
      {
       "value": "u",
       "text": "Unsure"
      }
     ]
    },
    {
     "type": "boolean",
     "name": "consent_parent",
     "visibleIf": "{forwho}='child'",
     "title": "I (parent/guardian) have read and understood the privacy statement and agree with it’s content"
    },
    {
     "type": "boolean",
     "name": "consent_child",
     "visibleIf": "{forwho}='child' && age({birthdate})>=12 && {mental_competent}='y'",
     "title": "I (patient) have understood the privacy statement and also agree with it’s content"
    }
   ],
   "title": "General questions"
  },
  {
   "name": "Part_A",
   "elements": [
    {
     "type": "panel",
     "name": "Pregnancy",
     "elements": [
      {
       "type": "radiogroup",
       "name": "preggrowth",
       "title": "a. How was the growth of your child during pregnancy (intrauterine growth)?",
       "choices": [
        {
         "value": "noHPO",
         "text": "Normal"
        },
        {
         "value": "Intrauterine_growth_retardation",
         "text": "Small for date"
        },
        {
         "value": "Large_for_gestational_age",
         "text": "Large for date"
        },
        {
         "value": "unsure",
         "text": "Unsure/do not know"
        }
       ]
      },
      {
       "type": "radiogroup",
       "name": "amioticfluid",
       "title": "b. Did the doctors make any remark on the amount of amniotic fluid?",
       "choices": [
        {
         "value": "noHPO",
         "text": "Normal"
        },
        {
         "value": "oligohydramnios",
         "text": "Too little"
        },
        {
         "value": "polyhydramnios",
         "text": "Too much"
        },
        {
         "value": "unsure",
         "text": "Unsure/do not know"
        }
       ]
      },
      {
       "type": "radiogroup",
       "name": "reduced_fetal_movements",
       "title": "c. Did you experience reduced foetal movements during pregnancy?",
       "choices": [
        {
         "value": "y",
         "text": "Yes"
        },
        {
         "value": "n",
         "text": "No"
        },
        {
         "value": "u",
         "text": "Unsure"
        }
       ]
      },
      {
       "type": "panel",
       "name": "gestational_age",
       "elements": [
        {
         "type": "text",
         "name": "gestational_age_weeks",
         "title": "weeks",
         "validators": [
          {
           "type": "numeric",
           "minValue": 1,
           "maxValue": 45
          }
         ],
         "inputType": "number"
        },
        {
         "type": "text",
         "name": "gestational_age_days",
         "title": "days",
         "validators": [
          {
           "type": "numeric",
           "minValue": 0,
           "maxValue": 7
          }
         ],
         "inputType": "number"
        }
       ],
       "title": "d. At what gestational age was your child born?"
      }
     ],
     "title": "A1. Pregnancy"
    },
    {
     "type": "panel",
     "name": "Childbirth",
     "elements": [
      {
       "type": "checkbox",
       "name": "childbirth1",
       "title": "a. Did any of the following apply to the birth of your child?",
       "choices": [
        {
         "value": "Breech_presentation",
         "text": "Breech position"
        },
        {
         "value": "Premature_rupture_of_membranes",
         "text": "Premature rupture of membranes"
        },
        {
         "value": "Ventouse_delivery",
         "text": "Ventouse (vacuum extraction or suction) delivery"
        },
        {
         "value": "Forceps_delivery",
         "text": "Forceps delivery"
        },
        {
         "value": "Caesarian_section",
         "text": "Caesarean section"
        },
        {
         "value": "Shoulder_dystocia",
         "text": "Shoulder dystocia (baby's head has been born, but one of the shoulders becomes stuck)"
        },
        {
         "value": "Meconium_stained_amniotic_fluid",
         "text": "Meconium-stained amniotic fluid"
        },
        {
         "value": "Neonatal_respiratory_distress",
         "text": "Oxygen deficiency"
        },
        {
         "value": "9",
         "text": "None of the above"
        }
       ]
      }
     ],
     "title": "A2. Childbirth"
    },
    {
     "type": "panel",
     "name": "Newborn",
     "elements": [
      {
       "type": "text",
       "name": "weight_birth_gram",
       "title": "a. Weight at birth (grams)",
       "validators": [
        {
         "type": "numeric",
         "minValue": 1,
         "maxValue": 6000
        }
       ],
       "inputType": "number"
      },
      {
       "type": "text",
       "name": "weight_birth_imp_pound",
       "title": "a. Weight at birth (pounds)",
       "inputType": "number"
      },
      {
       "type": "text",
       "name": "weight_birth_imp_ounces",
       "title": "a. Weight at birth (ounces)",
       "inputType": "number"
      },
      {
       "type": "text",
       "name": "length_birth_cm",
       "title": "b. Length at birth (cm)",
       "inputType": "number"
      },
      {
       "type": "text",
       "name": "length_birth_imp_iches",
       "title": "b. Length at birth (inches)",
       "inputType": "number"
      },
      {
       "type": "text",
       "name": "head_birth_cm",
       "title": "c. Head circumference at birth (xx.x cm)",
       "inputType": "number"
      },
      {
       "type": "text",
       "name": "head_birth_imp_inches",
       "title": "c. Head circumference at birth (xx.x inches)",
       "inputType": "number"
      },
      {
       "type": "panel",
       "name": "apgar",
       "elements": [
        {
         "type": "radiogroup",
         "name": "apgar_1",
         "title": "1 minute after birth",
         "choices": [
          {
           "value": "0",
           "text": "0"
          },
          {
           "value": "1",
           "text": "1"
          },
          {
           "value": "2",
           "text": "2"
          },
          {
           "value": "3",
           "text": "3"
          },
          {
           "value": "4",
           "text": "4"
          },
          {
           "value": "5",
           "text": "5"
          },
          {
           "value": "6",
           "text": "6"
          },
          {
           "value": "7",
           "text": "7"
          },
          {
           "value": "8",
           "text": "8"
          },
          {
           "value": "9",
           "text": "9"
          },
          {
           "value": "10",
           "text": "10"
          },
          {
           "value": "unknown",
           "text": "unknown"
          }
         ]
        },
        {
         "type": "radiogroup",
         "name": "apgar_5",
         "title": "5 minutes after birth",
         "choices": [
          {
           "value": "0",
           "text": "0"
          },
          {
           "value": "1",
           "text": "1"
          },
          {
           "value": "2",
           "text": "2"
          },
          {
           "value": "3",
           "text": "3"
          },
          {
           "value": "4",
           "text": "4"
          },
          {
           "value": "5",
           "text": "5"
          },
          {
           "value": "6",
           "text": "6"
          },
          {
           "value": "7",
           "text": "7"
          },
          {
           "value": "8",
           "text": "8"
          },
          {
           "value": "9",
           "text": "9"
          },
          {
           "value": "10",
           "text": "10"
          },
          {
           "value": "unknown",
           "text": "unknown"
          }
         ]
        },
        {
         "type": "radiogroup",
         "name": "apgar_10",
         "title": "10 minutes after birth",
         "choices": [
          {
           "value": "0",
           "text": "0"
          },
          {
           "value": "1",
           "text": "1"
          },
          {
           "value": "2",
           "text": "2"
          },
          {
           "value": "3",
           "text": "3"
          },
          {
           "value": "4",
           "text": "4"
          },
          {
           "value": "5",
           "text": "5"
          },
          {
           "value": "6",
           "text": "6"
          },
          {
           "value": "7",
           "text": "7"
          },
          {
           "value": "8",
           "text": "8"
          },
          {
           "value": "9",
           "text": "9"
          },
          {
           "value": "10",
           "text": "10"
          },
          {
           "value": "unknown",
           "text": "unknown"
          }
         ]
        }
       ],
       "title": "d. What were your baby's ‘APGAR’ scores at:",
       "description": "(APGAR scores are given to indicate how well a baby is doing directly after birth)"
      },
      {
       "type": "boolean",
       "name": "Abn_of_the_umbilical_cord",
       "title": "e. Was there anything special or different about the umbilical cord?"
      },
      {
       "type": "checkbox",
       "name": "umbilicalcord",
       "visibleIf": "{Abn_of_the_umbilical_cord}=true",
       "title": "What was special?",
       "choices": [
        {
         "value": "Long_umbilical_cord",
         "text": "Too long"
        },
        {
         "value": "Short_umbilical_cord",
         "text": "Too short"
        },
        {
         "value": "Nuchal_cord",
         "text": "Nuchal cord (cord wrapped around the neck)"
        },
        {
         "value": "Single_umbilical_artery",
         "text": "Single umbilical artery (2 vessels in cord instead of 3, SUA)"
        },
        {
         "value": "noHPO",
         "text": "Other/do not know"
        }
       ]
      },
      {
       "type": "boolean",
       "name": "Abnormality_of_the_placenta",
       "title": "f. Was there anything special or different about the placenta?"
      },
      {
       "type": "checkbox",
       "name": "placenta",
       "visibleIf": "{Abnormality_of_the_placenta}=true",
       "title": "What was special?",
       "choices": [
        {
         "value": "Large_placenta",
         "text": "Large placenta"
        },
        {
         "value": "Small_placenta",
         "text": "Small placenta"
        },
        {
         "value": "Placental_abruption",
         "text": "Placental abruption"
        },
        {
         "value": "Calcified_placenta",
         "text": "Calcification of the placenta"
        },
        {
         "value": "Abnormal_insertion_of_umbilical_cord",
         "text": "Abnormal insertion of umbilical cord vessels"
        },
        {
         "value": "noHPO",
         "text": "Other/do not know"
        }
       ]
      }
     ],
     "title": "A3.  The newborn",
     "description": "Specific information about the newborn period:  Choose gram or pounds/ounces, cm or feet/inches."
    },
    {
     "type": "panel",
     "name": "Firstdays",
     "elements": [
      {
       "type": "checkbox",
       "name": "firstdays1",
       "title": "a. Was/were there …",
       "choices": [
        {
         "value": "Neonatal_asphyxia",
         "text": "Extra oxygen needed?"
        },
        {
         "value": "Temperature_dysregulation_necessitating_an_incubator",
         "text": "Temperature dysregulation necessitating an incubator?"
        },
        {
         "value": "Prolonged_neonatal_jaundice",
         "text": "Jaundice (icterus) requiring light therapy or transfusion in a hospital?"
        },
        {
         "value": "Poor_suck",
         "text": "Feeding problems? (poor sucking or need for tube feeding)"
        },
        {
         "value": "Transient_neonatal_diabetes_mellitus",
         "text": "Transient diabetes of the newborn? (TNDM, this is diabetes that presents at or soon after birth, but is not permanent)"
        },
        {
         "value": "Newborn_seizures",
         "text": "Newborn seizures?"
        },
        {
         "value": "7",
         "text": "None of the above"
        }
       ]
      },
      {
       "type": "boolean",
       "name": "hospitalisation",
       "title": "b. Did your child need to stay in the hospital after birth?"
      },
      {
       "type": "checkbox",
       "name": "hospital1",
       "visibleIf": "{hospitalisation}=true",
       "title": "Because of...",
       "choices": [
        {
         "value": "Premature_birth",
         "text": "Prematurity"
        },
        {
         "value": "Hospitalisation_Maternal_reasons",
         "text": "Maternal reasons"
        },
        {
         "value": "Hospitalisation_Congenital_problems",
         "text": "Congenital problems"
        },
        {
         "value": "Hospitalisation_An_infection",
         "text": "An infection"
        },
        {
         "value": "5",
         "text": "Other reasons"
        }
       ]
      }
     ],
     "title": "A4. First few days after birth"
    }
   ],
   "title": "A. Pregnancy, childbirth and after birth (postnatal period)"
  },
  {
   "name": "Part_B",
   "elements": [
    {
     "type": "panel",
     "name": "Skull",
     "elements": [
      {
       "type": "radiogroup",
       "name": "Abnormality_of_skull_size",
       "title": "a. An abnormal head size?",
       "choices": [
        {
         "value": "y",
         "text": "Yes"
        },
        {
         "value": "n",
         "text": "No"
        },
        {
         "value": "u",
         "text": "Unsure"
        }
       ]
      },
      {
       "type": "radiogroup",
       "name": "headsize1",
       "visibleIf": "{Abnormality_of_skull_size}='y'",
       "title": "What kind?",
       "choices": [
        {
         "value": "Microcephaly",
         "text": "Microcephaly"
        },
        {
         "value": "Macrocephaly",
         "text": "Macrocephaly"
        }
       ]
      },
      {
       "type": "radiogroup",
       "name": "microcephaly1",
       "visibleIf": "{headsize1}='Microcephaly' && {Abnormality_of_skull_size}='y'",
       "title": "Please specify",
       "choices": [
        {
         "value": "Congenital_microcephaly",
         "text": "Congenital (from birth)"
        },
        {
         "value": "Postnatal_microcephaly",
         "text": "Postnatal (secondary due to growth restriction later in life)"
        },
        {
         "value": "noHPO",
         "text": "Other/do not know"
        }
       ]
      },
      {
       "type": "radiogroup",
       "name": "macrocephaly1",
       "visibleIf": "{headsize1}='Macrocephaly' && {Abnormality_of_skull_size}='y'",
       "title": "Please specify",
       "choices": [
        {
         "value": "Macrocephaly_at_birth",
         "text": "Congenital (from birth)"
        },
        {
         "value": "Hydrocephalus",
         "text": "Due to hydrocephalus"
        },
        {
         "value": "noHPO",
         "text": "Other/do not know"
        },
        {
         "value": "Postnatal_macrocephaly",
         "text": "Postnatal (secondary due to overgrowth not caused by a hydrocephalus)"
        }
       ]
      },
      {
       "type": "radiogroup",
       "name": "large_fontanelles",
       "title": "b. Abnormality of the fontanelles?",
       "choices": [
        {
         "value": "y",
         "text": "Yes"
        },
        {
         "value": "n",
         "text": "No"
        },
        {
         "value": "u",
         "text": "Unsure"
        }
       ]
      },
      {
       "type": "radiogroup",
       "name": "large_fontanelles1",
       "visibleIf": "{large_fontanelles}='y'",
       "title": "Please specify",
       "choices": [
        {
         "value": "large_fontanelles",
         "text": "Large fontanelles"
        },
        {
         "value": "premature_closure_of_fontanelles",
         "text": "Premature closure of fontanelles"
        },
        {
         "value": "noHPO",
         "text": "Other/do not know"
        }
       ]
      },
      {
       "type": "radiogroup",
       "name": "plagiocephaly",
       "title": "c. Plagiocephaly (asymmetric skull)?",
       "choices": [
        {
         "value": "y",
         "text": "Yes"
        },
        {
         "value": "n",
         "text": "No"
        },
        {
         "value": "u",
         "text": "Unsure"
        }
       ]
      },
      {
       "type": "radiogroup",
       "name": "craniosynostosis",
       "title": "d. Craniosynostosis (too early closure of sutures of the skull)?",
       "choices": [
        {
         "value": "y",
         "text": "Yes"
        },
        {
         "value": "n",
         "text": "No"
        },
        {
         "value": "u",
         "text": "Unsure"
        }
       ]
      },
      {
       "type": "checkbox",
       "name": "craniosynostosis1",
       "visibleIf": "{craniosynostosis}='y'",
       "title": "Which suture(s)?",
       "choices": [
        {
         "value": "Coronal_craniosynostosis",
         "text": "Coronal (lateral forehead)"
        },
        {
         "value": "Lambdoidal_craniosynostosis",
         "text": "Lambdoidal"
        },
        {
         "value": "metopic_synostosis",
         "text": "Metopic (central forehead)"
        },
        {
         "value": "Multiple_suture_craniosynostosis",
         "text": "Multiple sutures"
        },
        {
         "value": "noHPO",
         "text": "Other/do not know"
        },
        {
         "value": "sagittal_craniosynostosis",
         "text": "Sagittal"
        }
       ]
      },
      {
       "type": "boolean",
       "name": "craniosynostosis_operation",
       "visibleIf": "{craniosynostosis}='y'",
       "title": "Was an operation needed because of the craniosynostosis?"
      },
      {
       "type": "radiogroup",
       "name": "Encephalocele",
       "title": "e. Encephalocele (skull defect with protrusion of the brain and/or membranes)?",
       "choices": [
        {
         "value": "y",
         "text": "Yes"
        },
        {
         "value": "n",
         "text": "No"
        },
        {
         "value": "u",
         "text": "Unsure"
        }
       ]
      }
     ],
     "title": "B1. Skull and form of the head",
     "description": "Does your child have …"
    },
    {
     "type": "panel",
     "name": "Facial",
     "elements": [
      {
       "type": "radiogroup",
       "name": "Hypotelorism",
       "title": "a. Hypotelorism (closely spaced eyes)",
       "choices": [
        {
         "value": "y",
         "text": "Yes"
        },
        {
         "value": "n",
         "text": "No"
        },
        {
         "value": "u",
         "text": "Unsure"
        }
       ]
      },
      {
       "type": "radiogroup",
       "name": "Hypertelorism",
       "title": "b. Hypertelorism (widely spaced eyes)",
       "choices": [
        {
         "value": "y",
         "text": "Yes"
        },
        {
         "value": "n",
         "text": "No"
        },
        {
         "value": "u",
         "text": "Unsure"
        }
       ]
      },
      {
       "type": "radiogroup",
       "name": "Ptosis",
       "title": "c. Ptosis (drooping) of the upper eyelid",
       "choices": [
        {
         "value": "y",
         "text": "Yes"
        },
        {
         "value": "n",
         "text": "No"
        },
        {
         "value": "u",
         "text": "Unsure"
        }
       ]
      },
      {
       "type": "boolean",
       "name": "Ptosis_operation",
       "visibleIf": "{Ptosis}='y'",
       "title": "Was there an operation needed?"
      },
      {
       "type": "radiogroup",
       "name": "Abnormality_of_lacrimal_duct",
       "title": "d. Blocked or absent tear ducts (nasolacrimal ducts)",
       "choices": [
        {
         "value": "y",
         "text": "Yes"
        },
        {
         "value": "n",
         "text": "No"
        },
        {
         "value": "u",
         "text": "Unsure"
        }
       ]
      },
      {
       "type": "radiogroup",
       "name": "Abnormality_of_mouth",
       "title": "e. An abnormal lip or palate",
       "choices": [
        {
         "value": "y",
         "text": "Yes"
        },
        {
         "value": "n",
         "text": "No"
        },
        {
         "value": "u",
         "text": "Unsure"
        }
       ]
      },
      {
       "type": "checkbox",
       "name": "Oral_cleft1",
       "visibleIf": "{Abnormality_of_mouth}='y'",
       "title": "Please specify",
       "choices": [
        {
         "value": "Cleft_palate",
         "text": "Cleft palate"
        },
        {
         "value": "Cleft_soft_palate",
         "text": "Cleft soft palate"
        },
        {
         "value": "non_midline_Cleft_lip",
         "text": "Cleft upper lip (on right or left side)"
        },
        {
         "value": "median_cleft_lip",
         "text": "Central cleft in upper lip"
        },
        {
         "value": "cleft_lower_lip",
         "text": "Cleft lower lip"
        },
        {
         "value": "Lip_pit",
         "text": "Lip pit"
        },
        {
         "value": "noHPO",
         "text": "Other/do not know"
        }
       ]
      },
      {
       "type": "radiogroup",
       "name": "Abnormality_of_the_teeth",
       "title": "f. Dental (tooth) abnormalities",
       "choices": [
        {
         "value": "y",
         "text": "Yes"
        },
        {
         "value": "n",
         "text": "No"
        },
        {
         "value": "u",
         "text": "Unsure"
        }
       ]
      },
      {
       "type": "checkbox",
       "name": "Abnormality_of_the_teeth1",
       "visibleIf": "{Abnormality_of_the_teeth}='y'",
       "title": "Please specify",
       "choices": [
        {
         "value": "Increased_number_of_teeth",
         "text": "Too many teeth"
        },
        {
         "value": "Reduced_number_of_teeth",
         "text": "Too few teeth"
        },
        {
         "value": "Delayed_eruption_of_teeth",
         "text": "Delayed eruption of teeth"
        },
        {
         "value": "Abnormality_of_dental_morphology",
         "text": "Abnormally shaped teeth"
        },
        {
         "value": "Abnormality_of_dental_structure",
         "text": "Abnormality of tooth enamel or colour"
        },
        {
         "value": "noHPO",
         "text": "Other/do not know"
        }
       ]
      },
      {
       "type": "radiogroup",
       "name": "Abn_of_periauricular_region",
       "title": "g. Skin pit or skin tag near the ears",
       "choices": [
        {
         "value": "y",
         "text": "Yes"
        },
        {
         "value": "n",
         "text": "No"
        },
        {
         "value": "u",
         "text": "Unsure"
        }
       ]
      },
      {
       "type": "radiogroup",
       "name": "Abnormality_of_the_outer_ear",
       "title": "h. Abnormality of the outer ear (malformed or dysplastic)",
       "choices": [
        {
         "value": "y",
         "text": "Yes"
        },
        {
         "value": "n",
         "text": "No"
        },
        {
         "value": "u",
         "text": "Unsure"
        }
       ]
      },
      {
       "type": "checkbox",
       "name": "c6_Abnormality_of_outer_ear1",
       "visibleIf": "{Abnormality_of_the_outer_ear}='y'",
       "title": "Please specify",
       "choices": [
        {
         "value": "Microtia",
         "text": "Microtia (very small outer ear)"
        },
        {
         "value": "Aplasia_Hypoplasia_of_the_external_ear",
         "text": "Malformed (dysplastic) outer ear"
        },
        {
         "value": "noHPO",
         "text": "Other/do not know"
        }
       ]
      },
      {
       "type": "radiogroup",
       "name": "Abn_of_the_auditory_canal",
       "title": "i. Abnormality of the auditory canal",
       "choices": [
        {
         "value": "y",
         "text": "Yes"
        },
        {
         "value": "n",
         "text": "No"
        },
        {
         "value": "u",
         "text": "Unsure"
        }
       ]
      },
      {
       "type": "checkbox",
       "name": "Abn_of_the_auditory_canal1",
       "visibleIf": "{Abn_of_the_auditory_canal}='y'",
       "title": "Please specify",
       "choices": [
        {
         "value": "stenosis_of_the_external_auditory_canal",
         "text": "Narrow (stenosis)"
        },
        {
         "value": "atresia_of_the_external_auditory_canal",
         "text": "Absent"
        },
        {
         "value": "noHPO",
         "text": "Other/do not know"
        }
       ]
      }
     ],
     "title": "B2. Facial characteristics",
     "description": "Has one or more of the following facial characteristics been mentioned by your child's doctor?"
    },
    {
     "type": "panel",
     "name": "Hairskin",
     "elements": [
      {
       "type": "boolean",
       "name": "abnormality_of_the_skin",
       "title": "a. Abnormalities of the skin?"
      },
      {
       "type": "checkbox",
       "name": "abnormality_of_the_skin1",
       "visibleIf": "{abnormality_of_the_skin}=true",
       "title": "Please specify",
       "choices": [
        {
         "value": "Cafe-au-lait_spot",
         "text": "Café-au-lait spots"
        },
        {
         "value": "Hypopigmented_skin_patches",
         "text": "Hypopigmented skin patches"
        },
        {
         "value": "capillary_skin_hemangioma",
         "text": "Capillary skin haemangioma (strawberry haemangioma)"
        },
        {
         "value": "cavernous_hemangioma",
         "text": "Cavernous skin haemangioma"
        },
        {
         "value": "Aplasia_cutis_congenita",
         "text": "Aplasia cutis (skin defect of the skull)"
        },
        {
         "value": "noHPO",
         "text": "Other/do not know"
        }
       ]
      },
      {
       "type": "boolean",
       "name": "abnormality_of_the_hair",
       "title": "b. Abnormal hair?"
      },
      {
       "type": "checkbox",
       "name": "abnormality_of_the_hair1",
       "visibleIf": "{abnormality_of_the_hair}=true",
       "title": "Please specify",
       "choices": [
        {
         "value": "absent_hair",
         "text": "No hair"
        },
        {
         "value": "sparse_hair",
         "text": "Very sparse and thin hair"
        },
        {
         "value": "brittle_hair",
         "text": "Brittle hair"
        },
        {
         "value": "noHPO",
         "text": "Other/do not know"
        }
       ]
      }
     ],
     "title": "B3. Hair and skin",
     "description": "Does your child have …"
    },
    {
     "type": "panel",
     "name": "Trunk",
     "elements": [
      {
       "type": "boolean",
       "name": "Aplasia_Hypoplasia_clavicles",
       "title": "a. Underdeveloped or absent collarbones (clavicles)?"
      },
      {
       "type": "boolean",
       "name": "Abnormality_of_the_ribs",
       "title": "b. Abnormality of the ribs?"
      },
      {
       "type": "checkbox",
       "name": "ribs1",
       "visibleIf": "{Abnormality_of_the_ribs}=true",
       "title": "Please specify",
       "choices": [
        {
         "value": "Missing_ribs",
         "text": "Missing ribs (11 pairs of ribs)"
        },
        {
         "value": "rib_fusion",
         "text": "Fused ribs"
        },
        {
         "value": "noHPO",
         "text": "Other/do not know"
        }
       ]
      },
      {
       "type": "boolean",
       "name": "Abnormality_of_the_thorax",
       "title": "c. An abnormal shape of the thorax?"
      },
      {
       "type": "checkbox",
       "name": "thorax1",
       "visibleIf": "{Abnormality_of_the_thorax}=true",
       "title": "Please specify",
       "choices": [
        {
         "value": "Pectus_excavatum",
         "text": "Pectus excavatum (funnel chest)"
        },
        {
         "value": "Pectus_carinatum",
         "text": "Pectus carinatum (pigeon chest)"
        },
        {
         "value": "noHPO",
         "text": "Other/do not know"
        }
       ]
      },
      {
       "type": "boolean",
       "name": "Supernumerary_nipple",
       "title": "d. Extra nipples?"
      },
      {
       "type": "boolean",
       "name": "Abdominal_wall_defect",
       "title": "e. An abdominal wall defect?"
      },
      {
       "type": "checkbox",
       "name": "wall_defect1",
       "visibleIf": "{Abdominal_wall_defect}=true",
       "title": "Please specify",
       "choices": [
        {
         "value": "Umbilical_hernia",
         "text": "Umbilical hernia (a protrusion of abdominal-cavity contents through the umbilicus (belly button))"
        },
        {
         "value": "Omphalocele",
         "text": "Omphalocele (a type of abdominal wall defect in which the intestines, liver, and occasionally other organs remain outside of the abdomen in a sac)"
        },
        {
         "value": "gastroschisis",
         "text": "Gastroschisis (abdominal wall defect in which parts of the intestines spill into the amniotic fluid through a hole in the abdominal wall; there is no sac)"
        },
        {
         "value": "inguinal_hernia",
         "text": "Inguinal hernia (a protrusion of abdominal-cavity contents through the inguinal canal)"
        },
        {
         "value": "noHPO",
         "text": "Other/do not know"
        }
       ]
      },
      {
       "type": "boolean",
       "name": "Abn_curvature_vertebral_column",
       "title": "f. Abnormal curvature of the back/spine?"
      },
      {
       "type": "checkbox",
       "name": "curvature_spine1",
       "visibleIf": "{Abn_curvature_vertebral_column}=true",
       "title": "Please specify",
       "choices": [
        {
         "value": "Scoliosis",
         "text": "Scoliosis (lateral (toward the side) curvature in the normally straight vertical line of the spine)"
        },
        {
         "value": "kyphosis",
         "text": "Kyphosis (excessive curvature of the spine, a hump)"
        },
        {
         "value": "hyperlordosis",
         "text": "Hyperlordosis"
        },
        {
         "value": "noHPO",
         "text": "Other/do not know"
        }
       ]
      },
      {
       "type": "boolean",
       "name": "Abnormal_vertebrae",
       "title": "g. Abnormal vertebrae?"
      },
      {
       "type": "checkbox",
       "name": "vertebrae1",
       "visibleIf": "{Abnormal_vertebrae}=true",
       "title": "Please specify",
       "choices": [
        {
         "value": "Fused_vertebrae",
         "text": "Fused vertebrae"
        },
        {
         "value": "Hemivertebrae",
         "text": "Hemi-vertebrae (wedge-shaped vertebrae)"
        },
        {
         "value": "Absent_vertebrae",
         "text": "Absent vertebrae"
        },
        {
         "value": "Supernumerary_vertebrae",
         "text": "Extra vertebrae"
        },
        {
         "value": "noHPO",
         "text": "Other/do not know"
        }
       ]
      },
      {
       "type": "boolean",
       "name": "Spina_bifida",
       "title": "h. Spina bifida?"
      },
      {
       "type": "boolean",
       "name": "sacral_dimple",
       "title": "i. A sacral dimple? (small depression in the skin, located just above the buttocks)"
      }
     ],
     "title": "B4. The trunk: chest, abdomen and back",
     "description": "Does your child have …"
    },
    {
     "type": "panel",
     "name": "Limbs",
     "elements": [
      {
       "type": "boolean",
       "name": "hypermobility_joints",
       "title": "a. Hypermobility of the joints?"
      },
      {
       "type": "radiogroup",
       "name": "hypermobility_joints1",
       "visibleIf": "{hypermobility_joints}=true",
       "title": "Please specify",
       "choices": [
        {
         "value": "Hypermobility_especially_in_large_joints_knees_elbows",
         "text": "Especially in large joints (knees, elbows)"
        },
        {
         "value": "Finger_joint_hypermobility",
         "text": "Especially in small joints (fingers)"
        },
        {
         "value": "Generalized_joint_laxity",
         "text": "All joints"
        },
        {
         "value": "noHPO",
         "text": "Other/do not know"
        }
       ]
      },
      {
       "type": "boolean",
       "name": "contracture_joints",
       "title": "b. Contractures of the joints? (limited movement of joints due to shortening of muscle or joint)"
      },
      {
       "type": "checkbox",
       "name": "contracture_joints1",
       "visibleIf": "{contracture_joints}=true",
       "title": "Please specify",
       "choices": [
        {
         "value": "decreased_finger_mobility",
         "text": "Stiff fingers (inability to flex fingers)"
        },
        {
         "value": "Contractures_especially_in_large_joints_knees_elbows_present_at_birth",
         "text": "Contractures especially in large joints (knees, elbows), present at birth"
        },
        {
         "value": "Contractures_of_the_large_joints",
         "text": "Contractures especially in large joints, developed later in life"
        },
        {
         "value": "Congenital_finger_flexion_contractures",
         "text": "Contractures especially in small joints (fingers), present at birth"
        },
        {
         "value": "Contractures_especially_in_small_joints_developed_later_in_life",
         "text": "Contractures especially in small joints, developed later in life"
        },
        {
         "value": "Arthrogryposis",
         "text": "Contractures of all joints, already present at birth (arthrogryposis)"
        },
        {
         "value": "Contractures_of_all_joints_developed_later_in_life",
         "text": "Contractures of all joints, developed later in life"
        },
        {
         "value": "noHPO",
         "text": "Other/do not know"
        }
       ]
      },
      {
       "type": "boolean",
       "name": "abnormality_of_the_hand",
       "title": "c. Particular features of the hands or fingers?"
      },
      {
       "type": "checkbox",
       "name": "abnormality_of_the_hand1",
       "visibleIf": "{abnormality_of_the_hand}=true",
       "title": "Please specify",
       "choices": [
        {
         "value": "preaxial_hand_polydactyly",
         "text": "Extra fingers (polydactyly) on the side of the thumb"
        },
        {
         "value": "postaxial_hand_polydactyly",
         "text": "Extra fingers (polydactyly) on the side of the little finger"
        },
        {
         "value": "oligodactyly_hands",
         "text": "Missing fingers (oligodactyly)"
        },
        {
         "value": "short_digit",
         "text": "Too short fingers (brachydactyly)"
        },
        {
         "value": "aplasia_hypoplasia_of_fingers",
         "text": "Very small last phalanges with small nails"
        },
        {
         "value": "finger_syndactyly",
         "text": "Fusion of fingers (syndactyly)"
        },
        {
         "value": "triphalangeal_thumb",
         "text": "Finger-like thumb"
        },
        {
         "value": "split_hand",
         "text": "Cleft hand (lobster hand)"
        },
        {
         "value": "noHPO",
         "text": "Other/do not know"
        }
       ]
      },
      {
       "type": "boolean",
       "name": "abnormality_of_the_foot",
       "title": "d. Particular features of the feet or toes?"
      },
      {
       "type": "checkbox",
       "name": "abnormality_of_the_foot1",
       "visibleIf": "{abnormality_of_the_foot}=true",
       "title": "Please specify",
       "choices": [
        {
         "value": "foot_polydactyly",
         "text": "Extra toes"
        },
        {
         "value": "Aplasia_of_toe",
         "text": "Absent toes"
        },
        {
         "value": "hypoplasia_of_toe",
         "text": "Very short toes"
        },
        {
         "value": "toe_syndactyly",
         "text": "Toe syndactyly (fused toes)"
        },
        {
         "value": "pes_planus",
         "text": "Flat feet"
        },
        {
         "value": "positional_foot_deformity",
         "text": "Positional foot deformity (clubfoot or talipes valgus)"
        },
        {
         "value": "abnormality_of_the_achilles_tendon",
         "text": "Abnormality of the achilles tendon (too short)"
        },
        {
         "value": "split_foot",
         "text": "Cleft feet (split feet)"
        },
        {
         "value": "noHPO",
         "text": "Other/do not know"
        }
       ]
      },
      {
       "type": "boolean",
       "name": "abnormality_of_the_nail",
       "title": "e. Abnormalities of the nails?"
      },
      {
       "type": "checkbox",
       "name": "abnormality_of_the_nail1",
       "visibleIf": "{abnormality_of_the_nail}=true",
       "title": "Please specify",
       "choices": [
        {
         "value": "aplastic_hypoplastic_nails",
         "text": "Absent nails"
        },
        {
         "value": "thin_nails",
         "text": "Very thin nails"
        },
        {
         "value": "thick_nails",
         "text": "Very thick nails"
        },
        {
         "value": "abnormality_of_nail_color",
         "text": "Abnormal nail colour"
        },
        {
         "value": "noHPO",
         "text": "Other/do not know"
        }
       ]
      }
     ],
     "title": "B5. The limbs: joints, hands and feet",
     "description": "Does your child have …"
    }
   ],
   "title": "B. Physical aspects: characteristics of head and face, trunk, limbs and skin"
  },
  {
   "name": "Part_C",
   "elements": [
    {
     "type": "panel",
     "name": "Growth",
     "elements": [
      {
       "type": "boolean",
       "name": "Abnormality_of_body_height",
       "title": "a. Does your child have a normal stature (body height)?"
      },
      {
       "type": "radiogroup",
       "name": "stature1",
       "visibleIf": "{Abnormality_of_body_height}=false",
       "title": "Please specify",
       "choices": [
        {
         "value": "Short_stature",
         "text": "Short stature (below the lowest line of the growth curve for normal children)"
        },
        {
         "value": "Tall_stature",
         "text": "Tall stature (above the highest line of the growth curve for normal children)"
        }
       ]
      },
      {
       "type": "panel",
       "name": "measurements",
       "elements": [
        {
         "type": "text",
         "name": "measurement_date",
         "title": "Date of measurement (YYYY-MM-DD):",
         "inputType": "date"
        },
        {
         "type": "text",
         "name": "height_cm",
         "title": "Height (cm):",
         "inputType": "number"
        },
        {
         "type": "text",
         "name": "height_feet",
         "title": "Height (feet):",
         "inputType": "number"
        },
        {
         "type": "text",
         "name": "height_inches",
         "title": "Height (inches):",
         "inputType": "number"
        },
        {
         "type": "text",
         "name": "weight_kg",
         "title": "Weight (kg):",
         "inputType": "number"
        },
        {
         "type": "text",
         "name": "weight_lb",
         "title": "Weight (lb):",
         "inputType": "number"
        },
        {
         "type": "text",
         "name": "weight_oz",
         "title": "Weight (oz):",
         "inputType": "number"
        },
        {
         "type": "text",
         "name": "head_cm",
         "title": "Head circumference (xx.x cm):",
         "description": "Measuring Head Circumference:  The measurement should be taken with a flexible measuring tape that cannot be stretched.  To measure, securely wrap the tape around the widest possible circumference of the head. Typically, this is from the most prominent point on the forehead - above the root of the nose - to the most prominent part on the back of the head. Take the measurement three times and select the largest measurement to the nearest 0.1cm. If you don’t have a measuring tape, use a piece of string. Then lay the string out on a table and measure the length with a ruler.",
         "inputType": "number"
        },
        {
         "type": "text",
         "name": "head_inches",
         "title": "Head circumference (xx.x inches):",
         "inputType": "number"
        }
       ],
       "title": "b. Current measurements:"
      },
      {
       "type": "panel",
       "name": "measurements1_16",
       "elements": [
        {
         "type": "panel",
         "name": "measurements1",
         "elements": [
          {
           "type": "text",
           "name": "measurement1_date",
           "visibleIf": "age({birthdate})>=1",
           "title": "Date of measurement (YYYY-MM-DD):",
           "inputType": "date"
          },
          {
           "type": "text",
           "name": "height1_cm",
           "visibleIf": "age({birthdate})>=1",
           "title": "Height (cm):",
           "inputType": "number"
          },
          {
           "type": "text",
           "name": "height1_feet",
           "visibleIf": "age({birthdate})>=1",
           "title": "Height (feet):",
           "inputType": "number"
          },
          {
           "type": "text",
           "name": "height1_inches",
           "visibleIf": "age({birthdate})>=1",
           "title": "Height (inches):",
           "inputType": "number"
          },
          {
           "type": "text",
           "name": "weight1_kg",
           "visibleIf": "age({birthdate})>=1",
           "title": "Weight (kg):",
           "inputType": "number"
          },
          {
           "type": "text",
           "name": "weight1_lb",
           "visibleIf": "age({birthdate})>=1",
           "title": "Weight (lb):",
           "inputType": "number"
          },
          {
           "type": "text",
           "name": "weight1_oz",
           "visibleIf": "age({birthdate})>=1",
           "title": "Weight (oz):",
           "inputType": "number"
          },
          {
           "type": "text",
           "name": "head1_cm",
           "visibleIf": "age({birthdate})>=1",
           "title": "Head circumference (xx.x cm):",
           "inputType": "number"
          },
          {
           "type": "text",
           "name": "head1_inches",
           "visibleIf": "age({birthdate})>=1",
           "title": "Head circumference (xx.x inches):",
           "inputType": "number"
          }
         ],
         "visibleIf": "age({birthdate})>=1",
         "title": "§         At the age of approximately 1 year:"
        },
        {
         "type": "panel",
         "name": "measurements2",
         "elements": [
          {
           "type": "text",
           "name": "measurement2_date",
           "visibleIf": "age({birthdate})>=2",
           "title": "Date of measurement (YYYY-MM-DD):",
           "inputType": "date"
          },
          {
           "type": "text",
           "name": "height2_cm",
           "visibleIf": "age({birthdate})>=2",
           "title": "Height (cm):",
           "inputType": "number"
          },
          {
           "type": "text",
           "name": "height2_feet",
           "visibleIf": "age({birthdate})>=2",
           "title": "Height (feet):",
           "inputType": "number"
          },
          {
           "type": "text",
           "name": "height2_inches",
           "visibleIf": "age({birthdate})>=2",
           "title": "Height (inches):",
           "inputType": "number"
          },
          {
           "type": "text",
           "name": "weight2_kg",
           "visibleIf": "age({birthdate})>=2",
           "title": "Weight (kg):",
           "inputType": "number"
          },
          {
           "type": "text",
           "name": "weight2_lb",
           "visibleIf": "age({birthdate})>=2",
           "title": "Weight (lb):",
           "inputType": "number"
          },
          {
           "type": "text",
           "name": "weight2_oz",
           "visibleIf": "age({birthdate})>=2",
           "title": "Weight (oz):",
           "inputType": "number"
          },
          {
           "type": "text",
           "name": "head2_cm",
           "visibleIf": "age({birthdate})>=2",
           "title": "Head circumference (xx.x cm):",
           "inputType": "number"
          },
          {
           "type": "text",
           "name": "head2_inches",
           "visibleIf": "age({birthdate})>=2",
           "title": "Head circumference (xx.x inches):",
           "inputType": "number"
          }
         ],
         "visibleIf": "age({birthdate})>=2",
         "title": "§         At the age of approximately 2 year:"
        },
        {
         "type": "panel",
         "name": "measurements4",
         "elements": [
          {
           "type": "text",
           "name": "measurement4_date",
           "visibleIf": "age({birthdate})>=4",
           "title": "Date of measurement (YYYY-MM-DD):",
           "inputType": "date"
          },
          {
           "type": "text",
           "name": "height4_cm",
           "visibleIf": "age({birthdate})>=4",
           "title": "Height (cm):",
           "inputType": "number"
          },
          {
           "type": "text",
           "name": "height4_feet",
           "visibleIf": "age({birthdate})>=4",
           "title": "Height (feet):",
           "inputType": "number"
          },
          {
           "type": "text",
           "name": "height4_inches",
           "visibleIf": "age({birthdate})>=4",
           "title": "Height (inches):",
           "inputType": "number"
          },
          {
           "type": "text",
           "name": "weight4_kg",
           "visibleIf": "age({birthdate})>=4",
           "title": "Weight (kg):",
           "inputType": "number"
          },
          {
           "type": "text",
           "name": "weight4_lb",
           "visibleIf": "age({birthdate})>=4",
           "title": "Weight (lb):",
           "inputType": "number"
          },
          {
           "type": "text",
           "name": "weight4_oz",
           "visibleIf": "age({birthdate})>=4",
           "title": "Weight (oz):",
           "inputType": "number"
          },
          {
           "type": "text",
           "name": "head4_cm",
           "visibleIf": "age({birthdate})>=4",
           "title": "Head circumference (xx.x cm):",
           "inputType": "number"
          },
          {
           "type": "text",
           "name": "head4_inches",
           "visibleIf": "age({birthdate})>=4",
           "title": "Head circumference (xx.x inches):",
           "inputType": "number"
          },
          {
           "type": "text",
           "name": "height12_feet",
           "visibleIf": "age({birthdate})>=12",
           "title": "Height (feet):",
           "inputType": "number"
          }
         ],
         "visibleIf": "age({birthdate})>=4",
         "title": "§         At the age of approximately 4 year:"
        },
        {
         "type": "panel",
         "name": "measurements6",
         "elements": [
          {
           "type": "text",
           "name": "measurement6_date",
           "visibleIf": "age({birthdate})>=6",
           "title": "Date of measurement (YYYY-MM-DD):",
           "inputType": "date"
          },
          {
           "type": "text",
           "name": "height6_cm",
           "visibleIf": "age({birthdate})>=6",
           "title": "Height (cm):",
           "inputType": "number"
          },
          {
           "type": "text",
           "name": "height6_feet",
           "visibleIf": "age({birthdate})>=6",
           "title": "Height (feet):",
           "inputType": "number"
          },
          {
           "type": "text",
           "name": "height6_inches",
           "visibleIf": "age({birthdate})>=6",
           "title": "Height (inches):",
           "inputType": "number"
          },
          {
           "type": "text",
           "name": "weight6_kg",
           "visibleIf": "age({birthdate})>=6",
           "title": "Weight (kg):",
           "inputType": "number"
          },
          {
           "type": "text",
           "name": "weight6_lb",
           "visibleIf": "age({birthdate})>=6",
           "title": "Weight (lb):",
           "inputType": "number"
          },
          {
           "type": "text",
           "name": "weight6_oz",
           "visibleIf": "age({birthdate})>=6",
           "title": "Weight (oz):",
           "inputType": "number"
          },
          {
           "type": "text",
           "name": "head6_cm",
           "visibleIf": "age({birthdate})>=6",
           "title": "Head circumference (xx.x cm):",
           "inputType": "number"
          },
          {
           "type": "text",
           "name": "head6_inches",
           "visibleIf": "age({birthdate})>=6",
           "title": "Head circumference (xx.x inches):",
           "inputType": "number"
          }
         ],
         "visibleIf": "age({birthdate})>=6",
         "title": "§         At the age of approximately 6 year:"
        },
        {
         "type": "panel",
         "name": "measurements9",
         "elements": [
          {
           "type": "text",
           "name": "measurement9_date",
           "visibleIf": "age({birthdate})>=9",
           "title": "Date of measurement (YYYY-MM-DD):",
           "inputType": "date"
          },
          {
           "type": "text",
           "name": "height9_cm",
           "visibleIf": "age({birthdate})>=9",
           "title": "Height (cm):",
           "inputType": "number"
          },
          {
           "type": "text",
           "name": "height9_feet",
           "visibleIf": "age({birthdate})>=9",
           "title": "Height (feet):",
           "inputType": "number"
          },
          {
           "type": "text",
           "name": "height9_inches",
           "visibleIf": "age({birthdate})>=9",
           "title": "Height (inches):",
           "inputType": "number"
          },
          {
           "type": "text",
           "name": "weight9_kg",
           "visibleIf": "age({birthdate})>=9",
           "title": "Weight (kg):",
           "inputType": "number"
          },
          {
           "type": "text",
           "name": "weight9_lb",
           "visibleIf": "age({birthdate})>=9",
           "title": "Weight (lb):",
           "inputType": "number"
          },
          {
           "type": "text",
           "name": "weight9_oz",
           "visibleIf": "age({birthdate})>=9",
           "title": "Weight (oz):",
           "inputType": "number"
          },
          {
           "type": "text",
           "name": "head9_cm",
           "visibleIf": "age({birthdate})>=9",
           "title": "Head circumference (xx.x cm):",
           "inputType": "number"
          },
          {
           "type": "text",
           "name": "head9_inches",
           "visibleIf": "age({birthdate})>=9",
           "title": "Head circumference (xx.x inches):",
           "inputType": "number"
          }
         ],
         "visibleIf": "age({birthdate})>=9",
         "title": "§         At the age of approximately 9 year:"
        },
        {
         "type": "panel",
         "name": "measurements12",
         "elements": [
          {
           "type": "text",
           "name": "measurement12_date",
           "visibleIf": "age({birthdate})>=12",
           "title": "Date of measurement (YYYY-MM-DD):",
           "inputType": "date"
          },
          {
           "type": "text",
           "name": "height12_cm",
           "visibleIf": "age({birthdate})>=12",
           "title": "Height (cm):",
           "inputType": "number"
          },
          {
           "type": "text",
           "name": "height12_inches",
           "visibleIf": "age({birthdate})>=12",
           "title": "Height (inches):",
           "inputType": "number"
          },
          {
           "type": "text",
           "name": "weight12_kg",
           "visibleIf": "age({birthdate})>=12",
           "title": "Weight (kg):",
           "inputType": "number"
          },
          {
           "type": "text",
           "name": "weight12_lb",
           "visibleIf": "age({birthdate})>=12",
           "title": "Weight (lb):",
           "inputType": "number"
          },
          {
           "type": "text",
           "name": "weight12_oz",
           "visibleIf": "age({birthdate})>=12",
           "title": "Weight (oz):",
           "inputType": "number"
          },
          {
           "type": "text",
           "name": "head12_cm",
           "visibleIf": "age({birthdate})>=12",
           "title": "Head circumference (xx.x cm):",
           "inputType": "number"
          },
          {
           "type": "text",
           "name": "head12_inches",
           "visibleIf": "age({birthdate})>=12",
           "title": "Head circumference (xx.x inches):",
           "inputType": "number"
          }
         ],
         "visibleIf": "age({birthdate})>=12",
         "title": "§         At the age of approximately 12 year:"
        },
        {
         "type": "panel",
         "name": "measurements16",
         "elements": [
          {
           "type": "text",
           "name": "measurement16_date",
           "visibleIf": "age({birthdate})>=16",
           "title": "Date of measurement (YYYY-MM-DD):",
           "inputType": "date"
          },
          {
           "type": "text",
           "name": "height16_cm",
           "visibleIf": "age({birthdate})>=16",
           "title": "Height (cm):",
           "inputType": "number"
          },
          {
           "type": "text",
           "name": "height16_feet",
           "visibleIf": "age({birthdate})>=16",
           "title": "Height (feet):",
           "inputType": "number"
          },
          {
           "type": "text",
           "name": "height16_inches",
           "visibleIf": "age({birthdate})>=16",
           "title": "Height (inches):",
           "inputType": "number"
          },
          {
           "type": "text",
           "name": "weight16_kg",
           "visibleIf": "age({birthdate})>=16",
           "title": "Weight (kg):",
           "inputType": "number"
          },
          {
           "type": "text",
           "name": "weight16_lb",
           "visibleIf": "age({birthdate})>=16",
           "title": "Weight (lb):",
           "inputType": "number"
          },
          {
           "type": "text",
           "name": "weight16_oz",
           "visibleIf": "age({birthdate})>=16",
           "title": "Weight (oz):",
           "inputType": "number"
          },
          {
           "type": "text",
           "name": "head16_cm",
           "visibleIf": "age({birthdate})>=16",
           "title": "Head circumference (xx.x cm):",
           "inputType": "number"
          },
          {
           "type": "text",
           "name": "head16_inches",
           "visibleIf": "age({birthdate})>=16",
           "title": "Head circumference (xx.x inches):",
           "inputType": "number"
          }
         ],
         "visibleIf": "age({birthdate})>=16",
         "title": "§         At the age of approximately 16 year:"
        }
       ],
       "title": "c. If possible, please provide some growth data on your child:"
      },
      {
       "type": "panel",
       "name": "measurements_m",
       "elements": [
        {
         "type": "text",
         "name": "measurement_m_date",
         "title": "Date of measurement (YYYY-MM-DD):",
         "inputType": "date"
        },
        {
         "type": "text",
         "name": "height_m_cm",
         "title": "Height (cm):",
         "inputType": "number"
        },
        {
         "type": "text",
         "name": "height_m_feet",
         "title": "Height (feet):",
         "inputType": "number"
        },
        {
         "type": "text",
         "name": "height_m_inches",
         "title": "Height (inches):",
         "inputType": "number"
        },
        {
         "type": "text",
         "name": "weight_m_kg",
         "title": "Weight (kg):",
         "inputType": "number"
        },
        {
         "type": "text",
         "name": "weight_m_lb",
         "title": "Weight (lb):",
         "inputType": "number"
        },
        {
         "type": "text",
         "name": "weight_m_oz",
         "title": "Weight (oz):",
         "inputType": "number"
        },
        {
         "type": "text",
         "name": "head_m_cm",
         "title": "Head circumference (xx.x cm):",
         "description": "Measuring Head Circumference:  The measurement should be taken with a flexible measuring tape that cannot be stretched.  To measure, securely wrap the tape around the widest possible circumference of the head. Typically, this is from the most prominent point on the forehead - above the root of the nose - to the most prominent part on the back of the head. Take the measurement three times and select the largest measurement to the nearest 0.1cm. If you don’t have a measuring tape, use a piece of string. Then lay the string out on a table and measure the length with a ruler.",
         "inputType": "number"
        },
        {
         "type": "text",
         "name": "head_m_inches",
         "title": "Head circumference (xx.x inches):",
         "inputType": "number"
        }
       ],
       "title": "d. Current measurements of mother:"
      },
      {
       "type": "panel",
       "name": "measurements_f",
       "elements": [
        {
         "type": "text",
         "name": "measurement_f_date",
         "title": "Date of measurement (YYYY-MM-DD):",
         "inputType": "date"
        },
        {
         "type": "text",
         "name": "height_f_cm",
         "title": "Height (cm):",
         "inputType": "number"
        },
        {
         "type": "text",
         "name": "height_f_feet",
         "title": "Height (feet):",
         "inputType": "number"
        },
        {
         "type": "text",
         "name": "height_f_inches",
         "title": "Height (inches):",
         "inputType": "number"
        },
        {
         "type": "text",
         "name": "weight_f_kg",
         "title": "Weight (kg):",
         "inputType": "number"
        },
        {
         "type": "text",
         "name": "weight_f_lb",
         "title": "Weight (lb):",
         "inputType": "number"
        },
        {
         "type": "text",
         "name": "weight_f_oz",
         "title": "Weight (oz):",
         "inputType": "number"
        },
        {
         "type": "text",
         "name": "head_f_cm",
         "title": "Head circumference (xx.x cm):",
         "description": "Measuring Head Circumference:  The measurement should be taken with a flexible measuring tape that cannot be stretched.  To measure, securely wrap the tape around the widest possible circumference of the head. Typically, this is from the most prominent point on the forehead - above the root of the nose - to the most prominent part on the back of the head. Take the measurement three times and select the largest measurement to the nearest 0.1cm. If you don’t have a measuring tape, use a piece of string. Then lay the string out on a table and measure the length with a ruler.",
         "inputType": "number"
        },
        {
         "type": "text",
         "name": "head_f_inches",
         "title": "Head circumference (xx.x inches):",
         "inputType": "number"
        }
       ],
       "title": "e. Current measurements of father:"
      }
     ],
     "title": "C1. Growth"
    },
    {
     "type": "panel",
     "name": "Feeding",
     "elements": [
      {
       "type": "boolean",
       "name": "feeding_difficulties",
       "title": "a. Has your child had any problems in eating, drinking or swallowing?",
       "description": "Acid reflux will be asked for below, section C question 3c"
      },
      {
       "type": "checkbox",
       "name": "feeding1a",
       "visibleIf": "{feeding_difficulties}=true",
       "title": "Please specify",
       "choices": [
        {
         "value": "Poor_suck",
         "text": "Poor sucking"
        },
        {
         "value": "dysphagia",
         "text": "Problems with swallowing"
        },
        {
         "value": "Chewing_difficulties",
         "text": "Chewing difficulties"
        },
        {
         "value": "oral_aversion",
         "text": "Gagging or oral aversion"
        },
        {
         "value": "Refusal_of_food",
         "text": "Refusal of food"
        },
        {
         "value": "Nasal_regurgitation",
         "text": "Nasal regurgitation (food coming back trough the nose)"
        },
        {
         "value": "Rumination",
         "text": "Rumination (effortless regurgitation of most meals following consumption)"
        },
        {
         "value": "Drooling",
         "text": "Excessive drooling after the age of four years"
        },
        {
         "value": "Vomiting",
         "text": "Excessive vomiting, not due to gastro-intestinal infections, causing dehydration and electrolyte imbalance"
        },
        {
         "value": "5",
         "text": "Other"
        }
       ]
      },
      {
       "type": "checkbox",
       "name": "feeding2",
       "visibleIf": "{feeding_difficulties}=true",
       "title": "Was one or both of the following needed for feeding problems?",
       "choices": [
        {
         "value": "Nasogastric_tube_feeding_in_infancy",
         "text": "Nasogastric tube feeding"
        },
        {
         "value": "Gastrostomy_tube_feeding_in_infancy",
         "text": "Gastrostomy tube (G-tube) feeding"
        },
        {
         "value": "1",
         "text": "None of the above"
        }
       ]
      },
      {
       "type": "radiogroup",
       "name": "food_intolerance",
       "title": "b. Does your child have food intolerance?",
       "choices": [
        {
         "value": "y",
         "text": "Yes"
        },
        {
         "value": "n",
         "text": "No"
        },
        {
         "value": "u",
         "text": "Unsure"
        }
       ]
      },
      {
       "type": "checkbox",
       "name": "food_intolerance1",
       "visibleIf": "{food_intolerance}='y'",
       "title": "Please specify",
       "choices": [
        {
         "value": "Gluten_intolerance",
         "text": "Gluten intolerance"
        },
        {
         "value": "Lactose_intolerance",
         "text": "Lactose intolerance"
        },
        {
         "value": "Specific_allergy",
         "text": "Specific allergy (peanuts, strawberry, etc.)"
        },
        {
         "value": "4",
         "text": "Other/do not know"
        }
       ]
      }
     ],
     "title": "C2. Feeding"
    },
    {
     "type": "panel",
     "name": "Gastro_def",
     "elements": [
      {
       "type": "boolean",
       "name": "Esophageal_atresia",
       "title": "a. Oesophageal atresia? (congenitally interrupted oesophagus)"
      },
      {
       "type": "boolean",
       "name": "Tracheoesophageal_fistula",
       "title": "b. A tracheo-oesophageal fistula? (abnormal connection (fistula) between the oesophagus and the trachea)"
      },
      {
       "type": "boolean",
       "name": "Gastroesophageal_reflux",
       "title": "c. Gastro-oesophageal or acid reflux? (GERD)"
      },
      {
       "type": "boolean",
       "name": "GERD_reflux_med_operation",
       "visibleIf": "{Gastroesophageal_reflux}=true",
       "title": "Was medication or operation (fundoplication) needed for reflux?"
      },
      {
       "type": "boolean",
       "name": "abnormality_of_the_liver",
       "title": "d. An abnormality of the liver or poor liver function?"
      },
      {
       "type": "checkbox",
       "name": "abnormality_of_the_liver1",
       "visibleIf": "{abnormality_of_the_liver}=true",
       "title": "Please specify",
       "choices": [
        {
         "value": "hepatomegaly",
         "text": "Hepatomegaly (large liver)"
        },
        {
         "value": "Jaundice",
         "text": "Jaundice (not neonatal)"
        },
        {
         "value": "cystic_liver_disease",
         "text": "Liver cysts"
        },
        {
         "value": "decreased_liver_function",
         "text": "Impaired liver function (due to damage or disease of the liver)"
        },
        {
         "value": "noHPO",
         "text": "Other/do not know"
        }
       ]
      },
      {
       "type": "boolean",
       "name": "abn_of_the_biliary_system",
       "title": "e. An abnormality of the gallbladder or bile ducts?"
      },
      {
       "type": "checkbox",
       "name": "abn_of_the_biliary_system1",
       "visibleIf": "{abn_of_the_biliary_system}=true",
       "title": "Please specify",
       "choices": [
        {
         "value": "cholelithiasis",
         "text": "Gallstones"
        },
        {
         "value": "Aplasia_hypoplasia_of_the_gallbladder",
         "text": "Absent or underdeveloped gallbladder"
        },
        {
         "value": "Abnormal_biliary_tract_morphology",
         "text": "Abnormal bile ducts"
        },
        {
         "value": "noHPO",
         "text": "Other/do not know"
        }
       ]
      },
      {
       "type": "boolean",
       "name": "abnormality_of_the_abdomen",
       "title": "f. Bowel or defecation problems?"
      },
      {
       "type": "checkbox",
       "name": "bowel1",
       "visibleIf": "{abnormality_of_the_abdomen}=true",
       "title": "Please specify",
       "choices": [
        {
         "value": "Constipation",
         "text": "Constipation, for which medication is or was needed"
        },
        {
         "value": "diarrhea",
         "text": "Chronic diarrhoea, not caused by an infection"
        },
        {
         "value": "bowel_incontinence",
         "text": "Incontinence for defecation"
        },
        {
         "value": "intestinal_malrotation",
         "text": "Malrotation of the intestine"
        },
        {
         "value": "Ileus",
         "text": "Ileus"
        },
        {
         "value": "Aganglionic_megacolon",
         "text": "Hirschsprung’s disease"
        },
        {
         "value": "noHPO",
         "text": "Other/do not know"
        }
       ]
      },
      {
       "type": "boolean",
       "name": "abnormality_of_the_anus",
       "title": "g. Anal problems?"
      },
      {
       "type": "checkbox",
       "name": "abnormality_of_the_anus1",
       "visibleIf": "{abnormality_of_the_anus}=true",
       "title": "Please specify",
       "choices": [
        {
         "value": "Anal_atresia",
         "text": "Anal atresia (imperforate anus)"
        },
        {
         "value": "Anal_stenosis",
         "text": "Anal stenosis (opening is too small)"
        },
        {
         "value": "Anal_fissure",
         "text": "Anal fissure (small tear in the skin overlying the anus)"
        },
        {
         "value": "Anal_fistula",
         "text": "Anal fistula"
        },
        {
         "value": "Ectopic_anus",
         "text": "Malpositioned anus (ectopic or anteriorly placed)"
        },
        {
         "value": "noHPO",
         "text": "Other/do not know"
        }
       ]
      }
     ],
     "title": "C3. Gastrointestinal and defecation",
     "description": "Did your child have …"
    }
   ],
   "title": "C. Growth, feeding and the gut"
  },
  {
   "name": "Part_D",
   "elements": [
    {
     "type": "panel",
     "name": "Airway",
     "elements": [
      {
       "type": "boolean",
       "name": "abnormality_of_the_nose",
       "title": "a. Are there any nasal problems?"
      },
      {
       "type": "checkbox",
       "name": "abnormality_of_the_nose1",
       "visibleIf": "{abnormality_of_the_nose}=true",
       "title": "Please specify",
       "choices": [
        {
         "value": "nasal_polyposis",
         "text": "Nasal polyps"
        },
        {
         "value": "Abnormality_of_the_choanae",
         "text": "Choanal atresia or stenosis (nasal passage blocked by abnormal bony or soft tissue)"
        },
        {
         "value": "noHPO",
         "text": "Other/do not know"
        }
       ]
      },
      {
       "type": "boolean",
       "name": "abn_of_the_respiratory_system",
       "title": "b. Does your child have breathing, airway or lung problems?"
      },
      {
       "type": "checkbox",
       "name": "c6_abn_of_respiratory_system1",
       "visibleIf": "{abn_of_the_respiratory_system}=true",
       "title": "Please specify",
       "choices": [
        {
         "value": "Abnormal_pattern_of_respiration ",
         "text": "Irregular breathing pattern"
        },
        {
         "value": "Asthma",
         "text": "Asthma"
        },
        {
         "value": "Sleep_apnea",
         "text": "(Obstructive) sleep apnoea"
        },
        {
         "value": "Tracheomalacia",
         "text": "Tracheomalacia (airway (trachea) collapse)"
        },
        {
         "value": "Bronchomalacia",
         "text": "Bronchomalacia (airway (bronchial) collapse)"
        },
        {
         "value": "Laryngomalacia",
         "text": "Laryngomalacia"
        },
        {
         "value": "Pneumothorax",
         "text": "Pneumothorax (collapsed lung)"
        },
        {
         "value": "Pulmonary_edema",
         "text": "Pulmonary oedema (fluid in the lungs causing respiratory failure)"
        },
        {
         "value": "Upper_airway_obstruction",
         "text": "Airway obstruction, cause unknown"
        },
        {
         "value": "Respiratory_insufficiency",
         "text": "Respiratory insufficiency (inadequate gas exchange by the respiratory system, leading to low levels of arterial oxygen, carbon dioxide, or both, so that they are not maintained in their normal ranges)"
        },
        {
         "value": "noHPO",
         "text": "Other/do not know"
        }
       ]
      },
      {
       "type": "text",
       "name": "abn_of_the_respiratory_system2",
       "visibleIf": "{c6_abn_of_respiratory_system1} contains 'Pneumothorax' && {abn_of_the_respiratory_system}=true",
       "title": "Pneumothorax; at what age?  (years)",
       "validators": [
        {
         "type": "numeric",
         "minValue": 0,
         "maxValue": 99
        }
       ],
       "inputType": "number"
      },
      {
       "type": "text",
       "name": "abn_of_the_respiratory_system3",
       "visibleIf": "{c6_abn_of_respiratory_system1} contains 'Pulmonary_edema' && {abn_of_the_respiratory_system}=true",
       "title": "Pulmonary oedema; at what age? (years)",
       "validators": [
        {
         "type": "numeric",
         "minValue": 0,
         "maxValue": 99
        }
       ],
       "inputType": "number"
      },
      {
       "type": "text",
       "name": "abn_of_the_respiratory_system4",
       "visibleIf": "{c6_abn_of_respiratory_system1} contains 'Respiratory_insufficiency' && {abn_of_the_respiratory_system}=true",
       "title": "Respiratory insufficiency; at what age?  (years)",
       "validators": [
        {
         "type": "numeric",
         "minValue": 0,
         "maxValue": 99
        }
       ],
       "inputType": "number"
      },
      {
       "type": "boolean",
       "name": "Abnormality_of_the_diaphragm",
       "title": "c. Does your child have a diaphragmatic problem?"
      },
      {
       "type": "checkbox",
       "name": "hernia1",
       "visibleIf": "{Abnormality_of_the_diaphragm}=true",
       "title": "Please specify",
       "choices": [
        {
         "value": "Congenital_diaphragmatic_hernia",
         "text": "Congenital diaphragmatic hernia (defect or hole in the diaphragm that allows the abdominal contents to move into the chest cavity)"
        },
        {
         "value": "Hiatus_hernia",
         "text": "Hiatus hernia (protrusion of the upperpart of the stomach into the thorax through a tear or weakness in the diaphragm)"
        },
        {
         "value": "Diaphragmatic_weakness",
         "text": "Malfunctioning or palsy of the diaphragm"
        },
        {
         "value": "noHPO",
         "text": "Other/do not know"
        }
       ]
      }
     ],
     "title": "D1. The airways"
    },
    {
     "type": "panel",
     "name": "Heart_vessels",
     "elements": [
      {
       "type": "boolean",
       "name": "abn_of_cardiac_morphology",
       "title": "a. Is there a congenital heart defect?"
      },
      {
       "type": "checkbox",
       "name": "abn_of_cardiac_morphology1",
       "visibleIf": "{abn_of_cardiac_morphology}=true",
       "title": "Please specify",
       "choices": [
        {
         "value": "Abnormality_of_the_heart_valves",
         "text": "Abnormality of the heart valves"
        },
        {
         "value": "Transposition_of_the_great_arteries",
         "text": "Transposition of the great arteries"
        },
        {
         "value": "Tetralogy_of_Fallot_TOF",
         "text": "Tetralogy of Fallot (TOF)"
        },
        {
         "value": "Hypoplastic_left_heart",
         "text": "Hypoplastic left heart"
        },
        {
         "value": "Abnormality_of_the_cardiac_septa_septum_defect_VSD_ASD",
         "text": "Abnormality of the cardiac septa (septum defect, VSD, ASD)"
        },
        {
         "value": "Atrioventricular_canal_defect",
         "text": "AVSD (Atrioventricular septal defect or atrioventricular canal defect)"
        },
        {
         "value": "Anomalous_pulmonary_venous_return",
         "text": "Anomalous pulmonary venous return"
        },
        {
         "value": "Patent_foramen_ovale",
         "text": "Patent foramen ovale (PFO)"
        },
        {
         "value": "coarctation_aorta",
         "text": "Coarctation aorta"
        },
        {
         "value": "patent_ductus_arteriosus",
         "text": "Patent ductus (arteriosus) (PDA)"
        },
        {
         "value": "noHPO",
         "text": "Other/do not know"
        }
       ]
      },
      {
       "type": "checkbox",
       "name": "heart_valves1",
       "visibleIf": "{abn_of_cardiac_morphology1} contains 'Abnormality_of_the_heart_valves' && {abn_of_cardiac_morphology}=true",
       "title": "Heartvalves; please specify",
       "choices": [
        {
         "value": "Abnormality_of_the_aortic_valve",
         "text": "Abnormality of the aortic valve"
        },
        {
         "value": "Bicuspid_aortic_valve",
         "text": "Bicuspid aortic valve"
        },
        {
         "value": "Aortic_valve_stenosis",
         "text": "Aortic valve stenosis"
        },
        {
         "value": "Abnormality_of_the_pulmonary_valve",
         "text": "Abnormality of the pulmonic valve"
        },
        {
         "value": "Pulmonic_stenosis",
         "text": "Pulmonic stenosis"
        },
        {
         "value": "Pulmonary_valve_atresia",
         "text": "Pulmonary valve atresia"
        },
        {
         "value": "Abnormality_of_the_mitral_valve",
         "text": "Abnormality of the mitral valve"
        },
        {
         "value": "Abnormality_of_the_tricuspid_valve",
         "text": "Abnormality of the tricuspid valve"
        },
        {
         "value": "Ebsteins_anomaly",
         "text": "Ebstein’s anomaly"
        },
        {
         "value": "1",
         "text": "Other/do not know"
        }
       ]
      },
      {
       "type": "checkbox",
       "name": "cardiac_septa1",
       "visibleIf": "{abn_of_cardiac_morphology1} contains 'Abnormality_of_the_cardiac_septa_septum_defect_VSD_ASD' && {abn_of_cardiac_morphology}=true",
       "title": "Cardiac septa; please specify",
       "choices": [
        {
         "value": "Abnormality_of_the_atrial_septum_ASD",
         "text": "Abnormality of the atrial septum (ASD)"
        },
        {
         "value": "Abnormality_of_the_ventricular_septum_VSD",
         "text": "Abnormality of the ventricular septum (VSD)"
        },
        {
         "value": "3",
         "text": "Other/do not know"
        }
       ]
      },
      {
       "type": "boolean",
       "name": "cardiomyopathy",
       "title": "b. Does your child have cardiomyopathy"
      },
      {
       "type": "checkbox",
       "name": "cardiomyopathy1",
       "visibleIf": "{cardiomyopathy}=true",
       "title": "Please specify",
       "choices": [
        {
         "value": "Dilated_cardiomyopathy",
         "text": "Dilated cardiomyopathy (DCM)"
        },
        {
         "value": "Hypertrophic_cardiomyopathy",
         "text": "Hypertrophic cardiomyopathy (HCM)"
        },
        {
         "value": "Noncompaction_cardiomyopathy",
         "text": "Noncompaction cardiomyopathy"
        },
        {
         "value": "noHPO",
         "text": "Other/do not know"
        }
       ]
      },
      {
       "type": "panel",
       "name": "cardiomyopathy2",
       "elements": [
        {
         "type": "text",
         "name": "cardiomyopathy2_years",
         "visibleIf": "{cardiomyopathy}=true",
         "title": "Years",
         "validators": [
          {
           "type": "numeric",
           "minValue": 0,
           "maxValue": 99
          }
         ],
         "inputType": "number"
        },
        {
         "type": "text",
         "name": "cardiomyopathy2_months",
         "visibleIf": "{cardiomyopathy}=true",
         "title": "Months",
         "validators": [
          {
           "type": "numeric",
           "minValue": 0,
           "maxValue": 12
          }
         ],
         "inputType": "number"
        }
       ],
       "visibleIf": "{cardiomyopathy}=true",
       "title": "Cardiomyopathy since the age of:"
      },
      {
       "type": "boolean",
       "name": "cardiomyopathy_meds",
       "visibleIf": "{cardiomyopathy}=true",
       "title": "Is medication required?"
      },
      {
       "type": "boolean",
       "name": "arrhythmia",
       "title": "c. Does your child have arrhythmia?"
      },
      {
       "type": "checkbox",
       "name": "arrhythmia1",
       "visibleIf": "{arrhythmia}=true",
       "title": "Please specify",
       "choices": [
        {
         "value": "Heart_block",
         "text": "Heart block"
        },
        {
         "value": "Bradycardia",
         "text": "Bradycardia (heart rate too slow)"
        },
        {
         "value": "Tachycardia",
         "text": "Tachycardia (heart rate too fast)"
        },
        {
         "value": "Abnormal_EKG",
         "text": "Brugada syndrome"
        },
        {
         "value": "Wolff–Parkinson–White_syndrome",
         "text": "WPW syndrome (Wolff–Parkinson–White syndrome)"
        },
        {
         "value": "Sick_sinus_syndrome",
         "text": "Sick sinus syndrome"
        },
        {
         "value": "Long_QT",
         "text": "Long QT syndrome"
        },
        {
         "value": "noHPO",
         "text": "Other/do not know"
        }
       ]
      },
      {
       "type": "panel",
       "name": "arrhythmia2",
       "elements": [
        {
         "type": "text",
         "name": "arrhythmia2_years",
         "visibleIf": "{arrhythmia}=true",
         "title": "Years",
         "validators": [
          {
           "type": "numeric",
           "minValue": 0,
           "maxValue": 99
          }
         ],
         "inputType": "number"
        },
        {
         "type": "text",
         "name": "arrhythmia2_months",
         "visibleIf": "{arrhythmia}=true",
         "title": "Months",
         "validators": [
          {
           "type": "numeric",
           "minValue": 0,
           "maxValue": 12
          }
         ],
         "inputType": "number"
        }
       ],
       "visibleIf": "{arrhythmia}=true",
       "title": "Arrhythmia since the age of:"
      },
      {
       "type": "boolean",
       "name": "arrhythmia_meds",
       "visibleIf": "{arrhythmia}=true",
       "title": "Is medication required?"
      },
      {
       "type": "boolean",
       "name": "arrhythmia_pacemaker",
       "visibleIf": "{arrhythmia}=true",
       "title": "Has your child been given a pacemaker?"
      },
      {
       "type": "boolean",
       "name": "abn_blood_pressure",
       "title": "d. Does your child have abnormal blood pressure?"
      },
      {
       "type": "checkbox",
       "name": "blood_pressure1",
       "visibleIf": "{abn_blood_pressure}=true",
       "title": "Please specify",
       "choices": [
        {
         "value": "Hypertension",
         "text": "Hypertension (blood pressure too high)"
        },
        {
         "value": "Hypotension",
         "text": "Hypotension (blood pressure too low)"
        },
        {
         "value": "Pulmonary_hypertension",
         "text": "Pulmonary hypertension (PH, increase of blood pressure in the pulmonary artery, pulmonary vein, or pulmonary capillaries, together known as the lung vasculature)"
        },
        {
         "value": "noHPO",
         "text": "Other/do not know"
        }
       ]
      },
      {
       "type": "panel",
       "name": "blood_pressure2",
       "elements": [
        {
         "type": "text",
         "name": "blood_pressure2_years",
         "visibleIf": "{abn_blood_pressure}=true",
         "title": "Years",
         "validators": [
          {
           "type": "numeric",
           "minValue": 0,
           "maxValue": 99
          }
         ],
         "inputType": "number"
        },
        {
         "type": "text",
         "name": "blood_pressure2_months",
         "visibleIf": "{abn_blood_pressure}=true",
         "title": "Months",
         "validators": [
          {
           "type": "numeric",
           "minValue": 0,
           "maxValue": 12
          }
         ],
         "inputType": "number"
        }
       ],
       "visibleIf": "{abn_blood_pressure}=true",
       "title": "Abnormal blood pressure since the age of:"
      },
      {
       "type": "boolean",
       "name": "blood_pressure_meds",
       "visibleIf": "{abn_blood_pressure}=true",
       "title": "Is medication required?"
      }
     ],
     "title": "D2. Heart and vessels"
    }
   ],
   "title": "D. The airways, breathing problems and the heart"
  },
  {
   "name": "Part_E",
   "elements": [
    {
     "type": "panel",
     "name": "Kidneys",
     "elements": [
      {
       "type": "boolean",
       "name": "abnormality_of_the_kidney",
       "title": "a. Does your child have renal or urinary tract problems?"
      },
      {
       "type": "checkbox",
       "name": "abnormality_of_the_kidney1",
       "visibleIf": "{abnormality_of_the_kidney}=true",
       "title": "Please specify",
       "choices": [
        {
         "value": "Ectopic_kidney",
         "text": "Ectopic kidney (pelvic kidney)"
        },
        {
         "value": "renal_hypoplasia",
         "text": "Renal hypoplasia (small kidney)"
        },
        {
         "value": "Horseshoe_kidney",
         "text": "Horseshoe kidney, renal fusion"
        },
        {
         "value": "Duplicated_collecting_system",
         "text": "Duplicated (double) collecting system (also known as ureteral duplication, a kidney that has two ureters (tubes that carry urine from the kidney to the bladder) rather than one)"
        },
        {
         "value": "Nephrolithiasis",
         "text": "Kidney stones"
        },
        {
         "value": "Renal_cyst",
         "text": "Renal cysts"
        },
        {
         "value": "Vesicoureteral_reflux",
         "text": "Vesicoureteral reflux (VUR, urine going back from the bladder into ureters or kidneys)"
        },
        {
         "value": "Urethral_valve",
         "text": "Urethral valves (narrow passage out of the bladder)"
        },
        {
         "value": "hydronephrosis",
         "text": "Hydronephrosis (too much fluid in the kidney)"
        },
        {
         "value": "Abnormal_renal_physiology",
         "text": "Impaired renal function (kidney failure or renal insufficiency, i.e. the kidneys fail to adequately filter waste products from the blood)"
        },
        {
         "value": "noHPO",
         "text": "Other/do not know"
        }
       ]
      }
     ],
     "title": "E1. Kidneys"
    },
    {
     "type": "panel",
     "name": "Urination",
     "elements": [
      {
       "type": "boolean",
       "name": "abn_of_the_urinary_system",
       "title": "a. Does your child have problems with voiding urine?"
      },
      {
       "type": "checkbox",
       "name": "abn_of_the_urinary_system1",
       "visibleIf": "{abn_of_the_urinary_system}=true",
       "title": "Please specify",
       "choices": [
        {
         "value": "Urethral_obstruction",
         "text": "Urethral obstruction"
        },
        {
         "value": "pollakisurie",
         "text": "Urinary frequency  increased (peeing too often)"
        },
        {
         "value": "Urinary_retention",
         "text": "Retention of urine (does not totally empty bladder)"
        },
        {
         "value": "noHPO",
         "text": "Other/do not know"
        }
       ]
      }
     ],
     "title": "E2. Urination"
    },
    {
     "type": "panel",
     "name": "Genitals",
     "elements": [
      {
       "type": "boolean",
       "name": "Abn_of_the_male_genitalia",
       "visibleIf": "{gender}='m'",
       "title": "a. Does your son have abnormalities of the genitals?"
      },
      {
       "type": "checkbox",
       "name": "son_genitals1",
       "visibleIf": "{Abn_of_the_male_genitalia}=true",
       "title": "Please specify",
       "choices": [
        {
         "value": "Displacement_of_the_external_urethral_meatus",
         "text": "Hypospadias or epispadia (displacement of the urethral opening)"
        },
        {
         "value": "hypoplasia_of_penis",
         "text": "Micropenis"
        },
        {
         "value": "Abnormality_of_the_scrotum",
         "text": "Abnormality of the scrotum"
        },
        {
         "value": "Cryptorchidism",
         "text": "Cryptorchidism (undescended testicles)"
        },
        {
         "value": "Ambiguous_genitalia",
         "text": "Underdeveloped male genitals, resulting in uncertainty of the baby's gender at birth"
        },
        {
         "value": "noHPO",
         "text": "Other/do not know"
        }
       ]
      },
      {
       "type": "boolean",
       "name": "cryptorchidism_operation",
       "visibleIf": "{son_genitals1} contains 'Cryptorchidism' && {gender}='m' && {Abn_of_the_male_genitalia}=true",
       "title": "Was surgery needed because of the cryptorchidism?"
      },
      {
       "type": "boolean",
       "name": "Abn_of_the_female_genitalia",
       "visibleIf": "{gender}='f'",
       "title": "a. Does your daughter have abnormalities of the genitals?"
      },
      {
       "type": "checkbox",
       "name": "daughter_genitals1",
       "visibleIf": "{Abn_of_the_female_genitalia}=true && {gender}='f'",
       "title": "Please specify",
       "choices": [
        {
         "value": "abnormality_of_the_clitoris",
         "text": "Abnormality of the clitoris"
        },
        {
         "value": "abnormality_of_the_labia",
         "text": "Abnormality of the labia"
        },
        {
         "value": "Hypoplastic_female_external_genitalia",
         "text": "Hypoplasia of external genitalia (underdeveloped genitals)"
        },
        {
         "value": "Ambiguous_genitalia",
         "text": "Overgrowth of clitoris and/or fusion of the labia resulting in uncertainty of the baby's gender at birth"
        },
        {
         "value": "noHPO",
         "text": "Other/do not know"
        }
       ]
      }
     ],
     "title": "E3. Genitals"
    }
   ],
   "title": "E. The kidneys and genitals"
  },
  {
   "name": "Part_F",
   "elements": [
    {
     "type": "panel",
     "name": "Blood",
     "elements": [
      {
       "type": "boolean",
       "name": "Abn_of_hematopoietic_system",
       "title": "a. Are there abnormalities of the number of blood cells?"
      },
      {
       "type": "checkbox",
       "name": "abn_blood1",
       "visibleIf": "{Abn_of_hematopoietic_system}=true",
       "title": "Please specify",
       "choices": [
        {
         "value": "Anemia",
         "text": "Anaemia"
        },
        {
         "value": "thrombocytopenia",
         "text": "Thrombocytopenia (too low number of platelets (thrombocytes) in the blood)"
        },
        {
         "value": "leukopenia",
         "text": "Leukopenia (decrease in the number of white blood cells (leukocytes) in the blood)"
        },
        {
         "value": "leukemia",
         "text": "Leukaemia"
        },
        {
         "value": "noHPO",
         "text": "Other/do not know"
        }
       ]
      },
      {
       "type": "text",
       "name": "abn_blood2",
       "visibleIf": "{abn_blood1} contains 'leukemia'",
       "title": "Leukemia since the age of (years)",
       "validators": [
        {
         "type": "numeric",
         "minValue": 0,
         "maxValue": 99
        }
       ],
       "inputType": "number"
      },
      {
       "type": "boolean",
       "name": "Abnormality_of_coagulation",
       "title": "b. Are there abnormalities in blood clotting?"
      },
      {
       "type": "checkbox",
       "name": "abn_blood_clotting1",
       "visibleIf": "{Abnormality_of_coagulation}=true",
       "title": "Please specify",
       "choices": [
        {
         "value": "Venous_trombosis",
         "text": "Venous trombosis"
        },
        {
         "value": "Hypercoagulability",
         "text": "Hypercoagulability (clotting too fast)"
        },
        {
         "value": "Prolonged_bleeding_time",
         "text": "Prolonged bleeding time"
        },
        {
         "value": "Abnormality_of_the_coagulation_cascade",
         "text": "Abnormality of the coagulation cascade"
        },
        {
         "value": "noHPO",
         "text": "Other/do not know"
        }
       ]
      },
      {
       "type": "text",
       "name": "abn_blood_clotting2",
       "visibleIf": "{abn_blood_clotting1} contains 'Venous_trombosis' && {Abnormality_of_coagulation}=true",
       "title": "Venous thrombosis; for the first time at what age? (years)",
       "validators": [
        {
         "type": "numeric",
         "minValue": 0,
         "maxValue": 99
        }
       ],
       "inputType": "number"
      },
      {
       "type": "boolean",
       "name": "abnormality_of_the_spleen",
       "title": "c. Is there an abnormality of the spleen?"
      },
      {
       "type": "checkbox",
       "name": "abnormality_of_the_spleen1",
       "visibleIf": "{abnormality_of_the_spleen}=true",
       "title": "Please specify",
       "choices": [
        {
         "value": "splenomegaly",
         "text": "Splenomegaly (spleen too large)"
        },
        {
         "value": "supernumerary_spleens",
         "text": "Supernumerary spleens"
        },
        {
         "value": "aplasia_hypoplasia_of_the_spleen",
         "text": "Aplasia/hypoplasia of the spleen (no spleen or spleen too small)"
        },
        {
         "value": "noHPO",
         "text": "Other/do not know"
        }
       ]
      }
     ],
     "title": "F1. Blood"
    },
    {
     "type": "panel",
     "name": "Immune_system",
     "elements": [
      {
       "type": "boolean",
       "name": "recurrent_infections",
       "title": "a. Does or did your child have recurrent infections?",
       "description": "Recurrent infections are infections that occur more often than is usual in your child’s peer group, and are more severe or longer lasting than usual. Recurrent infections are defined as two or more severe infections in one year, three or more respiratory infections (e.g., sinusitis, otitis, bronchitis) in one year, or the need for antibiotics for a total of more than two months/year."
      },
      {
       "type": "checkbox",
       "name": "recurrent_infections1",
       "visibleIf": "{recurrent_infections}=true",
       "title": "Please specify",
       "choices": [
        {
         "value": "otitis_media",
         "text": "Recurrent ear infections"
        },
        {
         "value": "Recurrent_upper_respiratory_tract_infections",
         "text": "Recurrent infections of the upper respiratory tract (nasal cavity, sinuses)"
        },
        {
         "value": "Recurrent_lower_respiratory_tract_infections",
         "text": "Recurrent infections of the lower respiratory tract (trachea, bronchia, lung)"
        },
        {
         "value": "Recurrent_urinary_tract_infections",
         "text": "Recurrent urinary tract infections"
        },
        {
         "value": "Recurrent_infections_due_to_aspiration",
         "text": "Recurrent infections due to aspiration"
        },
        {
         "value": "noHPO",
         "text": "Other infections, do not know"
        }
       ]
      },
      {
       "type": "checkbox",
       "name": "recurrent_infections2",
       "visibleIf": "{recurrent_infections}=true",
       "title": "Were these infections …",
       "choices": [
        {
         "value": "Recurrent_viral_infections",
         "text": "Viral"
        },
        {
         "value": "Recurrent_bacterial_infections",
         "text": "Bacterial"
        },
        {
         "value": "Recurrent_fungal_infections",
         "text": "Fungal"
        },
        {
         "value": "4",
         "text": "Do not know"
        }
       ]
      },
      {
       "type": "text",
       "name": "recurrent_infections3",
       "visibleIf": "{recurrent_infections}=true",
       "title": "At what age did the recurrent infections start? (years)",
       "validators": [
        {
         "type": "numeric",
         "minValue": 0,
         "maxValue": 99
        }
       ],
       "inputType": "number"
      },
      {
       "type": "boolean",
       "name": "recurrent_infections_ongoing",
       "visibleIf": "{recurrent_infections}=true",
       "title": "Are the recurrent infections still ongoing?"
      },
      {
       "type": "text",
       "name": "recurrent_infections4b",
       "visibleIf": "{recurrent_infections_ongoing}=false && {recurrent_infections}=true",
       "title": "At what age did the recurrent infections stop? (years)",
       "validators": [
        {
         "type": "numeric",
         "minValue": 0,
         "maxValue": 99
        }
       ],
       "inputType": "number"
      },
      {
       "type": "boolean",
       "name": "abn_of_the_immune_system",
       "title": "b. Does your child have a problem with his/her immune system?"
      },
      {
       "type": "checkbox",
       "name": "abn_of_the_immune_system1",
       "visibleIf": "{abn_of_the_immune_system}=true",
       "title": "Please specify",
       "choices": [
        {
         "value": "autoimmunity",
         "text": "Auto-immune disease proven by immune testing (abnormal immune response of the body against substances and tissues normally present in the body (autoimmunity))"
        },
        {
         "value": "immunodeficiency",
         "text": "Immunodeficiency proven by immune testing (a state in which the immune system's ability to fight infectious disease is compromised or entirely absent)"
        },
        {
         "value": "noHPO",
         "text": "Other/do not know"
        }
       ]
      },
      {
       "type": "text",
       "name": "abn_of_the_immune_system2",
       "visibleIf": "{abn_of_the_immune_system1} contains 'autoimmunity' && {abn_of_the_immune_system}=true",
       "title": "Auto-immune disease since the age of (years)",
       "validators": [
        {
         "type": "numeric",
         "minValue": 0,
         "maxValue": 99
        }
       ],
       "inputType": "number"
      },
      {
       "type": "text",
       "name": "abn_of_the_immune_system3",
       "visibleIf": "{abn_of_the_immune_system1} contains 'immunodeficiency' && {abn_of_the_immune_system}=true",
       "title": "Immunodeficiency since the age of (years)",
       "validators": [
        {
         "type": "numeric",
         "minValue": 0,
         "maxValue": 99
        }
       ],
       "inputType": "number"
      }
     ],
     "title": "F2. Immune system"
    },
    {
     "type": "panel",
     "name": "Hormones",
     "elements": [
      {
       "type": "radiogroup",
       "name": "growth_hormone1",
       "title": "a. Growth hormone",
       "choices": [
        {
         "value": "Growth_hormone_deficiency",
         "text": "Too little"
        },
        {
         "value": "Growth_hormone_excess",
         "text": "Too much"
        },
        {
         "value": "noHPO",
         "text": "No problem"
        }
       ]
      },
      {
       "type": "text",
       "name": "growth_hormone2a",
       "visibleIf": "{growth_hormone1}='Growth_hormone_deficiency'",
       "title": "Diagnosed at age (years)",
       "inputType": "number"
      },
      {
       "type": "boolean",
       "name": "growth_hormone_given",
       "visibleIf": "{growth_hormone1}='Growth_hormone_deficiency'",
       "title": "Was extra growth hormone given?"
      },
      {
       "type": "text",
       "name": "growth_hormone3",
       "visibleIf": "{growth_hormone_given}=true && {growth_hormone1}='Growth_hormone_deficiency'",
       "title": "From age (years)",
       "validators": [
        {
         "type": "numeric",
         "minValue": 0,
         "maxValue": 99
        }
       ],
       "inputType": "number"
      },
      {
       "type": "boolean",
       "name": "growth_hormone_still_given",
       "visibleIf": "{growth_hormone_given}=true && {growth_hormone1}='Growth_hormone_deficiency'",
       "title": "Is extra growth hormone still given?"
      },
      {
       "type": "text",
       "name": "growth_hormone4b",
       "visibleIf": "{growth_hormone_still_given}=false && {growth_hormone_given}=true && {growth_hormone1}='Growth_hormone_deficiency'",
       "title": "Until what age was growth hormone given?",
       "inputType": "number"
      },
      {
       "type": "text",
       "name": "growth_hormone5",
       "visibleIf": "{growth_hormone1}='Growth_hormone_excess'",
       "title": "Diagnosed at age (years)",
       "validators": [
        {
         "type": "numeric",
         "minValue": 0,
         "maxValue": 99
        }
       ],
       "inputType": "number"
      },
      {
       "type": "radiogroup",
       "name": "thyroid_hormone1",
       "title": "b. Thyroid hormone",
       "choices": [
        {
         "value": "noHPO",
         "text": "No problem"
        },
        {
         "value": "Hypothyroidism",
         "text": "Too little"
        },
        {
         "value": "Hyperthyroidism",
         "text": "Too much"
        }
       ]
      },
      {
       "type": "text",
       "name": "thyroid_hormone2",
       "visibleIf": "{thyroid_hormone1}='Hypothyroidism'",
       "title": "Since the age of (years)",
       "validators": [
        {
         "type": "numeric",
         "minValue": 0,
         "maxValue": 99
        }
       ],
       "inputType": "number"
      },
      {
       "type": "text",
       "name": "thyroid_hormone3",
       "visibleIf": "{thyroid_hormone1}='Hyperthyroidism'",
       "title": "Since the age of (years)",
       "validators": [
        {
         "type": "numeric",
         "minValue": 0,
         "maxValue": 99
        }
       ],
       "inputType": "number"
      },
      {
       "type": "radiogroup",
       "name": "adrenal_hormones1",
       "title": "c. Adrenal hormones",
       "choices": [
        {
         "value": "noHPO",
         "text": "No problem"
        },
        {
         "value": "adrenal_insufficiency",
         "text": "Too little"
        },
        {
         "value": "adrenal_overactivity",
         "text": "Too much"
        }
       ]
      },
      {
       "type": "text",
       "name": "adrenal_hormones2",
       "visibleIf": "{adrenal_hormones1}='adrenal_insufficiency'",
       "title": "Since the age of (years)",
       "validators": [
        {
         "type": "numeric",
         "minValue": 0,
         "maxValue": 99
        }
       ],
       "inputType": "number"
      },
      {
       "type": "radiogroup",
       "name": "adrenal_hormones3",
       "visibleIf": "{adrenal_hormones1}='adrenal_insufficiency'",
       "title": "Please specify which hormone",
       "choices": [
        {
         "value": "hypoaldosteronism",
         "text": "hypoaldosteronism"
        },
        {
         "value": "hypocortisolism",
         "text": "hypocortisolism"
        },
        {
         "value": "3",
         "text": "do not know"
        }
       ]
      },
      {
       "type": "text",
       "name": "adrenal_hormones4",
       "visibleIf": "{adrenal_hormones1}='adrenal_overactivity'",
       "title": "Since the age of (years)",
       "validators": [
        {
         "type": "numeric",
         "minValue": 0,
         "maxValue": 99
        }
       ],
       "inputType": "number"
      },
      {
       "type": "radiogroup",
       "name": "adrenal_hormones5",
       "visibleIf": "{adrenal_hormones1}='adrenal_overactivity'",
       "title": "Please specify which hormone",
       "choices": [
        {
         "value": "hyperaldosteronism",
         "text": "hyperaldosteronism"
        },
        {
         "value": "hypercortisolism",
         "text": "hypercortisolism"
        },
        {
         "value": "3",
         "text": "do not know"
        }
       ]
      },
      {
       "type": "boolean",
       "name": "diabetes_mellitus",
       "title": "d. Diabetes mellitus"
      },
      {
       "type": "radiogroup",
       "name": "diabetes_mellitus1",
       "visibleIf": "{diabetes_mellitus}=true",
       "title": "Please specify",
       "choices": [
        {
         "value": "Type_I_diabetes_mellitus",
         "text": "Insulin-Dependent Diabetes Mellitus (Type 1 diabetes)"
        },
        {
         "value": "Type_II_diabetes_mellitus",
         "text": "Non Insulin-Dependent Diabetes Mellitus (Type 2 diabetes)"
        },
        {
         "value": "3",
         "text": "Do not know"
        }
       ]
      },
      {
       "type": "text",
       "name": "diabetes_mellitus2a",
       "visibleIf": "$('diabetes_mellitus1').eq('Type _I_diabetes_mellitus').value() && {diabetes_mellitus}=true",
       "title": "Since the age of (years)",
       "validators": [
        {
         "type": "numeric",
         "minValue": 0,
         "maxValue": 99
        }
       ],
       "inputType": "number"
      },
      {
       "type": "text",
       "name": "diabetes_mellitus2b",
       "visibleIf": "{diabetes_mellitus1}='Type_II_diabetes_mellitus' && {diabetes_mellitus}=true",
       "title": "Since the age of (years)",
       "validators": [
        {
         "type": "numeric",
         "minValue": 0,
         "maxValue": 99
        }
       ],
       "inputType": "number"
      },
      {
       "type": "radiogroup",
       "name": "diabetes_insipidus",
       "title": "e. Diabetes insipidus (condition characterized by excessive thirst and excretion of large amounts of severely dilute urine)",
       "choices": [
        {
         "value": "y",
         "text": "Yes"
        },
        {
         "value": "n",
         "text": "No"
        },
        {
         "value": "u",
         "text": "Unsure"
        }
       ]
      },
      {
       "type": "text",
       "name": "diabetes_insipidus1",
       "visibleIf": "{diabetes_insipidus}='y'",
       "title": "Since the age of (years)",
       "validators": [
        {
         "type": "numeric",
         "minValue": 0,
         "maxValue": 99
        }
       ],
       "inputType": "number"
      },
      {
       "type": "radiogroup",
       "name": "puberty_spontaneous",
       "title": "f. Did your child enter puberty spontaneously?",
       "choices": [
        {
         "value": "y",
         "text": "Yes"
        },
        {
         "value": "n",
         "text": "No"
        },
        {
         "value": "x",
         "text": "Not yet applicable because of age"
        }
       ]
      },
      {
       "type": "radiogroup",
       "name": "puberty1",
       "visibleIf": "{puberty_spontaneous}='y'",
       "title": "Please specify",
       "choices": [
        {
         "value": "Precocious_puberty",
         "text": "too early (precocious puberty, puberty signs before the age of 9 in boys and before the age of 8 in girls)"
        },
        {
         "value": "noHPO",
         "text": "normal"
        }
       ]
      },
      {
       "type": "boolean",
       "name": "Puberty_and_gonadal_disorders",
       "visibleIf": "{puberty_spontaneous}='n'",
       "title": "Was hormone replacement therapy given?"
      },
      {
       "type": "text",
       "name": "Puberty_and_gonadal_disorders1",
       "visibleIf": "{Puberty_and_gonadal_disorders}=true && {puberty_spontaneous}='n'",
       "title": "Since the age of xx years",
       "validators": [
        {
         "type": "numeric",
         "minValue": 0,
         "maxValue": 99
        }
       ],
       "inputType": "number"
      }
     ],
     "title": "F3. Hormones",
     "description": "Are there any hormonal problems?"
    },
    {
     "type": "panel",
     "name": "Metabolic_questions",
     "elements": [
      {
       "type": "radiogroup",
       "name": "Abnormality_of_metabolism",
       "title": "a. Does your child have a metabolic disorder?",
       "choices": [
        {
         "value": "y",
         "text": "Yes"
        },
        {
         "value": "n",
         "text": "No"
        },
        {
         "value": "u",
         "text": "Unsure"
        }
       ]
      },
      {
       "type": "checkbox",
       "name": "metabolic1",
       "visibleIf": "{Abnormality_of_metabolism}='y'",
       "title": "Abnormality of …",
       "choices": [
        {
         "value": "Abnormality_of_lipid_metabolism",
         "text": "Lipid metabolism"
        },
        {
         "value": "Abnormality_of_carbohydrate_metabolism_homeostasis",
         "text": "Carbohydrate metabolism"
        },
        {
         "value": "Abnormality_of_amino_acid_metabolism",
         "text": "Amino acid metabolism"
        },
        {
         "value": "Abnormality_of_fatty-acid_metabolism",
         "text": "Fatty acid oxidation "
        },
        {
         "value": "Abnormality_of_mitochondrial_metabolism",
         "text": "Mitochondrial metabolism"
        },
        {
         "value": "6",
         "text": "Other/do not know"
        }
       ]
      },
      {
       "type": "radiogroup",
       "name": "metabolic_adverse_reac_meds",
       "title": "b. Were there adverse medication reactions?",
       "choices": [
        {
         "value": "y",
         "text": "Yes"
        },
        {
         "value": "n",
         "text": "No"
        },
        {
         "value": "u",
         "text": "Unsure"
        }
       ]
      },
      {
       "type": "checkbox",
       "name": "metabolic3",
       "visibleIf": "{metabolic_adverse_reac_meds}='y'",
       "title": "Which group of drugs?",
       "choices": [
        {
         "value": "Pain_medication",
         "text": "Pain medication"
        },
        {
         "value": "Anti-epileptic_drugs",
         "text": "Anti-epileptic drugs"
        },
        {
         "value": "Behavioural_medication",
         "text": "Behavioural medication"
        },
        {
         "value": "Antibiotics",
         "text": "Antibiotics"
        },
        {
         "value": "5",
         "text": "Other/do not know"
        }
       ]
      },
      {
       "type": "radiogroup",
       "name": "metabolic4",
       "visibleIf": "{metabolic_adverse_reac_meds}='y'",
       "title": "Were these reactions …",
       "choices": [
        {
         "value": "1",
         "text": "Serious, life threatening, requiring intervention"
        },
        {
         "value": "2",
         "text": "Not severe, not life threatening, transient"
        }
       ]
      },
      {
       "type": "radiogroup",
       "name": "slow_metabolism_meds",
       "title": "c. Does your child have an abnormally slow metabolism of medication?",
       "choices": [
        {
         "value": "y",
         "text": "Yes"
        },
        {
         "value": "n",
         "text": "No"
        },
        {
         "value": "u",
         "text": "Unsure"
        }
       ]
      },
      {
       "type": "radiogroup",
       "name": "metabolic6",
       "visibleIf": "{slow_metabolism_meds}='y'",
       "title": "How was this diagnosed?",
       "choices": [
        {
         "value": "1",
         "text": "by experience"
        },
        {
         "value": "2",
         "text": "bloodtest"
        }
       ]
      }
     ],
     "title": "F4. Metabolic disorders"
    }
   ],
   "title": "F. Blood, hormones and immune system"
  },
  {
   "name": "Part_G",
   "elements": [
    {
     "type": "panel",
     "name": "Vision",
     "elements": [
      {
       "type": "boolean",
       "name": "abnormality_of_vision",
       "title": "a. Does your child have any problems with his/her eyes?"
      },
      {
       "type": "checkbox",
       "name": "abnormality_of_vision1",
       "visibleIf": "{abnormality_of_vision}=true",
       "title": "Please specify",
       "choices": [
        {
         "value": "Mildly_reduced_visual_acuity",
         "text": "Mild vision problems, corrected by glasses"
        },
        {
         "value": "Severe_visual_impairment",
         "text": "Severe vision problems, only partly corrected by glasses"
        },
        {
         "value": "Blindness",
         "text": "Blindness (less than 10% vision)"
        },
        {
         "value": "Cortical_visual_impairment",
         "text": "Cortical visual impairment (CVI)"
        },
        {
         "value": "Amblyopia",
         "text": "Amblyopia (lazy eye)"
        },
        {
         "value": "Night_blindness",
         "text": "Night blindness"
        },
        {
         "value": "noHPO",
         "text": "Other/do not know"
        }
       ]
      },
      {
       "type": "text",
       "name": "abnormality_of_vision2",
       "visibleIf": "{abnormality_of_vision1} contains 'Night_blindness' && {abnormality_of_vision}=true",
       "title": "Night blindness, since the age of (years)",
       "validators": [
        {
         "type": "numeric",
         "minValue": 0,
         "maxValue": 99
        }
       ],
       "inputType": "number"
      },
      {
       "type": "boolean",
       "name": "abnormality_of_refraction",
       "title": "b. Is your child wearing glasses?"
      },
      {
       "type": "radiogroup",
       "name": "abnormality_of_refraction1",
       "visibleIf": "{abnormality_of_refraction}=true",
       "title": "Left eye",
       "choices": [
        {
         "value": "plus",
         "text": "plus"
        },
        {
         "value": "min",
         "text": "minus"
        },
        {
         "value": "x",
         "text": "Not applicable"
        }
       ]
      },
      {
       "type": "text",
       "name": "abnormality_of_refraction2",
       "visibleIf": "{abnormality_of_refraction}=true",
       "title": "Strenght (left eye)",
       "inputType": "number"
      },
      {
       "type": "radiogroup",
       "name": "abnormality_of_refraction3",
       "visibleIf": "{abnormality_of_refraction}=true",
       "title": "Right eye",
       "choices": [
        {
         "value": "plus",
         "text": "plus"
        },
        {
         "value": "min",
         "text": "minus"
        },
        {
         "value": "x",
         "text": "Not applicable"
        }
       ]
      },
      {
       "type": "text",
       "name": "abnormality_of_refraction4",
       "visibleIf": "{abnormality_of_refraction}=true",
       "title": "Strenght (right eye)",
       "inputType": "number"
      },
      {
       "type": "boolean",
       "name": "abnormality_of_eye_movement",
       "title": "c. Does your child have abnormal (involutary) eye movements?"
      },
      {
       "type": "checkbox",
       "name": "abnormality_of_eye_movement1",
       "visibleIf": "{abnormality_of_eye_movement}=true",
       "title": "Please specify",
       "choices": [
        {
         "value": "Strabismus",
         "text": "Strabismus (squinting)"
        },
        {
         "value": "nystagmus",
         "text": "Nystagmus (involuntary rapid eye movements)"
        },
        {
         "value": "Oculomotor_apraxia",
         "text": "Oculomotor apraxia (or Cogan ocular motor apraxia)"
        },
        {
         "value": "noHPO",
         "text": "Other/do not know"
        }
       ]
      },
      {
       "type": "boolean",
       "name": "abnormal_eye_morphology",
       "title": "d. Are there special characteristics of the eyes? (cataract, coloboma, retinitis pigmentosa, glaucoma, anopthalmia, etc.)"
      },
      {
       "type": "checkbox",
       "name": "abnormal_eye_morphology1",
       "visibleIf": "{abnormal_eye_morphology}=true",
       "title": "Please specify",
       "choices": [
        {
         "value": "glaucoma",
         "text": "Glaucoma (high pressure in the eye)"
        },
        {
         "value": "Anophthalmia",
         "text": "Anophthalmia (absence of one or both eyes)"
        },
        {
         "value": "Microphthalmos",
         "text": "Microphthalmia (very small eye globe)"
        },
        {
         "value": "Aplasia_Hypoplasia_of_the_optic_nerve",
         "text": "Abnormality of the optic nerve"
        },
        {
         "value": "Coloboma",
         "text": "Coloboma (closure defect)"
        },
        {
         "value": "Cataract",
         "text": "Cataract (lens opacity)"
        },
        {
         "value": "Abnormal_retinal_pigmentation",
         "text": "Abnormal pigmentation of the retina (including retinitis pigmentosa)"
        },
        {
         "value": "Retinal_detachment",
         "text": "Detachment of the retina (ablatio)"
        },
        {
         "value": "noHPO",
         "text": "Other/do not know"
        }
       ]
      },
      {
       "type": "text",
       "name": "abnormal_eye_morphology2",
       "visibleIf": "{abnormal_eye_morphology1} contains 'glaucoma' && {abnormal_eye_morphology}=true",
       "title": "Glaucoma; since the age of (years)",
       "validators": [
        {
         "type": "numeric",
         "minValue": 0,
         "maxValue": 99
        }
       ],
       "inputType": "number"
      },
      {
       "type": "text",
       "name": "abnormal_eye_morphology3",
       "visibleIf": "{abnormal_eye_morphology1} contains 'Cataract' && {abnormal_eye_morphology}=true",
       "title": "Cataract; since the age of (years)",
       "validators": [
        {
         "type": "numeric",
         "minValue": 0,
         "maxValue": 99
        }
       ],
       "inputType": "number"
      },
      {
       "type": "checkbox",
       "name": "abnormal_eye_morphology4",
       "visibleIf": "{abnormal_eye_morphology1} contains 'Coloboma' && {abnormal_eye_morphology}=true",
       "title": "Coloboma; please specify what kind",
       "choices": [
        {
         "value": "Retinal_coloboma",
         "text": "Retinal coloboma (closure defect of the retina)"
        },
        {
         "value": "Iris_coloboma",
         "text": "Iris coloboma (closure defect of the iris)"
        },
        {
         "value": "noHPO",
         "text": "Do not know which type"
        }
       ]
      },
      {
       "type": "text",
       "name": "abnormal_eye_morphology5",
       "visibleIf": "{abnormal_eye_morphology1} contains 'Abnormal_retinal_pigmentation' && {abnormal_eye_morphology}=true",
       "title": "Abnormal pigmentation of the retina; since the age of (years)",
       "validators": [
        {
         "type": "numeric",
         "minValue": 0,
         "maxValue": 99
        }
       ],
       "inputType": "number"
      },
      {
       "type": "text",
       "name": "abnormal_eye_morphology6",
       "visibleIf": "{abnormal_eye_morphology1} contains 'Retinal_detachment' && {abnormal_eye_morphology}=true",
       "title": "Detachment of the retina; since the age of (years)",
       "description": "If multiple, please give age of first incident",
       "validators": [
        {
         "type": "numeric",
         "minValue": 0,
         "maxValue": 99
        }
       ],
       "inputType": "number"
      }
     ],
     "title": "G1) Vision"
    },
    {
     "type": "panel",
     "name": "Hearing",
     "elements": [
      {
       "type": "boolean",
       "name": "Abnormality_of_the_ear",
       "title": "a. Are there congenital abnormalities of the middle and/or inner ear?",
       "description": "Abnormalities of the outer ear or ear canal were asked for in section B, question 2h and 2i"
      },
      {
       "type": "checkbox",
       "name": "middle_inner_ear1",
       "visibleIf": "{Abnormality_of_the_ear}=true",
       "title": "Please specify",
       "choices": [
        {
         "value": "Abnormality_of_the_cochlea",
         "text": "Abnormality of the cochlea"
        },
        {
         "value": "Morphological_abnormality_to_the_nerves_of_the_inner_ear",
         "text": "Abnormality to the nerves of the inner ear"
        },
        {
         "value": "Abnormality_of_the_Eustachian_tube",
         "text": "Abnormality of the Eustachian tube"
        },
        {
         "value": "Aplasia_of_middle_ear_ossicles",
         "text": "Missing middle ear ossicles"
        },
        {
         "value": "Abnormality_of_the_tympanic_membrane",
         "text": "Abnormality of the eardrum (tympanic membrane)"
        },
        {
         "value": "noHPO",
         "text": "Other/do not know"
        }
       ]
      },
      {
       "type": "radiogroup",
       "name": "newborn_hearing_screening",
       "title": "b. Did your child pass the hearing screening for newborns?",
       "choices": [
        {
         "value": "y",
         "text": "Yes"
        },
        {
         "value": "n",
         "text": "No"
        },
        {
         "value": "u",
         "text": "Unsure"
        },
        {
         "value": "c",
         "text": "Not performed in my country "
        }
       ]
      },
      {
       "type": "radiogroup",
       "name": "hearing_impairment",
       "title": "c. Does your child have a hearing impairment?",
       "choices": [
        {
         "value": "y",
         "text": "Yes"
        },
        {
         "value": "n",
         "text": "No"
        },
        {
         "value": "u",
         "text": "Unsure"
        }
       ]
      },
      {
       "type": "boolean",
       "name": "formal_hearing_test",
       "title": "d. Was there a formal hearing test done?"
      },
      {
       "type": "radiogroup",
       "name": "decibel_loss_right",
       "visibleIf": "{formal_hearing_test}=true",
       "title": "What was the result of the testing? How many decibel (dB) is the hearing loss for the right ear?",
       "choices": [
        {
         "value": "1",
         "text": "No hearing loss or loss up to 25 dB"
        },
        {
         "value": "Mild_hearing_impairment",
         "text": "Hearing loss of 26-40 dB"
        },
        {
         "value": "Moderate_hearing_impairment",
         "text": "Hearing loss of 41-70 dB"
        },
        {
         "value": "Severe_hearing_impairment",
         "text": "Hearing loss of 71-90 dB"
        },
        {
         "value": "Profound_hearing_impairment",
         "text": "Hearing loss of more than 90 dB"
        },
        {
         "value": "noHPO",
         "text": "Do not know"
        }
       ]
      },
      {
       "type": "radiogroup",
       "name": "decibel_loss_left",
       "visibleIf": "{formal_hearing_test}=true",
       "title": "What was the result of the testing? How many decibel (dB) is the hearing loss for the left ear?",
       "choices": [
        {
         "value": "1",
         "text": "No hearing loss or loss up to 25 dB"
        },
        {
         "value": "Mild_hearing_impairment",
         "text": "Hearing loss of 26-40 dB"
        },
        {
         "value": "Moderate_hearing_impairment",
         "text": "Hearing loss of 41-70 dB"
        },
        {
         "value": "Severe_hearing_impairment",
         "text": "Hearing loss of 71-90 dB"
        },
        {
         "value": "Profound_hearing_impairment",
         "text": "Hearing loss of more than 90 dB"
        },
        {
         "value": "noHPO",
         "text": "Do not know"
        }
       ]
      },
      {
       "type": "radiogroup",
       "name": "progressive_hearing_loss",
       "visibleIf": "{formal_hearing_test}=true",
       "title": "Is there progressive hearing loss?",
       "choices": [
        {
         "value": "y",
         "text": "Yes"
        },
        {
         "value": "n",
         "text": "No"
        },
        {
         "value": "u",
         "text": "Unsure"
        }
       ]
      },
      {
       "type": "text",
       "name": "progressive_hearing_loss1",
       "visibleIf": "{progressive_hearing_loss}='y' && {formal_hearing_test}=true",
       "title": "At what age was the progressive hearing loss first noticed?",
       "inputType": "number"
      },
      {
       "type": "boolean",
       "name": "ear_tubes",
       "title": "e. Were there ear tubes (Tympanostomy tubes, T-tubes) placed?"
      }
     ],
     "title": "G2) Hearing"
    },
    {
     "type": "panel",
     "name": "Balance_questions",
     "elements": [
      {
       "type": "boolean",
       "name": "balance_problems",
       "title": "a. Does your child have balance problems?"
      },
      {
       "type": "checkbox",
       "name": "balance1",
       "visibleIf": "{balance_problems}=true",
       "title": "Please specify",
       "choices": [
        {
         "value": "Vestibular_dysfunction",
         "text": "Balance disorder, due to vestibular dysfunction"
        },
        {
         "value": "Gait_ataxia",
         "text": "Balance disorder, due to cerebellum dysfunction"
        },
        {
         "value": "Gait_imbalance",
         "text": "Balance disorder, with unknown cause"
        },
        {
         "value": "noHPO",
         "text": "Other/do not know"
        }
       ]
      },
      {
       "type": "radiogroup",
       "name": "balance_scan",
       "title": "b. Did your child have an CT or MRI scan of the balance organ (semicircular canals)?",
       "choices": [
        {
         "value": "y",
         "text": "Yes"
        },
        {
         "value": "n",
         "text": "No"
        },
        {
         "value": "u",
         "text": "Unsure"
        }
       ]
      },
      {
       "type": "radiogroup",
       "name": "balance_scan1",
       "visibleIf": "{balance_scan}='y'",
       "title": "What was the result of the testing?",
       "choices": [
        {
         "value": "n",
         "text": "Normal"
        },
        {
         "value": "a",
         "text": "Abnormal"
        },
        {
         "value": "u",
         "text": "Unknown"
        }
       ]
      }
     ],
     "title": "G3) Balance"
    },
    {
     "type": "panel",
     "name": "Smell",
     "elements": [
      {
       "type": "radiogroup",
       "name": "Anosmia",
       "title": "a. Can your child smell?",
       "choices": [
        {
         "value": "y",
         "text": "Yes"
        },
        {
         "value": "n",
         "text": "No"
        },
        {
         "value": "u",
         "text": "Unsure"
        }
       ]
      }
     ],
     "title": "G4) Smell"
    },
    {
     "type": "panel",
     "name": "Pain",
     "elements": [
      {
       "type": "boolean",
       "name": "Abn_of_pain_sensation",
       "title": "a. Does your child have an abnormal sense of touch or sensation of pain?"
      },
      {
       "type": "checkbox",
       "name": "abnormal_pain1",
       "visibleIf": "{Abn_of_pain_sensation}=true",
       "title": "Please specify",
       "choices": [
        {
         "value": "Impaired_pain_sensation",
         "text": "Impaired pain sensation"
        },
        {
         "value": "Over-reactivity_of_the_mouth_region",
         "text": "Over-reactivity of the mouth region"
        },
        {
         "value": "Over-reactivity_of_the_palms_of_the_hands_and_or_soles_of_the_feet",
         "text": "Over-reactivity of the palms of the hands and/or soles of the feet"
        },
        {
         "value": "allodynia",
         "text": "Pain due to a stimulus which does not normally provoke pain (also called allodynia)"
        },
        {
         "value": "noHPO",
         "text": "Other/do not know"
        }
       ]
      },
      {
       "type": "radiogroup",
       "name": "abnormal_pain2",
       "visibleIf": "{Abn_of_pain_sensation}=true",
       "title": "This is…",
       "choices": [
        {
         "value": "1",
         "text": "Continuous"
        },
        {
         "value": "2",
         "text": "Alternating/variable"
        }
       ]
      }
     ],
     "title": "G5) Sense of touch and pain sensation"
    },
    {
     "type": "panel",
     "name": "Sensory_questions",
     "elements": [
      {
       "type": "boolean",
       "name": "sensory",
       "title": "a. Did a professional diagnose sensory processing disorder or sensory integration dysfunction in your child?"
      }
     ],
     "title": "G6) Sensory processing"
    }
   ],
   "title": "G. Senses"
  },
  {
   "name": "Part_H",
   "elements": [
    {
     "type": "panel",
     "name": "Brain",
     "elements": [
      {
       "type": "boolean",
       "name": "brain_imaging",
       "title": "a. Was there imaging of the brain performed?"
      },
      {
       "type": "text",
       "name": "brain_imaging1",
       "visibleIf": "{brain_imaging}=true",
       "title": "At what age? (years)",
       "validators": [
        {
         "type": "numeric",
         "minValue": 0,
         "maxValue": 99
        }
       ],
       "inputType": "number"
      },
      {
       "type": "checkbox",
       "name": "brain_imaging_type1",
       "visibleIf": "{brain_imaging}=true",
       "title": "b. What type of imaging?",
       "choices": [
        {
         "value": "1",
         "text": "MRI"
        },
        {
         "value": "2",
         "text": "CT"
        },
        {
         "value": "3",
         "text": "Brain ultrasound"
        },
        {
         "value": "4",
         "text": "Other/do not know"
        }
       ]
      },
      {
       "type": "boolean",
       "name": "brain_abnormalities",
       "visibleIf": "{brain_imaging}=true",
       "title": "c. Were there abnormalities of the brain seen?"
      },
      {
       "type": "checkbox",
       "name": "brain_abnormalities1",
       "visibleIf": "{brain_abnormalities}=true && {brain_imaging}=true",
       "title": "Please specify",
       "choices": [
        {
         "value": "Aplasia_Hypoplasia_of_the_cerebrum",
         "text": "Hypoplasia of the brain (smaller than usual brain or not completely developed brain, atrophy of the brain)"
        },
        {
         "value": "Abnormality_of_the_cerebellum",
         "text": "Abnormality of the cerebellum (the smaller, rear part of the brain, important for coordination)"
        },
        {
         "value": "corpus_callosum_abnormality",
         "text": "Corpus callosum abnormality"
        },
        {
         "value": "Abnormality_of_the_cerebral_vasculature",
         "text": "Abnormality of the cerebral blood vessels (blood vessels of the brain)"
        },
        {
         "value": "Holoprosencephaly",
         "text": "Holoprosencephaly"
        },
        {
         "value": "Abnormal_cortical_gyration",
         "text": "Abnormal gyral pattern of the brain (pachygyria, lissencephaly)"
        },
        {
         "value": "Hydrocephalus",
         "text": "Hydrocephalus (too much liquid in the brain)"
        },
        {
         "value": "Aqueductal_stenosis",
         "text": "Aqueduct stenosis (blocked passage of brain fluid from 3rd to 4th ventricle)"
        },
        {
         "value": "Ventriculomegaly",
         "text": "Prominent cerebral ventricles (prominent brain fluid (CSF) spaces, ventriculomegaly)"
        },
        {
         "value": "cortical_dysplasia",
         "text": "Cortical dysplasia or migration disorder"
        },
        {
         "value": "Delayed_myelination",
         "text": "Delayed myelination"
        },
        {
         "value": "Encephalocele",
         "text": "Encephalocele (protrusions of the brain and the membranes that cover it through openings in the skull)"
        },
        {
         "value": "Intracranial_cystic_lesion",
         "text": "Cysts of the brain"
        },
        {
         "value": "Intracranial_hemorrhage",
         "text": "Brain hemorrhage (bleeding in the brain)"
        },
        {
         "value": "noHPO",
         "text": "Other/do not know"
        }
       ]
      },
      {
       "type": "text",
       "name": "brain_abnormalities2",
       "visibleIf": "{brain_abnormalities1} contains 'Intracranial_hemorrhage' && {brain_abnormalities}=true && {brain_imaging}=true",
       "title": "Brain haemorrhage; at the age of (years)",
       "validators": [
        {
         "type": "numeric",
         "minValue": 0,
         "maxValue": 99
        }
       ],
       "inputType": "number"
      }
     ],
     "title": "H1) Brain"
    },
    {
     "type": "panel",
     "name": "Nerves",
     "elements": [
      {
       "type": "radiogroup",
       "name": "Facial_palsy",
       "title": "a. Facial palsy",
       "choices": [
        {
         "value": "y",
         "text": "Yes"
        },
        {
         "value": "n",
         "text": "No"
        },
        {
         "value": "u",
         "text": "Unsure"
        }
       ]
      },
      {
       "type": "radiogroup",
       "name": "Muscular_hypotonia",
       "title": "b. Hypotonia or low muscle tone",
       "choices": [
        {
         "value": "y",
         "text": "Yes"
        },
        {
         "value": "n",
         "text": "No"
        },
        {
         "value": "u",
         "text": "Unsure"
        }
       ]
      },
      {
       "type": "radiogroup",
       "name": "Hypertonia",
       "title": "c. Hypertonia or excessive muscle tone",
       "choices": [
        {
         "value": "y",
         "text": "Yes"
        },
        {
         "value": "n",
         "text": "No"
        },
        {
         "value": "u",
         "text": "Unsure"
        }
       ]
      },
      {
       "type": "text",
       "name": "excessive_muscle_tone1",
       "visibleIf": "{Hypertonia}='y'",
       "title": "Since what age?",
       "inputType": "number"
      },
      {
       "type": "radiogroup",
       "name": "Spasticity",
       "title": "d. Spasticity (combination of paralysis, increased tendon reflex activity, hypertonia, excessive muscle contraction) ",
       "choices": [
        {
         "value": "y",
         "text": "Yes"
        },
        {
         "value": "n",
         "text": "No"
        },
        {
         "value": "u",
         "text": "Unsure"
        }
       ]
      },
      {
       "type": "radiogroup",
       "name": "hyperreflexia",
       "title": "e. Hyperreflexia (overactive or over-responsive tendon reflexes)",
       "choices": [
        {
         "value": "y",
         "text": "Yes"
        },
        {
         "value": "n",
         "text": "No"
        },
        {
         "value": "u",
         "text": "Unsure"
        }
       ]
      },
      {
       "type": "radiogroup",
       "name": "Reduced_tendon_reflexes",
       "title": "f. Areflexia/hyporeflexia (below normal or absent tendon reflexes)",
       "choices": [
        {
         "value": "y",
         "text": "Yes"
        },
        {
         "value": "n",
         "text": "No"
        },
        {
         "value": "u",
         "text": "Unsure"
        }
       ]
      },
      {
       "type": "radiogroup",
       "name": "Myopathy",
       "title": "g. Myopathy (muscular disease resulting in muscular weakness)",
       "choices": [
        {
         "value": "y",
         "text": "Yes"
        },
        {
         "value": "n",
         "text": "No"
        },
        {
         "value": "u",
         "text": "Unsure"
        }
       ]
      },
      {
       "type": "radiogroup",
       "name": "Ataxia",
       "title": "h. Ataxia (poor coordination of muscle movements)",
       "choices": [
        {
         "value": "y",
         "text": "Yes"
        },
        {
         "value": "n",
         "text": "No"
        },
        {
         "value": "u",
         "text": "Unsure"
        }
       ]
      },
      {
       "type": "radiogroup",
       "name": "Torticollis",
       "title": "i. Torticollis (twisted neck due to hypertonia of neck muscles)",
       "choices": [
        {
         "value": "y",
         "text": "Yes"
        },
        {
         "value": "n",
         "text": "No"
        },
        {
         "value": "u",
         "text": "Unsure"
        }
       ]
      }
     ],
     "title": "H2) Nerves and muscles",
     "description": "Does your child have;"
    },
    {
     "type": "panel",
     "name": "Epilepsy_questions",
     "elements": [
      {
       "type": "radiogroup",
       "name": "seizures",
       "title": "a. Has your child ever had convulsions, fits or seizures?",
       "choices": [
        {
         "value": "y",
         "text": "Yes"
        },
        {
         "value": "n",
         "text": "No"
        },
        {
         "value": "u",
         "text": "Unsure"
        }
       ]
      },
      {
       "type": "checkbox",
       "name": "seizures1",
       "visibleIf": "{seizures}='y'",
       "title": "What kind of seizures?",
       "choices": [
        {
         "value": "Infantile_spasms",
         "text": "Infantile spasms (West syndrome)"
        },
        {
         "value": "Absence_seizures",
         "text": "Absences (brief loss and return of consciousness, petit mal seizures)"
        },
        {
         "value": "Focal_seizures",
         "text": "Focal seizures (partial or localized seizures, which affect initially only a part of the brain)"
        },
        {
         "value": "Generalized_seizures",
         "text": "Generalized seizures (seizures that impair consciousness and distorts the electrical activity of the whole or a larger portion of the brain, grand mal seizures)"
        },
        {
         "value": "febrile_seizures",
         "text": "Febrile seizures (seizures occurring only when the child has a fever)"
        },
        {
         "value": "noHPO",
         "text": "Other/do not know"
        }
       ]
      },
      {
       "type": "panel",
       "name": "seizures_age_start",
       "elements": [
        {
         "type": "text",
         "name": "seizures_age_start_years",
         "visibleIf": "{seizures}='y'",
         "title": "Years",
         "validators": [
          {
           "type": "numeric",
           "minValue": 0,
           "maxValue": 99
          }
         ],
         "inputType": "number"
        },
        {
         "type": "text",
         "name": "seizures_age_start_months",
         "visibleIf": "{seizures}='y'",
         "title": "Months",
         "validators": [
          {
           "type": "numeric",
           "minValue": 0,
           "maxValue": 12
          }
         ],
         "inputType": "number"
        }
       ],
       "visibleIf": "{seizures}='y'",
       "title": "b. At what age did the convulsions, fits or seizures start in your child (approximately)?"
      },
      {
       "type": "boolean",
       "name": "seizures_age_ongoing",
       "visibleIf": "{seizures}='y'",
       "title": "c. Are the convulsions, fits or seizures still onoging?"
      },
      {
       "type": "panel",
       "name": "seizures_age_end",
       "elements": [
        {
         "type": "text",
         "name": "seizures_age_end_years",
         "visibleIf": "{seizures_age_ongoing}=false && {seizures}='y'",
         "title": "Years",
         "validators": [
          {
           "type": "numeric",
           "minValue": 0,
           "maxValue": 99
          }
         ],
         "inputType": "number"
        },
        {
         "type": "text",
         "name": "seizures_age_end_months",
         "visibleIf": "{seizures_age_ongoing}=false && {seizures}='y'",
         "title": "Months",
         "validators": [
          {
           "type": "numeric",
           "minValue": 0,
           "maxValue": 12
          }
         ],
         "inputType": "number"
        }
       ],
       "visibleIf": "{seizures_age_ongoing}=false && {seizures}='y'",
       "title": "Up to what age did the convulsions, fits or seizures last in your child (approximately)"
      },
      {
       "type": "radiogroup",
       "name": "seizures_count",
       "visibleIf": "{seizures}='y'",
       "title": "d. How many seizures has your child had in total so far?",
       "choices": [
        {
         "value": "1",
         "text": "1"
        },
        {
         "value": "2",
         "text": "2-4"
        },
        {
         "value": "5",
         "text": "5-10"
        },
        {
         "value": "10",
         "text": "More than 10"
        },
        {
         "value": "unknown",
         "text": "Do not know"
        }
       ]
      },
      {
       "type": "radiogroup",
       "name": "epilepsy",
       "visibleIf": "{seizures}='y'",
       "title": "e. Was epilepsy formally diagnosed?",
       "choices": [
        {
         "value": "y",
         "text": "Yes"
        },
        {
         "value": "n",
         "text": "No"
        },
        {
         "value": "u",
         "text": "Unsure"
        }
       ]
      },
      {
       "type": "boolean",
       "name": "epilepsy_medication",
       "visibleIf": "{seizures}='y'",
       "title": "f. Is or was there medication for epilepsy used?"
      },
      {
       "type": "panel",
       "name": "epilepsy_medication_start",
       "elements": [
        {
         "type": "text",
         "name": "epilepsy_medication_start_y",
         "visibleIf": "{epilepsy_medication}=true && {seizures}='y'",
         "title": "Years",
         "validators": [
          {
           "type": "numeric",
           "minValue": 0,
           "maxValue": 99
          }
         ],
         "inputType": "number"
        },
        {
         "type": "text",
         "name": "epilepsy_medication_start_m",
         "visibleIf": "{epilepsy_medication}=true && {seizures}='y'",
         "title": "Months",
         "validators": [
          {
           "type": "numeric",
           "minValue": 0,
           "maxValue": 12
          }
         ],
         "inputType": "number"
        }
       ],
       "visibleIf": "{epilepsy_medication}=true && {seizures}='y'",
       "title": "Since the age of"
      },
      {
       "type": "boolean",
       "name": "epilepsy_medication_ongoing",
       "visibleIf": "{epilepsy_medication}=true && {seizures}='y'",
       "title": "Is the epilepsy medication ongoing?"
      },
      {
       "type": "panel",
       "name": "epilepsy_medication_end",
       "elements": [
        {
         "type": "text",
         "name": "epilepsy_medication_end_years",
         "visibleIf": "{epilepsy_medication_ongoing}=false && {epilepsy_medication}=true && {seizures}='y'",
         "title": "Years",
         "validators": [
          {
           "type": "numeric",
           "minValue": 0,
           "maxValue": 99
          }
         ],
         "inputType": "number"
        },
        {
         "type": "text",
         "name": "epilepsy_medication_end_months",
         "visibleIf": "{epilepsy_medication_ongoing}=false && {epilepsy_medication}=true && {seizures}='y'",
         "title": "Months",
         "validators": [
          {
           "type": "numeric",
           "minValue": 0,
           "maxValue": 12
          }
         ],
         "inputType": "number"
        }
       ],
       "visibleIf": "{epilepsy_medication_ongoing}=false && {epilepsy_medication}=true && {seizures}='y'",
       "title": "Till the age of"
      },
      {
       "type": "radiogroup",
       "name": "Status_epilepticus",
       "visibleIf": "{seizures}='y'",
       "title": "g. Has your child ever had a status epilepticus? (an epileptic seizure of more than 30 minutes)",
       "choices": [
        {
         "value": "y",
         "text": "Yes"
        },
        {
         "value": "n",
         "text": "No"
        },
        {
         "value": "u",
         "text": "Unsure"
        }
       ]
      }
     ],
     "title": "H3) Epilepsy"
    },
    {
     "type": "panel",
     "name": "Other_neuro",
     "elements": [
      {
       "type": "radiogroup",
       "name": "abnormality_of_the_spinal_cord",
       "title": "a. Is there an abnormality of the spinal cord? (tethered cord)",
       "choices": [
        {
         "value": "y",
         "text": "Yes"
        },
        {
         "value": "n",
         "text": "No"
        },
        {
         "value": "u",
         "text": "Unsure"
        }
       ]
      },
      {
       "type": "radiogroup",
       "name": "Migraine",
       "title": "b. Does your child have migraine headaches?",
       "choices": [
        {
         "value": "y",
         "text": "Yes"
        },
        {
         "value": "n",
         "text": "No"
        },
        {
         "value": "u",
         "text": "Unsure"
        }
       ]
      }
     ],
     "title": "H4) Other neurologic problems"
    }
   ],
   "title": "H. Brain, epilepsy and neurology"
  },
  {
   "name": "Part_I",
   "elements": [
    {
     "type": "panel",
     "name": "General_development",
     "elements": [
      {
       "type": "boolean",
       "name": "development_delay",
       "title": "a. Is there developmental delay?"
      },
      {
       "type": "checkbox",
       "name": "development_delay1",
       "visibleIf": "{development_delay}=true",
       "title": "Please specify",
       "choices": [
        {
         "value": "Delayed_gross_motor_development",
         "text": "Gross motor developmental delay"
        },
        {
         "value": "Delayed_fine_motor_development",
         "text": "Fine motor developmental delay"
        },
        {
         "value": "Delayed_speech_and_language_development",
         "text": "Speech delays"
        },
        {
         "value": "Global_developmental_delay",
         "text": "Global developmental delay"
        },
        {
         "value": "noHPO",
         "text": "Other/do not know"
        }
       ]
      }
     ],
     "title": "I1) General development"
    },
    {
     "type": "panel",
     "name": "Gross_motor_skills",
     "elements": [
      {
       "type": "radiogroup",
       "name": "reach_objects",
       "title": "a. Reach for objects",
       "choices": [
        {
         "value": "y",
         "text": "Yes"
        },
        {
         "value": "n",
         "text": "No"
        },
        {
         "value": "x",
         "text": "Not yet applicable because of age"
        }
       ]
      },
      {
       "type": "text",
       "name": "reach_objects_weeks",
       "visibleIf": "{reach_objects}='y'",
       "title": "Since what age (months)?",
       "validators": [
        {
         "type": "numeric",
         "minValue": 2
        }
       ],
       "inputType": "number"
      },
      {
       "type": "radiogroup",
       "name": "roll_over",
       "title": "b. Roll over from lying on back to lying on tummy",
       "choices": [
        {
         "value": "y",
         "text": "Yes"
        },
        {
         "value": "n",
         "text": "No"
        },
        {
         "value": "x",
         "text": "Not yet applicable because of age"
        }
       ]
      },
      {
       "type": "text",
       "name": "roll_over_weeks",
       "visibleIf": "{roll_over}='y'",
       "title": "Since what age (months)?",
       "validators": [
        {
         "type": "numeric",
         "minValue": 2
        }
       ],
       "inputType": "number"
      },
      {
       "type": "radiogroup",
       "name": "sit_up",
       "title": "c. Sit up unsupported",
       "choices": [
        {
         "value": "y",
         "text": "Yes"
        },
        {
         "value": "n",
         "text": "No"
        },
        {
         "value": "x",
         "text": "Not yet applicable because of age"
        }
       ]
      },
      {
       "type": "text",
       "name": "sit_up_months",
       "visibleIf": "{sit_up}='y'",
       "title": "Since what age (months)?",
       "validators": [
        {
         "type": "numeric",
         "minValue": 5
        }
       ],
       "inputType": "number"
      },
      {
       "type": "radiogroup",
       "name": "sit_up_without_help",
       "title": "d. Get to a sitting position without help",
       "choices": [
        {
         "value": "y",
         "text": "Yes"
        },
        {
         "value": "n",
         "text": "No"
        },
        {
         "value": "x",
         "text": "Not yet applicable because of age"
        }
       ]
      },
      {
       "type": "text",
       "name": "sit_up2_months",
       "visibleIf": "{sit_up_without_help}='y'",
       "title": "Since what age (months)?",
       "validators": [
        {
         "type": "numeric",
         "minValue": 7
        }
       ],
       "inputType": "number"
      },
      {
       "type": "radiogroup",
       "name": "crawl",
       "title": "e. Crawl or bottom shuffle",
       "choices": [
        {
         "value": "y",
         "text": "Yes"
        },
        {
         "value": "n",
         "text": "No"
        },
        {
         "value": "x",
         "text": "Not yet applicable because of age"
        }
       ]
      },
      {
       "type": "text",
       "name": "crawl_months",
       "visibleIf": "{crawl}='y'",
       "title": "Since what age (months)?",
       "validators": [
        {
         "type": "numeric",
         "minValue": 5
        }
       ],
       "inputType": "number"
      },
      {
       "type": "radiogroup",
       "name": "pull_up",
       "title": "f. Pull him- or herself up a standing position",
       "choices": [
        {
         "value": "y",
         "text": "Yes"
        },
        {
         "value": "n",
         "text": "No"
        },
        {
         "value": "x",
         "text": "Not yet applicable because of age"
        }
       ]
      },
      {
       "type": "text",
       "name": "pull_up_months",
       "visibleIf": "{pull_up}='y'",
       "title": "Since what age (months)?",
       "validators": [
        {
         "type": "numeric",
         "minValue": 6
        }
       ],
       "inputType": "number"
      },
      {
       "type": "radiogroup",
       "name": "walk_supported",
       "title": "g. Walk holding on to furniture (e.g. to a table)",
       "choices": [
        {
         "value": "y",
         "text": "Yes"
        },
        {
         "value": "n",
         "text": "No"
        },
        {
         "value": "x",
         "text": "Not yet applicable because of age"
        }
       ]
      },
      {
       "type": "text",
       "name": "walk_supported_months",
       "visibleIf": "{walk_supported}='y'",
       "title": "Since what age (months)?",
       "validators": [
        {
         "type": "numeric",
         "minValue": 6
        }
       ],
       "inputType": "number"
      },
      {
       "type": "radiogroup",
       "name": "walk_unsupported",
       "title": "h. Walk unsupported",
       "choices": [
        {
         "value": "y",
         "text": "Yes"
        },
        {
         "value": "n",
         "text": "No"
        },
        {
         "value": "x",
         "text": "Not yet applicable because of age"
        }
       ]
      },
      {
       "type": "text",
       "name": "walk_unsupported_months",
       "visibleIf": "{walk_unsupported}='y'",
       "title": "Since what age (months)?",
       "validators": [
        {
         "type": "numeric",
         "minValue": 8
        }
       ],
       "inputType": "number"
      }
     ],
     "title": "I2) Gross motor skills",
     "description": "Can your child …. If yes, since what age:"
    },
    {
     "type": "panel",
     "name": "Fine_motor_skills",
     "elements": [
      {
       "type": "radiogroup",
       "name": "pick_up",
       "title": "a. Pick up something, like an object the size of a currant, between thumb and index finger",
       "choices": [
        {
         "value": "y",
         "text": "Yes"
        },
        {
         "value": "n",
         "text": "No"
        },
        {
         "value": "x",
         "text": "Not yet applicable because of age"
        }
       ]
      },
      {
       "type": "text",
       "name": "pick_up_months",
       "visibleIf": "{pick_up}='y'",
       "title": "Since what age (months)?",
       "validators": [
        {
         "type": "numeric",
         "minValue": 5
        }
       ],
       "inputType": "number"
      },
      {
       "type": "radiogroup",
       "name": "hold_pencil",
       "title": "b. Hold a pencil between thumb and index finger",
       "choices": [
        {
         "value": "y",
         "text": "Yes"
        },
        {
         "value": "n",
         "text": "No"
        },
        {
         "value": "x",
         "text": "Not yet applicable because of age"
        }
       ]
      },
      {
       "type": "text",
       "name": "hold_pencil_months",
       "visibleIf": "{hold_pencil}='y'",
       "title": "Since what age (months)?",
       "validators": [
        {
         "type": "numeric",
         "minValue": 10
        }
       ],
       "inputType": "number"
      },
      {
       "type": "radiogroup",
       "name": "color_lines",
       "title": "c. Colour within the lines",
       "choices": [
        {
         "value": "y",
         "text": "Yes"
        },
        {
         "value": "n",
         "text": "No"
        },
        {
         "value": "x",
         "text": "Not yet applicable because of age"
        }
       ]
      },
      {
       "type": "text",
       "name": "color_lines_months",
       "visibleIf": "{color_lines}='y'",
       "title": "Since what age (months)?",
       "validators": [
        {
         "type": "numeric",
         "minValue": 10
        }
       ],
       "inputType": "number"
      },
      {
       "type": "radiogroup",
       "name": "build_tower",
       "title": "d. Build a tower of 6 blocks",
       "choices": [
        {
         "value": "y",
         "text": "Yes"
        },
        {
         "value": "n",
         "text": "No"
        },
        {
         "value": "x",
         "text": "Not yet applicable because of age"
        }
       ]
      },
      {
       "type": "text",
       "name": "build_tower_months",
       "visibleIf": "{build_tower}='y'",
       "title": "Since what age (months)?",
       "validators": [
        {
         "type": "numeric",
         "minValue": 10
        }
       ],
       "inputType": "number"
      },
      {
       "type": "radiogroup",
       "name": "string_beads",
       "title": "e. String beads",
       "choices": [
        {
         "value": "y",
         "text": "Yes"
        },
        {
         "value": "n",
         "text": "No"
        },
        {
         "value": "x",
         "text": "Not yet applicable because of age"
        }
       ]
      },
      {
       "type": "text",
       "name": "string_beads_months",
       "visibleIf": "{string_beads}='y'",
       "title": "Since what age (months)?",
       "validators": [
        {
         "type": "numeric",
         "minValue": 10
        }
       ],
       "inputType": "number"
      }
     ],
     "title": "I3) Fine motor skills",
     "description": "Can your child …. If yes, since what age:"
    },
    {
     "type": "panel",
     "name": "Language_questions",
     "elements": [
      {
       "type": "panel",
       "name": "Language",
       "elements": [
        {
         "type": "radiogroup",
         "name": "smile",
         "title": "Smile",
         "choices": [
          {
           "value": "y",
           "text": "Yes"
          },
          {
           "value": "n",
           "text": "No"
          },
          {
           "value": "x",
           "text": "Not yet applicable because of age"
          }
         ]
        },
        {
         "type": "text",
         "name": "smile_weeks",
         "visibleIf": "{smile}='y'",
         "title": "Since what age (weeks)?",
         "validators": [
          {
           "type": "numeric",
           "minValue": 2
          }
         ],
         "inputType": "number"
        },
        {
         "type": "radiogroup",
         "name": "speak_sounds",
         "title": "Make sounds; cooing, gurgle",
         "choices": [
          {
           "value": "y",
           "text": "Yes"
          },
          {
           "value": "n",
           "text": "No"
          },
          {
           "value": "x",
           "text": "Not yet applicable because of age"
          }
         ]
        },
        {
         "type": "text",
         "name": "speak_sounds_months",
         "visibleIf": "{speak_sounds}='y'",
         "title": "Since what age (weeks)?",
         "validators": [
          {
           "type": "numeric",
           "minValue": 4
          }
         ],
         "inputType": "number"
        },
        {
         "type": "radiogroup",
         "name": "speak_words",
         "title": "Make sounds; babble, copy sounds he or she hears",
         "choices": [
          {
           "value": "y",
           "text": "Yes"
          },
          {
           "value": "n",
           "text": "No"
          },
          {
           "value": "x",
           "text": "Not yet applicable because of age"
          }
         ]
        },
        {
         "type": "text",
         "name": "speak_words_months",
         "visibleIf": "{speak_words}='y'",
         "title": "Since what age (months)?",
         "validators": [
          {
           "type": "numeric",
           "minValue": 5
          }
         ],
         "inputType": "number"
        },
        {
         "type": "radiogroup",
         "name": "speak_1word",
         "title": "Speak his or her first words",
         "choices": [
          {
           "value": "y",
           "text": "Yes"
          },
          {
           "value": "n",
           "text": "No"
          },
          {
           "value": "x",
           "text": "Not yet applicable because of age"
          }
         ]
        },
        {
         "type": "text",
         "name": "speak_1word_months",
         "visibleIf": "{speak_1word}='y'",
         "title": "Since what age (months)?",
         "validators": [
          {
           "type": "numeric",
           "minValue": 9
          }
         ],
         "inputType": "number"
        },
        {
         "type": "radiogroup",
         "name": "speak_2words",
         "title": "Speak 2-word sentences",
         "choices": [
          {
           "value": "y",
           "text": "Yes"
          },
          {
           "value": "n",
           "text": "No"
          },
          {
           "value": "x",
           "text": "Not yet applicable because of age"
          }
         ]
        },
        {
         "type": "text",
         "name": "speak_2words_months",
         "visibleIf": "{speak_2words}='y'",
         "title": "Since what age (months)?",
         "validators": [
          {
           "type": "numeric",
           "minValue": 10
          }
         ],
         "inputType": "number"
        }
       ],
       "title": "a. Can your child …. If yes, since what age:"
      },
      {
       "type": "boolean",
       "name": "communication_aids",
       "title": "b. Does your child use communication aids?"
      },
      {
       "type": "checkbox",
       "name": "communication1",
       "visibleIf": "{communication_aids}=true",
       "title": "What kind of communication aid?",
       "choices": [
        {
         "value": "1",
         "text": "Sign language"
        },
        {
         "value": "2",
         "text": "Tablet"
        },
        {
         "value": "3",
         "text": "Pictograms (PICTOS or PECS)"
        },
        {
         "value": "4",
         "text": "Speech device"
        },
        {
         "value": "5",
         "text": "Other communication aid"
        }
       ]
      },
      {
       "type": "radiogroup",
       "name": "language_understanding1",
       "title": "c. At what level would you estimate your child’s language skills? (Understanding what is said, passive speech)",
       "choices": [
        {
         "value": "1",
         "text": "Adequate for age"
        },
        {
         "value": "Receptive_language_delay",
         "text": "Delayed"
        }
       ]
      },
      {
       "type": "text",
       "name": "language_understanding2",
       "visibleIf": "{language_understanding1}='Receptive_language_delay'",
       "title": "The level is more like (years)",
       "validators": [
        {
         "type": "numeric",
         "minValue": 0,
         "maxValue": 99
        }
       ],
       "inputType": "number"
      },
      {
       "type": "radiogroup",
       "name": "language_speech1",
       "title": "d. At what level would you estimate your child’s language skills? (Active speech)",
       "choices": [
        {
         "value": "1",
         "text": "Adequate for age"
        },
        {
         "value": "Expressive_language_delay",
         "text": "Delayed"
        },
        {
         "value": "absent_speech",
         "text": "No speech"
        }
       ]
      },
      {
       "type": "text",
       "name": "language_speech2",
       "visibleIf": "{language_speech1}='Expressive_language_delay'",
       "title": "The level is more like (years)",
       "validators": [
        {
         "type": "numeric",
         "minValue": 0,
         "maxValue": 99
        }
       ],
       "inputType": "number"
      }
     ],
     "title": "I4) Communication and language development"
    },
    {
     "type": "panel",
     "name": "Developmental_testing",
     "elements": [
      {
       "type": "boolean",
       "name": "IQtest",
       "title": "a. Has an IQ, DQ or developmental test been done?"
      },
      {
       "type": "panel",
       "name": "IQtest_results",
       "elements": [
        {
         "type": "panel",
         "name": "IQtest1_age",
         "elements": [
          {
           "type": "text",
           "name": "IQtest1_age_years",
           "visibleIf": "{IQtest}=true",
           "title": "years",
           "validators": [
            {
             "type": "numeric",
             "minValue": 0,
             "maxValue": 99
            }
           ],
           "inputType": "number"
          },
          {
           "type": "text",
           "name": "IQtest1_age_months",
           "visibleIf": "{IQtest}=true",
           "title": "months",
           "validators": [
            {
             "type": "numeric",
             "minValue": 0,
             "maxValue": 12
            }
           ],
           "inputType": "number"
          }
         ],
         "visibleIf": "{IQtest}=true",
         "title": "Test 1. At what age was the testing done?"
        },
        {
         "type": "panel",
         "name": "IQtest1_result",
         "elements": [
          {
           "type": "text",
           "name": "IQtest1_result_IQ",
           "visibleIf": "{IQtest}=true",
           "title": "Total IQ (TIQ)",
           "inputType": "number"
          },
          {
           "type": "text",
           "name": "IQtest1_result_verbal_IQ",
           "visibleIf": "{IQtest}=true",
           "title": "Verbal IQ (VIQ)",
           "inputType": "number"
          },
          {
           "type": "text",
           "name": "IQtest1_result_performal_IQ",
           "visibleIf": "{IQtest}=true",
           "title": "Performal IQ (PIQ)",
           "inputType": "number"
          },
          {
           "type": "panel",
           "name": "IQtest1_result_age",
           "elements": [
            {
             "type": "text",
             "name": "IQtest1_result_age_years",
             "visibleIf": "{IQtest}=true",
             "title": "years",
             "validators": [
              {
               "type": "numeric",
               "minValue": 0,
               "maxValue": 99
              }
             ],
             "inputType": "number"
            },
            {
             "type": "text",
             "name": "IQtest1_result_age_months",
             "visibleIf": "{IQtest}=true",
             "title": "months",
             "validators": [
              {
               "type": "numeric",
               "minValue": 0,
               "maxValue": 12
              }
             ],
             "inputType": "number"
            }
           ],
           "visibleIf": "{IQtest}=true",
           "title": "Test 1. Developmental age"
          }
         ],
         "visibleIf": "{IQtest}=true",
         "title": "Test 1. What was the result of the testing?"
        },
        {
         "type": "panel",
         "name": "IQtest2_age",
         "elements": [
          {
           "type": "text",
           "name": "IQtest2_age_years",
           "visibleIf": "{IQtest}=true",
           "title": "years",
           "validators": [
            {
             "type": "numeric",
             "minValue": 0,
             "maxValue": 99
            }
           ],
           "inputType": "number"
          },
          {
           "type": "text",
           "name": "IQtest2_age_months",
           "visibleIf": "{IQtest}=true",
           "title": "months",
           "validators": [
            {
             "type": "numeric",
             "minValue": 0,
             "maxValue": 12
            }
           ],
           "inputType": "number"
          }
         ],
         "visibleIf": "{IQtest}=true",
         "title": "Test 2. At what age was the testing done?"
        },
        {
         "type": "panel",
         "name": "IQtest2_result",
         "elements": [
          {
           "type": "text",
           "name": "IQtest2_result_IQ",
           "visibleIf": "{IQtest}=true",
           "title": "Total IQ (TIQ)",
           "inputType": "number"
          },
          {
           "type": "text",
           "name": "IQtest2_result_verbal_IQ",
           "visibleIf": "{IQtest}=true",
           "title": "Verbal IQ (VIQ)",
           "inputType": "number"
          },
          {
           "type": "text",
           "name": "IQtest2_result_performal_IQ",
           "visibleIf": "{IQtest}=true",
           "title": "Performal IQ (PIQ)",
           "inputType": "number"
          },
          {
           "type": "panel",
           "name": "IQtest2_result_age",
           "elements": [
            {
             "type": "text",
             "name": "IQtest2_result_age_years",
             "visibleIf": "{IQtest}=true",
             "title": "years",
             "validators": [
              {
               "type": "numeric",
               "minValue": 0,
               "maxValue": 99
              }
             ],
             "inputType": "number"
            },
            {
             "type": "text",
             "name": "IQtest2_result_age_months",
             "visibleIf": "{IQtest}=true",
             "title": "months",
             "validators": [
              {
               "type": "numeric",
               "minValue": 0,
               "maxValue": 12
              }
             ],
             "inputType": "number"
            }
           ],
           "visibleIf": "{IQtest}=true",
           "title": "Test 2. Developmental age"
          }
         ],
         "visibleIf": "{IQtest}=true",
         "title": "Test 2. What was the result of the testing?"
        },
        {
         "type": "panel",
         "name": "IQtest3_age",
         "elements": [
          {
           "type": "text",
           "name": "IQtest3_age_years",
           "visibleIf": "{IQtest}=true",
           "title": "years",
           "validators": [
            {
             "type": "numeric",
             "minValue": 0,
             "maxValue": 99
            }
           ],
           "inputType": "number"
          },
          {
           "type": "text",
           "name": "IQtest3_age_months",
           "visibleIf": "{IQtest}=true",
           "title": "months",
           "validators": [
            {
             "type": "numeric",
             "minValue": 0,
             "maxValue": 12
            }
           ],
           "inputType": "number"
          }
         ],
         "visibleIf": "{IQtest}=true",
         "title": "Test 3. At what age was the testing done?"
        },
        {
         "type": "panel",
         "name": "IQtest3_result",
         "elements": [
          {
           "type": "text",
           "name": "IQtest3_result_IQ",
           "visibleIf": "{IQtest}=true",
           "title": "Total IQ (TIQ)",
           "inputType": "number"
          },
          {
           "type": "text",
           "name": "IQtest3_result_verbal_IQ",
           "visibleIf": "{IQtest}=true",
           "title": "Verbal IQ (VIQ)",
           "inputType": "number"
          },
          {
           "type": "text",
           "name": "IQtest3_result_performal_IQ",
           "visibleIf": "{IQtest}=true",
           "title": "Performal IQ (PIQ)",
           "inputType": "number"
          },
          {
           "type": "panel",
           "name": "IQtest3_result_age",
           "elements": [
            {
             "type": "text",
             "name": "IQtest3_result_age_years",
             "visibleIf": "{IQtest}=true",
             "title": "years",
             "validators": [
              {
               "type": "numeric",
               "minValue": 0,
               "maxValue": 99
              }
             ],
             "inputType": "number"
            },
            {
             "type": "text",
             "name": "IQtest3_result_age_months",
             "visibleIf": "{IQtest}=true",
             "title": "months",
             "validators": [
              {
               "type": "numeric",
               "minValue": 0,
               "maxValue": 12
              }
             ],
             "inputType": "number"
            }
           ],
           "visibleIf": "{IQtest}=true",
           "title": "Test 3. Developmental age"
          }
         ],
         "visibleIf": "{IQtest}=true",
         "title": "Test 3. What was the result of the testing?"
        }
       ],
       "visibleIf": "{IQtest}=true",
       "title": "Results of the testing",
       "description": "You can indicate up to 3 tests. Please indicate at least the last test result."
      }
     ],
     "title": "I5) Developmental testing"
    },
    {
     "type": "panel",
     "name": "Toilet_training",
     "elements": [
      {
       "type": "radiogroup",
       "name": "Toilet_training_day",
       "title": "a. Is your child fully toilet trained (urine and defecation) during the day?",
       "choices": [
        {
         "value": "y",
         "text": "Yes"
        },
        {
         "value": "n",
         "text": "No"
        },
        {
         "value": "x",
         "text": "Not yet applicable because of age"
        }
       ]
      },
      {
       "type": "text",
       "name": "Toilet_training_day_age",
       "visibleIf": "{Toilet_training_day}='y'",
       "title": "Since what age (years)?",
       "validators": [
        {
         "type": "numeric",
         "minValue": 0,
         "maxValue": 99
        }
       ],
       "inputType": "number"
      },
      {
       "type": "radiogroup",
       "name": "Toilet_training_night",
       "title": "b. Is your child fully toilet trained (urine and defecation) during the night?",
       "choices": [
        {
         "value": "y",
         "text": "Yes"
        },
        {
         "value": "n",
         "text": "No"
        },
        {
         "value": "x",
         "text": "Not yet applicable because of age"
        }
       ]
      },
      {
       "type": "text",
       "name": "Toilet_training_night_age",
       "visibleIf": "{Toilet_training_night}='y'",
       "title": "Since what age (years)?",
       "validators": [
        {
         "type": "numeric",
         "minValue": 0,
         "maxValue": 99
        }
       ],
       "inputType": "number"
      }
     ],
     "title": "I6) Toilet training"
    },
    {
     "type": "panel",
     "name": "Adult_function",
     "elements": [
      {
       "type": "radiogroup",
       "name": "Adult_function_a",
       "visibleIf": "age({birthdate})>=18",
       "title": "a. Ability to use telephone",
       "choices": [
        {
         "value": "1",
         "text": "Operates telephone on own initiative; looks up and dials numbers"
        },
        {
         "value": "2",
         "text": "Dials a few well-known numbers"
        },
        {
         "value": "3",
         "text": "Answers telephone, but does not dial"
        },
        {
         "value": "4",
         "text": "Does not use telephone at all"
        }
       ]
      },
      {
       "type": "radiogroup",
       "name": "Adult_function_b",
       "visibleIf": "age({birthdate})>=18",
       "title": "b. Shopping",
       "choices": [
        {
         "value": "1",
         "text": "Takes care of all shopping needs independently"
        },
        {
         "value": "2",
         "text": "Shops independently for small purchases"
        },
        {
         "value": "3",
         "text": "Needs to be accompanied on any shopping trip"
        },
        {
         "value": "4",
         "text": "Completely unable to shop"
        }
       ]
      },
      {
       "type": "radiogroup",
       "name": "Adult_function_c",
       "visibleIf": "age({birthdate})>=18",
       "title": "c. Food preparation",
       "choices": [
        {
         "value": "1",
         "text": "Plans, prepares, and serves adequate meals independently"
        },
        {
         "value": "2",
         "text": "Prepares adequate meals if supplied with ingredients"
        },
        {
         "value": "3",
         "text": "Heats and serves prepared meals or prepares meals but does not maintain adequate diet"
        },
        {
         "value": "4",
         "text": "Needs to have meals prepared and served"
        }
       ]
      },
      {
       "type": "radiogroup",
       "name": "Adult_function_d",
       "visibleIf": "age({birthdate})>=18",
       "title": "d. Housekeeping",
       "choices": [
        {
         "value": "1",
         "text": "Maintains house alone with occasion assistance (heavy work)"
        },
        {
         "value": "2",
         "text": "Performs light daily tasks such as dishwashing, bed making"
        },
        {
         "value": "3",
         "text": "Performs light daily tasks, but cannot maintain acceptable level of cleanliness"
        },
        {
         "value": "4",
         "text": "Needs help with all home maintenance tasks"
        },
        {
         "value": "5",
         "text": "Does not participate in any housekeeping tasks"
        }
       ]
      },
      {
       "type": "radiogroup",
       "name": "Adult_function_e",
       "visibleIf": "age({birthdate})>=18",
       "title": "e. Laundry",
       "choices": [
        {
         "value": "1",
         "text": "Does personal laundry completely"
        },
        {
         "value": "2",
         "text": "Launders small items, rinses socks, stockings, etc"
        },
        {
         "value": "3",
         "text": "All laundry must be done by others"
        }
       ]
      },
      {
       "type": "radiogroup",
       "name": "Adult_function_f",
       "visibleIf": "age({birthdate})>=18",
       "title": "f. Mode of transportation",
       "choices": [
        {
         "value": "1",
         "text": "Travels independently on public transportation or drives own car"
        },
        {
         "value": "2",
         "text": "Arranges own travel via taxi, but does not otherwise use public transportation"
        },
        {
         "value": "3",
         "text": "Travels on public transportation when assisted or accompanied by another"
        },
        {
         "value": "4",
         "text": "Travel limited to taxi or automobile with assistance of another"
        },
        {
         "value": "5",
         "text": "Does not travel at all"
        }
       ]
      },
      {
       "type": "radiogroup",
       "name": "Adult_function_g",
       "visibleIf": "age({birthdate})>=18",
       "title": "g. Responsibility for own medications",
       "choices": [
        {
         "value": "1",
         "text": "Is responsible for taking medication in correct dosages at correct time"
        },
        {
         "value": "2",
         "text": "Takes responsibility if medication is prepared in advance in separate dosages"
        },
        {
         "value": "3",
         "text": "Is not capable of dispensing own medication"
        }
       ]
      },
      {
       "type": "radiogroup",
       "name": "Adult_function_h",
       "visibleIf": "age({birthdate})>=18",
       "title": "h. Ability to handle finances",
       "choices": [
        {
         "value": "1",
         "text": "Manages financial matters independently (budgets, writes checks, pays rent and bills, goes to bank); collects and keeps track of income"
        },
        {
         "value": "2",
         "text": "Manages day-to-day purchases, but needs help with banking, major purchases, etc"
        },
        {
         "value": "3",
         "text": "Incapable of handling money"
        }
       ]
      }
     ],
     "visibleIf": "age({birthdate})>=18",
     "title": "I7) Adult functioning level",
     "description": "For each category, circle the item description that most closely resembles the highest functioning level."
    }
   ],
   "title": "I. Development"
  },
  {
   "name": "Part_J",
   "elements": [
    {
     "type": "panel",
     "name": "Behaviour_questions",
     "elements": [
      {
       "type": "checkbox",
       "name": "behaviour",
       "title": "a. Please mark which behaviour describes your child best:",
       "choices": [
        {
         "value": "Quiet",
         "text": "Quiet"
        },
        {
         "value": "Withdrawn",
         "text": "Withdrawn"
        },
        {
         "value": "Shyness",
         "text": "Shy"
        },
        {
         "value": "Helpful",
         "text": "Helpful"
        },
        {
         "value": "Hyperactivity",
         "text": "Hyperactive"
        },
        {
         "value": "Aggressive_towards_others",
         "text": "Aggressive towards others"
        },
        {
         "value": "Aggressive_towards_self_outbursts_or_tantrums",
         "text": "Aggressive towards self (outbursts or tantrums)"
        },
        {
         "value": "Self-harming",
         "text": "Self-harming"
        },
        {
         "value": "Social",
         "text": "Social"
        },
        {
         "value": "Is_hard_to_make_good_contact_with",
         "text": "Is hard to make good contact with"
        },
        {
         "value": "Easily_upset",
         "text": "Easily upset"
        },
        {
         "value": "Other",
         "text": "Other"
        }
       ]
      },
      {
       "type": "boolean",
       "name": "behavioral_abnormality",
       "title": "b. Was there a behavioural diagnosis made by a (child) psychiatrist or psychologist?"
      },
      {
       "type": "checkbox",
       "name": "behavioral_abnormality1",
       "visibleIf": "{behavioral_abnormality}=true",
       "title": "Please specify",
       "choices": [
        {
         "value": "Attention_deficit_hyperactivity_disorder",
         "text": "Attention deficit hyperactivity disorder (ADHD)"
        },
        {
         "value": "short_attention_span",
         "text": "Attention deficit disorder (ADD)"
        },
        {
         "value": "obsessive_compulsive_behavior",
         "text": "Obsessive compulsive disorder (OCD)"
        },
        {
         "value": "tics",
         "text": "Tourette/tic disorder"
        },
        {
         "value": "Autistic_behavior",
         "text": "Autistic behaviour"
        },
        {
         "value": "Autism",
         "text": "Autistic disorder"
        },
        {
         "value": "noHPO",
         "text": "Other/do not know"
        }
       ]
      },
      {
       "type": "checkbox",
       "name": "behavioral_abnormality2",
       "visibleIf": "{behavioral_abnormality1} contains 'Autism' && {behavioral_abnormality}=true",
       "title": "Please specify the autistic disorder",
       "choices": [
        {
         "value": "Aspergers_syndrome",
         "text": "Asperger’s syndrome"
        },
        {
         "value": "Classical_autism",
         "text": "Classical autism"
        },
        {
         "value": "PDD-NOS",
         "text": "PDD-NOS"
        }
       ]
      },
      {
       "type": "boolean",
       "name": "mood_disorder",
       "title": "c. Does your child have a mood disorder?"
      },
      {
       "type": "checkbox",
       "name": "mood_disorder1",
       "visibleIf": "{mood_disorder}=true",
       "title": "Please specify",
       "choices": [
        {
         "value": "Anxiety",
         "text": "Anxiety"
        },
        {
         "value": "Depressive_disorder",
         "text": "Depressive disorder"
        },
        {
         "value": "Bipolar_disorder",
         "text": "Bi-polar"
        },
        {
         "value": "Post-traumatic_stress_syndrome_PTSS",
         "text": "Post-traumatic stress syndrome (PTSS)"
        }
       ]
      },
      {
       "type": "boolean",
       "name": "intervention_behavioural_prob",
       "title": "d. Was there an intervention done because of behavioural problems?"
      },
      {
       "type": "checkbox",
       "name": "intervention1",
       "visibleIf": "{intervention_behavioural_prob}=true",
       "title": "Please specify",
       "choices": [
        {
         "value": "1",
         "text": "Medication"
        },
        {
         "value": "2",
         "text": "Therapy"
        }
       ]
      },
      {
       "type": "boolean",
       "name": "sleeping_problems",
       "title": "e. Does your child have problems with sleeping?"
      },
      {
       "type": "checkbox",
       "name": "sleeping_problems1",
       "visibleIf": "{sleeping_problems}=true",
       "title": "What kind of sleeping problems?",
       "choices": [
        {
         "value": "insomnia",
         "text": "Problems falling asleep or waking up at night"
        },
        {
         "value": "Sleep_apnea",
         "text": "Sleep apnoea"
        },
        {
         "value": "Hypersomnia",
         "text": "Excessive sleeping"
        },
        {
         "value": "Excessive_daytime_sleepiness",
         "text": "Excessive daytime sleepiness"
        },
        {
         "value": "parasomnia",
         "text": "Nightmares or sleep walking"
        },
        {
         "value": "noHPO",
         "text": "Other/do not know"
        }
       ]
      },
      {
       "type": "boolean",
       "name": "sleeping_problems_meds",
       "visibleIf": "{sleeping_problems}=true",
       "title": "Was sleep medication prescribed?"
      }
     ],
     "title": "J1) Your child's behaviour"
    }
   ],
   "title": "J. Behaviour"
  },
  {
   "name": "Part_K",
   "elements": [
    {
     "type": "panel",
     "name": "Family_questions",
     "elements": [
      {
       "type": "radiogroup",
       "name": "family",
       "title": "a. Are there family members with the same chromosome abnormality?",
       "choices": [
        {
         "value": "y",
         "text": "Yes"
        },
        {
         "value": "n",
         "text": "No"
        },
        {
         "value": "u",
         "text": "Unsure"
        }
       ]
      },
      {
       "type": "checkbox",
       "name": "family1",
       "visibleIf": "{family}='y'",
       "title": "Who is this family member?",
       "choices": [
        {
         "value": "1",
         "text": "Father"
        },
        {
         "value": "2",
         "text": "Mother"
        },
        {
         "value": "3",
         "text": "Brother(s) and/or sister(s)"
        },
        {
         "value": "other_family_member",
         "text": "Other"
        }
       ]
      },
      {
       "type": "checkbox",
       "name": "family2",
       "visibleIf": "{family}='y'",
       "title": "Do these family members want to participate?",
       "choices": [
        {
         "value": "1",
         "text": "Yes, questionnaire has already been filled in"
        },
        {
         "value": "2",
         "text": "Yes, questionnaire will be filled in"
        },
        {
         "value": "3",
         "text": "No, we do not want to fill in a questionnaire because the family member with the chromosome abnormality is completely healthy"
        },
        {
         "value": "4",
         "text": "No, we do not want to fill in a questionnaire for other reasons"
        }
       ]
      },
      {
       "type": "boolean",
       "name": "family_not_related",
       "title": "b. Does one of the medical problems that you have described in the questionnaire run in the family and might thus NOT be related to your child's chromosome 6 abnormality?"
      },
      {
       "type": "text",
       "name": "family_not_related1",
       "visibleIf": "{family_not_related}=true",
       "title": "If yes, please describe below",
       "validators": [
        {
         "type": "text",
         "minLength": 0,
         "maxLength": 255,
         "allowDigits": true
        }
       ]
      }
     ],
     "title": "K1) Family"
    }
   ],
   "title": "K. Family"
  },
  {
   "name": "Part_L",
   "elements": [
    {
     "type": "panel",
     "name": "Comment_question",
     "elements": [
      {
       "type": "comment",
       "name": "comments",
       "title": "If you have comments on this questionnaire, for example if you think there is a question missing or if you want to add something to your answers, please write it down here.",
       "validators": [
        {
         "type": "text",
         "minLength": 0,
         "maxLength": 65535,
         "allowDigits": true
        }
       ]
      }
     ],
     "title": "L1) Comments"
    },
    {
     "type": "radiogroup",
     "name": "status",
     "visible": false,
     "title": "status",
     "isRequired": true,
     "validators": [
      {
       "type": "text",
       "minLength": 0,
       "maxLength": 255,
       "allowDigits": true
      }
     ],
     "choices": [
      {
       "value": "NOT_STARTED",
       "text": "NOT_STARTED"
      },
      {
       "value": "OPEN",
       "text": "OPEN"
      },
      {
       "value": "SUBMITTED",
       "text": "SUBMITTED"
      }
     ]
    },
    {
     "type": "text",
     "name": "owner",
     "title": "owner",
     "isRequired": true,
     "validators": [
      {
       "type": "text",
       "minLength": 0,
       "maxLength": 255,
       "allowDigits": true
      }
     ]
    },
    {
     "type": "text",
     "name": "submitDate",
     "visibleIf": "{status}='SUBMITTED'",
     "title": "Submit date",
     "inputType": "datetime"
    }
   ],
   "title": "L. Comments"
  }
 ],
 "showProgressBar": "top",
 "checkErrorsMode": "onValueChanged"
}
    
    //Create the model and pass it into VueSJ Survey component
    var model = new SurveyVue.Model(json)
    //You may set model properties
    // model.mode="display"

    return {
        survey: model
    }
  }
}
</script>
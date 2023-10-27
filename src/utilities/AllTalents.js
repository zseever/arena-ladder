import { FuryTalents } from "./FuryTalents";
import { ArmsTalents } from "./ArmsTalents";
import { ProtectionTalents } from "./ProtectionTalents";

export const AllTalents = {
    'warrior': {
        'specializations':['arms','fury','protection'],
        'arms': ArmsTalents,
        'fury': FuryTalents,
        'protection': ProtectionTalents
    },
    'druid': {
        'specializations':['balance','feral','restoration'],
        'balance': {},
        'feral': {},
        'restoration': {}
    },
    'deathknight': {
        'specializations':['blood','frost','unholy'],
        'blood': {},
        'frost': {},
        'unholy': {}
    },
    'paladin': {
        'specializations':['holy','protection','retribution'],
        'holy': {},
        'protection': {},
        'retribution': {}
    },
    'priest': {
        'specializations':['discipline','holy','shadow'],
        'discipline': {},
        'holy': {},
        'shadow': {}
    },
    'hunter': {
        'specializations':['beast mastery','marksmanship','survival'],
        'beast mastery': {},
        'marksmanship': {},
        'survival': {}
    },
    'rogue': {
        'specializations':['assassination','combat','subtlety'],
        'assassination': {},
        'combat': {},
        'subtlety': {}
    },
    'mage': {
        'specializations':['arcane','fire','frost'],
        'arcane': {},
        'frost': {},
        'fire': {}
    },
    'warlock': {
        'specializations':['affliction','demonology','destruction'],
        'affliction': {},
        'demonology': {},
        'destruction': {}
    },
    'shaman': {
        'specializations':['elemental','enhancement','restoration'],
        'elemental': {},
        'enhancement': {},
        'restoration': {}
    }

}
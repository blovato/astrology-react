import { SIGNS } from "../../constants";
import { AriesSymbol } from "./AriesSymbol";
import { TaurusSymbol } from "./TaurusSymbol";
import { GeminiSymbol } from "./GeminiSymbol";
import { CancerSymbol } from "./CancerSymbol";
import { LeoSymbol } from "./LeoSymbol";
import { VirgoSymbol } from "./VirgoSymbol";
import { LibraSymbol } from "./LibraSymbol";
import { ScorpioSymbol } from "./ScorpioSymbol";
import { SagittariusSymbol } from "./SagittariusSymbol";
import { CapricornSymbol } from "./CapricornSymbol";
import { AquariusSymbol } from "./AquariusSymbol";
import { PiscesSymbol } from "./PiscesSymbol";

export const renderSignSymbol = (signKey: string) => (symbolProps: React.SVGProps<SVGSVGElement>) => {
  switch (signKey) {
    case SIGNS.aries.key:
      return <AriesSymbol {...symbolProps} />;
    case SIGNS.taurus.key:
      return <TaurusSymbol {...symbolProps} />;
    case SIGNS.gemini.key:
      return <GeminiSymbol {...symbolProps} />;
    case SIGNS.cancer.key:
      return <CancerSymbol {...symbolProps} />;
    case SIGNS.leo.key:
      return <LeoSymbol {...symbolProps} />;
    case SIGNS.virgo.key:
      return <VirgoSymbol {...symbolProps} />;
    case SIGNS.libra.key:
      return <LibraSymbol {...symbolProps} />;
    case SIGNS.scorpio.key:
      return <ScorpioSymbol {...symbolProps} />;
    case SIGNS.sagittarius.key:
      return <SagittariusSymbol {...symbolProps} />;
    case SIGNS.capricorn.key:
      return <CapricornSymbol {...symbolProps} />;
    case SIGNS.aquarius.key:
      return <AquariusSymbol {...symbolProps} />;
    case SIGNS.pisces.key:
      return <PiscesSymbol {...symbolProps} />;
    default:
      return null;
  }
} 
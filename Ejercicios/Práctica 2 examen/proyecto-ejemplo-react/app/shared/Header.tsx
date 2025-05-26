import AppActionButton from "./AppActionButton";
import OnOffButton from "./OnOffButton";

export default function Header() {
  return (
    <header>
        <div>
            <span id="taskCounter"><b>6</b> Tasks</span>
            <div id="taskdate">
                <b>Jueves</b> 27, <br/><span>Febrero</span>
            </div>
            <AppActionButton/>
            <OnOffButton/>
        </div>
    </header>
    );
}
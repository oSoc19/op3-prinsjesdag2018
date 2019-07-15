/* eslint-disable */

import queryString from "query-string";

const baseUrl = "https://sb.scorecardresearch.com/b";

const defaultParameters = {
  c1: "2",
  c2: "17827132",
  potag1: "nosop3",
  potag2: "nosop3",
  potag3: "nos",
  potag4: "nos",
  potag5: "programma",
  potag6: "video",
  potag7: "npo3",
  potag8: "site",
  potag9: "site",
  nos_project: "nos-labs",
  nos_event: "migraine",
  ns_site: "po-totaal"
};

export default function track(parameters) {
  const fullParameters = Object.assign({}, defaultParameters, parameters);

  const url = `${baseUrl}?${queryString.stringify(fullParameters)}`;

  // @TODO reinstate this after comscore tracker has been installed
  window.udm_(url)
}

export function trackChapter(chapter) {
  track({
    name: `labs.op3.longread.2018.07.${chapter}`,
    nos_title: chapter,
    nos_labs_section: chapter
  });
}

export interface AnimeFull {
    data: Data;
}

export interface Data {
    mal_id:          number;
    url:             string;
    images:          { [key: string]: Image };
    trailer:         Trailer;
    approved:        boolean;
    titles:          Title[];
    title:           string;
    title_english:   null;
    title_japanese:  string;
    title_synonyms:  any[];
    type:            string;
    source:          string;
    episodes:        null;
    status:          string;
    airing:          boolean;
    aired:           Aired;
    duration:        string;
    rating:          null;
    score:           null;
    scored_by:       null;
    rank:            null;
    popularity:      number;
    members:         number;
    favorites:       number;
    synopsis:        string;
    background:      null;
    season:          string;
    year:            number;
    broadcast:       Broadcast;
    producers:       Producer[];
    licensors:       any[];
    studios:         Producer[];
    genres:          any[];
    explicit_genres: any[];
    themes:          Producer[];
    demographics:    any[];
    relations:       Relation[];
    theme:           Theme;
    external:        any[];
    streaming:       any[];
}

export interface Aired {
    from:   string;
    to:     null;
    prop:   Prop;
    string: string;
}

export interface Prop {
    from: From;
    to:   From;
}

export interface From {
    day:   number | null;
    month: number | null;
    year:  number | null;
}

export interface Broadcast {
    day:      string;
    time:     string;
    timezone: string;
    string:   string;
}

export interface Image {
    image_url:       string;
    small_image_url: string;
    large_image_url: string;
}

export interface Producer {
    mal_id: number;
    type:   string;
    name:   string;
    url:    string;
}

export interface Relation {
    relation: string;
    entry:    Producer[];
}

export interface Theme {
    openings: string[];
    endings:  any[];
}

export interface Title {
    type:  string;
    title: string;
}

export interface Trailer {
    youtube_id: string;
    url:        string;
    embed_url:  string;
    images:     Images;
}

export interface Images {
    image_url:         string;
    small_image_url:   string;
    medium_image_url:  string;
    large_image_url:   string;
    maximum_image_url: string;
}

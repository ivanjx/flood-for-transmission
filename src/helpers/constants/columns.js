export const TRANSMISSION_COLUMN_ADDED = 'addedDate';
export const TRANSMISSION_COLUMN_COMMENT = 'comment';
export const TRANSMISSION_COLUMN_CREATED = 'dateCreated';
export const TRANSMISSION_COLUMN_DONE = 'doneDate';
export const TRANSMISSION_COLUMN_DOWNLOAD_DIR = 'downloadDir';
export const TRANSMISSION_COLUMN_DOWNLOAD_PROGRESS = 'percentDone';
export const TRANSMISSION_COLUMN_DOWNLOAD_RATE = 'rateDownload';
export const TRANSMISSION_COLUMN_DOWNLOADED = 'downloadedEver';
export const TRANSMISSION_COLUMN_DOWNLOADING_FROM = 'peersSendingToUs';
export const TRANSMISSION_COLUMN_ERROR = 'error';
export const TRANSMISSION_COLUMN_ERROR_STRING = 'errorString';
export const TRANSMISSION_COLUMN_ETA = 'eta';
export const TRANSMISSION_COLUMN_HASH = 'hashString';
export const TRANSMISSION_COLUMN_ID = 'id';
export const TRANSMISSION_COLUMN_LABELS = 'labels';
export const TRANSMISSION_COLUMN_METADATA_PROGRESS = 'metadataPercentComplete';
export const TRANSMISSION_COLUMN_NAME = 'name';
export const TRANSMISSION_COLUMN_PEERS = 'peers';
export const TRANSMISSION_COLUMN_PEERS_CONNECTED = 'peersConnected';
export const TRANSMISSION_COLUMN_PRIORITY = 'bandwidthPriority';
export const TRANSMISSION_COLUMN_PRIVATE = 'isPrivate';
export const TRANSMISSION_COLUMN_RATIO = 'uploadRatio';
export const TRANSMISSION_COLUMN_RECHECK_PROGRESS = 'recheckProgress';
export const TRANSMISSION_COLUMN_SEEDING_TO = 'peersGettingFromUs';
export const TRANSMISSION_COLUMN_SIZE = 'sizeWhenDone';
export const TRANSMISSION_COLUMN_STATUS = 'status';
export const TRANSMISSION_COLUMN_TRACKERS = 'trackers';
export const TRANSMISSION_COLUMN_UPLOAD_RATE = 'rateUpload';
export const TRANSMISSION_COLUMN_UPLOADED = 'uploadedEver';
export const TRANSMISSION_COLUMN_FILES = 'files';
export const TRANSMISSION_COLUMN_FILE_STATS = 'fileStats';

export const TRANSMISSION_COLUMN = {
  ADDED: TRANSMISSION_COLUMN_ADDED,
  COMMENT: TRANSMISSION_COLUMN_COMMENT,
  CREATED: TRANSMISSION_COLUMN_CREATED,
  DONE: TRANSMISSION_COLUMN_DONE,
  DOWNLOAD_DIR: TRANSMISSION_COLUMN_DOWNLOAD_DIR,
  DOWNLOAD_PROGRESS: TRANSMISSION_COLUMN_DOWNLOAD_PROGRESS,
  DOWNLOAD_RATE: TRANSMISSION_COLUMN_DOWNLOAD_RATE,
  DOWNLOADED: TRANSMISSION_COLUMN_DOWNLOADED,
  DOWNLOADING_FROM: TRANSMISSION_COLUMN_DOWNLOADING_FROM,
  ERROR_STRING: TRANSMISSION_COLUMN_ERROR_STRING,
  ERROR: TRANSMISSION_COLUMN_ERROR,
  ETA: TRANSMISSION_COLUMN_ETA,
  HASH: TRANSMISSION_COLUMN_HASH,
  ID: TRANSMISSION_COLUMN_ID,
  LABELS: TRANSMISSION_COLUMN_LABELS,
  METADATA_PROGRESS: TRANSMISSION_COLUMN_METADATA_PROGRESS,
  NAME: TRANSMISSION_COLUMN_NAME,
  PEERS: TRANSMISSION_COLUMN_PEERS,
  PEERS_CONNECTED: TRANSMISSION_COLUMN_PEERS_CONNECTED,
  PRIORITY: TRANSMISSION_COLUMN_PRIORITY,
  PRIVATE: TRANSMISSION_COLUMN_PRIVATE,
  RATIO: TRANSMISSION_COLUMN_RATIO,
  RECHECK_PROGRESS: TRANSMISSION_COLUMN_RECHECK_PROGRESS,
  SEEDING_TO: TRANSMISSION_COLUMN_SEEDING_TO,
  SIZE: TRANSMISSION_COLUMN_SIZE,
  STATUS: TRANSMISSION_COLUMN_STATUS,
  TRACKERS: TRANSMISSION_COLUMN_TRACKERS,
  UPLOAD_RATE: TRANSMISSION_COLUMN_UPLOAD_RATE,
  UPLOADED: TRANSMISSION_COLUMN_UPLOADED,
  FILES: TRANSMISSION_COLUMN_FILES,
  FILE_STATS: TRANSMISSION_COLUMN_FILE_STATS,
};

export const SESSION_COLUMN_ALT_SPEED_DOWN = 'alt-speed-down';
export const SESSION_COLUMN_ALT_SPEED_ENABLED = 'alt-speed-enabled';
export const SESSION_COLUMN_ALT_SPEED_TIME_BEGIN = 'alt-speed-time-begin';
export const SESSION_COLUMN_ALT_SPEED_TIME_ENABLED = 'alt-speed-time-enabled';
export const SESSION_COLUMN_ALT_SPEED_TIME_END = 'alt-speed-time-end';
export const SESSION_COLUMN_ALT_SPEED_UP = 'alt-speed-up';
export const SESSION_COLUMN_BLOCKLIST_ENABLED = 'blocklist-enabled';
export const SESSION_COLUMN_BLOCKLIST_SIZE = 'blocklist-size';
export const SESSION_COLUMN_BLOCKLIST_URL = 'blocklist-url';
export const SESSION_COLUMN_DHT_ENABLED = 'dht-enabled';
export const SESSION_COLUMN_DOWNLOAD_DIR = 'download-dir';
export const SESSION_COLUMN_IDLE_SEEDING_LIMIT = 'idle-seeding-limit';
export const SESSION_COLUMN_IDLE_SEEDING_LIMIT_ENABLED =
  'idle-seeding-limit-enabled';
export const SESSION_COLUMN_LPD_ENABLED = 'lpd-enabled';
export const SESSION_COLUMN_PEER_LIMIT_GLOBAL = 'peer-limit-global';
export const SESSION_COLUMN_PEER_LIMIT_PER_TORRENT = 'peer-limit-per-torrent';
export const SESSION_COLUMN_PEER_PORT = 'peer-port';
export const SESSION_COLUMN_PEER_PORT_RANDOM_ON_START =
  'peer-port-random-on-start';
export const SESSION_COLUMN_PEX_ENABLED = 'pex-enabled';
export const SESSION_COLUMN_PORT_FORWARDING_ENABLED = 'port-forwarding-enabled';
export const SESSION_COLUMN_RENAME_PARTIAL_FILES = 'rename-partial-files';
export const SESSION_COLUMN_SEED_RATIO_LIMIT = 'seedRatioLimit';
export const SESSION_COLUMN_SEED_RATIO_LIMITED = 'seedRatioLimited';
export const SESSION_COLUMN_SPEED_LIMIT_DOWN = 'speed-limit-down';
export const SESSION_COLUMN_SPEED_LIMIT_DOWN_ENABLED =
  'speed-limit-down-enabled';
export const SESSION_COLUMN_SPEED_LIMIT_UP = 'speed-limit-up';
export const SESSION_COLUMN_SPEED_LIMIT_UP_ENABLED = 'speed-limit-up-enabled';
export const SESSION_COLUMN_START_ADDED = 'start-added-torrents';
export const SESSION_COLUMN_UNITS = 'units';
export const SESSION_COLUMN_UNITS_SIZE = 'size-bytes';
export const SESSION_COLUMN_UNITS_SPEED = 'speed-bytes';
export const SESSION_COLUMN_UTP_ENABLED = 'utp-enabled';

export const SESSION_COLUMN = {
  ALT_SPEED_DOWN: SESSION_COLUMN_ALT_SPEED_DOWN,
  ALT_SPEED_ENABLED: SESSION_COLUMN_ALT_SPEED_ENABLED,
  ALT_SPEED_TIME_BEGIN: SESSION_COLUMN_ALT_SPEED_TIME_BEGIN,
  ALT_SPEED_TIME_ENABLED: SESSION_COLUMN_ALT_SPEED_TIME_ENABLED,
  ALT_SPEED_TIME_END: SESSION_COLUMN_ALT_SPEED_TIME_END,
  ALT_SPEED_UP: SESSION_COLUMN_ALT_SPEED_UP,
  BLOCKLIST_ENABLED: SESSION_COLUMN_BLOCKLIST_ENABLED,
  BLOCKLIST_SIZE: SESSION_COLUMN_BLOCKLIST_SIZE,
  BLOCKLIST_URL: SESSION_COLUMN_BLOCKLIST_URL,
  DHT_ENABLED: SESSION_COLUMN_DHT_ENABLED,
  DOWNLOAD_DIR: SESSION_COLUMN_DOWNLOAD_DIR,
  IDLE_SEEDING_LIMIT_ENABLED: SESSION_COLUMN_IDLE_SEEDING_LIMIT_ENABLED,
  IDLE_SEEDING_LIMIT: SESSION_COLUMN_IDLE_SEEDING_LIMIT,
  LPD_ENABLED: SESSION_COLUMN_LPD_ENABLED,
  PEER_LIMIT_GLOBAL: SESSION_COLUMN_PEER_LIMIT_GLOBAL,
  PEER_LIMIT_PER_TORRENT: SESSION_COLUMN_PEER_LIMIT_PER_TORRENT,
  PEER_PORT_RANDOM_ON_START: SESSION_COLUMN_PEER_PORT_RANDOM_ON_START,
  PEER_PORT: SESSION_COLUMN_PEER_PORT,
  PEX_ENABLED: SESSION_COLUMN_PEX_ENABLED,
  PORT_FORWARDING_ENABLED: SESSION_COLUMN_PORT_FORWARDING_ENABLED,
  RENAME_PARTIAL_FILES: SESSION_COLUMN_RENAME_PARTIAL_FILES,
  SEED_RATIO_LIMIT: SESSION_COLUMN_SEED_RATIO_LIMIT,
  SEED_RATIO_LIMITED: SESSION_COLUMN_SEED_RATIO_LIMITED,
  SPEED_LIMIT_DOWN_ENABLED: SESSION_COLUMN_SPEED_LIMIT_DOWN_ENABLED,
  SPEED_LIMIT_DOWN: SESSION_COLUMN_SPEED_LIMIT_DOWN,
  SPEED_LIMIT_UP_ENABLED: SESSION_COLUMN_SPEED_LIMIT_UP_ENABLED,
  SPEED_LIMIT_UP: SESSION_COLUMN_SPEED_LIMIT_UP,
  START_ADDED: SESSION_COLUMN_START_ADDED,
  UNITS_SIZE: SESSION_COLUMN_UNITS_SIZE,
  UNITS_SPEED: SESSION_COLUMN_UNITS_SPEED,
  UNITS: SESSION_COLUMN_UNITS,
  UTP_ENABLED: SESSION_COLUMN_UTP_ENABLED,
};

export const UI_COLUMN_ADDED = 'Added';
export const UI_COLUMN_BASE_PATH = 'Base Path';
export const UI_COLUMN_COMMENT = 'Comment';
export const UI_COLUMN_CREATION_DATE = 'Creation Date';
export const UI_COLUMN_DONE = 'Done';
export const UI_COLUMN_DOWNLOAD_SPEED = 'Download Speed';
export const UI_COLUMN_DOWNLOADED = 'Downloaded';
export const UI_COLUMN_ERROR = 'Error';
export const UI_COLUMN_ETA = 'ETA';
export const UI_COLUMN_FILE_SIZE = 'File Size';
export const UI_COLUMN_HASH = 'Hash';
export const UI_COLUMN_LABELS = 'Labels';
export const UI_COLUMN_NAME = 'Name';
export const UI_COLUMN_PEERS = 'Peers';
export const UI_COLUMN_PERCENT_COMPLETE = 'Percent Complete';
export const UI_COLUMN_PRIVATE = 'Private';
export const UI_COLUMN_RATIO = 'Ratio';
export const UI_COLUMN_SEEDS = 'Seeds';
export const UI_COLUMN_TRACKERS = 'Trackers';
export const UI_COLUMN_UPLOAD_SPEED = 'Upload Speed';
export const UI_COLUMN_UPLOADED = 'Uploaded';

export const UI_COLUMN = {
  ADDED: UI_COLUMN_ADDED,
  BASE_PATH: UI_COLUMN_BASE_PATH,
  COMMENT: UI_COLUMN_COMMENT,
  CREATION_DATE: UI_COLUMN_CREATION_DATE,
  DONE: UI_COLUMN_DONE,
  DOWNLOAD_SPEED: UI_COLUMN_DOWNLOAD_SPEED,
  DOWNLOADED: UI_COLUMN_DOWNLOADED,
  ERROR: UI_COLUMN_ERROR,
  ETA: UI_COLUMN_ETA,
  FILE_SIZE: UI_COLUMN_FILE_SIZE,
  HASH: UI_COLUMN_HASH,
  LABELS: UI_COLUMN_LABELS,
  NAME: UI_COLUMN_NAME,
  PEERS: UI_COLUMN_PEERS,
  PERCENT_COMPLETE: UI_COLUMN_PERCENT_COMPLETE,
  PRIVATE: UI_COLUMN_PRIVATE,
  RATIO: UI_COLUMN_RATIO,
  SEEDS: UI_COLUMN_SEEDS,
  TRACKERS: UI_COLUMN_TRACKERS,
  UPLOAD_SPEED: UI_COLUMN_UPLOAD_SPEED,
  UPLOADED: UI_COLUMN_UPLOADED,
};

export const DEFAULT_COLUMNS = [
  {
    name: UI_COLUMN.NAME,
    enabled: true,
    width: 600,
  },
  {
    name: UI_COLUMN.PERCENT_COMPLETE,
    enabled: true,
    width: 300,
  },
  {
    name: UI_COLUMN.ETA,
    enabled: true,
    width: 100,
  },
  {
    name: UI_COLUMN.DOWNLOAD_SPEED,
    enabled: true,
    width: 100,
  },
  {
    name: UI_COLUMN.UPLOAD_SPEED,
    enabled: true,
    width: 100,
  },
  {
    name: UI_COLUMN.FILE_SIZE,
    enabled: true,
    width: 100,
  },
  {
    name: UI_COLUMN.DOWNLOADED,
    enabled: true,
    width: 100,
  },
  {
    name: UI_COLUMN.UPLOADED,
    enabled: true,
    width: 100,
  },
  {
    name: UI_COLUMN.PEERS,
    enabled: true,
    width: 100,
  },
  {
    name: UI_COLUMN.SEEDS,
    enabled: true,
    width: 100,
  },
  {
    name: UI_COLUMN.ADDED,
    enabled: false,
    width: 100,
  },
  {
    name: UI_COLUMN.BASE_PATH,
    enabled: false,
    width: 100,
  },
  {
    name: UI_COLUMN.COMMENT,
    enabled: false,
    width: 100,
  },
  {
    name: UI_COLUMN.CREATION_DATE,
    enabled: false,
    width: 100,
  },
  {
    name: UI_COLUMN.HASH,
    enabled: false,
    width: 100,
  },
  {
    name: UI_COLUMN.PRIVATE,
    enabled: false,
    width: 100,
  },
  {
    name: UI_COLUMN.LABELS,
    enabled: false,
    width: 100,
  },
  {
    name: UI_COLUMN.ERROR,
    enabled: false,
    width: 100,
  },
  {
    name: UI_COLUMN.TRACKERS,
    enabled: false,
    width: 100,
  },
  {
    name: UI_COLUMN.RATIO,
    enabled: false,
    width: 100,
  },
  {
    name: UI_COLUMN.DONE,
    enabled: false,
    width: 100,
  },
];
export const TRANSMISSION_BASE_COLUMNS = [
  TRANSMISSION_COLUMN.ID,
  TRANSMISSION_COLUMN.NAME,
  TRANSMISSION_COLUMN.ERROR,
  TRANSMISSION_COLUMN.DOWNLOAD_PROGRESS,
  TRANSMISSION_COLUMN.METADATA_PROGRESS,
  TRANSMISSION_COLUMN.LABELS,
  TRANSMISSION_COLUMN.PRIORITY,
  TRANSMISSION_COLUMN.TRACKERS,
];
export const COLUMN_MAP = {
  [UI_COLUMN.ADDED]: [TRANSMISSION_COLUMN.ADDED],
  [UI_COLUMN.BASE_PATH]: [TRANSMISSION_COLUMN.DOWNLOAD_DIR],
  [UI_COLUMN.COMMENT]: [TRANSMISSION_COLUMN.COMMENT],
  [UI_COLUMN.CREATION_DATE]: [TRANSMISSION_COLUMN.CREATED],
  [UI_COLUMN.DONE]: [TRANSMISSION_COLUMN.DONE],
  [UI_COLUMN.DOWNLOAD_SPEED]: [TRANSMISSION_COLUMN.DOWNLOAD_RATE],
  [UI_COLUMN.DOWNLOADED]: [TRANSMISSION_COLUMN.DOWNLOADED],
  [UI_COLUMN.ETA]: [TRANSMISSION_COLUMN.ETA],
  [UI_COLUMN.FILE_SIZE]: [TRANSMISSION_COLUMN.SIZE],
  [UI_COLUMN.HASH]: [TRANSMISSION_COLUMN.HASH],
  [UI_COLUMN.NAME]: [TRANSMISSION_COLUMN.NAME],
  [UI_COLUMN.PEERS]: [
    TRANSMISSION_COLUMN.DOWNLOADING_FROM,
    TRANSMISSION_COLUMN.PEERS_CONNECTED,
  ],
  [UI_COLUMN.PERCENT_COMPLETE]: [
    TRANSMISSION_COLUMN.DOWNLOAD_PROGRESS,
    TRANSMISSION_COLUMN.METADATA_PROGRESS,
    TRANSMISSION_COLUMN.RECHECK_PROGRESS,
    TRANSMISSION_COLUMN.STATUS,
  ],
  [UI_COLUMN.PRIVATE]: [TRANSMISSION_COLUMN.PRIVATE],
  [UI_COLUMN.RATIO]: [TRANSMISSION_COLUMN.RATIO],
  [UI_COLUMN.SEEDS]: [
    TRANSMISSION_COLUMN.SEEDING_TO,
    TRANSMISSION_COLUMN.PEERS_CONNECTED,
  ],
  [UI_COLUMN.LABELS]: [TRANSMISSION_COLUMN.LABELS],
  [UI_COLUMN.ERROR]: [TRANSMISSION_COLUMN.ERROR_STRING],
  [UI_COLUMN.TRACKERS]: [TRANSMISSION_COLUMN.TRACKERS],
  [UI_COLUMN.UPLOAD_SPEED]: [TRANSMISSION_COLUMN.UPLOAD_RATE],
  [UI_COLUMN.UPLOADED]: [TRANSMISSION_COLUMN.UPLOADED],
};

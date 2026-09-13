## Database Sizing Guide
A. Check Collection Stats
db.users.stats()

Fields:
- storageSize
- totalIndexSize
- avgObjSize
- count

Example Running the command in the MongoDB 'BasicDB'
<img width="1363" height="455" alt="image" src="https://github.com/user-attachments/assets/b891833a-2168-4998-8fb4-0e606005b43a" />

Example output:

```
{
  ok: 1,
  capped: false,
  wiredTiger: {
    metadata: { formatVersion: 1 },
    creationString: 'access_pattern_hint=none,allocation_size=4KB,app_metadata=(formatVersion=1),assert=(commit_timestamp=none,durable_timestamp=none,read_timestamp=none,write_timestamp=off),block_allocation=best,block_compressor=snappy,cache_resident=false,checksum=on,colgroups=,collator=,columns=,dictionary=0,encryption=(keyid=,name=),exclusive=false,extractor=,format=btree,huffman_key=,huffman_value=,ignore_in_memory_cache_size=false,immutable=false,import=(compare_timestamp=oldest_timestamp,enabled=false,file_metadata=,metadata_file=,panic_corrupt=true,repair=false),internal_item_max=0,internal_key_max=0,internal_key_truncate=true,internal_page_max=4KB,key_format=q,key_gap=10,leaf_item_max=0,leaf_key_max=0,leaf_page_max=32KB,leaf_value_max=64MB,log=(enabled=true),lsm=(auto_throttle=,bloom=,bloom_bit_count=,bloom_config=,bloom_hash_count=,bloom_oldest=,chunk_count_limit=,chunk_max=,chunk_size=,merge_custom=(prefix=,start_generation=,suffix=),merge_max=,merge_min=),memory_page_image_max=0,memory_page_max=10m,os_cache_dirty_max=0,os_cache_max=0,prefix_compression=false,prefix_compression_min=4,source=,split_deepen_min_child=0,split_deepen_per_child=0,split_pct=90,tiered_storage=(auth_token=,bucket=,bucket_prefix=,cache_directory=,local_retention=300,name=,object_target_size=0),type=file,value_format=u,verbose=[],write_timestamp_usage=none',
    type: 'file',
    uri: 'statistics:table:collection-574255f8-7796-40be-98f2-895d4a73cf36',
    version: 'WiredTiger 12.0.0: (November 15, 2024)',
    autocommit: {
      'retries for readonly operations': 0,
      'retries for update operations': 0
    },
    backup: {
      'total modified incremental blocks with compressed data': 0,
      'total modified incremental blocks without compressed data': 0
    },
    'block-disagg': {
      'Bytes read from the shared history store in SLS': 0,
      'Bytes written to the shared history store in SLS': 0,
      'Disaggregated block manager get': 0,
      'Disaggregated block manager get from the shared history store in SLS': 0,
      'Disaggregated block manager put ': 0,
      'Disaggregated block manager put to the shared history store in SLS': 0
    },
    'block-manager': {
      'allocations requiring file extension': 0,
      'blocks allocated': 0,
      'blocks freed': 0,
      'checkpoint size': 4096,
      'file allocation unit size': 4096,
      'file bytes available for reuse': 0,
      'file magic number': 120897,
      'file major version number': 1,
      'file size in bytes': 20480,
      'minor version number': 0
    },
    btree: {
      'btree checkpoint generation': 3,
      'btree clean tree checkpoint expiration time': Long('9223372036854775807'),
      'btree compact pages reviewed': 0,
      'btree compact pages rewritten': 0,
      'btree compact pages skipped': 0,
      'btree expected number of compact bytes rewritten': 0,
      'btree expected number of compact pages rewritten': 0,
      'btree number of pages reconciled during checkpoint': 0,
      'btree skipped by compaction as process would not reduce size': 0,
      'column-store fixed-size leaf pages': 0,
      'column-store fixed-size time windows': 0,
      'column-store internal pages': 0,
      'column-store variable-size RLE encoded values': 0,
      'column-store variable-size deleted values': 0,
      'column-store variable-size leaf pages': 0,
      'fixed-record size': 0,
      'maximum internal page size': 4096,
      'maximum leaf page key size': 2867,
      'maximum leaf page size': 32768,
      'maximum leaf page value size': 67108864,
      'maximum tree depth': 0,
      'number of key/value pairs': 0,
      'overflow pages': 0,
      'row-store empty values': 0,
      'row-store internal pages': 0,
      'row-store leaf pages': 0
    },
    cache: {
      'application threads eviction requested with cache fill ratio < 25%': 0,
      'application threads eviction requested with cache fill ratio >= 25% and < 50%': 0,
      'application threads eviction requested with cache fill ratio >= 50% and < 75%': 0,
      'application threads eviction requested with cache fill ratio >= 75%': 0,
      'bytes currently in the cache': 878,
      'bytes dirty in the cache cumulative': 0,
      'bytes read into cache': 694,
      'bytes written from cache': 0,
      'checkpoint blocked page eviction': 0,
      'checkpoint of history store file blocked non-history store page eviction': 0,
      'data source pages selected for eviction unable to be evicted': 0,
      'eviction gave up due to detecting a disk value without a timestamp behind the last update on the chain': 0,
      'eviction gave up due to detecting a tombstone without a timestamp ahead of the selected on disk update': 0,
      'eviction gave up due to detecting a tombstone without a timestamp ahead of the selected on disk update after validating the update chain': 0,
      'eviction gave up due to detecting update chain entries without timestamps after the selected on disk update': 0,
      'eviction gave up due to needing to remove a record from the history store but checkpoint is running': 0,
      'eviction gave up due to no progress being made': 0,
      'eviction walk pages queued that had updates': 0,
      'eviction walk pages queued that were clean': 0,
      'eviction walk pages queued that were dirty': 0,
      'eviction walk pages seen that had updates': 0,
      'eviction walk pages seen that were clean': 0,
      'eviction walk pages seen that were dirty': 0,
      'eviction walk passes of a file': 0,
      'eviction walk target pages histogram - 0-9': 0,
      'eviction walk target pages histogram - 10-31': 0,
      'eviction walk target pages histogram - 128 and higher': 0,
      'eviction walk target pages histogram - 32-63': 0,
      'eviction walk target pages histogram - 64-128': 0,
      'eviction walk target pages reduced due to history store cache pressure': 0,
      'hazard pointer blocked page eviction': 0,
      'history store table insert calls': 0,
      'history store table insert calls that returned restart': 0,
      'history store table key to be processed': 0,
      'history store table reads': 0,
      'history store table reads missed': 0,
      'history store table reads requiring squashed modifies': 0,
      'history store table resolved updates without timestamps that lose their durable timestamp': 0,
      'history store table truncation by rollback to stable to remove an unstable update': 0,
      'history store table truncation by rollback to stable to remove an update': 0,
      'history store table truncation to remove all the keys of a btree': 0,
      'history store table truncation to remove an update': 0,
      'history store table truncation to remove range of updates due to an update without a timestamp on data page': 0,
      'history store table truncation to remove range of updates due to key being removed from the data page during reconciliation': 0,
      'history store table truncations that would have happened in non-dryrun mode': 0,
      'history store table truncations to remove an unstable update that would have happened in non-dryrun mode': 0,
      'history store table truncations to remove an update that would have happened in non-dryrun mode': 0,
      'history store table update to be processed': 0,
      'history store table updates without timestamps fixed up by reinserting with the fixed timestamp': 0,
      'history store table writes requiring squashed modifies': 0,
      'in-memory page passed criteria to be split': 0,
      'in-memory page splits': 0,
      'internal page split blocked its eviction': 0,
      'internal pages evicted': 0,
      'internal pages split during eviction': 0,
      'leaf pages split during eviction': 0,
      'locate a random in-mem ref by examining all entries on the root page': 0,
      'modified pages evicted': 0,
      'multi-block reconciliation blocked whilst checkpoint is running': 0,
      'number of times dirty trigger was reached': 0,
      'number of times eviction trigger was reached': 0,
      'number of times updates trigger was reached': 0,
      'obsolete updates removed': 0,
      'overflow keys on a multiblock row-store page blocked its eviction': 0,
      'overflow pages read into cache': 0,
      'page split during eviction deepened the tree': 0,
      'page written requiring history store records': 0,
      'pages dirtied due to obsolete time window by eviction': 0,
      'pages read into cache': 3,
      'pages read into cache after truncate': 0,
      'pages read into cache after truncate in prepare state': 0,
      'pages read into cache by checkpoint': 0,
      'pages requested from the cache': 2,
      'pages requested from the cache due to pre-fetch': 0,
      'pages requested from the cache internal': 0,
      'pages requested from the cache leaf': 2,
      'pages requested from the history store': 0,
      'pages seen by eviction walk': 0,
      'pages written from cache': 0,
      'pages written requiring in-memory restoration': 0,
      'recent modification of a page blocked its eviction': 0,
      'reverse splits performed': 0,
      'reverse splits skipped because of VLCS namespace gap restrictions': 0,
      'the number of times full update inserted to history store': 0,
      'the number of times reverse modify inserted to history store': 0,
      'tracked dirty bytes in the cache': 0,
      'tracked dirty internal page bytes in the cache': 0,
      'tracked dirty leaf page bytes in the cache': 0,
      'uncommitted truncate blocked page eviction': 0,
      'unmodified pages evicted': 0
    },
    cache_walk: {
      'Average difference between current eviction generation when the page was last considered': 0,
      'Average on-disk page image size seen': 0,
      'Average time in cache for pages that have been visited by the eviction server': 0,
      'Average time in cache for pages that have not been visited by the eviction server': 0,
      'Clean pages currently in cache': 0,
      'Current eviction generation': 0,
      'Dirty pages currently in cache': 0,
      'Entries in the root page': 0,
      'Internal pages currently in cache': 0,
      'Leaf pages currently in cache': 0,
      'Maximum difference between current eviction generation when the page was last considered': 0,
      'Maximum page size seen': 0,
      'Minimum on-disk page image size seen': 0,
      'Number of pages never visited by eviction server': 0,
      'On-disk page image sizes smaller than a single allocation unit': 0,
      'Pages created in memory and never written': 0,
      'Pages currently queued for eviction': 0,
      'Pages that could not be queued for eviction': 0,
      'Refs skipped during cache traversal': 0,
      'Size of the root page': 0,
      'Total number of pages currently in cache': 0
    },
    checkpoint: { 'checkpoint has acquired a snapshot for its transaction': 0 },
    'checkpoint-cleanup': {
      'pages added for eviction': 0,
      'pages dirtied due to obsolete time window': 0,
      'pages read into cache (reclaim_space)': 0,
      'pages read into cache due to obsolete time window': 0,
      'pages removed': 0,
      'pages skipped during tree walk': 0,
      'pages visited': 0
    },
    compression: {
      'compressed page maximum internal page size prior to compression': 4096,
      'compressed page maximum leaf page size prior to compression ': 131072,
      'page written to disk failed to compress': 0,
      'page written to disk was too small to compress': 0,
      'pages read from disk': 0,
      'pages read from disk with compression ratio greater than 64': 0,
      'pages read from disk with compression ratio smaller than  2': 0,
      'pages read from disk with compression ratio smaller than  4': 0,
      'pages read from disk with compression ratio smaller than  8': 0,
      'pages read from disk with compression ratio smaller than 16': 0,
      'pages read from disk with compression ratio smaller than 32': 0,
      'pages read from disk with compression ratio smaller than 64': 0,
      'pages written to disk': 0,
      'pages written to disk with compression ratio greater than 64': 0,
      'pages written to disk with compression ratio smaller than  2': 0,
      'pages written to disk with compression ratio smaller than  4': 0,
      'pages written to disk with compression ratio smaller than  8': 0,
      'pages written to disk with compression ratio smaller than 16': 0,
      'pages written to disk with compression ratio smaller than 32': 0,
      'pages written to disk with compression ratio smaller than 64': 0
    },
    cursor: {
      'Total number of deleted pages skipped during tree walk': 0,
      'Total number of entries skipped by cursor next calls': 0,
      'Total number of entries skipped by cursor prev calls': 0,
      'Total number of entries skipped to position the history store cursor': 0,
      'Total number of in-memory deleted pages skipped during tree walk': 0,
      'Total number of on-disk deleted pages skipped during tree walk': 0,
      'Total number of times a search near has exited due to prefix config': 0,
      'Total number of times cursor fails to temporarily release pinned page to encourage eviction of hot or large page': 0,
      'Total number of times cursor temporarily releases pinned page to encourage eviction of hot or large page': 0,
      'bulk loaded cursor insert calls': 0,
      'cache cursors reuse count': 1,
      'close calls that result in cache': 2,
      'create calls': 1,
      'cursor bound calls that return an error': 0,
      'cursor bounds cleared from reset': 0,
      'cursor bounds comparisons performed': 0,
      'cursor bounds next called on an unpositioned cursor': 0,
      'cursor bounds next early exit': 0,
      'cursor bounds prev called on an unpositioned cursor': 0,
      'cursor bounds prev early exit': 0,
      'cursor bounds search early exit': 0,
      'cursor bounds search near call repositioned cursor': 0,
      'cursor cache calls that return an error': 0,
      'cursor close calls that return an error': 0,
      'cursor compare calls that return an error': 0,
      'cursor equals calls that return an error': 0,
      'cursor get key calls that return an error': 0,
      'cursor get value calls that return an error': 0,
      'cursor insert calls that return an error': 0,
      'cursor insert check calls that return an error': 0,
      'cursor largest key calls that return an error': 0,
      'cursor modify calls that return an error': 0,
      'cursor next calls that return an error': 0,
      'cursor next calls that skip due to a globally visible history store tombstone': 0,
      'cursor next calls that skip greater than 1 and fewer than 100 entries': 0,
      'cursor next calls that skip greater than or equal to 100 entries': 0,
      'cursor next random calls that return an error': 0,
      'cursor prev calls that return an error': 0,
      'cursor prev calls that skip due to a globally visible history store tombstone': 0,
      'cursor prev calls that skip greater than or equal to 100 entries': 0,
      'cursor prev calls that skip less than 100 entries': 0,
      'cursor reconfigure calls that return an error': 0,
      'cursor remove calls that return an error': 0,
      'cursor reopen calls that return an error': 0,
      'cursor reserve calls that return an error': 0,
      'cursor reset calls that return an error': 0,
      'cursor search calls that return an error': 0,
      'cursor search near calls that return an error': 0,
      'cursor update calls that return an error': 0,
      'insert calls': 0,
      'insert key and value bytes': 0,
      modify: 0,
      'modify key and value bytes affected': 0,
      'modify value bytes modified': 0,
      'next calls': 10,
      'open cursor count': 0,
      'operation restarted': 0,
      'prev calls': 0,
      'remove calls': 0,
      'remove key bytes removed': 0,
      'reserve calls': 0,
      'reset calls': 4,
      'search calls': 0,
      'search history store calls': 0,
      'search near calls': 0,
      'truncate calls': 0,
      'update calls': 0,
      'update key and value bytes': 0,
      'update value size change': 0
    },
    reconciliation: {
      'VLCS pages explicitly reconciled as empty': 0,
      'approximate byte size of timestamps in pages written': 0,
      'approximate byte size of transaction IDs in pages written': 0,
      'cursor next/prev calls during HS wrapup search_near': 0,
      'dictionary matches': 0,
      'fast-path pages deleted': 0,
      'internal page key bytes discarded using suffix compression': 0,
      'internal page multi-block writes': 0,
      'leaf page key bytes discarded using prefix compression': 0,
      'leaf page multi-block writes': 0,
      'leaf-page overflow keys': 0,
      'maximum blocks required for a page': 0,
      'overflow values written': 0,
      'page reconciliation calls': 0,
      'page reconciliation calls for eviction': 0,
      'pages deleted': 0,
      'pages written including an aggregated newest start durable timestamp ': 0,
      'pages written including an aggregated newest stop durable timestamp ': 0,
      'pages written including an aggregated newest stop timestamp ': 0,
      'pages written including an aggregated newest stop transaction ID': 0,
      'pages written including an aggregated newest transaction ID ': 0,
      'pages written including an aggregated oldest start timestamp ': 0,
      'pages written including an aggregated prepare': 0,
      'pages written including at least one prepare': 0,
      'pages written including at least one start durable timestamp': 0,
      'pages written including at least one start timestamp': 0,
      'pages written including at least one start transaction ID': 0,
      'pages written including at least one stop durable timestamp': 0,
      'pages written including at least one stop timestamp': 0,
      'pages written including at least one stop transaction ID': 0,
      'records written including a prepare': 0,
      'records written including a start durable timestamp': 0,
      'records written including a start timestamp': 0,
      'records written including a start transaction ID': 0,
      'records written including a stop durable timestamp': 0,
      'records written including a stop timestamp': 0,
      'records written including a stop transaction ID': 0
    },
    session: { 'object compaction': 0 },
    transaction: {
      'a reader raced with a prepared transaction commit and skipped an update or updates': 0,
      'number of times overflow removed value is read': 0,
      'race to read prepared update retry': 0,
      'rollback to stable history store keys that would have been swept in non-dryrun mode': 0,
      'rollback to stable history store records with stop timestamps older than newer records': 0,
      'rollback to stable inconsistent checkpoint': 0,
      'rollback to stable keys removed': 0,
      'rollback to stable keys restored': 0,
      'rollback to stable keys that would have been removed in non-dryrun mode': 0,
      'rollback to stable keys that would have been restored in non-dryrun mode': 0,
      'rollback to stable restored tombstones from history store': 0,
      'rollback to stable restored updates from history store': 0,
      'rollback to stable skipping delete rle': 0,
      'rollback to stable skipping stable rle': 0,
      'rollback to stable sweeping history store keys': 0,
      'rollback to stable tombstones from history store that would have been restored in non-dryrun mode': 0,
      'rollback to stable updates from history store that would have been restored in non-dryrun mode': 0,
      'rollback to stable updates removed from history store': 0,
      'rollback to stable updates that would have been removed from history store in non-dryrun mode': 0,
      'update conflicts': 0
    }
  },
  sharded: false,
  size: 265,
  count: 4,
  numOrphanDocs: 0,
  storageSize: 20480,
  totalIndexSize: 20480,
  totalSize: 40960,
  indexSizes: { _id_: 20480 },
  avgObjSize: 66,
  ns: 'basicDB.users',
  nindexes: 1,
  scaleFactor: 1
}




```

|  Value on Disk  | Real Data Size | What it means |
| --------        | --------       | -------- |
| storageSize     | 20,480         | Disk space reserved for documents.
| totalIndexSize  | 20,480         | Disk space reserved for search indexes.
| avgObjSize      | 66             | Average size of one document.count4Total number of documents.


### B. Estimate Collection Growth
Example:

- avgObjSize = 66 
- expected users = 1,000,000
- 66 bytes * 1,000,000 = 66 MB

#### Index overhead:
indexSize ≈ 40–60% of data size

Low end (40%): 66 MB × 0.40 = 26.4 MB
High end (60%): 66 MB × 0.60 = 39.6 MB

#### Total Estimated Storage: ~92.4 MB to 105.6 MB total disk space needed for 1 million documents.

### C. Check Database Stats
db.stats()

Fields:
- dataSize
- indexSize
- fileSize

```
basicDB> db.stats()
{
  db: 'basicDB',
  collections: Long('1'),
  views: Long('0'),
  objects: Long('4'),
  avgObjSize: 66.25,
  dataSize: 265,
  storageSize: 20480,
  indexes: Long('1'),
  indexSize: 20480,
  totalSize: 40960,
  scaleFactor: Long('1'),
  fsUsedSize: 63987007488,
  fsTotalSize: 1081101176832,
  ok: 1
}

```
| --------        | --------       | --------                                                                                   |
|fsUsedSize       | 63987007488    | The total used space on the entire hard drive/partition where MongoDB is installed (~64 GB)|
|fsTotalSize      | 1081101176832: | The total capacity of that hard drive/partition (~1.08 TB).                                |

### D. Atlas Sizing Notes (Cloud Version)
Atlas manages:

- cluster tier selection
- storage auto‑scaling
- performance vs cost

Cloud version:
https://github.com/EricaB0123/mongodb-dba-project-atlas
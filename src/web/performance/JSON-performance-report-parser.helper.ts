import * as fs from 'fs';
import { PerformanceTransformedRecord } from './performance-transformed-record.interface';

interface PerformanceRecord {
  timings: {
    wait: number;
  };
  request: {
    url: string;
  };
}

interface PerformanceReport {
  log: {
    entries: PerformanceRecord[];
  };
}

const getReport = (fileName: string, path: string): PerformanceReport => {
  return JSON.parse(fs.readFileSync(`${path}/${fileName}`, 'utf8'));
};

class JSONPerformanceReportParser {
  private readonly path: string;

  constructor(path = 'reports/performance') {
    this.path = path;
  }

  public parse(fileName: string): PerformanceTransformedRecord[] | Error {
    const reportFile = getReport(fileName, this.path);
    const requests = reportFile.log.entries.map((item: PerformanceRecord) => ({
      ttfb: item.timings.wait,
      url: item.request.url,
    }));

    if (requests.length > 0) {
      return requests;
    }

    throw Error(`${fileName} contains incorrect data!`);
  }
}

export default JSONPerformanceReportParser;

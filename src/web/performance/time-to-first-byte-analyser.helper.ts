import JSONPerformanceReportParser from './JSON-performance-report-parser.helper';
import { PerformanceTransformedRecord } from './performance-transformed-record.interface';

class TimeToFirstByteAnalyser {
  private reader: any;

  constructor(jsonPerformanceReportParser: JSONPerformanceReportParser) {
    this.reader = jsonPerformanceReportParser;
  }

  public checkTiming(fileName: string, maxTiming: number): PerformanceTransformedRecord {
    const parsedReport = this.reader.parse(fileName);

    return parsedReport.filter((report: PerformanceTransformedRecord) => report.ttfb > maxTiming);
  }
}

export const create = (reportParser = new JSONPerformanceReportParser()) => new TimeToFirstByteAnalyser(reportParser);

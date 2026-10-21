import * as EXCEL from 'xlsx';
import fs from 'fs';
import * as path from 'path';

interface TestRecord {
  Skill1: string,
  Skill2: string
}
export function readExcelFile(filePath: string){

  const workbook = EXCEL.readFile(filePath);
  const sheetName = workbook.SheetNames[0];
  const worksheet = workbook.Sheets[sheetName];
  const rawData: any[] = EXCEL.utils.sheet_to_json(worksheet, { header: 1 });
  const records:TestRecord[] = rawData.slice(1).map(column => ({
    Skill1: column[0],
    Skill2: column[1]
  }));
  return records;
}
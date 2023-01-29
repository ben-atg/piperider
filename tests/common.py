import os
import tempfile
from datetime import date
from sqlalchemy import *
from typing import List

from piperider_cli.datasource.sqlite import SqliteDataSource


class MockDatabase:
    def __init__(self):
        self.data_source = SqliteDataSource("test")
        self.engine = self.data_source.get_engine_by_database()

    def create_table(self, table_name: str, data: List[tuple], columns=None, metadata=None):
        engine = self.engine
        header = data[0]
        data = data[1:]

        if not metadata:
            metadata = MetaData()

        if not columns:
            columns = []
            if len(data) == 0:
                raise Exception("columns is not specified and data is empty")
            first = data[0]
            for i in range(len(header)):
                col_name = header[i]
                value = first[i]
                col = None
                if isinstance(value, str):
                    col = Column(col_name, String)
                elif isinstance(value, float):
                    col = Column(col_name, Float)
                elif isinstance(value, int):
                    col = Column(col_name, Integer)
                elif isinstance(value, date):
                    col = Column(col_name, DateTime)
                else:
                    raise Exception(f"not support type: {type(value)}")
                columns.append(col)
        table = Table(table_name, metadata, *columns)
        table.create(bind=engine)

        with engine.connect() as conn:
            for row in data:
                row_data = dict(zip(header, row))
                stmt = (
                    insert(table).
                        values(**row_data)
                )
                conn.execute(stmt)

        return table

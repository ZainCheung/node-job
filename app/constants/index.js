'use strict';

const CONSTANTS = {
  // 定时任务状态
  SCHEDULE_STATUS: {
    // 启用
    RUN: 0,
    // 停止
    STOP: -1,
  },
  // 定时任务出发类型
  SCHEDULE_TRIGGER_TYPE: {
    // 任务触发
    TASK: 0,
    // 手动出发
    MANUAL: 1,
  },
  // 定时任务执行状态
  SCHEDULE_EXECUTION_STATUS: {
    // 执行中
    RUN: 0,
    // 执行完成
    END: 1,
  }
};

module.exports = CONSTANTS;

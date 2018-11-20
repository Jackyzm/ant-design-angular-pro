const parse = require('url');

// mock tableListDataSource
let tableListDataSource = [];
for (let i = 0; i < 46; i += 1) {
    tableListDataSource.push({
        key: i,
        disabled: i % 6 === 0,
        href: 'https://ant.design',
        avatar: [
            'https://gw.alipayobjects.com/zos/rmsportal/eeHMaZBwmTvLdIwMfBpg.png',
            'https://gw.alipayobjects.com/zos/rmsportal/udxAbMEhpwthVVcjLXik.png',
        ][i % 2],
        no: `TradeCode ${i}`,
        title: `一个任务名称 ${i}`,
        owner: '曲丽丽',
        description: '这是一段描述',
        callNo: Math.floor(Math.random() * 1000),
        status: Math.floor(Math.random() * 10) % 4,
        updatedAt: new Date(`2017-07-${Math.floor(i / 2) + 1}`),
        createdAt: new Date(`2017-07-${Math.floor(i / 2) + 1}`),
        progress: Math.ceil(Math.random() * 100),
    });
}

function getRule(query) {
    const params = query;

    let dataSource = [...tableListDataSource];

    if (params.sorter) {
        const s = params.sorter.split('_');
        dataSource = dataSource.sort((prev, next) => {
            if (s[1] === 'descend') {
                return next[s[0]] - prev[s[0]];
            }
            return prev[s[0]] - next[s[0]];
        });
    }

    if (params.status) {
        const status = params.status.split(',');
        let filterDataSource = [];
        status.forEach(s => {
            filterDataSource = filterDataSource.concat(
                [...dataSource].filter(data => parseInt(data.status, 10) === parseInt(s[0], 10))
            );
        });
        dataSource = filterDataSource;
    }

    if (params.no) {
        dataSource = dataSource.filter(data => data.no.indexOf(params.no) > -1);
    }

    let pageSize = 10;
    if (params.pageSize) {
        pageSize = params.pageSize * 1;
    }

    const result = {
        list: dataSource,
        pagination: {
            total: dataSource.length,
            pageSize,
            current: parseInt(params.currentPage, 10) || 1,
        },
    };

    return result;
}

function putRule(body) {
    const { description } = body;

    const i = Math.ceil(Math.random() * 10000);
    tableListDataSource.unshift({
        key: i,
        href: 'https://ant.design',
        avatar: [
            'https://gw.alipayobjects.com/zos/rmsportal/eeHMaZBwmTvLdIwMfBpg.png',
            'https://gw.alipayobjects.com/zos/rmsportal/udxAbMEhpwthVVcjLXik.png',
        ][i % 2],
        no: `TradeCode ${i}`,
        title: `一个任务名称 ${i}`,
        owner: '曲丽丽',
        description,
        callNo: Math.floor(Math.random() * 1000),
        status: Math.floor(Math.random() * 10) % 2,
        updatedAt: new Date(),
        createdAt: new Date(),
        progress: Math.ceil(Math.random() * 100),
    });

    const result = {
        list: tableListDataSource,
        pagination: {
            total: tableListDataSource.length,
        },
    };

    return result;
}

function deleteRule(body) {
    const { no } = body;

    tableListDataSource = tableListDataSource.filter(item => no.indexOf(item.no) === -1);

    const result = {
        list: tableListDataSource,
        pagination: {
            total: tableListDataSource.length,
        },
    };

    return result;
}

module.exports = {
    getRule,
    putRule,
    deleteRule
};

module.exports = [
    {
        route: '/customs-report/customs-report-in',
        name: 'customs-report-in',
        moduleId: './modules/customs-report/customs-report-in/index',
        nav: true,
        title: 'Laporan Pemasukan Barang per Dokumen Pabean',
        auth: true,
        settings: {
            group: "customs-report",
            permission: { "C5": 1, "C9": 1 },
            iconClass: 'fa fa-dashboard'
        }
    },
    {
        route: '/customs-report/customs-report-out',
        name: 'customs-report-out',
        moduleId: './modules/customs-report/customs-report-out/index',
        nav: true,
        title: 'Laporan Pengeluaran Barang per Dokumen Pabean',
        auth: true,
        settings: {
            group: "customs-report",
            permission: { "C5": 1, "C9": 1 },
            iconClass: 'fa fa-dashboard'
        }
    }
]
exports.error = (res, message, status = 400) => {
    res.status(status).json({ message });
};

exports.internal = (res) => {
    res.status(500).json({ message: 'Error interno' });
};

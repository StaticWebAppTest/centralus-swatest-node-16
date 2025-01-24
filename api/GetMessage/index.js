module.exports = async function (context, req) {
  const date = "2025-01-24T15:11:41.940Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


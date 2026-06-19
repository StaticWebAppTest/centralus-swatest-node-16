module.exports = async function (context, req) {
  const date = "2026-06-19T23:00:26.520Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


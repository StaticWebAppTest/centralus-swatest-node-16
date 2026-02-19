module.exports = async function (context, req) {
  const date = "2026-02-19T20:24:19.520Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


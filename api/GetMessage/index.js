module.exports = async function (context, req) {
  const date = "2025-03-30T20:12:42.301Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


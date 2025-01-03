module.exports = async function (context, req) {
  const date = "2025-01-03T20:12:10.673Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


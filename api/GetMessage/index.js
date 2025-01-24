module.exports = async function (context, req) {
  const date = "2025-01-24T23:10:49.673Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


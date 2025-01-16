module.exports = async function (context, req) {
  const date = "2025-01-16T23:12:16.673Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


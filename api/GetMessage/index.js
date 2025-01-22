module.exports = async function (context, req) {
  const date = "2025-01-22T20:12:45.809Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


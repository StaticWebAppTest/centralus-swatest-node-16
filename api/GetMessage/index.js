module.exports = async function (context, req) {
  const date = "2025-07-22T10:15:53.220Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


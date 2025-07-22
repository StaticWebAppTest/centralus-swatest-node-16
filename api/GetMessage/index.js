module.exports = async function (context, req) {
  const date = "2025-07-22T17:15:36.567Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


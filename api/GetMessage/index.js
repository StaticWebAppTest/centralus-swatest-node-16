module.exports = async function (context, req) {
  const date = "2025-04-22T17:12:05.746Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


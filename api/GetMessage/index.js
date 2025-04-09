module.exports = async function (context, req) {
  const date = "2025-04-09T15:16:12.618Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


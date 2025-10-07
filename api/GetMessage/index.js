module.exports = async function (context, req) {
  const date = "2025-10-07T04:16:04.618Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


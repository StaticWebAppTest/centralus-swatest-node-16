module.exports = async function (context, req) {
  const date = "2025-01-05T14:09:37.184Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


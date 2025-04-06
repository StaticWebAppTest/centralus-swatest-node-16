module.exports = async function (context, req) {
  const date = "2025-04-06T12:21:38.898Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


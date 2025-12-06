module.exports = async function (context, req) {
  const date = "2025-12-06T09:13:17.324Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


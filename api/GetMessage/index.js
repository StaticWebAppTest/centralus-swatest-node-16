module.exports = async function (context, req) {
  const date = "2025-11-27T21:12:14.324Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


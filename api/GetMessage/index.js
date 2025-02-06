module.exports = async function (context, req) {
  const date = "2025-02-06T06:17:09.324Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


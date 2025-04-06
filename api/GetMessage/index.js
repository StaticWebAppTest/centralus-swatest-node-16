module.exports = async function (context, req) {
  const date = "2025-04-06T20:12:41.380Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


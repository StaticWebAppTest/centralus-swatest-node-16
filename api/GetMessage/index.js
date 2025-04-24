module.exports = async function (context, req) {
  const date = "2025-04-24T01:03:41.368Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


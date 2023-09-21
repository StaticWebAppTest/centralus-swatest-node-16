module.exports = async function (context, req) {
  const date = "2023-09-21T01:41:41.553Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


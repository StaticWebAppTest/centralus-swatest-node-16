module.exports = async function (context, req) {
  const date = "2025-09-23T10:13:41.730Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


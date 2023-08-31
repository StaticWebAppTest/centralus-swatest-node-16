module.exports = async function (context, req) {
  const date = "2023-08-31T01:41:58.379Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


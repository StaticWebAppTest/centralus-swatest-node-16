module.exports = async function (context, req) {
  const date = "2024-02-13T01:41:15.237Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


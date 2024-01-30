module.exports = async function (context, req) {
  const date = "2024-01-30T01:41:31.913Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


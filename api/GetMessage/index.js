module.exports = async function (context, req) {
  const date = "2024-03-26T01:41:31.603Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


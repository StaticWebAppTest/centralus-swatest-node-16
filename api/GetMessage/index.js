module.exports = async function (context, req) {
  const date = "2024-06-26T01:56:31.933Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


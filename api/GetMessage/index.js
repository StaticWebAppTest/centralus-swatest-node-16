module.exports = async function (context, req) {
  const date = "2024-02-26T19:07:21.638Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


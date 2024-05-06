module.exports = async function (context, req) {
  const date = "2024-05-06T19:08:41.638Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


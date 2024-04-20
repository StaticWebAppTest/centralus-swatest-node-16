module.exports = async function (context, req) {
  const date = "2024-04-20T19:07:41.318Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


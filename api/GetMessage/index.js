module.exports = async function (context, req) {
  const date = "2024-12-03T02:59:41.318Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


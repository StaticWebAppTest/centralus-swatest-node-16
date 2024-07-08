module.exports = async function (context, req) {
  const date = "2024-07-08T02:36:41.714Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


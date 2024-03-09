module.exports = async function (context, req) {
  const date = "2024-03-09T00:39:41.162Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


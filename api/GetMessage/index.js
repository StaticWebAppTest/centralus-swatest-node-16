module.exports = async function (context, req) {
  const date = "2024-04-06T00:40:56.714Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


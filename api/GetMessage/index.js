module.exports = async function (context, req) {
  const date = "2024-03-12T00:40:41.983Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


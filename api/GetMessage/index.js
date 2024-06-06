module.exports = async function (context, req) {
  const date = "2024-06-06T12:18:41.756Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


module.exports = async function (context, req) {
  const date = "2024-06-15T12:17:41.374Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


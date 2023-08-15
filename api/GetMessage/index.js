module.exports = async function (context, req) {
  const date = "2023-08-15T10:08:41.553Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


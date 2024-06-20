module.exports = async function (context, req) {
  const date = "2024-06-20T00:46:04.341Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


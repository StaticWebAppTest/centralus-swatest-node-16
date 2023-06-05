module.exports = async function (context, req) {
  const date = "2023-06-05T00:55:32.072Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


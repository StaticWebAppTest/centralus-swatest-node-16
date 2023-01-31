module.exports = async function (context, req) {
  const date = "2023-01-31T14:08:46.754Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


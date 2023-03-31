module.exports = async function (context, req) {
  const date = "2023-03-31T14:08:35.500Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


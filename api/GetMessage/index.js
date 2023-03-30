module.exports = async function (context, req) {
  const date = "2023-03-30T22:08:28.885Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


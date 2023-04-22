module.exports = async function (context, req) {
  const date = "2023-04-22T12:15:34.391Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


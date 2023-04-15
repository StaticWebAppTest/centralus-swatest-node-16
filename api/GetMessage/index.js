module.exports = async function (context, req) {
  const date = "2023-04-15T12:15:16.857Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


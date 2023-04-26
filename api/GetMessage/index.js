module.exports = async function (context, req) {
  const date = "2023-04-26T23:08:56.451Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


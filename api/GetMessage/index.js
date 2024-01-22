module.exports = async function (context, req) {
  const date = "2024-01-22T22:08:46.670Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


module.exports = async function (context, req) {
  const date = "2024-03-22T15:08:53.467Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


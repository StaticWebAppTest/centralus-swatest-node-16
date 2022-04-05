module.exports = async function (context, req) {
  const date = "2022-04-05T00:47:15.024Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


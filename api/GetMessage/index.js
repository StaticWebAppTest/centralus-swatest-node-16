module.exports = async function (context, req) {
  const date = "2023-06-06T00:56:38.216Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


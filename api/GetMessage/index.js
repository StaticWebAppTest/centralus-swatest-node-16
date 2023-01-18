module.exports = async function (context, req) {
  const date = "2023-01-18T00:53:15.742Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


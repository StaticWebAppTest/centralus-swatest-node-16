module.exports = async function (context, req) {
  const date = "2023-08-26T00:37:51.228Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


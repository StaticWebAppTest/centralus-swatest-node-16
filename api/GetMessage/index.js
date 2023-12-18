module.exports = async function (context, req) {
  const date = "2023-12-18T00:44:41.406Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


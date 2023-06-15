module.exports = async function (context, req) {
  const date = "2023-06-15T00:53:49.388Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


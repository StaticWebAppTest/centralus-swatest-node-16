module.exports = async function (context, req) {
  const date = "2023-06-08T00:55:11.786Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


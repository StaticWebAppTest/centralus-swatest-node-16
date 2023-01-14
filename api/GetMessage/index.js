module.exports = async function (context, req) {
  const date = "2023-01-14T21:07:51.403Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


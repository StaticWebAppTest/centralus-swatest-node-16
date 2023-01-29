module.exports = async function (context, req) {
  const date = "2023-01-29T13:12:36.883Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


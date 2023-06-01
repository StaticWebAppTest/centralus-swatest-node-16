module.exports = async function (context, req) {
  const date = "2023-06-01T13:12:14.009Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


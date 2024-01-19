module.exports = async function (context, req) {
  const date = "2024-01-19T11:08:27.883Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


module.exports = async function (context, req) {
  const date = "2024-04-15T18:12:16.883Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


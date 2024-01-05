module.exports = async function (context, req) {
  const date = "2024-01-05T12:16:51.718Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


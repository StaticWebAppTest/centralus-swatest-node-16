module.exports = async function (context, req) {
  const date = "2024-01-14T01:57:46.857Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


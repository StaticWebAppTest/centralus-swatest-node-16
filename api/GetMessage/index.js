module.exports = async function (context, req) {
  const date = "2024-01-10T01:53:43.395Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


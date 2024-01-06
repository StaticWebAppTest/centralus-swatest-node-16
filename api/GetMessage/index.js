module.exports = async function (context, req) {
  const date = "2024-01-06T22:08:00.232Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


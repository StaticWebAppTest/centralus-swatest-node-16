module.exports = async function (context, req) {
  const date = "2024-01-31T15:08:48.825Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


module.exports = async function (context, req) {
  const date = "2023-01-01T16:11:34.968Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


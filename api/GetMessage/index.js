module.exports = async function (context, req) {
  const date = "2024-06-15T21:08:48.968Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


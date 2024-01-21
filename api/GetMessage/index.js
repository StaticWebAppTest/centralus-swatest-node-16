module.exports = async function (context, req) {
  const date = "2024-01-21T15:08:32.305Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


module.exports = async function (context, req) {
  const date = "2024-01-13T22:08:01.114Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


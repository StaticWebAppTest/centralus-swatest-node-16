module.exports = async function (context, req) {
  const date = "2023-03-03T13:17:58.516Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


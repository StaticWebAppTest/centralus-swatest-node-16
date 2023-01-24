module.exports = async function (context, req) {
  const date = "2023-01-24T19:07:34.613Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


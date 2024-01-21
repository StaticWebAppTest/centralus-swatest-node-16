module.exports = async function (context, req) {
  const date = "2024-01-21T19:07:15.912Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


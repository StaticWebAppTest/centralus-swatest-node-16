module.exports = async function (context, req) {
  const date = "2023-01-15T19:07:04.730Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


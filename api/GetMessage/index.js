module.exports = async function (context, req) {
  const date = "2023-01-06T19:07:43.837Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


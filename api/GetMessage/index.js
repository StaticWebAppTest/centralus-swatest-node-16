module.exports = async function (context, req) {
  const date = "2024-08-03T12:17:40.019Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


module.exports = async function (context, req) {
  const date = "2023-06-03T12:15:35.902Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


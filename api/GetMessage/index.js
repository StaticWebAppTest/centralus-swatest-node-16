module.exports = async function (context, req) {
  const date = "2024-06-15T16:13:00.717Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


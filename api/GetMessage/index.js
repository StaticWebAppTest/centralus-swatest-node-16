module.exports = async function (context, req) {
  const date = "2024-06-05T16:12:53.403Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


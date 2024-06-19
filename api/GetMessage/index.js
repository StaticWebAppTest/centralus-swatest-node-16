module.exports = async function (context, req) {
  const date = "2024-06-19T19:08:51.782Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


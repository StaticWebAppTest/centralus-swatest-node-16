module.exports = async function (context, req) {
  const date = "2024-07-03T08:13:35.229Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


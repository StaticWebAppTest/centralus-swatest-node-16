module.exports = async function (context, req) {
  const date = "2024-12-31T12:21:54.256Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


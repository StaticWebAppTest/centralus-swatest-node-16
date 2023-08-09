module.exports = async function (context, req) {
  const date = "2023-08-09T00:49:29.256Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


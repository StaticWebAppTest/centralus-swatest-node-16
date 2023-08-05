module.exports = async function (context, req) {
  const date = "2023-08-05T21:06:46.256Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


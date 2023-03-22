module.exports = async function (context, req) {
  const date = "2023-03-22T21:08:04.296Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


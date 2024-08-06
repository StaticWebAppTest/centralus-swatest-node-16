module.exports = async function (context, req) {
  const date = "2024-08-06T21:09:55.296Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


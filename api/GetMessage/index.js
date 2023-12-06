module.exports = async function (context, req) {
  const date = "2023-12-06T21:08:17.916Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


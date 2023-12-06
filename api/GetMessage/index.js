module.exports = async function (context, req) {
  const date = "2023-12-06T12:17:31.387Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


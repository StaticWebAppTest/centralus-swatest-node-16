module.exports = async function (context, req) {
  const date = "2024-08-12T12:21:31.972Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


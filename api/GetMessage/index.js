module.exports = async function (context, req) {
  const date = "2023-05-30T21:07:31.849Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


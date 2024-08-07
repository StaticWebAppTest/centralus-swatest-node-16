module.exports = async function (context, req) {
  const date = "2024-08-07T12:20:20.872Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


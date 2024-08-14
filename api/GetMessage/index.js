module.exports = async function (context, req) {
  const date = "2024-08-14T12:20:14.089Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


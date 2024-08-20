module.exports = async function (context, req) {
  const date = "2024-08-20T15:11:10.089Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


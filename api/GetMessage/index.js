module.exports = async function (context, req) {
  const date = "2022-08-15T16:15:24.420Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


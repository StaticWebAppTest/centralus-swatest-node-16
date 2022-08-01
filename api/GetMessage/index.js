module.exports = async function (context, req) {
  const date = "2022-08-01T07:16:29.744Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


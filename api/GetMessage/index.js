module.exports = async function (context, req) {
  const date = "2022-12-01T19:08:35.716Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


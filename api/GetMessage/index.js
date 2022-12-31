module.exports = async function (context, req) {
  const date = "2022-12-31T20:08:56.744Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


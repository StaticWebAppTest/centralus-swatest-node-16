module.exports = async function (context, req) {
  const date = "2022-11-01T06:21:31.611Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


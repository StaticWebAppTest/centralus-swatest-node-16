module.exports = async function (context, req) {
  const date = "2022-04-01T12:20:34.514Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


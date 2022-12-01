module.exports = async function (context, req) {
  const date = "2022-12-01T12:21:01.935Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


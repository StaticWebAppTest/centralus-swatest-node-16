module.exports = async function (context, req) {
  const date = "2022-07-27T10:12:29.050Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


module.exports = async function (context, req) {
  const date = "2022-07-01T12:21:24.013Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


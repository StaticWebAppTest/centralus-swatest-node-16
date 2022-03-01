module.exports = async function (context, req) {
  const date = "2022-03-01T03:13:58.888Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


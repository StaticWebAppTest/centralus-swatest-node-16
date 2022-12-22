module.exports = async function (context, req) {
  const date = "2022-12-22T06:12:25.594Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


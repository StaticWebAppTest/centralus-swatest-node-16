module.exports = async function (context, req) {
  const date = "2022-04-22T10:12:24.107Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


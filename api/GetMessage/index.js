module.exports = async function (context, req) {
  const date = "2022-12-22T10:10:16.674Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


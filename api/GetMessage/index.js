module.exports = async function (context, req) {
  const date = "2022-05-22T10:12:04.302Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


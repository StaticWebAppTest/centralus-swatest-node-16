module.exports = async function (context, req) {
  const date = "2022-08-08T10:12:36.064Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


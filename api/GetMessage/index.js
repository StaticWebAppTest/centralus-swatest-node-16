module.exports = async function (context, req) {
  const date = "2022-10-22T07:17:36.114Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


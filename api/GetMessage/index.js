module.exports = async function (context, req) {
  const date = "2022-09-22T09:15:49.873Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


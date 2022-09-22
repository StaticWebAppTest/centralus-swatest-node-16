module.exports = async function (context, req) {
  const date = "2022-09-22T08:16:59.439Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


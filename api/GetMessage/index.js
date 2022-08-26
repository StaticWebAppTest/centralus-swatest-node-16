module.exports = async function (context, req) {
  const date = "2022-08-26T08:14:46.678Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


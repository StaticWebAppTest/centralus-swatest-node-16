module.exports = async function (context, req) {
  const date = "2022-08-03T16:14:54.310Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


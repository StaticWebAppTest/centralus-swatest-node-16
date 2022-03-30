module.exports = async function (context, req) {
  const date = "2022-03-30T08:13:49.164Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


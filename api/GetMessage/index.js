module.exports = async function (context, req) {
  const date = "2022-05-30T15:13:17.531Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


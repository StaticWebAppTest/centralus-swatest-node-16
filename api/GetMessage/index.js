module.exports = async function (context, req) {
  const date = "2022-04-01T22:10:14.710Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


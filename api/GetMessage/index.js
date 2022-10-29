module.exports = async function (context, req) {
  const date = "2022-10-29T13:26:15.325Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


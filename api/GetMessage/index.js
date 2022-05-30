module.exports = async function (context, req) {
  const date = "2022-05-30T13:36:26.428Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


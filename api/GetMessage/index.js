module.exports = async function (context, req) {
  const date = "2022-05-24T16:16:12.428Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


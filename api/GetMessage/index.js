module.exports = async function (context, req) {
  const date = "2022-06-09T16:13:58.810Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


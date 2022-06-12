module.exports = async function (context, req) {
  const date = "2022-06-12T10:10:32.325Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


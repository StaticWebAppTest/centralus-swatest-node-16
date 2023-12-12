module.exports = async function (context, req) {
  const date = "2023-12-12T10:10:15.325Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


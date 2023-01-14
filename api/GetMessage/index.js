module.exports = async function (context, req) {
  const date = "2023-01-14T10:09:30.325Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


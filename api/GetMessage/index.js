module.exports = async function (context, req) {
  const date = "2022-06-01T08:17:29.131Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


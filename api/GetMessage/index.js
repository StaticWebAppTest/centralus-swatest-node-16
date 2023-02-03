module.exports = async function (context, req) {
  const date = "2023-02-03T03:13:55.674Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


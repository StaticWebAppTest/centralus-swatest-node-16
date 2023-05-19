module.exports = async function (context, req) {
  const date = "2023-05-19T02:01:24.202Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


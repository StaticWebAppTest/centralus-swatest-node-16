module.exports = async function (context, req) {
  const date = "2023-02-09T02:17:38.025Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


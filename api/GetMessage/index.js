module.exports = async function (context, req) {
  const date = "2023-09-08T20:08:49.825Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


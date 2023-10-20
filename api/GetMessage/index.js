module.exports = async function (context, req) {
  const date = "2023-10-20T20:08:59.378Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


module.exports = async function (context, req) {
  const date = "2023-09-20T20:09:07.090Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


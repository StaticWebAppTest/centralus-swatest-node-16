module.exports = async function (context, req) {
  const date = "2023-08-20T20:07:58.241Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


module.exports = async function (context, req) {
  const date = "2023-06-17T05:08:17.034Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


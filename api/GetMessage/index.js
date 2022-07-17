module.exports = async function (context, req) {
  const date = "2022-07-17T03:37:12.857Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


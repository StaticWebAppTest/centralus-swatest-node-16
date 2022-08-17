module.exports = async function (context, req) {
  const date = "2022-08-17T03:53:10.070Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


module.exports = async function (context, req) {
  const date = "2023-07-17T03:29:40.541Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


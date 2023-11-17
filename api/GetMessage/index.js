module.exports = async function (context, req) {
  const date = "2023-11-17T21:07:59.152Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


module.exports = async function (context, req) {
  const date = "2022-04-17T21:09:00.107Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


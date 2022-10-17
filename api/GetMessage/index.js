module.exports = async function (context, req) {
  const date = "2022-10-17T10:19:16.229Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


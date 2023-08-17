module.exports = async function (context, req) {
  const date = "2023-08-17T12:15:27.892Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


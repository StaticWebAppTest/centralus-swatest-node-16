module.exports = async function (context, req) {
  const date = "2023-11-26T03:09:34.703Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


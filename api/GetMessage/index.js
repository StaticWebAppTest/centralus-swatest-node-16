module.exports = async function (context, req) {
  const date = "2022-08-30T14:12:31.393Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


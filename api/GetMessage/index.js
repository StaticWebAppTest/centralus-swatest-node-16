module.exports = async function (context, req) {
  const date = "2023-08-30T20:09:18.395Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


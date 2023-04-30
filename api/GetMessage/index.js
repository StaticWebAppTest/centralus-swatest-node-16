module.exports = async function (context, req) {
  const date = "2023-04-30T23:08:12.825Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


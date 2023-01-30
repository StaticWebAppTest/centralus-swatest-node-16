module.exports = async function (context, req) {
  const date = "2023-01-30T18:11:51.164Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


module.exports = async function (context, req) {
  const date = "2023-08-03T06:11:28.661Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


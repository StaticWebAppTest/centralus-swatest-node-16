module.exports = async function (context, req) {
  const date = "2023-08-30T06:11:29.521Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


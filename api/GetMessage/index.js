module.exports = async function (context, req) {
  const date = "2022-12-30T03:10:12.521Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


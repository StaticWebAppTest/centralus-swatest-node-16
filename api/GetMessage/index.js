module.exports = async function (context, req) {
  const date = "2022-08-19T08:14:12.140Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


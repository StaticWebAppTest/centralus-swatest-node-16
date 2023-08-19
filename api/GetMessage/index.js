module.exports = async function (context, req) {
  const date = "2023-08-19T08:09:42.138Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


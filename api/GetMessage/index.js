module.exports = async function (context, req) {
  const date = "2023-12-26T08:11:48.716Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


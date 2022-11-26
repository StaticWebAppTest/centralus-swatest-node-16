module.exports = async function (context, req) {
  const date = "2022-11-26T12:17:14.806Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


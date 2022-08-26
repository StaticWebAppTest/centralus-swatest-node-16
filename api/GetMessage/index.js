module.exports = async function (context, req) {
  const date = "2022-08-26T16:15:27.912Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


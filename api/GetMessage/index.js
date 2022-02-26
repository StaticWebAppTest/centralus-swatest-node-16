module.exports = async function (context, req) {
  const date = "2022-02-26T17:09:02.204Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


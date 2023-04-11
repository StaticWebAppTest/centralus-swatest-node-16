module.exports = async function (context, req) {
  const date = "2023-04-11T03:09:26.204Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


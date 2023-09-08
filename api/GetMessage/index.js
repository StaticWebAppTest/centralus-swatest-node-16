module.exports = async function (context, req) {
  const date = "2023-09-08T12:15:52.383Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


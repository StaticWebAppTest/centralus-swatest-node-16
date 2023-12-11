module.exports = async function (context, req) {
  const date = "2023-12-11T23:09:17.383Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


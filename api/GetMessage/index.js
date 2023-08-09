module.exports = async function (context, req) {
  const date = "2023-08-09T03:08:59.526Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


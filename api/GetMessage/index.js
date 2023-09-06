module.exports = async function (context, req) {
  const date = "2023-09-06T03:09:04.053Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


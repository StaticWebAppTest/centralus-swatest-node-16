module.exports = async function (context, req) {
  const date = "2023-03-28T03:09:59.336Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


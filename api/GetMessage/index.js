module.exports = async function (context, req) {
  const date = "2023-03-24T03:10:04.097Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


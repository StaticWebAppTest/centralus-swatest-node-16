module.exports = async function (context, req) {
  const date = "2023-04-26T12:17:01.102Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


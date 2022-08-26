module.exports = async function (context, req) {
  const date = "2022-08-26T17:16:16.102Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


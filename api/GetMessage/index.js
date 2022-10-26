module.exports = async function (context, req) {
  const date = "2022-10-26T03:44:53.288Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


module.exports = async function (context, req) {
  const date = "2023-01-26T04:11:44.610Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


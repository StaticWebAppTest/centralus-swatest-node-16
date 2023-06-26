module.exports = async function (context, req) {
  const date = "2023-06-26T10:10:55.610Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


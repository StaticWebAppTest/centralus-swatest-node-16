module.exports = async function (context, req) {
  const date = "2022-08-06T12:17:24.772Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


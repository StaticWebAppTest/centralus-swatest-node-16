module.exports = async function (context, req) {
  const date = "2022-06-26T19:08:04.634Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


module.exports = async function (context, req) {
  const date = "2022-07-09T19:08:35.634Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


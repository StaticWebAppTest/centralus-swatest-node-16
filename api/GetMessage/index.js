module.exports = async function (context, req) {
  const date = "2023-05-06T20:08:36.634Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


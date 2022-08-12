module.exports = async function (context, req) {
  const date = "2022-08-12T16:17:43.756Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


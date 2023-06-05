module.exports = async function (context, req) {
  const date = "2023-06-05T02:21:54.078Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


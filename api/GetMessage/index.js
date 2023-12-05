module.exports = async function (context, req) {
  const date = "2023-12-05T07:08:58.331Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


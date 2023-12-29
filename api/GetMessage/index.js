module.exports = async function (context, req) {
  const date = "2023-12-29T14:08:01.343Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


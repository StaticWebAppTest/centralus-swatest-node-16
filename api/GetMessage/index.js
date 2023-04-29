module.exports = async function (context, req) {
  const date = "2023-04-29T03:09:13.355Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


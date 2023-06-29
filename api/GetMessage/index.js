module.exports = async function (context, req) {
  const date = "2023-06-29T08:13:01.286Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


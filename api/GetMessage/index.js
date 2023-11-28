module.exports = async function (context, req) {
  const date = "2023-11-28T14:08:51.910Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


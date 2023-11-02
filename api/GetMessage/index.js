module.exports = async function (context, req) {
  const date = "2023-11-02T02:16:29.354Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


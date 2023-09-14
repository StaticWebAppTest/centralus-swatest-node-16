module.exports = async function (context, req) {
  const date = "2023-09-14T02:14:49.935Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


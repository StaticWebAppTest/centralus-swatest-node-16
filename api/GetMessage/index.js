module.exports = async function (context, req) {
  const date = "2023-12-28T02:19:24.291Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


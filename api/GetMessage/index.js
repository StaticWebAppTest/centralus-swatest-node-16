module.exports = async function (context, req) {
  const date = "2023-11-20T03:09:59.689Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


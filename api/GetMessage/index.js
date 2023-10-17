module.exports = async function (context, req) {
  const date = "2023-10-17T03:09:31.249Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

